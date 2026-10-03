"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Bell, X } from "lucide-react";
import { formatNoticeDate } from "@/lib/notices";
import type { Notice } from "@/lib/cms/types";

type NoticeDetailModalProps = {
  notice: Notice | null;
  onClose: () => void;
};

export function NoticeDetailModal({ notice, onClose }: NoticeDetailModalProps) {
  useEffect(() => {
    if (!notice) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [notice, onClose]);

  if (!notice) return null;

  const detailText = notice.content?.trim() || notice.description?.trim() || "";
  const paragraphs = detailText.split("\n").filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notice-detail-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close notice details"
      />

      <div className="relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden brutal-border bg-white brutal-shadow">
        <div className="border-b-2 border-[#121212] bg-[#121212] px-6 py-6 text-white">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6b0c26] text-white">
                <Bell className="h-5 w-5 text-[#d97706]" strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <span className="font-mono text-[9px] font-black uppercase tracking-widest text-[#d97706]">
                  OFFICIAL DISPATCH // {formatNoticeDate(notice.createdAt)}
                </span>
                <h2
                  id="notice-detail-title"
                  className="mt-1 font-serif text-2xl sm:text-3xl font-black leading-tight text-white"
                >
                  {notice.title}
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-white text-[#121212] border-2 border-white hover:bg-[#faf7f2]"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-4 bg-white">
          {paragraphs.length > 0 ? (
            paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-serif text-base sm:text-lg leading-relaxed text-[#121212]">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="font-mono text-sm leading-relaxed text-[#121212]/70">
              No additional details are available for this circular.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 border-t-2 border-[#121212] bg-[#faf7f2] px-6 py-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="brutal-btn bg-white text-[#121212] px-6 py-2.5 font-mono text-xs font-bold uppercase hover:bg-[#faf7f2]"
          >
            Dismiss
          </button>
          {notice.href && (
            <Link
              href={notice.href}
              className="brutal-btn inline-flex items-center justify-center gap-2 bg-[#6b0c26] text-white px-6 py-2.5 font-mono text-xs font-bold uppercase hover:bg-[#121212]"
            >
              <span>Access Related Link</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

