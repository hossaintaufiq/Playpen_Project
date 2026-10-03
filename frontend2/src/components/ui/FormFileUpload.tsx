import { Upload } from "lucide-react";

const fileInputClass =
  "mt-3 w-full min-w-0 max-w-full font-mono text-xs text-[#524d46] file:mr-3 file:cursor-pointer file:border-2 file:border-[#121212] file:bg-[#f4efe6] file:px-3.5 file:py-1.5 file:font-mono file:text-xs file:font-bold file:text-[#121212] hover:file:bg-[#6b0c26] hover:file:text-white file:shadow-[2px_2px_0px_#121212]";

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
    <div className="min-w-0 border-2 border-dashed border-[#121212] bg-[#ffffff] p-4 shadow-[3px_3px_0px_#121212]">
      <div className="flex min-w-0 items-start gap-3 font-mono text-xs text-[#524d46]">
        <Upload className="mt-0.5 h-4 w-4 shrink-0 text-[#6b0c26]" />
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
        <p className="mt-2 truncate font-mono text-xs font-bold text-[#6b0c26]" title={selectedFileName}>
          SELECTED FILE: {selectedFileName}
        </p>
      )}
    </div>
  );
}

export { fileInputClass };
