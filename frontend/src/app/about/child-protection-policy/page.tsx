import { AboutPageShell } from "@/components/about/AboutPageShell";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { Shield, HeartHandshake, Eye, Phone } from "lucide-react";
import { schoolContact } from "@/lib/contact";

const principles = [
  {
    icon: Shield,
    title: "Zero Tolerance",
    text: "Playpen maintains a zero-tolerance approach to any form of abuse, neglect, or harm involving pupils.",
  },
  {
    icon: HeartHandshake,
    title: "Duty of Care",
    text: "Every member of staff shares responsibility for creating a safe, respectful environment for all children.",
  },
  {
    icon: Eye,
    title: "Vigilance",
    text: "We train staff to recognise concerns early and respond promptly through established safeguarding procedures.",
  },
  {
    icon: Phone,
    title: "Reporting",
    text: "Clear reporting channels are in place for pupils, parents, and staff to raise concerns confidentially.",
  },
];

const policyPoints = [
  "All staff undergo safeguarding awareness as part of their role at Playpen.",
  "Visitors and contractors are expected to follow school safety and conduct guidelines.",
  "Physical, emotional, and online safety are addressed through pastoral care and school rules.",
  "Allegations or concerns are investigated seriously, sensitively, and in line with school policy.",
  "Parents are partners in safeguarding — we encourage open dialogue about pupil wellbeing.",
];

export default function ChildProtectionPolicyPage() {
  return (
    <AboutPageShell
      section="/about/child-protection-policy"
      title="Child Protection Policy"
      subtitle="Safeguarding the wellbeing, dignity, and safety of every pupil is central to everything we do."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Playpen is committed to protecting children from harm and promoting their welfare.
            This policy outlines our approach to safeguarding and the standards we expect from
            our entire school community.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 space-y-6 sm:mt-12">
          <AboutContentSection title="Our Commitment">
            <p>
              We assure parents that Playpen takes child protection seriously at every level —
              from classroom practice to school-wide policies. Pupils are taught to understand
              their rights, seek help when needed, and treat one another with respect.
            </p>
          </AboutContentSection>

          <AboutContentSection title="Key Policy Points">
            <ul className="list-disc space-y-2 pl-5">
              {policyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </AboutContentSection>

          <AboutContentSection title="Reporting a Concern">
            <p>
              If you have a safeguarding concern regarding a pupil at Playpen, please contact
              the school administration immediately. All reports will be handled with care
              and confidentiality.
            </p>
            <p>
              <span className="font-medium text-foreground">Contact:</span>{" "}
              <a href={schoolContact.emailHref} className="playpen-text hover:underline">
                {schoolContact.email}
              </a>{" "}
              ·{" "}
              <a href={schoolContact.phoneHref} className="playpen-text hover:underline">
                {schoolContact.phone}
              </a>
            </p>
          </AboutContentSection>
        </div>
      </section>
    </AboutPageShell>
  );
}
