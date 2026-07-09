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
        className="absolute inset-0 bg-[#1c1c1c]/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close notice details"
      />

      <div className="relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-primary/15 bg-white shadow-[0_24px_60px_-20px_rgba(128,0,0,0.35)] sm:rounded-3xl">
        <div className="border-b border-primary/10 bg-gradient-to-br from-[#5a0000] via-primary to-primary-light px-5 py-5 text-white sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <Bell className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  {formatNoticeDate(notice.createdAt)}
                </p>
                <h2
                  id="notice-detail-title"
                  className="mt-1 font-serif text-xl font-semibold leading-tight sm:text-2xl"
                >
                  {notice.title}
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          {paragraphs.length > 0 ? (
            <div className="space-y-4">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-sm leading-relaxed text-muted-foreground">
              No additional details are available for this notice.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 border-t border-border/60 bg-muted/20 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border border-border/70 bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted/40"
          >
            Close
          </button>
          {notice.href && (
            <Link
              href={notice.href}
              className="playpen-bg inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Related page
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
