import Link from "next/link";
import { ArrowRight, Megaphone, Smartphone } from "lucide-react";
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
        <div className="overflow-hidden brutal-border bg-[#121212] text-white brutal-shadow mb-16">
          <div className="border-b-2 border-white/20 bg-[#6b0c26] px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-white text-[#6b0c26] font-mono font-bold">
                <Megaphone className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#d97706]">
                  Active Priority Bulletin
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-black text-white">School-Wide Announcement</h2>
              </div>
            </div>
          </div>

          <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-8 bg-[#121212]">
            <p className="font-serif text-lg sm:text-xl leading-relaxed text-white/95">
              {formatNewsTickerMessage(newsTicker)}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 border-t-2 border-white/20 pt-6">
              <div className="brutal-border bg-white/10 p-4">
                <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#d97706]">
                  Academic Session
                </span>
                <p className="mt-1 font-mono text-sm font-bold text-white">{newsTicker.academicYear}</p>
              </div>
              <div className="brutal-border bg-white/10 p-4">
                <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#d97706]">
                  Division Level
                </span>
                <p className="mt-1 font-mono text-sm font-bold text-white">{newsTicker.level}</p>
              </div>
              <div className="brutal-border bg-white/10 p-4">
                <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#d97706]">
                  Office Hours
                </span>
                <p className="mt-1 font-mono text-sm font-bold text-white">{newsTicker.hours}</p>
              </div>
              <div className="brutal-border bg-white/10 p-4">
                <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#d97706]">
                  Online Portal
                </span>
                <Link
                  href="/admissions/apply"
                  className="mt-1 inline-flex items-center gap-1 font-mono text-xs font-bold text-white hover:text-[#d97706] transition-colors"
                >
                  <span>Apply Online</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap border-t border-white/20 pt-4">
              {newsTicker.phones.map((phone) => (
                <a
                  key={phone}
                  href={formatPhoneHref(phone)}
                  className="brutal-btn inline-flex items-center gap-2 bg-[#faf7f2] text-[#121212] px-4.5 py-2 font-mono text-xs font-bold uppercase"
                >
                  <Smartphone className="h-3.5 w-3.5 text-[#6b0c26]" />
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
          eyebrow="02 // Official Circulars & Bulletins"
          title="Latest Notices &amp; Bulletins for Parents"
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

