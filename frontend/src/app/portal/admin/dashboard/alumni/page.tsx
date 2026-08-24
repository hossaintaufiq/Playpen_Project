"use client";

import { useMemo, useState } from "react";
import { AdminCard, AdminEmptyState, AdminLoading } from "@/components/admin/AdminUI";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import type { AlumniRequest } from "@/lib/cms/types";
import { Check, Clock, Trash2, X, GraduationCap, Phone, Mail, Briefcase, MapPin } from "lucide-react";

type StatusFilter = "pending" | "approved" | "rejected" | "all";

const filters: { value: StatusFilter; label: string }[] = [
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
  { value: "all", label: "All" },
];

function statusBadge(status: AlumniRequest["status"]) {
  const styles = {
    pending: "bg-amber-50 text-amber-800 border-amber-200/60",
    approved: "bg-emerald-50 text-emerald-800 border-emerald-200/60",
    rejected: "bg-red-50 text-red-800 border-red-200/60",
  } as const;

  const labels = {
    pending: "Pending Review",
    approved: "Approved",
    rejected: "Rejected",
  } as const;

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function DetailRow({ label, value, icon: Icon }: { label: string; value?: string; icon?: any }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-50 bg-[#fdfcfc] p-3 transition-colors hover:bg-slate-50">
      {Icon && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
          <Icon className="h-4 w-4" />
        </div>
      )}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-semibold leading-relaxed text-foreground">{value}</p>
      </div>
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
    if (!window.confirm("Are you sure you want to permanently delete this alumni registration request?")) return;
    const alumniRequests = data.alumniRequests.filter((request) => request.id !== id);
    updateLocal({ alumniRequests });
    await save({ alumniRequests });
  }

  if (loading || !data) return <AdminLoading />;

  return (
    <div className="w-full min-w-0 space-y-6">
      <AdminSectionHeader />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
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
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 border shadow-sm ${
                active
                  ? "bg-primary border-primary text-white scale-102"
                  : "bg-white border-slate-200 text-muted-foreground hover:bg-slate-50 hover:text-foreground"
              }`}
            >
              {item.label}
              <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {pendingCount > 0 && filter !== "pending" && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 font-medium">
          Note: There are <span className="font-bold">{pendingCount}</span> pending registrations awaiting review.
        </div>
      )}

      {(message || error) && (
        <div
          className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
            error ? "border-red-200 bg-red-50/50 text-red-700" : "border-emerald-200 bg-emerald-50/50 text-emerald-800"
          }`}
        >
          {error || message}
        </div>
      )}

      {/* Requests List */}
      <div className="space-y-6">
        {filteredRequests.length === 0 && (
          <AdminEmptyState
            title={
              filter === "pending"
                ? "No pending registrations"
                : `No ${filter === "all" ? "" : `${filter} `}registrations`
            }
            description={
              filter === "pending"
                ? "When someone fills in the alumni form on the public website, it will show up here automatically for validation."
                : "Choose another tab filter above to view historical registrations."
            }
          />
        )}

        {filteredRequests.map((request) => (
          <AdminCard key={request.id}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold tracking-tight text-foreground">{request.name}</h3>
                <p className="mt-1 text-xs font-semibold text-muted-foreground/80">
                  Received {new Date(request.createdAt).toLocaleString()}
                </p>
              </div>
              {statusBadge(request.status)}
            </div>

            {/* Profile Picture (If Uploaded) */}
            {request.photoPath && (
              <div className="mt-5 border-t border-slate-100 pt-4 flex gap-4 items-start">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Uploaded Photo</p>
                  <img
                    src={`/api/admin/alumni-photos/${request.photoPath}`}
                    alt={`${request.name}`}
                    className="mt-2 h-44 w-36 rounded-xl border border-slate-200/80 object-cover shadow-sm transition-transform duration-300 hover:scale-102"
                  />
                </div>
              </div>
            )}

            {/* Details Fields Grid */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <DetailRow label="Phone number" value={request.phone} icon={Phone} />
              <DetailRow label="Email Address" value={request.email} icon={Mail} />
              <DetailRow label="O' Level Batch" value={request.oLevelYear} icon={GraduationCap} />
              <DetailRow label="A' Level Batch" value={request.aLevelYear ?? request.batch} icon={GraduationCap} />
              <DetailRow label="Current Profession" value={request.occupation} icon={Briefcase} />
              <DetailRow label="Mailing Address" value={request.homeAddress} icon={MapPin} />
            </div>

            {/* Message/Graduation Details */}
            {(request.graduationInfo || request.message) && (
              <div className="mt-4 rounded-xl border border-slate-150 bg-slate-50/50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Graduation Details / Message</p>
                <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground/90 whitespace-pre-line">
                  {request.graduationInfo ?? request.message}
                </p>
              </div>
            )}

            {/* Action Bar */}
            <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
              {request.status === "pending" && (
                <>
                  <button
                    type="button"
                    disabled={saving}
                    onClick={() => setStatus(request.id, "approved")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-102 hover:bg-emerald-700 active:scale-[0.98] sm:w-auto"
                  >
                    <Check className="h-4.5 w-4.5" />
                    Approve Request
                  </button>
                  <button
                    type="button"
                    disabled={saving}
                    onClick={() => setStatus(request.id, "rejected")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-102 hover:bg-red-700 active:scale-[0.98] sm:w-auto"
                  >
                    <X className="h-4.5 w-4.5" />
                    Reject Request
                  </button>
                </>
              )}

              {request.status !== "pending" && (
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => setStatus(request.id, "pending")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-200 bg-amber-50/50 px-5 py-3 text-sm font-semibold text-amber-900 transition-all duration-300 hover:scale-102 hover:bg-amber-100/50 active:scale-[0.98]"
                >
                  <Clock className="h-4.5 w-4.5" />
                  Mark Pending
                </button>
              )}

              <div className="sm:ml-auto">
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => deleteRequest(request.id)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4.5 py-3 text-sm font-semibold text-red-600 transition-all hover:bg-red-50 disabled:opacity-60 sm:w-auto"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete Request
                </button>
              </div>
            </div>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}
