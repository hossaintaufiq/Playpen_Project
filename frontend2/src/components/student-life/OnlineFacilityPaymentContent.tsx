import {
  Bell,
  CalendarDays,
  CreditCard,
  GraduationCap,
  Monitor,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  importantNotificationsNote,
  mandatoryOnlinePayment,
  onlineFacilityHighlights,
  onlineFacilityIntro,
  onlinePaymentIntro,
  parentPortalFeatures,
  parentPortalNote,
  paymentMethods,
} from "@/lib/online-facility-payment";

const highlightIcons = [Monitor, GraduationCap, CreditCard, Bell] as const;

export function OnlineFacilityPaymentContent() {
  return (
    <>
      <SectionHeader
        eyebrow="01 // Digital Gateway & Billing"
        title="Your digital gateway to school life and fee payments"
        description={onlineFacilityIntro}
      />

      <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {onlineFacilityHighlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <article
              key={item.title}
              className="brutal-border bg-white p-5 sm:p-6 brutal-shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#121212] text-white">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#6b0c26]">
                Portal 0{index + 1}
              </p>
              <h3 className="mt-1 font-serif text-lg font-bold text-[#121212]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#121212]/80">{item.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-12 brutal-border bg-[#faf7f2] p-6 sm:mt-16 sm:p-8 brutal-shadow border-l-8 border-l-[#6b0c26]">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#6b0c26] text-white">
            <Monitor className="h-6 w-6" strokeWidth={2} />
          </div>
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
              Parent Portal Infrastructure
            </p>
            <p className="mt-3 font-serif text-base sm:text-lg leading-relaxed text-[#121212]">
              {parentPortalNote}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 border-t border-[#121212]/15 pt-5">
          {parentPortalFeatures.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2.5 brutal-border bg-white px-4 py-3 text-xs sm:text-sm font-mono font-bold text-[#121212]"
            >
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#6b0c26]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2 border-t-2 border-[#121212] pt-12">
        <article className="brutal-border bg-white p-6 sm:p-8 brutal-shadow">
          <div className="flex h-10 w-10 items-center justify-center bg-[#121212] text-white">
            <CreditCard className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold text-[#121212]">
            Online Tuition Fees
          </h3>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#121212]/80">
            {onlinePaymentIntro}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5 border-t border-[#121212]/15 pt-4">
            {paymentMethods.map((method) => (
              <span
                key={method.name}
                className="brutal-btn inline-flex items-center gap-1.5 bg-[#faf7f2] text-[#121212] px-3.5 py-1.5 font-mono text-xs font-bold"
                title={method.detail}
              >
                <Smartphone className="h-3.5 w-3.5 text-[#6b0c26]" />
                <span>{method.name}</span>
              </span>
            ))}
          </div>
        </article>

        <article className="brutal-border bg-[#faf7f2] p-6 sm:p-8 brutal-shadow border-l-8 border-l-[#d97706]">
          <div className="flex h-10 w-10 items-center justify-center bg-[#d97706] text-white">
            <CreditCard className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold text-[#121212]">
            Mandatory Online Payment Policy
          </h3>
          <p className="mt-3 font-serif text-base sm:text-lg font-bold leading-relaxed text-[#121212]">
            {mandatoryOnlinePayment}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#121212]/80">
            All families are required to use the online payment system for school fees from the
            2021–2022 academic session onwards.
          </p>
        </article>
      </div>

      <div className="mt-12 brutal-border bg-white p-6 sm:mt-16 sm:p-8 brutal-shadow">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6b0c26] text-white">
            <Bell className="h-5 w-5" strokeWidth={2} />
          </div>
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-widest text-[#6b0c26]">
              Important Notifications
            </p>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#121212]/85">
              {importantNotificationsNote}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#6b0c26]">
              <CalendarDays className="h-4 w-4" />
              <span>Check the portal for real-time calendar updates and upcoming school events</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

