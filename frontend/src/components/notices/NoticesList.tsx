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
      <div className="mt-8 rounded-2xl border border-dashed border-border/80 bg-muted/20 p-8 text-center sm:rounded-3xl sm:p-10">
        <Bell className="mx-auto h-8 w-8 text-primary/50" />
        <p className="mt-3 font-serif text-lg font-semibold text-foreground">No notices right now</p>
        <p className="mt-2 text-sm text-muted-foreground">
          New notices will appear here when published from the admin dashboard.
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
            className="group rounded-2xl border border-border/60 bg-white p-5 shadow-sm transition hover:border-primary/20 hover:shadow-md sm:rounded-3xl sm:p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 flex-1 gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Bell className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/60">
                    {formatNoticeDate(notice.createdAt)}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-foreground sm:text-xl">
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
                className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10 sm:mt-1"
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <NoticeDetailModal notice={activeNotice} onClose={() => setActiveNotice(null)} />
    </>
  );
}
