import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { portalNavItems } from "@/lib/portal-nav";
import { ArrowRight, GraduationCap, Shield } from "lucide-react";

const portalCards = [
  {
    href: "/portal/admin",
    title: "Admin",
    description: "Staff and administration access to manage school operations.",
    icon: Shield,
  },
  {
    href: "/portal/parent-student",
    title: "Parent / Student",
    description: "Families and pupils access notices, results, and school services.",
    icon: GraduationCap,
  },
];

export default function PortalPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Portal"
        subtitle="Access the Playpen admin and parent/student portal."
        image="/images/marquee/student-services.jpg"
        imageAlt="Playpen portal"
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {portalCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-2xl border border-border/60 bg-white p-6 shadow-sm transition hover:border-primary/20 hover:shadow-md sm:rounded-3xl sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                <card.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 className="mt-5 font-serif text-xl font-semibold text-foreground">
                {card.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <span className="playpen-text mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition group-hover:gap-2.5">
                Open portal
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground sm:text-sm">
          {portalNavItems.map((item) => item.label).join(" · ")} — choose your login type above.
        </p>
      </section>
    </SiteLayout>
  );
}
