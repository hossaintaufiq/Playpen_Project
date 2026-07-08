import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({ title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-12 text-center sm:px-6 sm:py-16 md:py-20">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a0000]/93 via-[#800000]/84 to-[#800000]/72" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(90,0,0,0.35)_100%)]" />
        </>
      ) : (
        <div className="playpen-bg absolute inset-0 bg-primary" />
      )}

      <div className="relative mx-auto max-w-3xl min-w-0">
        <h1 className="break-words font-serif text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/82 sm:mt-4 sm:text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
