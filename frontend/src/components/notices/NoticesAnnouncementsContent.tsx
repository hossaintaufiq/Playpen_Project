import Link from "next/link";
import { ArrowRight, Megaphone, Phone, Smartphone, Bell, Calendar, Sparkles } from "lucide-react";
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
    <section className="mx-auto w-full min-w-0 max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      {newsTicker.enabled && (
        <div className="overflow-hidden rounded-lg bg-primary-dark text-white shadow-md mb-16">
          <div className="border-b border-white/10 px-6 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-accent shadow-sm">
                <Megaphone className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <span className="text-[11px] font-bold text-primary">
                  Active Bulletin
                </span>
                <h2 className="font-bold text-xl sm:text-2xl text-white">School-Wide Announcement</h2>
              </div>
            </div>
          </div>

          <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
            <p className="text-base leading-relaxed text-white/95">
              {formatNewsTickerMessage(newsTicker)}
            </p>

            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-white/15 bg-white/10 p-4">
                <span className="text-[10px] font-bold text-primary">
                  Academic Session
                </span>
                <p className="mt-1 text-sm font-bold">{newsTicker.academicYear}</p>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/10 p-4">
                <span className="text-[10px] font-bold text-primary">
                  Division Level
                </span>
                <p className="mt-1 text-sm font-bold">{newsTicker.level}</p>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/10 p-4">
                <span className="text-[10px] font-bold text-primary">
                  Office Hours
                </span>
                <p className="mt-1 text-sm font-bold">{newsTicker.hours}</p>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/10 p-4">
                <span className="text-[10px] font-bold text-primary">
                  Online Portal
                </span>
                <Link
                  href="/admissions/apply"
                  className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-white hover:text-accent transition"
                >
                  <span>Admissions Application</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              {newsTicker.phones.map((phone) => (
                <a
                  key={phone}
                  href={formatPhoneHref(phone)}
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4.5 py-2 text-xs font-bold text-white transition hover:bg-white/20"
                >
                  <Smartphone className="h-3.5 w-3.5 text-accent" />
                  <span>{phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <div>
        <SectionHeader
          align="left"
          eyebrow="Official Circulars"
          title="Latest notices &amp; bulletins for parents"
          description="Important updates, examination timetables, holiday schedules, and policy circulars published by Playpen School Administration."
          className="max-w-3xl"
        />

        <div className="mt-10">
          <NoticesList notices={notices} />
        </div>
      </div>
    </section>
  );
}
