import { AboutPageShell } from "@/components/about/AboutPageShell";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { schoolContact } from "@/lib/contact";

const leadership = [
  {
    role: "Principal",
    name: "School Leadership",
    note: "Provides academic vision, pastoral oversight, and day-to-day direction for the entire school community.",
  },
  {
    role: "Vice Principal",
    name: "Academic Affairs",
    note: "Supports curriculum delivery, faculty development, and standards across all school divisions.",
  },
  {
    role: "Administration",
    name: "Operations Team",
    note: "Manages admissions, finance, communications, and the services that keep Playpen running smoothly.",
  },
  {
    role: "Division Heads",
    name: "Elementary · Junior · Middle · Senior",
    note: "Lead each stage of the pupil journey with specialised guidance tailored to age and learning needs.",
  },
];

export default function SchoolAdministrationPage() {
  return (
    <AboutPageShell
      section="/about/school-administration"
      title="School Administration"
      subtitle="Committed leadership and professional staff working together for the wellbeing of every pupil."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Playpen&apos;s administration brings together experienced educators and support
            professionals who share a single goal — to provide the best possible care and
            education for your child.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2">
          {leadership.map((person) => (
            <article
              key={person.role}
              className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-7"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary/60">
                {person.role}
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
                {person.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 space-y-6 sm:mt-12">
          <AboutContentSection title="Governance & Communication">
            <p>
              The school administration maintains open channels with parents through notices,
              parent–teacher meetings, and direct contact with relevant offices. We believe
              transparent communication strengthens trust and helps pupils succeed.
            </p>
            <p>
              For administrative enquiries, please contact the school office during regular
              hours or reach us by phone and email.
            </p>
            <ul className="space-y-2 text-foreground">
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <a href={schoolContact.phoneHref} className="playpen-text hover:underline">
                  {schoolContact.phone}
                </a>
              </li>
              <li>
                <span className="font-medium">Mobile:</span>{" "}
                <a href={schoolContact.mobileHref} className="playpen-text hover:underline">
                  {schoolContact.mobile}
                </a>
              </li>
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a href={schoolContact.emailHref} className="playpen-text hover:underline">
                  {schoolContact.email}
                </a>
              </li>
            </ul>
          </AboutContentSection>
        </div>
      </section>
    </AboutPageShell>
  );
}
