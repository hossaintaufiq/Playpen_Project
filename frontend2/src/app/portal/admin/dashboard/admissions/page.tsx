"use client";

import { useEffect, useState } from "react";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";
import { AdminCard, adminInputClass } from "@/components/admin/AdminUI";
import {
  FileText,
  Search,
  CheckCircle,
  XCircle,
  Clock,
  Trash2,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  Users,
  Upload,
  Loader2,
  Download,
  AlertTriangle,
  GraduationCap
} from "lucide-react";

type Application = {
  id: string;
  formType: "pg-class-ix" | "a-level";
  values: Record<string, string>;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};

type FormFileInfo = {
  id: string;
  filename: string;
  sizeBytes: number;
  lastModified: string;
  exists: boolean;
};

export default function AdmissionsDashboardPage() {
  const [activeTab, setActiveTab] = useState<"applications" | "forms">("applications");
  
  // Applications states
  const [applications, setApplications] = useState<Application[]>([]);
  const [loadingApps, setLoadingApps] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  // Forms states
  const [formFiles, setFormFiles] = useState<FormFileInfo[]>([]);
  const [loadingForms, setLoadingForms] = useState(true);
  const [uploadingFormId, setUploadingFormId] = useState<string | null>(null);
  const [uploadFeedback, setUploadFeedback] = useState<Record<string, { success?: string; error?: string }>>({});

  useEffect(() => {
    fetchApplications();
    fetchFormsInfo();
  }, []);

  async function fetchApplications() {
    setLoadingApps(true);
    try {
      const res = await fetch("/api/admin/admissions");
      if (res.ok) {
        const data = await res.json();
        setApplications(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingApps(false);
    }
  }

  async function fetchFormsInfo() {
    setLoadingForms(true);
    try {
      const res = await fetch("/api/admin/admissions/forms-info");
      if (res.ok) {
        const data = await res.json();
        setFormFiles(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingForms(false);
    }
  }

  async function updateStatus(id: string, status: "pending" | "approved" | "rejected") {
    try {
      const res = await fetch("/api/admin/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update-status", id, status }),
      });
      if (res.ok) {
        setApplications((prev) =>
          prev.map((app) => (app.id === id ? { ...app, status } : app))
        );
        if (selectedApp?.id === id) {
          setSelectedApp((prev) => (prev ? { ...prev, status } : null));
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteApplication(id: string) {
    if (!confirm("Are you sure you want to permanently delete this application?")) return;
    try {
      const res = await fetch("/api/admin/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete", id }),
      });
      if (res.ok) {
        setApplications((prev) => prev.filter((app) => app.id !== id));
        if (selectedApp?.id === id) {
          setSelectedApp(null);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function handleFileUpload(formId: string, file: File | null) {
    if (!file) return;
    setUploadingFormId(formId);
    setUploadFeedback((prev) => ({ ...prev, [formId]: {} }));

    const formData = new FormData();
    formData.append("formId", formId);
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/admissions/upload-form", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setUploadFeedback((prev) => ({
          ...prev,
          [formId]: { success: "PDF uploaded and replaced successfully!" },
        }));
        fetchFormsInfo();
      } else {
        const errData = await res.json();
        setUploadFeedback((prev) => ({
          ...prev,
          [formId]: { error: errData.error || "Upload failed" },
        }));
      }
    } catch (e: any) {
      setUploadFeedback((prev) => ({
        ...prev,
        [formId]: { error: e.message || "Upload failed" },
      }));
    } finally {
      setUploadingFormId(null);
    }
  }

  // Filtered Applications list
  const filteredApps = applications.filter((app) => {
    const statusMatches = filter === "all" ? true : app.status === filter;
    const name = app.values.studentName || "";
    const searchMatches = searchQuery
      ? name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return statusMatches && searchMatches;
  });

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        title="Admissions Desk"
        description="Review submitted admission applications and upload updated PDF forms."
      />

      {/* Tabs */}
      <div className="flex border-b border-slate-100 bg-white/40 p-1 rounded-xl backdrop-blur-md">
        <button
          onClick={() => setActiveTab("applications")}
          className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
            activeTab === "applications"
              ? "bg-[#800000] text-white shadow-md shadow-[#800000]/10"
              : "text-slate-600 hover:bg-slate-100/50 hover:text-slate-900"
          }`}
        >
          Applications Desk
        </button>
        <button
          onClick={() => setActiveTab("forms")}
          className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
            activeTab === "forms"
              ? "bg-[#800000] text-white shadow-md shadow-[#800000]/10"
              : "text-slate-600 hover:bg-slate-100/50 hover:text-slate-900"
          }`}
        >
          Form PDF Assets
        </button>
      </div>

      {activeTab === "applications" ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* List panel */}
          <div className="lg:col-span-1 space-y-4">
            {/* Filters & Search */}
            <AdminCard className="p-4 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`${adminInputClass} pl-9`}
                />
              </div>

              <div className="flex flex-wrap gap-1">
                {(["pending", "approved", "rejected", "all"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilter(s)}
                    className={`rounded-lg px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all border ${
                      filter === s
                        ? "bg-slate-900 border-slate-900 text-white"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </AdminCard>

            {/* Application Cards List */}
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {loadingApps ? (
                <div className="py-12 text-center text-slate-400 flex flex-col items-center gap-2">
                  <Loader2 className="h-6 w-6 animate-spin text-[#800000]" />
                  <span className="text-xs font-semibold">Loading applications...</span>
                </div>
              ) : filteredApps.length === 0 ? (
                <div className="py-12 text-center text-slate-400 border border-dashed border-slate-200 bg-white/50 rounded-xl">
                  <p className="text-xs font-bold">No applications found</p>
                </div>
              ) : (
                filteredApps.map((app) => (
                  <div
                    key={app.id}
                    onClick={() => setSelectedApp(app)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer bg-white shadow-sm hover:shadow-md flex flex-col justify-between ${
                      selectedApp?.id === app.id
                        ? "border-[#800000] ring-1 ring-[#800000]"
                        : "border-slate-100"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-bold text-slate-800 text-sm truncate max-w-[150px]">
                          {app.values.studentName || "Unnamed Applicant"}
                        </h4>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                            app.status === "approved"
                              ? "bg-emerald-50 text-emerald-700"
                              : app.status === "rejected"
                              ? "bg-red-50 text-red-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {app.status}
                        </span>
                      </div>
                      <p className="text-[11px] font-semibold text-slate-400 mt-1">
                        {app.formType === "a-level" ? "A' Level" : app.values.classApplying || "PG-Class IX"}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-50 text-[10px] text-slate-400 font-semibold">
                      <span>{new Date(app.createdAt).toLocaleDateString()}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteApplication(app.id);
                        }}
                        className="text-slate-400 hover:text-red-650 transition-colors p-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Details panel */}
          <div className="lg:col-span-2">
            {selectedApp ? (
              <AdminCard className="p-6 space-y-6">
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-150 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {selectedApp.values.studentName}
                    </h3>
                    <p className="text-xs text-slate-400 font-semibold mt-1">
                      Submitted on {new Date(selectedApp.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedApp.status === "pending" && (
                      <>
                        <button
                          onClick={() => updateStatus(selectedApp.id, "approved")}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-sm"
                        >
                          <CheckCircle className="h-3.5 w-3.5" />
                          <span>Approve</span>
                        </button>
                        <button
                          onClick={() => updateStatus(selectedApp.id, "rejected")}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-red-650 px-3.5 py-2 text-xs font-bold text-white hover:bg-red-700 transition-colors shadow-sm"
                        >
                          <XCircle className="h-3.5 w-3.5" />
                          <span>Reject</span>
                        </button>
                      </>
                    )}
                    {selectedApp.status !== "pending" && (
                      <button
                        onClick={() => updateStatus(selectedApp.id, "pending")}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                      >
                        <Clock className="h-3.5 w-3.5" />
                        <span>Move back to Pending</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Details layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column: Personal & Academic */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        <User className="h-3.5 w-3.5" />
                        <span>Personal Details</span>
                      </h4>
                      <div className="bg-slate-50 rounded-xl p-4 space-y-2.5 text-xs text-slate-700">
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-400">Gender</span>
                          <span className="font-bold">{selectedApp.values.gender || "—"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-400">Date of Birth</span>
                          <span className="font-bold">{selectedApp.values.dateOfBirth || "—"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-400">Nationality</span>
                          <span className="font-bold">{selectedApp.values.nationality || "—"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-400">Religion</span>
                          <span className="font-bold">{selectedApp.values.religion || "—"}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        <GraduationCap className="h-3.5 w-3.5" />
                        <span>Academic Information</span>
                      </h4>
                      <div className="bg-slate-50 rounded-xl p-4 space-y-2.5 text-xs text-slate-700">
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-400">Admission Level</span>
                          <span className="font-bold">
                            {selectedApp.formType === "a-level" ? "A' Level" : "PG-Class IX"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-400">Class Applying For</span>
                          <span className="font-bold">
                            {selectedApp.values.classApplying || selectedApp.values.classApplied || "—"}
                          </span>
                        </div>
                        {selectedApp.values.previousSchool && (
                          <div className="flex flex-col gap-1 border-t border-slate-200/60 pt-2.5 mt-2.5">
                            <span className="font-semibold text-slate-400">Previous School</span>
                            <span className="font-bold text-slate-800">{selectedApp.values.previousSchool}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Subject Selections for A-Level */}
                    {selectedApp.formType === "a-level" && selectedApp.values.selectedSubjects && (
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                          <FileText className="h-3.5 w-3.5" />
                          <span>Selected Subjects</span>
                        </h4>
                        <div className="bg-slate-50 rounded-xl p-4 space-y-1.5 text-xs">
                          {selectedApp.values.selectedSubjects.split(",").map((sub: string) => (
                            <div key={sub} className="flex items-center gap-2 font-bold text-slate-800">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#800000]" />
                              <span>{sub.trim()}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Family, Contacts & Emergency */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        <Users className="h-3.5 w-3.5" />
                        <span>Parents Information</span>
                      </h4>
                      <div className="bg-slate-50 rounded-xl p-4 space-y-4 text-xs text-slate-700">
                        <div>
                          <p className="font-bold text-[#800000] border-b border-slate-200 pb-1 mb-1.5">Father</p>
                          <p className="font-bold text-slate-800">{selectedApp.values.fatherName || "—"}</p>
                          <div className="flex gap-4 mt-1 text-[11px] font-semibold text-slate-500">
                            {selectedApp.values.fatherEmail && (
                              <span className="flex items-center gap-1">
                                <Mail className="h-3 w-3" /> {selectedApp.values.fatherEmail}
                              </span>
                            )}
                            {selectedApp.values.fatherOfficeContact && (
                              <span className="flex items-center gap-1">
                                <Phone className="h-3 w-3" /> {selectedApp.values.fatherOfficeContact}
                              </span>
                            )}
                          </div>
                        </div>

                        <div>
                          <p className="font-bold text-[#800000] border-b border-slate-200 pb-1 mb-1.5">Mother</p>
                          <p className="font-bold text-slate-800">{selectedApp.values.motherName || "—"}</p>
                          <div className="flex gap-4 mt-1 text-[11px] font-semibold text-slate-500">
                            {selectedApp.values.motherEmail && (
                              <span className="flex items-center gap-1">
                                <Mail className="h-3 w-3" /> {selectedApp.values.motherEmail}
                              </span>
                            )}
                            {selectedApp.values.motherOfficeContact && (
                              <span className="flex items-center gap-1">
                                <Phone className="h-3 w-3" /> {selectedApp.values.motherOfficeContact}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Residence & Contact</span>
                      </h4>
                      <div className="bg-slate-50 rounded-xl p-4 space-y-2 text-xs text-slate-700">
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-400">Home Contact</span>
                          <span className="font-bold">
                            {selectedApp.values.residenceContact || selectedApp.values.mobilePhone || "—"}
                          </span>
                        </div>
                        <div className="flex flex-col gap-0.5 mt-1 border-t border-slate-200/60 pt-2">
                          <span className="font-semibold text-slate-400">Address</span>
                          <span className="font-bold leading-relaxed">
                            {selectedApp.values.residenceAddress || selectedApp.values.presentAddress || "—"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Emergency details */}
                    {selectedApp.values.emergencyName && (
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                          <AlertTriangle className="h-3.5 w-3.5" />
                          <span>Emergency Contact</span>
                        </h4>
                        <div className="bg-slate-50 rounded-xl p-4 text-xs text-slate-700">
                          <p className="font-bold text-slate-800">{selectedApp.values.emergencyName}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                            {selectedApp.values.emergencyRelationship || "Contact Person"}
                          </p>
                          <div className="flex gap-2 mt-2 text-slate-600 font-semibold items-center">
                            <Phone className="h-3 w-3 text-slate-400" />
                            <span>{selectedApp.values.emergencyContact}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </AdminCard>
            ) : (
              <div className="h-full flex items-center justify-center border border-dashed border-slate-200 bg-white/30 rounded-2xl p-12 text-center text-slate-400">
                <div>
                  <FileText className="h-8 w-8 mx-auto text-slate-300" />
                  <p className="mt-3 text-xs font-bold">Select an application from the sidebar to review details.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Downloadable PDF forms config cards */}
          {loadingForms ? (
            <div className="md:col-span-2 py-12 text-center text-slate-400 flex flex-col items-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin text-[#800000]" />
              <span className="text-xs font-semibold">Loading form assets data...</span>
            </div>
          ) : (
            formFiles.map((form) => (
              <AdminCard key={form.id} className="p-6 space-y-4">
                <div className="flex items-start justify-between border-b border-slate-50 pb-3">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">
                      {form.id === "pg-class-ix"
                        ? "Playgroup – Class IX Admission Form"
                        : "A' Level Admission Form"}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                      {form.filename}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                      form.exists
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {form.exists ? "Active PDF" : "Missing File"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 rounded-xl p-4 font-semibold text-slate-600">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">File Size</span>
                    <span className="block font-bold text-slate-800 mt-0.5">
                      {form.exists ? `${(form.sizeBytes / 1024).toFixed(1)} KB` : "—"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">Last Uploaded</span>
                    <span className="block font-bold text-slate-800 mt-0.5">
                      {form.exists ? new Date(form.lastModified).toLocaleDateString() : "—"}
                    </span>
                  </div>
                </div>

                {/* File input / upload button */}
                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Replace PDF Form
                  </label>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      accept=".pdf"
                      id={`file-input-${form.id}`}
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        if (file) {
                          handleFileUpload(form.id, file);
                        }
                      }}
                      className="hidden"
                    />
                    
                    <button
                      type="button"
                      disabled={uploadingFormId === form.id}
                      onClick={() => document.getElementById(`file-input-${form.id}`)?.click()}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm disabled:opacity-50"
                    >
                      {uploadingFormId === form.id ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          <span>Uploading...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="h-3.5 w-3.5 text-slate-400" />
                          <span>Select and Upload PDF</span>
                        </>
                      )}
                    </button>

                    {form.exists && (
                      <a
                        href={`/forms/${form.filename}`}
                        download
                        className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-slate-600 hover:bg-slate-100 transition-colors"
                      >
                        <Download className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  {uploadFeedback[form.id]?.success && (
                    <p className="text-[11px] font-bold text-emerald-650">
                      {uploadFeedback[form.id].success}
                    </p>
                  )}
                  {uploadFeedback[form.id]?.error && (
                    <p className="text-[11px] font-bold text-red-650">
                      {uploadFeedback[form.id].error}
                    </p>
                  )}
                </div>
              </AdminCard>
            ))
          )}
        </div>
      )}
    </div>
  );
}
