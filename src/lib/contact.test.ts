import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  CONTACT_FROM,
  CONTACT_TO,
  processContactSubmission,
  type ContactEmail,
} from "./contact-delivery";
import { consumeContactRateLimit } from "./contact-rate-limit";
import { isValidEmail, parseContactDraft } from "./contact-validation";

const valid = {
  name: "Test ALICE",
  email: "contact@alice-fde.org",
  subject: "Test technique du formulaire",
  message: "Message de test. Aucune donnée personnelle.",
  constituency: null,
  honeypot: "",
  hasNonStringValue: false,
};

function deps(overrides?: {
  apiKey?: string;
  rateLimit?: () => Promise<"ok" | "limited" | "unconfigured" | "unavailable">;
  send?: (email: ContactEmail) => Promise<boolean>;
  sent?: ContactEmail[];
}) {
  const sent: ContactEmail[] = overrides?.sent ?? [];
  return {
    sent,
    apiKey:
      overrides && "apiKey" in overrides ? overrides.apiKey : "test-key",
    rateLimit: overrides?.rateLimit ?? (async () => "unconfigured" as const),
    send:
      overrides?.send ??
      (async (email: ContactEmail) => {
        sent.push(email);
        return true;
      }),
  };
}

describe("contact validation", () => {
  it("accepts a complete message", () => {
    const parsed = parseContactDraft(valid);
    assert.equal(parsed.ok, true);
  });

  it("rejects missing required fields", () => {
    assert.equal(parseContactDraft({ ...valid, name: "  " }).ok, false);
    assert.equal(parseContactDraft({ ...valid, subject: "" }).ok, false);
    assert.equal(parseContactDraft({ ...valid, message: "" }).ok, false);
  });

  it("rejects invalid email addresses", () => {
    assert.equal(isValidEmail("pas-une-adresse"), false);
    assert.equal(isValidEmail("a@b"), false);
    assert.equal(isValidEmail("nom@exemple.com\nBcc: evil@example.com"), false);
    assert.equal(parseContactDraft({ ...valid, email: "mauvaise" }).ok, false);
  });

  it("rejects a filled honeypot and any file value", () => {
    assert.equal(parseContactDraft({ ...valid, honeypot: "bot" }).ok, false);
    assert.equal(
      parseContactDraft({ ...valid, hasNonStringValue: true }).ok,
      false,
    );
  });

  it("rejects oversized fields", () => {
    assert.equal(
      parseContactDraft({ ...valid, message: "a".repeat(5001) }).ok,
      false,
    );
    assert.equal(
      parseContactDraft({ ...valid, subject: "a".repeat(151) }).ok,
      false,
    );
  });
});

describe("contact delivery", () => {
  it("sends plain text to the AFE address with the visitor reply-to", async () => {
    const sent: ContactEmail[] = [];
    const result = await processContactSubmission(
      {
        ...valid,
        message: "Bonjour <script>alert(1)</script>",
        constituency: "Asie",
      },
      deps({ sent }),
    );

    assert.deepEqual(result, { status: "sent" });
    assert.equal(sent.length, 1);
    assert.equal(sent[0].from, CONTACT_FROM);
    assert.equal(sent[0].to, CONTACT_TO);
    assert.equal(sent[0].replyTo, valid.email);
    assert.equal(
      sent[0].subject,
      "[ALICE Contact] - Test technique du formulaire",
    );
    assert.match(sent[0].text, /<script>alert\(1\)<\/script>/);
    assert.match(sent[0].text, /Circonscription : Asie/);
    assert.equal("html" in sent[0], false);
  });

  it("does not send when validation, the honeypot, or the provider fails", async () => {
    const sent: ContactEmail[] = [];
    const harness = deps({ sent });

    assert.deepEqual(
      await processContactSubmission({ ...valid, email: "non" }, harness),
      { status: "error" },
    );
    assert.deepEqual(
      await processContactSubmission({ ...valid, honeypot: "robot" }, harness),
      { status: "error" },
    );
    assert.deepEqual(
      await processContactSubmission(valid, deps({ apiKey: undefined, sent })),
      { status: "error" },
    );
    assert.equal(sent.length, 0);

    let attempts = 0;
    const refused = await processContactSubmission(
      valid,
      deps({
        send: async () => {
          attempts += 1;
          return false;
        },
      }),
    );
    assert.deepEqual(refused, { status: "error" });
    assert.equal(attempts, 1);
  });

  it("does not send when the shared rate limit blocks or is unavailable", async () => {
    const sent: ContactEmail[] = [];
    assert.deepEqual(
      await processContactSubmission(
        valid,
        deps({ sent, rateLimit: async () => "limited" }),
      ),
      { status: "error" },
    );
    assert.deepEqual(
      await processContactSubmission(
        valid,
        deps({ sent, rateLimit: async () => "unavailable" }),
      ),
      { status: "error" },
    );
    assert.equal(sent.length, 0);
  });
});

describe("contact rate limit", () => {
  it("stays inactive when no shared store is configured", async () => {
    let called = false;
    const result = await consumeContactRateLimit("203.0.113.4", {
      env: {},
      fetchImpl: async () => {
        called = true;
        throw new Error("should not be called");
      },
    });
    assert.equal(result, "unconfigured");
    assert.equal(called, false);
  });

  it("blocks the sixth request in the window", async () => {
    const calls: string[][] = [];
    const result = await consumeContactRateLimit("203.0.113.8", {
      env: {
        url: "https://example.upstash.io",
        token: "token",
      },
      fetchImpl: async (_input, init) => {
        calls.push(JSON.parse(String(init?.body)) as string[]);
        const command = calls.at(-1)?.[0];
        return new Response(
          JSON.stringify({ result: command === "INCR" ? 6 : 1 }),
          { status: 200 },
        );
      },
    });
    assert.equal(result, "limited");
    assert.equal(calls[0][0], "INCR");
  });

  it("reports the store as unavailable when the request fails", async () => {
    const result = await consumeContactRateLimit("203.0.113.9", {
      env: {
        url: "https://example.upstash.io",
        token: "token",
      },
      fetchImpl: async () => new Response("no", { status: 500 }),
    });
    assert.equal(result, "unavailable");
  });
});
