import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { schoolContact } from "@/lib/contact";

export function TopBar() {
  return (
    <div className="bg-surface border-b border-border/70 text-foreground/80 text-xs hidden md:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-9 items-center justify-between gap-4 font-medium">
          {/* Left: Location & Hours */}
          <div className="flex items-center gap-6 text-muted-foreground text-[12.5px]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>Bashundhara R/A, Dhaka</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent" />
              <span>Office: 8:30 AM – 3:30 PM</span>
            </span>
          </div>

          {/* Right: Contact & Quick Links */}
          <div className="flex items-center gap-5 text-[12.5px]">
            <a
              href={schoolContact.emailHref}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-primary" />
              <span>{schoolContact.email}</span>
            </a>
            <span className="text-border">|</span>
            <a
              href={schoolContact.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary-light transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-accent" />
              <span>{schoolContact.phone}</span>
            </a>
            <span className="text-border">|</span>
            <a
              href="https://portal.playpen.edu.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-primary/8 px-2.5 py-0.5 font-semibold text-primary hover:bg-primary hover:text-white transition-all text-[11.5px]"
            >
              Student Portal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
