import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-alice-coral">
        Erreur 404
      </p>
      <h1 className="font-display mt-4 text-4xl font-medium tracking-tight text-alice-navy sm:text-5xl">
        Page introuvable
      </h1>
      <p className="mt-5 max-w-lg text-lg text-alice-muted">
        La page demandée n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-10">
        <Button href="/">Retour à l&apos;accueil</Button>
      </div>
    </Container>
  );
}
