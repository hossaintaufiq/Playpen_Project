export const formInputClass =
  "w-full min-w-0 max-w-full brutal-border bg-white px-3.5 py-3 font-mono text-sm text-[#121212] outline-none transition focus:bg-[#faf7f2] focus:border-[#6b0c26] focus:ring-2 focus:ring-[#6b0c26]/20";

export const formLabelClass = "font-mono text-[11px] font-black uppercase tracking-wider text-[#121212]";

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
    <section className={`overflow-hidden brutal-border bg-white brutal-shadow ${className}`}>
      <div className="border-b-2 border-[#121212] bg-[#121212] px-5 py-3.5 text-white">
        <h3 className="font-serif text-lg font-bold text-white tracking-wide">{title}</h3>
      </div>
      <div className="p-5 sm:p-7 bg-white">{children}</div>
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
    <label className={`block space-y-2 ${className}`}>
      <span className={formLabelClass}>
        {label}
        {required ? <span className="text-[#6b0c26] font-black"> *</span> : ""}
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
  return <div className={`grid gap-5 sm:grid-cols-2 ${className}`}>{children}</div>;
}

