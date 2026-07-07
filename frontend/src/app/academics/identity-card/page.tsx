import { CreditCard, Shield, Camera, AlertTriangle } from "lucide-react";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AcademicsPageShell } from "@/components/academics/AcademicsPageShell";

const cardInfo = [
  {
    icon: CreditCard,
    title: "Official Identification",
    text: "Every pupil is issued a school identity card for security and identification on campus.",
  },
  {
    icon: Camera,
    title: "Photo & Details",
    text: "Cards display the pupil's photograph, name, class, and other essential school information.",
  },
  {
    icon: Shield,
    title: "Campus Security",
    text: "ID cards help staff verify pupils and maintain a safe school environment.",
  },
  {
    icon: AlertTriangle,
    title: "Loss or Damage",
    text: "Lost or damaged cards must be reported promptly for replacement through the admin office.",
  },
];

const guidelines = [
  "Identity cards must be worn or carried as directed by school policy.",
  "Cards are not transferable and must not be lent to others.",
  "Pupils entering or leaving campus may be asked to present their ID card.",
  "Replacement cards may require a fee and updated photograph.",
  "Parents should ensure new pupils receive their card at the start of the academic year.",
];

export default function IdentityCardPage() {
  return (
    <AcademicsPageShell
      section="/academics/identity-card"
      title="The Identity Card"
      subtitle="Essential pupil identification for safety, security, and smooth school operations."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {cardInfo.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:rounded-3xl"
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

        <div className="mt-10 sm:mt-12">
          <AboutContentSection title="ID Card Guidelines">
            <ul className="list-disc space-y-2 pl-5">
              {guidelines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AboutContentSection>
        </div>
      </section>
    </AcademicsPageShell>
  );
}
