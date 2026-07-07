interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="playpen-bg bg-primary px-4 py-12 text-center sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
