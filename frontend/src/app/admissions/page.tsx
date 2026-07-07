import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/ui/PageHero";
import { schoolContact } from "@/lib/contact";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Admissions"
        subtitle="Join the Playpen family — applications open for the upcoming academic year."
      />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Our admission process is designed to be simple and transparent. Submit your
          application online, attend an assessment interview, and receive a decision within
          one week. Contact our admissions office for more information.
        </p>
        <div className="mt-6 rounded-xl border border-border bg-muted p-5 sm:mt-8 sm:rounded-2xl sm:p-6">
          <p className="text-sm font-semibold text-foreground sm:text-base">Admissions Office</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground sm:text-base">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {schoolContact.address.line1}, {schoolContact.address.line2},{" "}
                {schoolContact.address.line3}
              </span>
            </li>
            <li className="flex gap-3">
              <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={schoolContact.mobileHref} className="hover:text-primary">
                {schoolContact.mobile}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={schoolContact.phoneHref} className="hover:text-primary">
                {schoolContact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={schoolContact.emailHref} className="break-all hover:text-primary">
                {schoolContact.email}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
