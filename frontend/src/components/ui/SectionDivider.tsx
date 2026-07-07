type SectionDividerProps = {
  variant?: "line" | "fade" | "soft";
};

export function SectionDivider({ variant = "line" }: SectionDividerProps) {
  if (variant === "fade") {
    return (
      <div
        aria-hidden
        className="h-16 bg-gradient-to-b from-background to-muted/40 sm:h-20 md:h-24"
      />
    );
  }

  if (variant === "soft") {
    return (
      <div aria-hidden className="bg-background py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden className="bg-inherit py-2 sm:py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border/70 to-transparent" />
      </div>
    </div>
  );
}
