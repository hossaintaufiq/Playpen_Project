import Link from "next/link";
import type { NewsTicker as NewsTickerData } from "@/lib/cms/types";
import { defaultCMSData } from "@/lib/cms/defaults";
import { Bell } from "lucide-react";

function formatPhoneHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

function TickerContent({ ticker }: { ticker: NewsTickerData }) {
  return (
    <div className="inline-flex items-center gap-2 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-wider text-white">
      <span>
        PLAYPEN OFFERS ADMISSIONS FOR THE ACADEMIC YEAR ({ticker.academicYear}) FOR{" "}
        <span className="text-[#d97706]">{ticker.level}</span>. CONTACT @{" "}
      </span>
      {ticker.phones.map((phone, index) => (
        <span key={phone} className="inline-flex items-center">
          <a
            href={formatPhoneHref(phone)}
            className="text-white underline hover:text-[#d97706] transition-colors"
          >
            {phone}
          </a>
          {index < ticker.phones.length - 1 && <span>,&nbsp;</span>}
        </span>
      ))}
      <span>
        &nbsp;[ DURING {ticker.hours} ]. {ticker.formsNote.replace("WEBSITE", "")}{" "}
        <Link
          href="/admissions/apply"
          className="text-[#d97706] underline hover:text-white transition-colors"
        >
          WEBSITE
        </Link>
        .
      </span>
      <span aria-hidden className="mx-8 text-[#d97706]">
        ✦
      </span>
    </div>
  );
}

export function NewsTicker({ ticker = defaultCMSData.newsTicker }: { ticker?: NewsTickerData }) {
  return (
    <div
      className="bg-[#121212] border-b-2 border-[#121212] text-white"
      role="region"
      aria-label="School announcements"
    >
      <div className="flex items-stretch">
        <div className="flex shrink-0 items-center gap-2 border-r-2 border-white/20 bg-[#6b0c26] px-3.5 py-2 font-mono text-[11px] font-bold text-[#faf7f2] uppercase tracking-widest">
          <Bell className="h-3.5 w-3.5 text-[#d97706] animate-bounce" />
          <span>BULLETIN</span>
        </div>

        <div className="relative min-w-0 flex-1 overflow-hidden py-2 bg-[#121212]">
          <div className="editorial-marquee pointer-events-auto flex w-max items-center">
            <TickerContent ticker={ticker} />
            <TickerContent ticker={ticker} />
          </div>
        </div>
      </div>
    </div>
  );
}
