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
      <div className="mt-8 brutal-border bg-[#faf7f2] p-10 text-center brutal-shadow-sm">
        <Bell className="mx-auto h-10 w-10 text-[#6b0c26]" />
        <p className="mt-4 font-serif text-2xl font-bold text-[#121212]">No Active Circulars</p>
        <p className="mt-2 font-mono text-xs text-[#121212]/70">
          Official bulletins and holiday notices will appear here once dispatched.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-8 grid gap-5">
        {sortedNotices.map((notice) => (
          <article
            key={notice.id}
            className="group brutal-border bg-white p-6 brutal-shadow transition-transform hover:-translate-y-1"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 flex-1 gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#121212] text-white">
                  <Bell className="h-5 w-5 text-[#d97706]" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#6b0c26]">
                    {formatNoticeDate(notice.createdAt)}
                  </span>
                  <h3 className="mt-1 font-serif text-xl sm:text-2xl font-black text-[#121212] group-hover:text-[#6b0c26] transition-colors">
                    {notice.title}
                  </h3>
                  {notice.description && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#121212]/80 font-normal">
                      {notice.description}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveNotice(notice)}
                className="brutal-btn inline-flex shrink-0 items-center justify-center gap-2 self-start bg-[#6b0c26] text-white px-5 py-2.5 font-mono text-xs font-bold uppercase hover:bg-[#121212]"
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

