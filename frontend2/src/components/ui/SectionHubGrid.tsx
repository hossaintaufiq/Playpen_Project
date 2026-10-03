import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

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
      {subPages.map((page, idx) => (
        <Link
          key={page.href}
          href={page.href}
          className="group border-2 border-[#121212] bg-[#ffffff] shadow-[5px_5px_0px_#121212] flex flex-col justify-between hover:shadow-[8px_8px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all overflow-hidden"
        >
          {/* Photo in brutalist frame */}
          <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-[#121212] bg-[#121212]">
            <Image
              src={page.heroImage}
              alt={page.label}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 bg-[#121212] text-white border border-white/40 px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
              ITEM // 0{idx + 1}
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#121212] group-hover:text-[#6b0c26] transition-colors leading-tight">
                {page.label}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#524d46] mt-2.5 leading-relaxed line-clamp-3">
                {page.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-[#121212]/15 flex items-center justify-between font-mono text-xs font-bold text-[#6b0c26]">
              <span className="uppercase">Enter Section</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
