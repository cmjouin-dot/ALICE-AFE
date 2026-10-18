import {
  Briefcase,
  Eye,
  Landmark,
  MessagesSquare,
  Scale,
  Users,
} from "lucide-react";
import type { Principe } from "@/data/principes";

const icons = {
  scale: Scale,
  users: Users,
  messages: MessagesSquare,
  landmark: Landmark,
  briefcase: Briefcase,
  eye: Eye,
} as const;

type PrincipleCardProps = {
  principe: Principe;
  index: number;
};

export function PrincipleCard({ principe, index }: PrincipleCardProps) {
  const Icon = icons[principe.icon];
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="border-t border-alice-border pt-5">
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs font-semibold tracking-[0.18em] text-alice-coral">
          {number}
        </p>
        <Icon
          className="size-5 shrink-0 text-alice-blue"
          strokeWidth={1.5}
          aria-hidden
        />
      </div>
      <h3 className="font-display mt-2.5 text-2xl font-medium text-alice-navy">
        {principe.title}
      </h3>
      <p className="mt-2.5 text-alice-muted">{principe.summary}</p>
    </article>
  );
}
