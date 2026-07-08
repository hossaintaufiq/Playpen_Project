"use client";

import { useMemo, useState } from "react";
import { AdminCard, AdminEmptyState, AdminLoading } from "@/components/admin/AdminUI";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import type { AlumniRequest } from "@/lib/cms/types";
import { Check, Clock, Trash2, X } from "lucide-react";

type StatusFilter = "pending" | "approved" | "rejected" | "all";

const filters: { value: StatusFilter; label: string }[] = [
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
  { value: "all", label: "All" },
];

function statusBadge(status: AlumniRequest["status"]) {
  const styles = {
    pending: "bg-amber-100 text-amber-800 border-amber-200",
    approved: "bg-green-100 text-green-800 border-green-200",
    rejected: "bg-red-100 text-red-800 border-red-200",
  } as const;

  const labels = {
    pending: "Pending review",
    approved: "Approved",
    rejected: "Rejected",
  } as const;

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function DetailRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-foreground">{value}</p>
    </div>
  );
}

export default function AdminAlumniPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();
  const [filter, setFilter] = useState<StatusFilter>("pending");

  const sortedRequests = useMemo(() => {
    if (!data) return [];
    return [...data.alumniRequests].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [data]);

  const filteredRequests = useMemo(() => {
    if (filter === "all") return sortedRequests;
    return sortedRequests.filter((request) => request.status === filter);
  }, [filter, sortedRequests]);

  const pendingCount = data?.alumniRequests.filter((request) => request.status === "pending").length ?? 0;

  async function setStatus(id: string, status: AlumniRequest["status"]) {
    if (!data) return;
    const alumniRequests = data.alumniRequests.map((request) =>
      request.id === id ? { ...request, status } : request
    );
    updateLocal({ alumniRequests });
    await save({ alumniRequests });
  }

  async function deleteRequest(id: string) {
    if (!data) return;
    if (!window.confirm("Delete this alumni registration permanently?")) return;
    const alumniRequests = data.alumniRequests.filter((request) => request.id !== id);
    updateLocal({ alumniRequests });
    await save({ alumniRequests });
  }

  if (loading || !data) return <AdminLoading />;

  return (
    <div className="w-full min-w-0">
      <AdminSectionHeader />

      <div className="mb-6 flex flex-wrap items-center gap-2">
        {filters.map((item) => {
          const count =
            item.value === "all"
              ? data.alumniRequests.length
              : data.alumniRequests.filter((request) => request.status === item.value).length;
          const active = filter === item.value;
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`rounded-full border px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                active
                  ? "border-primary bg-primary text-white"
                  : "border-border/70 bg-white text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {item.label}
              <span className="ml-1.5 opacity-80">({count})</span>
            </button>
          );
        })}
      </div>

      {pendingCount > 0 && filter !== "pending" && (
        <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <span className="font-semibold">{pendingCount}</span> registration
          {pendingCount === 1 ? "" : "s"} awaiting your review.
        </div>
      )}

      {(message || error) && (
        <div
          className={`mb-4 rounded-xl border px-4 py-3 text-sm ${
            error ? "border-red-200 bg-red-50 text-red-700" : "border-green-200 bg-green-50 text-green-700"
          }`}
        >
          {error || message}
        </div>
      )}

      <div className="space-y-4">
        {filteredRequests.length === 0 && (
          <AdminEmptyState
            title={
              filter === "pending"
                ? "No pending registrations"
                : `No ${filter === "all" ? "" : `${filter} `}registrations`
            }
            description={
              filter === "pending"
                ? "When someone fills in the alumni form on the website, it will appear here for you to review."
                : "Try another filter above to see more registrations."
            }
          />
        )}

        {filteredRequests.map((request) => (
          <AdminCard key={request.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{request.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Submitted {new Date(request.createdAt).toLocaleString()}
                </p>
              </div>
              {statusBadge(request.status)}
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <DetailRow label="Contact number" value={request.phone} />
              <DetailRow label="Email" value={request.email} />
              <DetailRow label="Present occupation" value={request.occupation} />
              <DetailRow label="O' Level year" value={request.oLevelYear} />
              <DetailRow label="A' Level year" value={request.aLevelYear ?? request.batch} />
              <DetailRow label="Home address" value={request.homeAddress} />
              <DetailRow
                label="Graduation information"
                value={request.graduationInfo ?? request.message}
              />
            </div>

            {request.photoPath && (
              <div className="mt-5">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Photograph</p>
                <img
                  src={`/api/admin/alumni-photos/${request.photoPath}`}
                  alt={`${request.name} photograph`}
                  className="h-40 w-full max-w-[10rem] rounded-xl border border-border/60 object-cover sm:w-40"
                />
              </div>
            )}

            <div className="mt-6 flex flex-col gap-2 border-t border-border/60 pt-4 sm:flex-row sm:flex-wrap sm:items-center">
              {request.status === "pending" && (
                <>
                  <button
                    type="button"
                    disabled={saving}
                    onClick={() => setStatus(request.id, "approved")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 disabled:opacity-60 sm:w-auto"
                  >
                    <Check className="h-4 w-4" />
                    Approve — show on website
                  </button>
                  <button
                    type="button"
                    disabled={saving}
                    onClick={() => setStatus(request.id, "rejected")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-60 sm:w-auto"
                  >
                    <X className="h-4 w-4" />
                    Reject — do not show
                  </button>
                </>
              )}

              {request.status !== "pending" && (
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => setStatus(request.id, "pending")}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 transition hover:bg-amber-100 disabled:opacity-60"
                >
                  <Clock className="h-4 w-4" />
                  Mark as pending
                </button>
              )}

              <button
                type="button"
                disabled={saving}
                onClick={() => deleteRequest(request.id)}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-60"
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </button>
            </div>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}
