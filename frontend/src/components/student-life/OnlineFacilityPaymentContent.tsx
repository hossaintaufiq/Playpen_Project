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
        eyebrow="Online Facility & Payment"
        title="Your digital gateway to school life and fee payments"
        description={onlineFacilityIntro}
      />

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {onlineFacilityHighlights.map((item, index) => {
          const Icon = highlightIcons[index];
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-border/50 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.05] p-6 sm:mt-12 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
            <Monitor className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
              Parent Portal Access
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {parentPortalNote}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {parentPortalFeatures.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 rounded-xl border border-border/50 bg-white px-4 py-3 text-sm text-foreground/90 shadow-sm"
            >
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:rounded-3xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
            <CreditCard className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
            Online Tuition Fees
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {onlinePaymentIntro}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/[0.04] px-3 py-1.5 text-xs font-semibold text-foreground sm:text-sm"
                title={method.detail}
              >
                <Smartphone className="h-3.5 w-3.5 text-primary" />
                {method.name}
              </span>
            ))}
            <span className="inline-flex rounded-full border border-dashed border-primary/20 px-3 py-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
              and many more
            </span>
          </div>
        </article>

        <article className="rounded-2xl border border-amber-300 bg-amber-50 p-6 sm:rounded-3xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-white">
            <CreditCard className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
            Mandatory Online Payment
          </h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-amber-950/90 sm:text-base">
            {mandatoryOnlinePayment}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-amber-950/80">
            All families are required to use the online payment system for school fees from the
            2021–2022 academic session onwards.
          </p>
        </article>
      </div>

      <div className="mt-10 rounded-3xl border border-border/60 bg-white p-6 shadow-sm sm:mt-12 sm:rounded-3xl sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary">
            <Bell className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
              Important Notifications
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {importantNotificationsNote}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <CalendarDays className="h-4 w-4" />
              Check the portal for calendar updates and upcoming events
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
