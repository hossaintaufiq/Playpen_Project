import { Mail, Phone, MapPin, Sparkles, ExternalLink, Clock, ShieldCheck } from "lucide-react";
import { schoolContact } from "@/lib/contact";

export function TopBar() {
  return (
    <div className="bg-[#121212] text-[#faf7f2] border-b-2 border-[#121212] text-xs hidden md:block relative z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between gap-4 font-mono text-[11.5px] tracking-wider uppercase">
          {/* Left: Heritage & Accreditation Badges */}
          <div className="flex items-center gap-3 lg:gap-4 text-[#e8dfd1]">
            <span className="inline-flex items-center gap-1.5 bg-[#6b0c26] text-white px-2 py-0.5 font-bold tracking-widest border border-white/20 shadow-[1px_1px_0px_#000000]">
              <Sparkles className="h-3 w-3 text-[#d97706]" />
              EST. 1977 // 49 YEARS OF EXCELLENCE
            </span>
            <span className="hidden xl:inline-flex items-center gap-1.5 text-white/80">
              <ShieldCheck className="h-3.5 w-3.5 text-[#d97706]" />
              CAMBRIDGE INTERNATIONAL (BD042)
            </span>
          </div>

          {/* Center / Right: Address & Direct Contact */}
          <div className="flex items-center gap-4 lg:gap-5 text-white/90">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-white/70">
              <MapPin className="h-3 w-3 text-[#d97706]" />
              <span>BASHUNDHARA R/A, DHAKA</span>
            </span>

            <span className="hidden lg:inline text-white/30">/</span>

            <a
              href={schoolContact.emailHref}
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-[#d97706] transition-colors"
            >
              <Mail className="h-3 w-3 text-[#d97706]" />
              <span>{schoolContact.email}</span>
            </a>

            <span className="text-white/30">/</span>

            <a
              href={schoolContact.phoneHref}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#d97706] transition-colors"
            >
              <Phone className="h-3 w-3 text-[#d97706]" />
              <span>{schoolContact.phone}</span>
            </a>

            <a
              href="https://portal.playpen.edu.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#d97706] text-[#121212] px-2.5 py-0.5 font-bold tracking-widest hover:bg-white transition-colors border border-black shadow-[2px_2px_0px_#000000]"
            >
              <span>PORTAL LOGIN</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
