import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";
import { DraftNotice } from "@/components/DraftNotice";
import {
  articles,
  formatDateFr,
  getArticleBySlug,
} from "@/data/actualites";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/actualites/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article introuvable" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: PageProps<"/actualites/[slug]">) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <Container className="pt-10 sm:pt-12">
        <Link
          href="/actualites"
          className="inline-flex items-center gap-2 text-sm font-semibold text-alice-blue underline-offset-4 hover:underline"
        >
          <ArrowLeft size={16} aria-hidden />
          Retour aux actualités
        </Link>
      </Container>

      <article>
        <Container className="py-12 sm:py-16">
          <header className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-alice-muted">
              <time dateTime={article.publishedAt}>
                {formatDateFr(article.publishedAt)}
              </time>
              <span className="text-alice-border" aria-hidden>
                /
              </span>
              <span className="text-alice-blue">{article.category}</span>
              {article.isDemo ? (
                <>
                  <span className="text-alice-border" aria-hidden>
                    /
                  </span>
                  <span className="text-alice-coral">Démonstration</span>
                </>
              ) : null}
            </div>
            <h1 className="font-display mt-5 text-4xl font-medium tracking-tight text-alice-navy sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 text-xl text-alice-muted">{article.excerpt}</p>
            <p className="mt-4 text-sm text-alice-muted">
              Par {article.author}
            </p>
            {article.isDemo ? (
              <DraftNotice className="mt-8">
                Contenu de démonstration — non validé comme publication
                officielle du groupe.
              </DraftNotice>
            ) : null}
          </header>

          <div className="prose-alice mx-auto mt-12 max-w-3xl">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </article>
    </>
  );
}
