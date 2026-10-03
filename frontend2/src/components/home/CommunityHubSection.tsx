import Link from "next/link";
import { ArrowRight, Bell, CalendarDays, Sparkles, Megaphone, FileText } from "lucide-react";
import type { Notice, SchoolEvent } from "@/lib/cms/types";
import { defaultCMSData } from "@/lib/cms/defaults";

type CommunityHubSectionProps = {
  notices?: Notice[];
  events?: SchoolEvent[];
};

export function CommunityHubSection({
  notices = defaultCMSData.notices,
  events = defaultCMSData.schoolEvents,
}: CommunityHubSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2] py-20 sm:py-28 border-b-3 border-[#121212]">
      {/* Swiss Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#121212] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#6b0c26] text-white px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#121212] mb-3">
              <Megaphone className="h-3.5 w-3.5 text-[#d97706]" />
              <span>06 // DISPATCHES &amp; CIRCULARS</span>
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#121212] leading-[1.05] tracking-tight uppercase">
              LATEST FROM <br />
              <span className="text-[#6b0c26] italic font-serif">PLAYPEN.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#524d46] uppercase max-w-xs text-right hidden md:block">
            // OFFICIAL NOTICES &bull; CIRCULARS <br />
            ACADEMIC CALENDAR &bull; DHAKA
          </div>
        </div>

        {/* 2-Column Newspaper Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Notices & Bulletins (7 cols) */}
          <div className="lg:col-span-7 border-2 border-[#121212] bg-[#ffffff] p-6 sm:p-8 shadow-[6px_6px_0px_#121212] flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-[#121212] pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 border border-[#121212] bg-[#6b0c26] text-white flex items-center justify-center shadow-[2px_2px_0px_#121212]">
                    <Bell className="h-4 w-4 text-[#d97706]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#121212] uppercase">
                      Official Notices &amp; Circulars
                    </h3>
                    <p className="font-mono text-[11px] text-[#524d46]">VERIFIED INSTITUTIONAL BULLETINS</p>
                  </div>
                </div>

                <Link
                  href="/notices"
                  className="font-mono text-xs font-bold text-[#6b0c26] hover:underline uppercase flex items-center gap-1"
                >
                  <span>All ({notices.length})</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Notice List */}
              <div className="space-y-4">
                {notices.map((notice, idx) => (
                  <Link
                    key={notice.id}
                    href={notice.href}
                    className="group block border-2 border-[#121212] bg-[#faf7f2] p-4.5 hover:bg-[#ffffff] hover:shadow-[3px_3px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 font-mono text-[10px] font-bold">
                          <span className="bg-[#6b0c26] text-white px-1.5 py-0.2">
                            0{idx + 1}
                          </span>
                          <span className="text-[#d97706] uppercase tracking-wider">
                            {notice.createdAt ?? "CIRCULAR"}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-base sm:text-lg text-[#121212] group-hover:text-[#6b0c26] transition-colors leading-snug">
                          {notice.title}
                        </h4>
                        <p className="font-sans text-xs text-[#524d46] mt-1.5 line-clamp-2 leading-relaxed">
                          {notice.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#121212] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-[#6b0c26] transition-all mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-[#121212] flex items-center justify-between font-mono text-xs font-bold">
              <Link
                href="/notices"
                className="text-[#6b0c26] hover:underline uppercase flex items-center gap-1.5"
              >
                <span>Browse Notice Archive &amp; Policies</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Events & Calendar Desk (5 cols) */}
          <div className="lg:col-span-5 border-2 border-[#121212] bg-[#ffffff] p-6 sm:p-8 shadow-[6px_6px_0px_#121212] flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-[#121212] pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 border border-[#121212] bg-[#d97706] text-[#121212] flex items-center justify-center shadow-[2px_2px_0px_#121212]">
                    <CalendarDays className="h-4 w-4 text-[#121212]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#121212] uppercase">
                      Upcoming Events
                    </h3>
                    <p className="font-mono text-[11px] text-[#524d46]">ACADEMIC CALENDAR &amp; GALA</p>
                  </div>
                </div>
              </div>

              {/* Event Cards */}
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center gap-4 border-2 border-[#121212] bg-[#faf7f2] p-3.5"
                  >
                    {/* Date Block */}
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center border-2 border-[#121212] bg-[#6b0c26] text-white shadow-[2px_2px_0px_#121212]">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#d97706] leading-none">
                        {event.month}
                      </span>
                      <span className="font-mono text-xl font-black leading-tight mt-0.5">
                        {event.day}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-serif font-bold text-sm sm:text-base text-[#121212] leading-tight">
                        {event.title}
                      </h4>
                      <p className="font-mono text-[11px] text-[#524d46] mt-1">
                        MAIN CAMPUS AUDITORIUM
                      </p>
                    </div>
                  </div>
                ))}

                {/* Open House Stamp */}
                <div className="border-2 border-[#121212] bg-[#f4efe6] p-4 shadow-[3px_3px_0px_#121212]">
                  <div className="flex items-center gap-2 text-[#6b0c26] font-mono text-xs font-bold uppercase mb-1">
                    <Sparkles className="h-3.5 w-3.5 text-[#d97706]" />
                    <span>ADMISSIONS OPEN HOUSE</span>
                  </div>
                  <p className="font-sans text-xs text-[#121212] font-semibold leading-normal">
                    Campus tours &amp; faculty interaction sessions available every working Saturday.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-[#121212]">
              <Link
                href="/about"
                className="font-mono text-xs font-bold text-[#6b0c26] hover:underline uppercase flex items-center gap-1.5"
              >
                <span>View Full Academic Schedule</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
