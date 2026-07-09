import Link from "next/link";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { schoolContact } from "@/lib/contact";

const links = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Student Life", href: "/student-life" },
  { label: "Notices", href: "/notices" },
  { label: "Gallery", href: "/gallery" },
  { label: "Portal", href: "/portal" },
];

function FooterWave() {
  return (
    <div className="pointer-events-none relative -mb-px w-full leading-[0]" aria-hidden>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-10 w-full sm:h-14 md:h-16 lg:h-20"
      >
        <path
          fill="#ffffff"
          d="M0,64 C240,100 480,32 720,58 C960,84 1200,24 1440,52 L1440,0 L0,0 Z"
        />
        <path
          fill="#5a0000"
          d="M0,80 C240,120 480,40 720,70 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
        />
        <path
          fill="#800000"
          fillOpacity="0.3"
          d="M0,95 C360,55 720,110 1080,75 C1260,58 1380,85 1440,90 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-auto w-full">
      <FooterWave />
      <div className="playpen-bg-dark w-full text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6 lg:gap-8">
            <div>
              <p className="font-serif text-2xl font-bold sm:text-3xl">{schoolContact.name}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/60">
                {schoolContact.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                {schoolContact.description}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 sm:text-sm">
                Quick Links
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 md:grid-cols-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 sm:text-sm">
                Contact Us
              </p>
              <ul className="mt-4 space-y-3 sm:space-y-4">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                  <address className="not-italic text-sm leading-relaxed text-white/80">
                    {schoolContact.address.line1}
                    <br />
                    {schoolContact.address.line2}
                    <br />
                    {schoolContact.address.line3}
                  </address>
                </li>
                <li className="flex gap-3">
                  <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                  <div className="text-sm">
                    <p className="text-xs font-medium uppercase tracking-wide text-white/50">Mobile</p>
                    <a
                      href={schoolContact.mobileHref}
                      className="text-white/80 transition hover:text-white"
                    >
                      {schoolContact.mobile}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                  <div className="text-sm">
                    <p className="text-xs font-medium uppercase tracking-wide text-white/50">Telephone</p>
                    <a
                      href={schoolContact.phoneHref}
                      className="text-white/80 transition hover:text-white"
                    >
                      {schoolContact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                  <div className="min-w-0 text-sm">
                    <p className="text-xs font-medium uppercase tracking-wide text-white/50">Email</p>
                    <a
                      href={schoolContact.emailHref}
                      className="break-all text-white/80 transition hover:text-white"
                    >
                      {schoolContact.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="hidden md:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 sm:text-sm">
                Our Location
              </p>
              <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-white/15">
                <div className="relative aspect-square w-full bg-white/5">
                  <iframe
                    src={schoolContact.mapsEmbedUrl}
                    title="Playpen School location on Google Maps"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              </div>
              <a
                href={schoolContact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 transition hover:text-white"
              >
                <MapPin className="h-3.5 w-3.5" />
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50 sm:mt-10 sm:text-sm">
            <p>© {new Date().getFullYear()} Playpen School. All rights reserved.</p>
            <div className="mx-auto my-4 h-px w-full max-w-xs bg-white/10" />
            <p className="text-white/45">
              Website is developed by Neptune Software Solutions (
              <a
                href="https://hossain-ahmmed-taufiq-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/70 transition hover:text-white hover:underline"
              >
                Epic Panda 22
              </a>
              )
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
