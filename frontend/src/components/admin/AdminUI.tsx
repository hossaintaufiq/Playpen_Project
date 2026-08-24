import { CheckCircle2, CircleHelp, Lightbulb, Loader2, Plus, Trash2 } from "lucide-react";

export function AdminPageHeader({
  title,
  description,
  whereOnSite,
  steps,
}: {
  title: string;
  description: string;
  whereOnSite?: string;
  steps?: string[];
}) {
  return (
    <header className="mb-6 sm:mb-8">
      <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.03] p-6 shadow-sm sm:rounded-3xl sm:p-8">
        {/* Subtle Brand Watermark Background */}
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/2 blur-2xl" />
        <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-accent/3 blur-2xl" />
        
        <div className="relative">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/70">
            Control Room
          </p>
          <h1 className="mt-2 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="mt-3.5 max-w-4xl text-sm leading-relaxed text-muted-foreground/90 sm:text-base">
            {description}
          </p>
          {whereOnSite && (
            <div className="mt-4.5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm">
              <span className="text-primary/60 font-medium">Public link:</span>
              <span className="tracking-wide">{whereOnSite}</span>
            </div>
          )}
        </div>
      </div>

      {steps && steps.length > 0 && (
        <AdminHelpBox title="How to use this page" steps={steps} className="mt-4" />
      )}
    </header>
  );
}

export function AdminHelpBox({
  title = "Quick guide",
  steps,
  className = "",
}: {
  title?: string;
  steps: string[];
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-accent/25 bg-accent/[0.04] p-5 shadow-sm sm:rounded-3xl sm:p-6 ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-[#8a6f1a]">
          <Lightbulb className="h-5 w-5" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold tracking-wide text-foreground">{title}</p>
          <ol className="mt-3.5 space-y-2.5">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                  {index + 1}
                </span>
                <span className="flex-1 font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export function AdminLoading({ label = "Loading your content..." }: { label?: string }) {
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
      <div className="relative flex h-12 w-12 items-center justify-center">
        <span className="absolute h-full w-full rounded-full border-4 border-primary/10" />
        <Loader2 className="h-6 w-6 animate-spin text-primary relative z-10" />
      </div>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

export function AdminCard({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`group rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.015)] transition-all duration-300 hover:border-primary/10 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:rounded-3xl sm:p-6 ${className}`}
    >
      {title && (
        <h2 className="mb-5 border-b border-slate-100 pb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
          {title}
        </h2>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}

export function AdminField({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="block space-y-2">
      <span className="text-xs font-bold uppercase tracking-wider text-foreground">{label}</span>
      {hint && <p className="text-xs leading-relaxed text-muted-foreground/75 font-medium">{hint}</p>}
      <div className="relative rounded-xl">
        {children}
      </div>
    </div>
  );
}

export const adminInputClass =
  "w-full min-w-0 max-w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary focus:ring-4 focus:ring-primary/[0.06] focus:shadow-sm";

export function AdminPublishToggle({
  checked,
  onChange,
  label = "Show on website",
  hint,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  hint?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-[#fdfcfc] p-4.5 transition-all hover:bg-slate-50">
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        {hint && <p className="mt-1 text-xs leading-relaxed text-muted-foreground/75 font-medium">{hint}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/[0.08] ${
          checked ? "bg-primary shadow-[0_2px_8px_rgba(128,0,0,0.25)]" : "bg-slate-200"
        }`}
      >
        <span
          className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-300 ${
            checked ? "left-[22px]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}

export function AdminAddButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_2px_10px_rgba(128,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] hover:bg-primary-light hover:shadow-[0_4px_16px_rgba(128,0,0,0.25)] active:scale-[0.98]"
    >
      <Plus className="h-4.5 w-4.5" />
      {children}
    </button>
  );
}

export function AdminDeleteButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50/50 px-4.5 py-2.5 text-sm font-semibold text-red-700 transition-all duration-300 hover:scale-[1.01] hover:bg-red-50 hover:text-red-800 active:scale-[0.99]"
    >
      <Trash2 className="h-4 w-4" />
      {children}
    </button>
  );
}

export function AdminEmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-10 text-center sm:rounded-3xl">
      <CircleHelp className="mx-auto h-9 w-9 text-slate-300" />
      <p className="mt-4 font-semibold text-foreground">{title}</p>
      <p className="mt-1.5 text-sm text-muted-foreground/80 leading-relaxed max-w-sm mx-auto">{description}</p>
    </div>
  );
}

export function AdminSaveBar({
  saving,
  message,
  error,
  onSave,
}: {
  saving: boolean;
  message: string | null;
  error: string | null;
  onSave: () => void;
}) {
  return (
    <div className="sticky bottom-6 z-25 mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#120505]/95 px-5 py-4 text-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] backdrop-blur-md sm:rounded-3xl sm:px-6">
      <div className="text-sm max-w-md">
        {message && (
          <p className="flex items-center gap-2 text-emerald-400 font-semibold tracking-wide">
            <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
            {message}
          </p>
        )}
        {error && <p className="text-red-400 font-semibold">{error}</p>}
        {!message && !error && (
          <p className="text-white/80 font-medium">
            Finished making changes? Publish them instantly to visitors.
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={onSave}
        disabled={saving}
        className="rounded-full bg-accent px-7 py-3 text-sm font-bold text-[#120505] shadow-[0_2px_12px_rgba(201,162,39,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(201,162,39,0.5)] active:scale-[0.98] disabled:opacity-60"
      >
        {saving ? "Publishing..." : "Publish changes"}
      </button>
    </div>
  );
}
