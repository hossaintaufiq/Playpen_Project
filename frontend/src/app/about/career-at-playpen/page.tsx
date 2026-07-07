import { ArrowRight, Briefcase, BookOpen, Users } from "lucide-react";
import { AboutPageShell } from "@/components/about/AboutPageShell";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { schoolContact } from "@/lib/contact";

const whyJoin = [
  {
    icon: BookOpen,
    title: "Meaningful Work",
    text: "Help shape young lives through teaching, pastoral care, and support roles at every level.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    text: "Join a professional team that values growth, respect, and shared commitment to excellence.",
  },
  {
    icon: Briefcase,
    title: "Career Development",
    text: "Opportunities for training, mentorship, and advancement within a respected institution.",
  },
];

const openings = [
  "Cambridge curriculum teachers across school divisions",
  "Pastoral and student support staff",
  "Administrative and admissions personnel",
  "Co-curricular and sports instructors",
];

export default function CareerAtPlaypenPage() {
  return (
    <AboutPageShell
      section="/about/career-at-playpen"
      title="Career at Playpen"
      subtitle="Build your career at a school where dedication, care, and educational excellence define every role."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Playpen seeks passionate educators and professionals who believe in nurturing young
            minds. If you share our values and commitment to quality education, we welcome your
            interest in joining our team.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3">
          {whyJoin.map((item) => (
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

        <div className="mt-10 space-y-6 sm:mt-12">
          <AboutContentSection title="Areas We Hire In">
            <ul className="list-disc space-y-2 pl-5">
              {openings.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </AboutContentSection>

          <AboutContentSection title="How to Apply">
            <p>
              To express your interest in a career at Playpen, please send your CV and a cover
              letter outlining your experience and the role you are applying for. Our
              administration team will review applications and contact suitable candidates.
            </p>
            <p>
              <span className="font-medium text-foreground">Email your application to:</span>{" "}
              <a href={schoolContact.emailHref} className="playpen-text hover:underline">
                {schoolContact.email}
              </a>
            </p>
            <p>
              You may also visit the Admin Office during school hours for further information
              about current vacancies.
            </p>
          </AboutContentSection>

          <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.06] p-6 sm:rounded-3xl sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div className="md:max-w-xl">
              <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
                Ready to make a difference?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Join a school community that has been nurturing excellence since 1977.
              </p>
            </div>
            <a
              href={schoolContact.emailHref}
              className="playpen-bg mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark md:mt-0 md:w-auto"
            >
              Send Application
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </AboutPageShell>
  );
}
