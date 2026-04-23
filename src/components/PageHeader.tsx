export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-10">
      {eyebrow && (
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
        {title}
      </h1>
      <div className="mt-4 h-[2px] w-12 bg-[var(--gold)]" />
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </header>
  );
}
