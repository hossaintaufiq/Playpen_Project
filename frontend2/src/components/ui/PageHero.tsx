import Image from "next/image";
import { Sparkles } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  badge?: string;
}

export function PageHero({ title, subtitle, image, imageAlt, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#121212] border-b-3 border-[#121212] px-4 py-16 text-left sm:px-6 sm:py-20 md:py-24 text-white">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#6b0c26]/80 to-[#121212]/90" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#6b0c26]" />
      )}

      {/* Swiss Grid Texture */}
      <div className="absolute inset-0 editorial-grid-dark opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl min-w-0">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold bg-[#d97706] text-[#121212] px-2.5 py-0.5 border border-white shadow-[2px_2px_0px_#000000] uppercase tracking-widest">
              {badge ?? "PLAYPEN DIRECTORY"}
            </span>
            <span className="font-mono text-xs text-[#e8dfd1]/80 uppercase tracking-wider hidden sm:inline-block">
              // EST. 1977 • DHAKA
            </span>
          </div>

          <h1 className="break-words font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.04] uppercase">
            {title}
          </h1>

          {subtitle && (
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#e8dfd1]/90 max-w-3xl leading-relaxed border-l-2 border-[#d97706] pl-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
