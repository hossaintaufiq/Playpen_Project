import Image from "next/image";
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
  image,
  featured = false,
}: {
  role?: string;
  name: string;
  division?: string;
  image?: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`overflow-hidden rounded-3xl border shadow-sm transition hover:shadow-xl hover:-translate-y-1 ${
        featured
          ? "border-primary/30 bg-white"
          : "border-border/80 bg-white"
      }`}
    >
      {image && (
        <div className="relative aspect-[4/3.5] w-full overflow-hidden bg-stone-100">
          <Image
            src={image}
            alt={`${name} - ${role || "Leadership"}`}
            fill
            className={`${
              image.includes("Principal")
                ? "object-cover object-top"
                : "object-contain p-2.5 bg-gradient-to-b from-stone-200 via-stone-100 to-stone-50"
            } transition-transform duration-700 hover:scale-105`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {role && (
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7a0826] text-amber-300 border border-amber-400/40 px-3.5 py-1 text-xs font-black uppercase tracking-wider shadow-md">
                {role}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6 sm:p-7">
        {!image && role && (
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              {role}
            </span>
            {featured && (
              <span className="flex h-2 w-2 rounded-full bg-primary" />
            )}
          </div>
        )}

        <h3 className="font-extrabold text-xl sm:text-2xl text-foreground">{name}</h3>

        {division && (
          <div className="mt-4">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1 text-xs font-bold text-primary">
              {division}
            </span>
          </div>
        )}
      </div>
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
        title="Leadership Dedicated to Academic Excellence & Care"
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
              image={leader.image}
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
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
              name={leader.name}
              division={leader.division}
            />
          ))}
        </div>
      </div>

      {/* Teacher-in-Charges */}
      <div className="mt-16">
        <div className="mb-6 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <UserCheck className="h-5 w-5" />
          </div>
          <h2 className="font-extrabold text-2xl sm:text-3xl text-foreground">
            Teacher-in-Charges
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teacherInCharges.map((teacher) => (
            <LeadershipCard
              key={teacher.name}
              name={teacher.name}
              division={teacher.division}
            />
          ))}
        </div>
      </div>

      {/* Direct Administrative Contact Information */}
      <div className="mt-16 rounded-3xl border border-border/80 bg-surface p-6 sm:p-8">
        <h3 className="font-extrabold text-xl sm:text-2xl text-foreground">
          Contact School Administration
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          For appointments, queries, and administrative inquiries, our management office is available during school hours.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-border/70">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Office Landline</p>
              <p className="text-xs sm:text-sm font-bold text-foreground truncate">
                {schoolContact.phone}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-border/70">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-hover">
              <Smartphone className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Mobile Helpline</p>
              <p className="text-xs sm:text-sm font-bold text-foreground truncate">
                {schoolContact.mobile ?? schoolContact.phone}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-border/70">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Official Email</p>
              <p className="text-xs sm:text-sm font-bold text-foreground truncate">
                {schoolContact.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
