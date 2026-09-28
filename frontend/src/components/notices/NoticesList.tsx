"use client";

import { useState } from "react";
import { ArrowRight, Bell } from "lucide-react";
import { NoticeDetailModal } from "@/components/notices/NoticeDetailModal";
import { formatNoticeDate } from "@/lib/notices";
import type { Notice } from "@/lib/cms/types";

type NoticesListProps = {
  notices: Notice[];
};

export function NoticesList({ notices }: NoticesListProps) {
  const [activeNotice, setActiveNotice] = useState<Notice | null>(null);

  const sortedNotices = [...notices].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (sortedNotices.length === 0) {
    return (
      <div className="mt-8 rounded-3xl border border-dashed border-border bg-surface p-10 text-center">
        <Bell className="mx-auto h-10 w-10 text-primary/40" />
        <p className="mt-3 font-extrabold text-xl text-foreground">No active notices</p>
        <p className="mt-2 text-sm text-muted-foreground">
          New circulars and announcements will appear here when published.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-8 grid gap-4 sm:gap-5">
        {sortedNotices.map((notice) => (
          <article
            key={notice.id}
            className="group rounded-3xl border border-border/80 bg-white p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 flex-1 gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Bell className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                    {formatNoticeDate(notice.createdAt)}
                  </span>
                  <h3 className="mt-1 font-extrabold text-xl text-foreground group-hover:text-primary transition-colors">
                    {notice.title}
                  </h3>
                  {notice.description && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {notice.description}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveNotice(notice)}
                className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-full border border-primary/20 bg-primary/8 px-4.5 py-2 text-xs font-bold text-primary transition hover:bg-primary hover:text-white sm:mt-1 shadow-sm"
              >
                <span>Read Circular</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <NoticeDetailModal notice={activeNotice} onClose={() => setActiveNotice(null)} />
    </>
  );
}
