export const formInputClass =
  "w-full min-w-0 max-w-full rounded-lg border border-border/80 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/10";

export const formLabelClass = "text-xs font-semibold uppercase tracking-wide text-foreground/80";

export function FormSection({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`overflow-hidden rounded-2xl border border-border/70 bg-white ${className}`}>
      <div className="border-b border-primary/15 bg-gradient-to-r from-primary/[0.08] via-primary/[0.04] to-accent/[0.06] px-4 py-3 sm:px-5">
        <h3 className="font-serif text-base font-semibold text-primary sm:text-lg">{title}</h3>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </section>
  );
}

export function FormField({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block space-y-1.5 ${className}`}>
      <span className={formLabelClass}>
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}

export function FormGrid({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`grid gap-4 sm:grid-cols-2 ${className}`}>{children}</div>;
}
