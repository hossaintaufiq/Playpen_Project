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
        <div className={`flex items-center gap-2 mb-3 ${isCenter ? "justify-center" : ""}`}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/[0.08] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.18] tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground ${
            isCenter ? "mx-auto max-w-2xl" : ""
          }`.trim()}
        >
          {description}
        </p>
      )}
    </header>
  );
}
