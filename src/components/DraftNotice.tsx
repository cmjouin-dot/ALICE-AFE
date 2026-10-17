type DraftNoticeProps = {
  className?: string;
  children?: string;
};

export function DraftNotice({
  className = "",
  children = "Contenu provisoire ou de démonstration — en attente de validation par le groupe ALICE.",
}: DraftNoticeProps) {
  return (
    <p
      role="note"
      className={`border-l-2 border-alice-coral pl-4 text-sm text-alice-muted ${className}`}
    >
      {children}
    </p>
  );
}
