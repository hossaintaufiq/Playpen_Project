type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <header
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""} ${className}`.trim()}
    >
      {eyebrow && (
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/60 sm:text-xs">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed ${
            isCenter ? "mx-auto max-w-2xl" : ""
          }`.trim()}
        >
          {description}
        </p>
      )}
    </header>
  );
}
