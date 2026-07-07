type AboutContentSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function AboutContentSection({ title, children }: AboutContentSectionProps) {
  return (
    <section className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
      <h2 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {children}
      </div>
    </section>
  );
}
