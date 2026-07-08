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
      <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/[0.06] via-white to-accent/[0.04] p-5 sm:rounded-3xl sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/70">
          Website manager
        </p>
        <h1 className="mt-2 font-serif text-2xl font-semibold text-foreground sm:text-3xl">{title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
        {whereOnSite && (
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3 py-1.5 text-xs font-medium text-primary">
            <span className="text-primary/60">Visitors see this on:</span>
            {whereOnSite}
          </p>
        )}
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
      className={`rounded-2xl border border-accent/30 bg-accent/[0.08] p-4 sm:rounded-3xl sm:p-5 ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-[#8a6f1a]">
          <Lightbulb className="h-4 w-4" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <ol className="mt-3 space-y-2">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                  {index + 1}
                </span>
                <span>{step}</span>
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
    <div className="flex min-h-[240px] flex-col items-center justify-center gap-3 rounded-2xl border border-border/60 bg-white p-8">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">{label}</p>
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
      className={`rounded-2xl border border-border/60 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-6 ${className}`}
    >
      {title && (
        <h2 className="mb-4 border-b border-border/50 pb-3 text-sm font-semibold text-foreground">
          {title}
        </h2>
      )}
      {children}
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
    <label className="block space-y-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {hint && <p className="text-xs leading-relaxed text-muted-foreground">{hint}</p>}
      {children}
    </label>
  );
}

export const adminInputClass =
  "w-full min-w-0 max-w-full rounded-xl border border-border/70 bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/40 focus:ring-2 focus:ring-primary/10";

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
    <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-muted/20 p-4">
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        {hint && <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{hint}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition ${
          checked ? "bg-primary" : "bg-border"
        }`}
      >
        <span
          className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition ${
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
      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
    >
      <Plus className="h-4 w-4" />
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
      className="mt-4 inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
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
    <div className="rounded-2xl border border-dashed border-border/80 bg-muted/20 p-8 text-center sm:rounded-3xl">
      <CircleHelp className="mx-auto h-8 w-8 text-primary/50" />
      <p className="mt-3 font-medium text-foreground">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
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
    <div className="sticky bottom-4 z-20 mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/15 bg-[#5a0000] p-4 text-white shadow-lg sm:rounded-3xl sm:p-5">
      <div className="text-sm">
        {message && (
          <p className="flex items-center gap-2 text-green-200">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            {message}
          </p>
        )}
        {error && <p className="text-red-200">{error}</p>}
        {!message && !error && (
          <p className="text-white/85">
            Finished editing? Press the button to update the live website.
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={onSave}
        disabled={saving}
        className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary transition hover:bg-white/90 disabled:opacity-60"
      >
        {saving ? "Saving..." : "Save changes"}
      </button>
    </div>
  );
}
