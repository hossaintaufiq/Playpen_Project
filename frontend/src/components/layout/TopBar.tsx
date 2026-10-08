import Link from "next/link";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { schoolContact } from "@/lib/contact";

export function TopBar() {
  return (
    <div className="bg-surface border-b border-border/70 text-foreground/80 text-xs hidden md:block">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-6">
        <div className="flex h-10 items-center justify-between gap-4 font-medium">
          {/* Left: Location & Hours */}
          <div className="flex items-center gap-5 text-muted-foreground text-[12px] lg:text-[12.5px]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>Bashundhara R/A, Dhaka</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent" />
              <span>Office: 8:30 AM – 3:30 PM</span>
            </span>
          </div>

          {/* Right: Contact & Quick Links */}
          <div className="flex items-center gap-3 lg:gap-4 text-[12px] lg:text-[12.5px]">
            <a
              href={schoolContact.emailHref}
              className="hidden xl:inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-primary" />
              <span>{schoolContact.email}</span>
            </a>
            <span className="hidden xl:inline text-border">|</span>
            <a
              href={schoolContact.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-light transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-accent" />
              <span>{schoolContact.phone}</span>
            </a>
            <span className="text-border">|</span>
            <div className="flex items-center gap-2">
              <a
                href="https://portal.playpen.edu.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1.5 font-semibold text-primary hover:bg-primary hover:text-white transition-all text-xs"
              >
                Student Portal
              </a>
              <Link
                href="/portal/admin"
                className="inline-flex items-center rounded-full border border-border/80 bg-white px-3.5 py-1.5 font-semibold text-foreground/80 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all text-xs shadow-2xs"
              >
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
