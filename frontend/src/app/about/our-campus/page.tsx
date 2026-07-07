import Image from "next/image";
import { MapPin, Trees, FlaskConical, Library, Dumbbell } from "lucide-react";
import { AboutPageShell } from "@/components/about/AboutPageShell";
import { AboutContentSection } from "@/components/about/AboutContentSection";
import { schoolContact } from "@/lib/contact";

const facilities = [
  {
    icon: Library,
    title: "Learning Spaces",
    text: "Bright classrooms, libraries, and dedicated study areas designed for focused Cambridge learning.",
  },
  {
    icon: FlaskConical,
    title: "Science & ICT Labs",
    text: "Modern laboratories and technology facilities that support hands-on exploration and discovery.",
  },
  {
    icon: Dumbbell,
    title: "Sports & Recreation",
    text: "Courts, fields, and activity zones where pupils build fitness, teamwork, and confidence.",
  },
  {
    icon: Trees,
    title: "Safe Environment",
    text: "A secure, welcoming campus where children feel comfortable to learn, play, and grow every day.",
  },
];

export default function OurCampusPage() {
  return (
    <AboutPageShell
      section="/about/our-campus"
      title="Our Campus"
      subtitle="A purpose-built environment in Bashundhara R/A where learning, creativity, and community come together."
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:rounded-3xl">
            <Image
              src="/images/schools/middle.jpg"
              alt="Playpen school campus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5a0000]/60 via-transparent to-transparent" />
          </div>

          <AboutContentSection title="Welcome to Our Campus">
            <p>
              Playpen&apos;s campus in Bashundhara Residential Area provides a calm, well-organised
              setting for pupils from playgroup through A-Level. Every space is planned to support
              academic excellence, extracurricular engagement, and the wellbeing of our school
              community.
            </p>
            <p>
              Families visiting Playpen will find a vibrant yet orderly environment — where
              dedicated staff, modern facilities, and a culture of care help every child thrive.
            </p>
            <div className="flex items-start gap-3 rounded-xl bg-muted/50 p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="text-sm text-foreground">
                <p>{schoolContact.address.line1}</p>
                <p>{schoolContact.address.line2}</p>
                <p>{schoolContact.address.line3}</p>
              </div>
            </div>
          </AboutContentSection>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => (
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

        <div className="mt-10 overflow-hidden rounded-2xl border border-border/50 sm:mt-12 sm:rounded-3xl">
          <iframe
            title="Playpen School location"
            src={schoolContact.mapsEmbedUrl}
            className="h-64 w-full border-0 sm:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </AboutPageShell>
  );
}
