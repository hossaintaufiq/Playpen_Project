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
    <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
      <div className="rounded-3xl border border-border/80 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-extrabold text-xl sm:text-2xl text-foreground">{title}</h3>
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/8 px-4.5 py-2 text-xs font-bold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-white shadow-sm"
          >
            <span>View Full Gallery</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {images.map((image) => (
            <div key={image.id} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
