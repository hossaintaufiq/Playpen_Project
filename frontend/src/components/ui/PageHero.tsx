interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-primary px-4 py-16 text-center sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-base text-white/80 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
