type AboutContentSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function AboutContentSection({ title, children }: AboutContentSectionProps) {
  return (
    <section className="border-2 border-[#121212] bg-[#ffffff] p-6 sm:p-8 shadow-[5px_5px_0px_#121212]">
      <div className="border-b-2 border-[#121212] pb-3 mb-4 flex items-center justify-between">
        <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#121212] uppercase tracking-wide">
          {title}
        </h2>
        <span className="font-mono text-xs font-bold text-[#6b0c26]">PLAYPEN ARCHIVE</span>
      </div>
      <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-[#403d39]">
        {children}
      </div>
    </section>
  );
}
