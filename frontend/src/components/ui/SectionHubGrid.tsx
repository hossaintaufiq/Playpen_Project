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
    <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {subPages.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          className="group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_4px_24px_-10px_rgba(128,0,0,0.1)] transition duration-300 hover:border-primary/20 hover:shadow-[0_12px_32px_-12px_rgba(128,0,0,0.15)] sm:rounded-3xl"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            <Image
              src={page.heroImage}
              alt={page.label}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/55 to-transparent" />
          </div>
          <div className="p-5 sm:p-6">
            <h2 className="font-serif text-lg font-semibold text-foreground sm:text-xl">
              {page.label}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {page.description}
            </p>
            <span className="playpen-text mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition group-hover:gap-2.5">
              Read more
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
