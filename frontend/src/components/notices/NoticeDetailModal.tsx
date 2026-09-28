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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close notice details"
      />

      <div className="relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-border bg-white shadow-2xl sm:rounded-3xl">
        <div className="border-b border-white/10 bg-gradient-to-br from-[#520215] to-[#7a0826] px-6 py-6 text-white">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-accent shadow-sm">
                <Bell className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                  {formatNoticeDate(notice.createdAt)}
                </span>
                <h2
                  id="notice-detail-title"
                  className="mt-1 font-extrabold text-xl leading-tight sm:text-2xl text-white"
                >
                  {notice.title}
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto px-6 py-6 space-y-4">
          {paragraphs.length > 0 ? (
            paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm sm:text-base leading-relaxed text-foreground/90 font-normal">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-sm leading-relaxed text-muted-foreground">
              No additional details are available for this notice.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 border-t border-border/70 bg-surface px-6 py-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-2.5 text-xs font-bold text-foreground transition hover:bg-muted"
          >
            Close
          </button>
          {notice.href && (
            <Link
              href={notice.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-primary-dark"
            >
              <span>Related Page</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
