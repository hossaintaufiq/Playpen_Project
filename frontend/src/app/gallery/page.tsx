import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";

const placeholders = [
  { title: "Annual Day 2024", category: "Events" },
  { title: "Sports Day", category: "Sports" },
  { title: "Science Fair", category: "Academics" },
  { title: "Art Exhibition", category: "Arts" },
  { title: "Independence Day", category: "Celebrations" },
  { title: "Smart Classroom", category: "Campus" },
];

export default function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Gallery"
        subtitle="Moments and memories from life at Playpen School."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4 md:grid-cols-3">
          {placeholders.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-square overflow-hidden rounded-xl bg-primary/10 sm:rounded-2xl"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                <span className="font-serif text-3xl font-bold text-primary/30 sm:text-4xl">P</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-3 sm:p-4">
                <p className="text-[10px] text-white/70 sm:text-xs">{item.category}</p>
                <p className="text-xs font-semibold text-white sm:text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
