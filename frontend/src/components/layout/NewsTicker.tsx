import Link from "next/link";
import type { NewsTicker as NewsTickerData } from "@/lib/cms/types";
import { defaultCMSData } from "@/lib/cms/defaults";

function formatPhoneHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

function TickerContent({ ticker }: { ticker: NewsTickerData }) {
  return (
    <p className="inline-flex items-center gap-0 whitespace-nowrap text-[11px] font-medium uppercase tracking-wide text-white/95 sm:text-xs sm:tracking-wider">
      <span>
        PLAYPEN OFFERS ADMISSION FOR THE ACADEMIC YEAR ({ticker.academicYear}) FOR{" "}
        {ticker.level}. KINDLY CONTACT @{" "}
      </span>
      {ticker.phones.map((phone, index) => (
        <span key={phone} className="inline-flex items-center">
          <a
            href={formatPhoneHref(phone)}
            className="underline decoration-white/40 underline-offset-2 transition hover:text-white hover:decoration-white"
          >
            {phone}
          </a>
          {index < ticker.phones.length - 1 && <span>,&nbsp;</span>}
        </span>
      ))}
      <span>
        . [ During {ticker.hours} ]. {ticker.formsNote.replace("WEBSITE", "")}{" "}
        <Link
          href="/admissions"
          className="underline decoration-white/40 underline-offset-2 transition hover:text-white hover:decoration-white"
        >
          WEBSITE
        </Link>
        .
      </span>
      <span aria-hidden className="mx-10 text-white/30">
        •
      </span>
    </p>
  );
}

export function NewsTicker({ ticker = defaultCMSData.newsTicker }: { ticker?: NewsTickerData }) {
  return (
    <div
      className="playpen-bg-dark border-t border-white/10"
      role="region"
      aria-label="School announcements"
    >
      <div className="flex items-stretch">
        <div className="flex shrink-0 items-center gap-2 border-r border-white/10 bg-primary-dark px-3 py-2 sm:px-4">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent sm:text-[11px]">
            News
          </span>
        </div>

        <div className="relative min-w-0 flex-1 overflow-hidden py-2 sm:py-2.5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#5a0000] to-transparent sm:w-12" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#5a0000] to-transparent sm:w-12" />

          <div className="news-ticker pointer-events-auto flex w-max items-center">
            <TickerContent ticker={ticker} />
            <TickerContent ticker={ticker} />
          </div>
        </div>
      </div>
    </div>
  );
}
