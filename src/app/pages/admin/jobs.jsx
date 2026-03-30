import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/api";
import { useAdminAuth } from "./use-admin-auth";
import { AdminShell } from "../../components/admin/admin-shell";

const toText = (items) => items.join("\n");
const toList = (value) => value.split("\n").map((item) => item.trim()).filter(Boolean);

const initialJob = {
  title: "",
  department: "",
  location: "",
  description: "",
  requirements: "",
  responsibilities: "",
  niceToHave: "",
  benefits: "",
  salary: "",
  experience: "",
  employmentType: "",
  status: "active",
};

export function AdminJobsPage() {
  const token = useAdminAuth();
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("-createdAt");
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState({ data: [], total: 0, page: 1, totalPages: 1 });
  const [jobForm, setJobForm] = useState(initialJob);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const loadJobs = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    const res = await api.get(`/jobs?page=${page}&limit=${limit}&q=${encodeURIComponent(q)}&sort=${encodeURIComponent(sort)}`, token);
    setJobs(res);
    setLoading(false);
  }, [token, page, q, limit, sort]);

  useEffect(() => { loadJobs(); }, [loadJobs]);

  const saveJob = async (e) => {
    e.preventDefault();
    const payload = {
      ...jobForm,
      requirements: toList(jobForm.requirements),
      responsibilities: toList(jobForm.responsibilities),
      niceToHave: toList(jobForm.niceToHave),
      benefits: toList(jobForm.benefits),
    };

    if (editingId) await api.put(`/jobs/${editingId}`, payload, token);
    else await api.post("/jobs", payload, token);

    setEditingId(null);
    setJobForm(initialJob);
    setShowForm(false);
    loadJobs();
  };

  return (
    <AdminShell title="Job Openings Master">
      <div className="bg-white border border-gray-300 rounded-lg p-4 flex flex-wrap gap-3 items-center justify-between">
        <input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Search jobs..." className="w-full md:w-[300px] border border-gray-300 rounded-md px-3 py-2 text-sm" />
        <div className="flex items-center gap-2">
          <select value={sort} onChange={(e) => { setSort(e.target.value); setPage(1); }} className="border border-gray-300 rounded-md px-2 py-2 text-sm">
            <option value="-createdAt">Newest</option>
            <option value="createdAt">Oldest</option>
            <option value="title">Title A-Z</option>
            <option value="-title">Title Z-A</option>
          </select>
          <select value={limit} onChange={(e) => { setLimit(Number(e.target.value)); setPage(1); }} className="border border-gray-300 rounded-md px-2 py-2 text-sm">
            <option value={10}>10 rows</option>
            <option value={25}>25 rows</option>
            <option value={50}>50 rows</option>
          </select>
          <button onClick={() => setShowForm((prev) => !prev)} className="px-4 py-2 rounded-md bg-[#0b5fe0] text-white text-sm">
            {showForm ? "Close Form" : editingId ? "Edit Job" : "Add Job Opening"}
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={saveJob} className="bg-white border border-gray-300 rounded-lg p-5 space-y-3">
          <h2 className="font-semibold text-lg">{editingId ? "Edit Job Opening" : "Create Job Opening"}</h2>
          <input placeholder="Title" value={jobForm.title} onChange={(e) => setJobForm((p) => ({ ...p, title: e.target.value }))} className="w-full border rounded-lg px-3 py-2" required />
          <div className="grid md:grid-cols-2 gap-3">
            <input placeholder="Department" value={jobForm.department} onChange={(e) => setJobForm((p) => ({ ...p, department: e.target.value }))} className="w-full border rounded-lg px-3 py-2" required />
            <input placeholder="Location" value={jobForm.location} onChange={(e) => setJobForm((p) => ({ ...p, location: e.target.value }))} className="w-full border rounded-lg px-3 py-2" required />
          </div>
          <textarea placeholder="Description" value={jobForm.description} onChange={(e) => setJobForm((p) => ({ ...p, description: e.target.value }))} className="w-full border rounded-lg px-3 py-2" rows={4} required />
          <textarea placeholder="Responsibilities (one per line)" value={jobForm.responsibilities} onChange={(e) => setJobForm((p) => ({ ...p, responsibilities: e.target.value }))} className="w-full border rounded-lg px-3 py-2" rows={4} required />
          <textarea placeholder="Requirements details (one per line)" value={jobForm.requirements} onChange={(e) => setJobForm((p) => ({ ...p, requirements: e.target.value }))} className="w-full border rounded-lg px-3 py-2" rows={4} required />
          <textarea placeholder="Nice to Have (one per line)" value={jobForm.niceToHave} onChange={(e) => setJobForm((p) => ({ ...p, niceToHave: e.target.value }))} className="w-full border rounded-lg px-3 py-2" rows={3} />
          <textarea placeholder="Benefits (one per line)" value={jobForm.benefits} onChange={(e) => setJobForm((p) => ({ ...p, benefits: e.target.value }))} className="w-full border rounded-lg px-3 py-2" rows={3} />
          <div className="grid md:grid-cols-3 gap-3">
            <input placeholder="Salary" value={jobForm.salary} onChange={(e) => setJobForm((p) => ({ ...p, salary: e.target.value }))} className="w-full border rounded-lg px-3 py-2" />
            <input placeholder="Experience" value={jobForm.experience} onChange={(e) => setJobForm((p) => ({ ...p, experience: e.target.value }))} className="w-full border rounded-lg px-3 py-2" required />
            <input placeholder="Employment Type" value={jobForm.employmentType} onChange={(e) => setJobForm((p) => ({ ...p, employmentType: e.target.value }))} className="w-full border rounded-lg px-3 py-2" required />
          </div>
          <select value={jobForm.status} onChange={(e) => setJobForm((p) => ({ ...p, status: e.target.value }))} className="w-full border rounded-lg px-3 py-2">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="w-full bg-[#0b5fe0] text-white py-2.5 rounded-lg">{editingId ? "Update Job" : "Create Job"}</button>
        </form>
      )}

      <div className="bg-white rounded-lg border border-gray-300 p-0 overflow-auto">
        <h2 className="font-semibold text-xl px-4 py-3 border-b border-gray-300">Job Openings ({jobs.total})</h2>
        <table className="w-full text-sm min-w-[980px]">
          <thead><tr className="text-left text-gray-700 bg-[#f4f6fa]"><th className="py-2 px-4">Title</th><th>Department</th><th>Type</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {jobs.data.map((job) => (
              <tr key={job._id} className="border-t border-gray-200 hover:bg-[#fffdf5]">
                <td className="py-3 px-4 font-medium">{job.title}</td>
                <td>{job.department}</td>
                <td>{job.employmentType}</td>
                <td><span className={`px-2 py-1 text-xs rounded-full ${job.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>{job.status}</span></td>
                <td className="space-x-2">
                  <button className="text-blue-600" onClick={() => {
                    setEditingId(job._id);
                    setShowForm(true);
                    setJobForm({
                      title: job.title,
                      department: job.department,
                      location: job.location,
                      description: job.description,
                      requirements: toText(job.requirements || []),
                      responsibilities: toText(job.responsibilities || []),
                      niceToHave: toText(job.niceToHave || []),
                      benefits: toText(job.benefits || []),
                      salary: job.salary || "",
                      experience: job.experience,
                      employmentType: job.employmentType,
                      status: job.status,
                    });
                  }}>Edit</button>
                  <button className="text-amber-600" onClick={async () => { await api.patch(`/jobs/${job._id}`, { status: job.status === "active" ? "inactive" : "active" }, token); loadJobs(); }}>Toggle</button>
                  <button className="text-red-600" onClick={async () => { await api.delete(`/jobs/${job._id}`, token); loadJobs(); }}>Delete</button>
                </td>
              </tr>
            ))}
            {!loading && jobs.data.length === 0 && <tr><td colSpan={5} className="py-10 text-center text-gray-500">No jobs found.</td></tr>}
          </tbody>
        </table>
        <div className="flex items-center justify-between gap-2 p-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">Showing {jobs.data.length} records</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded border" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
            <span className="text-sm text-gray-600">Page {jobs.page} of {jobs.totalPages}</span>
            <button className="px-3 py-1.5 rounded border" disabled={page >= jobs.totalPages} onClick={() => setPage((p) => Math.min(jobs.totalPages, p + 1))}>Next</button>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
