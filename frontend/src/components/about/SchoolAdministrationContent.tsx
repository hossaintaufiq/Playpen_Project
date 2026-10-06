"use client";

import Image from "next/image";
import { Building2, Mail, Phone, Smartphone, Users, UserCheck, Award, Shield, Sparkles } from "lucide-react";
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
      className={`group overflow-hidden rounded-3xl border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${
        featured
          ? "border-primary/40 bg-white ring-1 ring-primary/10"
          : "border-border/80 bg-white hover:border-primary/30"
      }`}
    >
      {image && (
        <div className="relative aspect-[4/3.8] w-full overflow-hidden bg-stone-100">
          <Image
            src={image}
            alt={`${name} - ${role || "Leadership"}`}
            fill
            className={`${
              image.includes("Principal")
                ? "object-cover object-top"
                : "object-contain p-3 bg-gradient-to-b from-stone-200 via-stone-100 to-stone-50"
            } transition-transform duration-700 ease-out group-hover:scale-105`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {role && (
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7a0826] text-amber-300 border border-amber-400/40 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider shadow-md">
                <Award className="h-3 w-3 text-amber-300" />
                <span>{role}</span>
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6 sm:p-7 flex flex-col justify-between">
        <div>
          {!image && role && (
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-accent-hover">
                {role}
              </span>
              {featured && (
                <span className="flex h-2 w-2 rounded-full bg-primary" />
              )}
            </div>
          )}

          <h3 className="font-extrabold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors leading-tight">
            {name}
          </h3>

          {division && (
            <div className="mt-3.5">
              <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1 text-xs font-bold text-primary">
                <span>{division}</span>
              </span>
            </div>
          )}
        </div>
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
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20 w-full min-w-0">
      <div className="space-y-14 sm:space-y-18">
        {/* 01 — Section Header */}
        <SectionHeader
          eyebrow="School Governance"
          title="Leadership Dedicated to Academic Excellence & Care"
          description={administrationIntro}
        />

        {/* 02 — Governing Management */}
        <div>
          <div className="mb-6 sm:mb-8 flex items-center justify-between border-b border-border/70 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent block">
                  Executive Leadership
                </span>
                <h3 className="font-extrabold text-2xl sm:text-3xl text-foreground">
                  School Management
                </h3>
              </div>
            </div>
            <span className="text-xs font-semibold text-muted-foreground hidden sm:inline">
              Board of Governance
            </span>
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
          <SectionPhotoPreview
            title={photoPreview.title}
            href={photoPreview.href}
            images={photoPreview.images}
          />
        ) : null}

        {/* 03 — Vice Principals */}
        <div>
          <div className="mb-6 sm:mb-8 flex items-center justify-between border-b border-border/70 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent block">
                  Academic Administration
                </span>
                <h3 className="font-extrabold text-2xl sm:text-3xl text-foreground">
                  Vice Principals
                </h3>
              </div>
            </div>
            <span className="text-xs font-semibold text-muted-foreground hidden sm:inline">
              Section Leadership
            </span>
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

        {/* 04 — Teacher-in-Charges */}
        <div>
          <div className="mb-6 sm:mb-8 flex items-center justify-between border-b border-border/70 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <UserCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent block">
                  Curriculum &amp; Pastoral Heads
                </span>
                <h3 className="font-extrabold text-2xl sm:text-3xl text-foreground">
                  Teacher-in-Charges
                </h3>
              </div>
            </div>
            <span className="text-xs font-semibold text-muted-foreground hidden sm:inline">
              Class &amp; Wing Coordination
            </span>
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

        {/* 05 — Direct Administrative Contact Desk */}
        <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-surface via-white to-surface-subtle p-7 sm:p-10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary mb-1.5">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>Administrative Inquiries</span>
            </div>
            <h3 className="font-extrabold text-2xl sm:text-3xl text-foreground">
              Contact School Administration
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              For admissions consultations, appointments with school leadership, and general administrative queries, our front desk is ready to assist you.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={schoolContact.phoneHref}
              className="flex items-center gap-3.5 rounded-2xl bg-white p-5 border border-border/80 shadow-2xs transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">Office Landline</p>
                <p className="text-xs sm:text-sm font-bold text-foreground truncate mt-0.5">
                  {schoolContact.phone}
                </p>
              </div>
            </a>

            <a
              href={`tel:${schoolContact.mobile ?? schoolContact.phone}`}
              className="flex items-center gap-3.5 rounded-2xl bg-white p-5 border border-border/80 shadow-2xs transition-all duration-200 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent-hover">
                <Smartphone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">Mobile Helpline</p>
                <p className="text-xs sm:text-sm font-bold text-foreground truncate mt-0.5">
                  {schoolContact.mobile ?? schoolContact.phone}
                </p>
              </div>
            </a>

            <a
              href={schoolContact.emailHref}
              className="flex items-center gap-3.5 rounded-2xl bg-white p-5 border border-border/80 shadow-2xs transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">Official Email</p>
                <p className="text-xs sm:text-sm font-bold text-foreground truncate mt-0.5">
                  {schoolContact.email}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
