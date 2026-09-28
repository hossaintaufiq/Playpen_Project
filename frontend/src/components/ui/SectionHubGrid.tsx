import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type HubItem = {
  label: string;
  href: string;
  description: string;
  heroImage: string;
};

export function SectionHubGrid({
  items,
  rootHref,
}: {
  items: readonly HubItem[];
  rootHref: string;
}) {
  const subPages = items.filter((item) => item.href !== rootHref);

  return (
    <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
      {subPages.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          className="group overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm transition duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            <Image
              src={page.heroImage}
              alt={page.label}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <h2 className="font-extrabold text-xl text-foreground group-hover:text-primary transition-colors">
              {page.label}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {page.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary transition group-hover:gap-2.5">
              <span>Read more</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
