type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
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
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.18] tracking-tight text-foreground">
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
