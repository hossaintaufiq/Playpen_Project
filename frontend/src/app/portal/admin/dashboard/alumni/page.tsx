"use client";

import { AdminCard, AdminField, AdminPageHeader, AdminSaveBar, adminInputClass } from "@/components/admin/AdminUI";
import { useAdminCMS } from "@/hooks/useAdminCMS";
import { createId } from "@/lib/cms/id";
import type { AlumniRequest } from "@/lib/cms/types";
import { Trash2 } from "lucide-react";

export default function AdminAlumniPage() {
  const { data, loading, saving, message, error, save, updateLocal } = useAdminCMS();

  if (loading || !data) return <p className="text-sm text-muted-foreground">Loading...</p>;

  function updateRequest(id: string, patch: Partial<AlumniRequest>) {
    updateLocal({
      alumniRequests: data!.alumniRequests.map((r) => (r.id === id ? { ...r, ...patch } : r)),
    });
  }

  function addRequest() {
    const request: AlumniRequest = {
      id: createId("alumni"),
      name: "Alumni name",
      homeAddress: "Present address",
      phone: "01700000000",
      occupation: "Occupation",
      email: "alumni@example.com",
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    updateLocal({ alumniRequests: [request, ...data!.alumniRequests] });
  }

  return (
    <div>
      <AdminPageHeader
        title="Alumni Requests"
        description="Review, approve, add, or remove alumni registration submissions."
      />

      <div className="space-y-4">
        {data.alumniRequests.length === 0 && (
          <AdminCard>
            <p className="text-sm text-muted-foreground">No alumni requests yet.</p>
          </AdminCard>
        )}

        {data.alumniRequests.map((request) => (
          <AdminCard key={request.id}>
            <div className="grid gap-4 md:grid-cols-2">
              <AdminField label="Full name">
                <input className={adminInputClass} value={request.name} onChange={(e) => updateRequest(request.id, { name: e.target.value })} />
              </AdminField>
              <AdminField label="Contact number">
                <input className={adminInputClass} value={request.phone} onChange={(e) => updateRequest(request.id, { phone: e.target.value })} />
              </AdminField>
              <AdminField label="Email">
                <input className={adminInputClass} value={request.email ?? ""} onChange={(e) => updateRequest(request.id, { email: e.target.value })} />
              </AdminField>
              <AdminField label="Present occupation">
                <input className={adminInputClass} value={request.occupation ?? ""} onChange={(e) => updateRequest(request.id, { occupation: e.target.value })} />
              </AdminField>
              <AdminField label="O' Level year">
                <input className={adminInputClass} value={request.oLevelYear ?? ""} onChange={(e) => updateRequest(request.id, { oLevelYear: e.target.value })} />
              </AdminField>
              <AdminField label="A' Level year">
                <input className={adminInputClass} value={request.aLevelYear ?? request.batch ?? ""} onChange={(e) => updateRequest(request.id, { aLevelYear: e.target.value })} />
              </AdminField>
              <AdminField label="Home address">
                <textarea className={adminInputClass} rows={2} value={request.homeAddress ?? ""} onChange={(e) => updateRequest(request.id, { homeAddress: e.target.value })} />
              </AdminField>
              <AdminField label="Graduation information">
                <textarea className={adminInputClass} rows={2} value={request.graduationInfo ?? request.message ?? ""} onChange={(e) => updateRequest(request.id, { graduationInfo: e.target.value })} />
              </AdminField>
              <AdminField label="Status">
                <select
                  className={adminInputClass}
                  value={request.status}
                  onChange={(e) => updateRequest(request.id, { status: e.target.value as AlumniRequest["status"] })}
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </AdminField>
              {request.photoPath && (
                <AdminField label="Photograph">
                  <p className="text-sm text-muted-foreground">{request.photoPath}</p>
                </AdminField>
              )}
            </div>
            <button
              type="button"
              onClick={() => updateLocal({ alumniRequests: data.alumniRequests.filter((r) => r.id !== request.id) })}
              className="mt-4 inline-flex items-center gap-2 text-sm text-red-600 hover:underline"
            >
              <Trash2 className="h-4 w-4" /> Delete request
            </button>
          </AdminCard>
        ))}
      </div>

      <button type="button" onClick={addRequest} className="mt-4 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary">
        + Add alumni record
      </button>

      <AdminSaveBar saving={saving} message={message} error={error} onSave={() => save({ alumniRequests: data.alumniRequests })} />
    </div>
  );
}
