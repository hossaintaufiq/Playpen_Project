import { CheckCircle2, CircleHelp, Loader2, Plus, Trash2, Globe } from "lucide-react";

export function AdminPageHeader({
  title,
  description,
  whereOnSite,
  saving,
  message,
  error,
  onSave,
}: {
  title: string;
  description: string;
  whereOnSite?: string;
  saving?: boolean;
  message?: string | null;
  error?: string | null;
  onSave?: () => void;
}) {
  return (
    <header className="mb-5 sm:mb-6">
      <div className="relative overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-sm sm:rounded-2xl sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="relative flex-1 min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary">
              CMS Editor
            </p>
            <h1 className="mt-1.5 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              {title}
            </h1>
            <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-slate-500">
              {description}
            </p>
            {whereOnSite && (
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[9px] font-bold text-slate-600">
                <Globe className="h-3 w-3 text-slate-400" />
                <span>Live on:</span>
                <span className="font-sans font-semibold tracking-wide text-slate-700">{whereOnSite}</span>
              </div>
            )}
          </div>
          
          {/* Integrated Publish Actions */}
          {onSave && (
            <div className="flex flex-col items-stretch sm:items-end shrink-0 gap-2 min-w-[8rem]">
              <button
                type="button"
                onClick={onSave}
                disabled={saving}
                className="w-full sm:w-auto rounded-lg bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-primary-light active:scale-[0.98] disabled:opacity-60"
              >
                {saving ? "Publishing..." : "Publish changes"}
              </button>
              {message && (
                <p className="text-[10px] font-bold text-emerald-600 text-center sm:text-right flex items-center justify-center sm:justify-end gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {message}
                </p>
              )}
              {error && (
                <p className="text-[10px] font-bold text-red-600 text-center sm:text-right">
                  {error}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export function AdminLoading({ label = "Loading your content..." }: { label?: string }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute h-full w-full rounded-full border-4 border-primary/10" />
        <Loader2 className="h-5 w-5 animate-spin text-primary relative z-10" />
      </div>
      <p className="text-xs font-semibold text-muted-foreground">{label}</p>
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
      className={`group rounded-xl border border-slate-100 bg-white p-4.5 shadow-[0_1px_4px_rgba(0,0,0,0.005)] transition-all duration-300 hover:border-primary/15 hover:shadow-[0_4px_16px_rgba(0,0,0,0.015)] sm:rounded-2xl sm:p-5.5 ${className}`}
    >
      {title && (
        <h2 className="mb-4 border-b border-slate-50 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-primary transition-colors">
          {title}
        </h2>
      )}
      <div className="space-y-3.5">
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
    <div className="block space-y-1.5">
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{label}</span>
      {hint && <p className="text-[10px] leading-relaxed text-slate-400 font-medium">{hint}</p>}
      <div className="relative rounded-lg">
        {children}
      </div>
    </div>
  );
}

export const adminInputClass =
  "w-full min-w-0 max-w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 outline-none transition-all placeholder:text-muted-foreground/40 focus:border-primary focus:ring-4 focus:ring-primary/[0.04] focus:shadow-sm";

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
    <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-50 bg-[#fdfcfc] p-3.5 transition-all hover:bg-slate-50">
      <div>
        <p className="text-xs font-bold text-slate-700">{label}</p>
        {hint && <p className="mt-0.5 text-[10px] leading-relaxed text-slate-450 font-medium">{hint}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-all duration-300 focus:outline-none ${
          checked ? "bg-primary" : "bg-slate-200"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all duration-300 ${
            checked ? "left-[21px]" : "left-0.5"
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
      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:scale-102 hover:bg-primary-light active:scale-[0.98]"
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
      className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50/50 px-3.5 py-2 text-xs font-bold text-red-700 transition-all duration-300 hover:bg-red-50 hover:text-red-800"
    >
      <Trash2 className="h-3.5 w-3.5" />
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
    <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/30 p-8 text-center sm:rounded-2xl">
      <CircleHelp className="mx-auto h-8 w-8 text-slate-300" />
      <p className="mt-3 text-xs font-bold text-slate-700">{title}</p>
      <p className="mt-1 text-xs text-slate-450 leading-relaxed max-w-xs mx-auto">{description}</p>
    </div>
  );
}
