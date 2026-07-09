import Link from "next/link";
import { ArrowRight, Megaphone, Phone, Smartphone } from "lucide-react";
import { NoticesList } from "@/components/notices/NoticesList";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { formatNewsTickerMessage } from "@/lib/notices";
import type { NewsTicker, Notice } from "@/lib/cms/types";

type NoticesAnnouncementsContentProps = {
  notices: Notice[];
  newsTicker: NewsTicker;
};

function formatPhoneHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

export function NoticesAnnouncementsContent({
  notices,
  newsTicker,
}: NoticesAnnouncementsContentProps) {
  return (
    <section className="mx-auto w-full min-w-0 max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      {newsTicker.enabled && (
        <div className="overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-[#5a0000] via-primary to-primary-light text-white shadow-[0_16px_40px_-18px_rgba(128,0,0,0.45)] sm:rounded-3xl">
          <div className="border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Megaphone className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Current announcement
                </p>
                <h2 className="font-serif text-xl font-semibold sm:text-2xl">School-wide notice</h2>
              </div>
            </div>
          </div>

          <div className="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
            <p className="text-sm leading-relaxed text-white/90 sm:text-base">
              {formatNewsTickerMessage(newsTicker)}
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  Academic year
                </p>
                <p className="mt-1 text-sm font-medium">{newsTicker.academicYear}</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  Programme
                </p>
                <p className="mt-1 text-sm font-medium">{newsTicker.level}</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  Office hours
                </p>
                <p className="mt-1 text-sm font-medium">{newsTicker.hours}</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  Apply online
                </p>
                <Link
                  href="/admissions/apply"
                  className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  Admissions forms
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {newsTicker.phones.map((phone) => (
                <a
                  key={phone}
                  href={formatPhoneHref(phone)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/15"
                >
                  <Smartphone className="h-4 w-4 shrink-0" />
                  <span className="break-all">{phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={newsTicker.enabled ? "mt-12 sm:mt-14" : ""}>
        <SectionHeader
          align="left"
          eyebrow="School notices"
          title="Latest notices for families"
          description="Important updates, reminders, and official school communications — managed by the Playpen administration team."
          className="max-w-3xl"
        />

        <NoticesList notices={notices} />
      </div>

      <div className="mt-12 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.05] p-5 sm:mt-14 sm:rounded-3xl sm:p-6 md:flex md:items-center md:justify-between md:gap-8">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4 shrink-0" />
            Need more information?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Contact the school office during office hours, or visit the admissions section for
            enrolment updates.
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row md:mt-0">
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center rounded-full border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5"
          >
            Admissions
          </Link>
          <Link
            href="/about"
            className="playpen-bg inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Contact school
          </Link>
        </div>
      </div>
    </section>
  );
}
