import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery-data";

type SectionPhotoPreviewProps = {
  title: string;
  href: string;
  images: GalleryImage[];
};

export function SectionPhotoPreview({ title, href, images }: SectionPhotoPreviewProps) {
  if (!images.length) return null;

  return (
    <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6">
      <div className="rounded-3xl border border-border/60 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">{title}</h3>
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            More photos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((image) => (
            <div key={image.id} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
