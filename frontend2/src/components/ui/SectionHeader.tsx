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
      className={`max-w-4xl ${isCenter ? "mx-auto text-center" : ""} ${className}`.trim()}
    >
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-3.5 ${isCenter ? "justify-center" : ""}`}>
          <span className="inline-flex items-center gap-1.5 border-2 border-[#121212] bg-[#ffffff] px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-[#6b0c26] shadow-[2px_2px_0px_#121212]">
            <span>// {eyebrow}</span>
          </span>
        </div>
      )}
      <h2 className="font-serif font-black text-2xl sm:text-4xl md:text-5xl lg:text-[2.85rem] leading-[1.06] tracking-tight text-[#121212] uppercase">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 font-sans text-base sm:text-lg leading-relaxed text-[#524d46] ${
            isCenter ? "mx-auto max-w-3xl" : ""
          }`.trim()}
        >
          {description}
        </p>
      )}
    </header>
  );
}
