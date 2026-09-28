import { Building2, Mail, Phone, Smartphone, Users, UserCheck } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { SectionPhotoPreview } from "@/components/ui/SectionPhotoPreview";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { GalleryImage } from "@/lib/gallery-data";
import { schoolContact } from "@/lib/contact";
import {
  administrationIntro,
  schoolManagement,
  teacherInCharges,
  vicePrincipals,
} from "@/lib/school-administration";

function LeadershipCard({
  role,
  name,
  division,
  featured = false,
}: {
  role: string;
  name: string;
  division?: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`rounded-3xl border p-6 shadow-sm sm:p-7 transition hover:shadow-md hover:-translate-y-0.5 ${
        featured
          ? "border-primary/30 bg-gradient-to-br from-primary/[0.06] via-white to-accent/[0.06] shadow-md"
          : "border-border/80 bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-accent">
          {role}
        </span>
        {featured && (
          <span className="flex h-2 w-2 rounded-full bg-primary" />
        )}
      </div>
      <h3 className="font-extrabold text-xl sm:text-2xl text-foreground">{name}</h3>
      {division && (
        <div className="mt-4">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1 text-xs font-bold text-primary">
            {division}
          </span>
        </div>
      )}
    </article>
  );
}

export function SchoolAdministrationContent({
  photoPreview,
}: {
  photoPreview?: { title: string; href: string; images: GalleryImage[] } | null;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="School Governance"
        title="Leadership Dedicated to Academic Excellence &amp; Care"
        description={administrationIntro}
      />

      {/* Governing Management */}
      <div className="mt-12 sm:mt-16">
        <div className="mb-6 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Building2 className="h-5 w-5" />
          </div>
          <h2 className="font-extrabold text-2xl sm:text-3xl text-foreground">
            School Management
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {schoolManagement.map((leader) => (
            <LeadershipCard
              key={leader.role}
              role={leader.role}
              name={leader.name}
              featured={leader.highlight}
            />
          ))}
        </div>
      </div>

      {photoPreview ? (
        <div className="mt-12">
          <SectionPhotoPreview
            title={photoPreview.title}
            href={photoPreview.href}
            images={photoPreview.images}
          />
        </div>
      ) : null}

      {/* Vice Principals */}
      <div className="mt-16">
        <div className="mb-6 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent-hover">
            <Users className="h-5 w-5" />
          </div>
          <h2 className="font-extrabold text-2xl sm:text-3xl text-foreground">
            Vice Principals
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {vicePrincipals.map((leader) => (
            <LeadershipCard
              key={leader.name}
              role="Vice Principal"
              name={leader.name}
              division={leader.division}
            />
          ))}
        </div>
      </div>

      {/* Teachers in Charge */}
      <div className="mt-16">
        <div className="mb-6 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <UserCheck className="h-5 w-5" />
          </div>
          <h2 className="font-extrabold text-2xl sm:text-3xl text-foreground">
            Teachers-in-Charge (TIC)
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teacherInCharges.map((leader) => (
            <LeadershipCard
              key={leader.division}
              role="Teacher-in-Charge"
              name={leader.name}
              division={leader.division}
            />
          ))}
        </div>
      </div>

      {/* Contact Admin Office Box */}
      <div className="mt-16 overflow-hidden rounded-3xl border border-border/80 bg-surface p-8 sm:p-10 shadow-sm">
        <div className="max-w-2xl">
          <h3 className="font-extrabold text-2xl text-foreground">
            Contact the School Administration Office
          </h3>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            For academic records, inquiries, or meetings with school leadership, please contact our administrative desk during standard office hours.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm font-semibold text-foreground">
            <a href={schoolContact.phoneHref} className="flex items-center gap-2 text-primary hover:underline">
              <Phone className="h-4 w-4 text-accent" />
              <span>{schoolContact.phone}</span>
            </a>
            <a href={schoolContact.emailHref} className="flex items-center gap-2 text-primary hover:underline">
              <Mail className="h-4 w-4 text-accent" />
              <span>{schoolContact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
