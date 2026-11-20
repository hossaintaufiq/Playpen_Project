import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  badge?: string;
}

export function PageHero({ title, subtitle, image, imageAlt, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#520215]/95 via-[#7a0826]/88 to-[#7a0826]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(82,2,21,0.5)_100%)]" />
        </>
      ) : (
        <div className="playpen-bg-dark absolute inset-0 bg-primary-dark" />
      )}

      {/* Decorative ambient subtle circle */}

      <div className="relative mx-auto max-w-4xl min-w-0">
        {badge && (
          <div className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-md mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {badge}
          </div>
        )}
        <h1 className="break-words font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-5 sm:text-lg md:text-xl font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
