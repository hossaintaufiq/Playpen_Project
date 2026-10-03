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
      className={`border-2 border-[#121212] p-6 shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between ${
        featured
          ? "bg-[#f4efe6] border-2 border-[#121212]"
          : "bg-[#ffffff]"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 border-b-2 border-[#121212] pb-2.5 mb-3.5">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#6b0c26]">
            {role}
          </span>
          {featured && (
            <span className="font-mono text-[10px] font-bold bg-[#d97706] text-[#121212] px-1.5 py-0.2 border border-black">
              PRINCIPAL
            </span>
          )}
        </div>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#121212] uppercase leading-snug">{name}</h3>
      </div>
      {division && (
        <div className="mt-4 pt-3 border-t border-[#121212]/15">
          <span className="font-mono text-[11px] font-bold text-[#6b0c26] bg-[#faf7f2] px-2 py-0.5 border border-[#121212] inline-block uppercase">
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
        <div className="mb-6 flex items-center justify-between border-b-2 border-[#121212] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center border border-[#121212] bg-[#6b0c26] text-white">
              <Building2 className="h-4 w-4 text-[#d97706]" />
            </div>
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#121212] uppercase">
              School Management
            </h2>
          </div>
          <span className="font-mono text-xs text-[#524d46] font-bold uppercase">// GOVERNING BODY</span>
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
        <div className="mb-6 flex items-center justify-between border-b-2 border-[#121212] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center border border-[#121212] bg-[#d97706] text-[#121212]">
              <Users className="h-4 w-4" />
            </div>
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#121212] uppercase">
              Vice Principals
            </h2>
          </div>
          <span className="font-mono text-xs text-[#524d46] font-bold uppercase">// ACADEMIC WINGS</span>
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
        <div className="mb-6 flex items-center justify-between border-b-2 border-[#121212] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center border border-[#121212] bg-[#6b0c26] text-white">
              <UserCheck className="h-4 w-4 text-[#d97706]" />
            </div>
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#121212] uppercase">
              Teachers-in-Charge (TIC)
            </h2>
          </div>
          <span className="font-mono text-xs text-[#524d46] font-bold uppercase">// DIVISIONAL HEADS</span>
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
      <div className="mt-16 border-3 border-[#121212] bg-[#f4efe6] p-8 sm:p-10 shadow-[6px_6px_0px_#121212]">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-bold text-[#6b0c26] uppercase">// ADMINISTRATIVE DESK</span>
          <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#121212] uppercase mt-1">
            Contact School Administration
          </h3>
          <p className="mt-3 font-sans text-sm sm:text-base text-[#524d46] leading-relaxed">
            For academic records, inquiries, or meetings with school leadership, please contact our administrative desk during standard office hours.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6 font-mono text-xs sm:text-sm font-bold text-[#121212]">
            <a href={schoolContact.phoneHref} className="flex items-center gap-2 text-[#6b0c26] hover:underline">
              <Phone className="h-4 w-4 text-[#d97706]" />
              <span>{schoolContact.phone}</span>
            </a>
            <a href={schoolContact.emailHref} className="flex items-center gap-2 text-[#6b0c26] hover:underline lowercase">
              <Mail className="h-4 w-4 text-[#d97706]" />
              <span>{schoolContact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
