import { Upload } from "lucide-react";

const fileInputClass =
  "mt-3 w-full min-w-0 max-w-full text-sm text-muted-foreground file:mr-0 file:mt-0 file:w-full file:cursor-pointer file:rounded-full file:border-0 file:bg-primary/10 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-primary sm:file:mr-3 sm:file:w-auto";

type FormFileUploadProps = {
  hint: string;
  accept: string;
  onChange: (file: File | null) => void;
  required?: boolean;
  selectedFileName?: string | null;
};

export function FormFileUpload({
  hint,
  accept,
  onChange,
  required,
  selectedFileName,
}: FormFileUploadProps) {
  return (
    <div className="min-w-0 rounded-xl border border-dashed border-border/80 bg-white p-4">
      <div className="flex min-w-0 items-start gap-3 text-sm text-muted-foreground">
        <Upload className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <span className="min-w-0 break-words leading-relaxed">{hint}</span>
      </div>
      <input
        type="file"
        accept={accept}
        required={required}
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
        className={fileInputClass}
      />
      {selectedFileName && (
        <p className="mt-2 truncate text-xs text-foreground/70" title={selectedFileName}>
          Selected: {selectedFileName}
        </p>
      )}
    </div>
  );
}

export { fileInputClass };
