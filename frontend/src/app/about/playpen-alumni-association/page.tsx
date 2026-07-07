import { GraduationCap, Users, Globe2 } from "lucide-react";
import { AboutPageShell } from "@/components/about/AboutPageShell";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { AlumniRegistrationForm } from "@/components/about/AlumniRegistrationForm";

const highlights = [
  {
    icon: GraduationCap,
    title: "A Legacy of Achievement",
    text: "Playpen graduates have gone on to distinguished universities and careers across Bangladesh and abroad.",
  },
  {
    icon: Users,
    title: "Stay Connected",
    text: "The association helps alumni reconnect with classmates, mentors, and the school community.",
  },
  {
    icon: Globe2,
    title: "Give Back",
    text: "Alumni contribute through mentorship, events, and sharing their experiences with current pupils.",
  },
];

export default function PlaypenAlumniAssociationPage() {
  return (
    <AboutPageShell
      section="/about/playpen-alumni-association"
      title="Playpen Alumni Association"
      subtitle="Celebrating graduates who carry the Playpen spirit into universities, professions, and communities worldwide."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Playpen wishes to connect with students who have excelled in their respective fields.
            The Alumni Association strengthens bonds between past pupils and the school — honouring
            a shared history while inspiring the next generation.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-6 text-center shadow-sm sm:rounded-3xl"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
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
          <AboutContentSection title="Join the Network">
            <p>
              If you are a Playpen graduate, we invite you to register with the Alumni
              Association and stay informed about reunions, school events, and opportunities
              to support current pupils.
            </p>
            <p>
              Share your story, update your contact details, and remain part of a community
              that began in our classrooms and continues far beyond them.
            </p>
          </AboutContentSection>

          <AlumniRegistrationForm />
        </div>
      </section>
    </AboutPageShell>
  );
}
