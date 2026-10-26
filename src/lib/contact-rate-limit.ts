import { createHash } from "node:crypto";

export type RateLimitResult = "ok" | "limited" | "unconfigured" | "unavailable";

const WINDOW_SECONDS = 600;
const MAX_REQUESTS = 5;

type RateLimitEnv = {
  url?: string;
  token?: string;
};

function redisEndpoint(url: string): URL | null {
  try {
    const endpoint = new URL(url);
    if (endpoint.protocol !== "https:") return null;
    if (!endpoint.hostname.endsWith(".upstash.io")) return null;
    return new URL(endpoint.origin);
  } catch {
    return null;
  }
}

async function command(
  endpoint: URL,
  token: string,
  args: string[],
  fetchImpl: typeof fetch,
): Promise<number> {
  const response = await fetchImpl(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(4000),
  });
  if (!response.ok) throw new Error("rate-limit");
  const body = (await response.json()) as { result?: unknown };
  const count = Number(body.result);
  if (!Number.isFinite(count)) throw new Error("rate-limit");
  return count;
}

export async function consumeContactRateLimit(
  ip: string,
  options?: { env?: RateLimitEnv; fetchImpl?: typeof fetch },
): Promise<RateLimitResult> {
  const env = options?.env ?? {
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  };
  const url = env.url;
  const token = env.token;
  if (!url || !token) return "unconfigured";

  const endpoint = redisEndpoint(url);
  if (!endpoint) return "unavailable";

  const fetchImpl = options?.fetchImpl ?? fetch;
  const digest = createHash("sha256").update(ip || "missing").digest("hex");
  const key = `alice-contact:${digest.slice(0, 32)}`;

  try {
    const count = await command(endpoint, token, ["INCR", key], fetchImpl);
    if (count === 1) {
      await command(
        endpoint,
        token,
        ["EXPIRE", key, String(WINDOW_SECONDS)],
        fetchImpl,
      );
    }
    return count > MAX_REQUESTS ? "limited" : "ok";
  } catch {
    return "unavailable";
  }
}
