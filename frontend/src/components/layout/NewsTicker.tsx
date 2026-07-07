import Link from "next/link";

const phones = [
  { display: "+8801755693623", href: "tel:+8801755693623" },
  { display: "+8801755515885", href: "tel:+8801755515885" },
  { display: "+8809678434241", href: "tel:+8809678434241" },
];

function TickerContent() {
  return (
    <p className="inline-flex items-center gap-0 whitespace-nowrap text-[11px] font-medium uppercase tracking-wide text-white/95 sm:text-xs sm:tracking-wider">
      <span>PLAYPEN OFFERS ADMISSION FOR THE ACADEMIC YEAR (JULY 2025 – JUNE 2026) FOR A&apos; LEVEL. KINDLY CONTACT @ </span>
      {phones.map((phone, index) => (
        <span key={phone.href} className="inline-flex items-center">
          <a
            href={phone.href}
            className="underline decoration-white/40 underline-offset-2 transition hover:text-white hover:decoration-white"
          >
            {phone.display}
          </a>
          {index < phones.length - 1 && <span>,&nbsp;</span>}
        </span>
      ))}
      <span>
        . [ During 9.00 AM–1.00 PM ]. FORMS ARE AVAILABLE IN THE ADMIN OFFICE AND{" "}
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

export function NewsTicker() {
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
            <TickerContent />
            <TickerContent />
          </div>
        </div>
      </div>
    </div>
  );
}
