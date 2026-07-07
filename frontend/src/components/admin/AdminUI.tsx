export function AdminPageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="mb-6 sm:mb-8">
      <h1 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">{title}</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
    </header>
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
      {title && <h2 className="mb-4 text-sm font-semibold text-foreground">{title}</h2>}
      {children}
    </section>
  );
}

export function AdminField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

export const adminInputClass =
  "w-full rounded-xl border border-border/70 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10";

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
    <div className="sticky bottom-4 z-20 mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 bg-white/95 p-4 shadow-lg backdrop-blur-sm">
      <div className="text-sm">
        {message && <p className="text-green-700">{message}</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!message && !error && <p className="text-muted-foreground">Remember to save your changes.</p>}
      </div>
      <button
        type="button"
        onClick={onSave}
        disabled={saving}
        className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60"
      >
        {saving ? "Saving..." : "Save changes"}
      </button>
    </div>
  );
}
