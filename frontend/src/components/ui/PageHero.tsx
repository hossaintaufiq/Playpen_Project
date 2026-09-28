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
        <div className="playpen-bg-dark absolute inset-0 bg-gradient-to-br from-[#520215] via-[#7a0826] to-[#991636]" />
      )}

      {/* Decorative ambient subtle circle */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/15 blur-3xl rounded-full" />

      <div className="relative mx-auto max-w-4xl min-w-0">
        {badge && (
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {badge}
          </div>
        )}
        <h1 className="break-words font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
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
