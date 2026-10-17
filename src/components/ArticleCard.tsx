import Link from "next/link";
import type { Article } from "@/data/actualites";
import { formatDateFr } from "@/data/actualites";

type ArticleCardProps = {
  article: Article;
  featured?: boolean;
};

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article
      className={`group border-t border-alice-border pt-6 ${
        featured ? "sm:pt-8" : ""
      }`}
    >
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
            <span className="text-alice-coral">Démo</span>
          </>
        ) : null}
      </div>
      <h3
        className={`font-display mt-3 font-medium tracking-tight text-alice-navy transition-colors group-hover:text-alice-blue ${
          featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
        }`}
      >
        <Link href={`/actualites/${article.slug}`} className="focus-visible:outline-offset-4">
          {article.title}
        </Link>
      </h3>
      <p
        className={`mt-3 text-alice-muted ${
          featured ? "max-w-2xl text-base sm:text-lg" : "text-base"
        }`}
      >
        {article.excerpt}
      </p>
      <Link
        href={`/actualites/${article.slug}`}
        className="mt-4 inline-flex text-sm font-semibold text-alice-blue underline-offset-4 hover:underline"
      >
        Lire l&apos;article
      </Link>
    </article>
  );
}
