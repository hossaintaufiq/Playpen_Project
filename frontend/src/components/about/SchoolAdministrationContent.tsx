import { Building2, Mail, Phone, Smartphone, Users } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
      className={`rounded-2xl border bg-white p-6 shadow-sm sm:rounded-3xl sm:p-7 ${
        featured
          ? "border-primary/20 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.05]"
          : "border-border/60"
      }`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/70">
        {role}
      </p>
      <h3 className="mt-2 font-serif text-xl font-semibold text-foreground sm:text-2xl">{name}</h3>
      {division && (
        <p className="mt-3 inline-flex rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
          {division}
        </p>
      )}
    </article>
  );
}

export function SchoolAdministrationContent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <SectionHeader
        eyebrow="School Management"
        title="Leadership that guides every division"
        description={administrationIntro}
      />

      <div className="mt-10 sm:mt-12">
        <div className="mb-5 flex items-center gap-2">
          <Building2 className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
            School Management
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
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

      <div className="mt-12 sm:mt-14">
        <div className="mb-5 flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
            Vice Principals
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
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

      <div className="mt-12 sm:mt-14">
        <SectionHeader
          align="left"
          eyebrow="Divisional Coordination"
          title="Teacher-In-Charges"
          description="Teacher-In-Charges support academic supervision and day-to-day coordination across assigned class levels."
          className="max-w-3xl"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teacherInCharges.map((leader) => (
            <article
              key={leader.name}
              className="rounded-2xl border border-border/60 bg-white p-5 shadow-sm transition hover:border-primary/20 hover:shadow-md"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/65">
                Teacher-In-Charge
              </p>
              <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-foreground">
                {leader.name}
              </h3>
              <p className="mt-3 text-sm font-medium text-muted-foreground">{leader.division}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] via-white to-accent/[0.08] p-6 sm:mt-14 sm:p-8">
        <AboutContentSection title="Governance & Communication">
          <p>
            Playpen&apos;s administration maintains open channels with parents through notices,
            parent–teacher meetings, and direct contact with relevant offices. Transparent
            communication strengthens trust and helps pupils succeed.
          </p>
          <p>
            For administrative enquiries, please contact the school office during regular hours.
          </p>
          <ul className="mt-4 space-y-3 text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <span>
                <span className="font-medium">Telephone:</span>{" "}
                <a href={schoolContact.phoneHref} className="playpen-text hover:underline">
                  {schoolContact.phone}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Smartphone className="h-4 w-4 shrink-0 text-primary" />
              <span>
                <span className="font-medium">Mobile:</span>{" "}
                <a href={schoolContact.mobileHref} className="playpen-text hover:underline">
                  {schoolContact.mobile}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <span>
                <span className="font-medium">Email:</span>{" "}
                <a href={schoolContact.emailHref} className="playpen-text hover:underline">
                  {schoolContact.email}
                </a>
              </span>
            </li>
          </ul>
        </AboutContentSection>
      </div>
    </section>
  );
}
