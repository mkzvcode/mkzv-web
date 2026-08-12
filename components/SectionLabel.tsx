type SectionLabelProps = {
  index: string;
  title: string;
};

export function SectionLabel({ index, title }: SectionLabelProps) {
  return (
    <div className="mb-6 flex items-center justify-between border-b border-[var(--line)] pb-3">
      <span className="mono text-[var(--muted)]">{index}</span>
      <span className="mono text-[var(--paper)]">{title}</span>
    </div>
  );
}
