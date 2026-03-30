import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/api";
import { AdminShell } from "../../components/admin/admin-shell";
import { useAdminAuth } from "./use-admin-auth";

export function AdminApplicationsPage() {
  const token = useAdminAuth();
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState({ data: [], total: 0, page: 1, totalPages: 1 });
  const [selectedCoverLetter, setSelectedCoverLetter] = useState(null);

  const load = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setApplications(await api.get(`/applications?page=${page}&limit=${limit}&q=${encodeURIComponent(q)}&sort=-createdAt`, token));
    setLoading(false);
  }, [token, page, q, limit]);

  useEffect(() => { load(); }, [load]);

  const openProtectedResume = async (resumePath) => {
    const response = await fetch(`${api.baseUrl}${resumePath.replace("/api", "")}`, { headers: { Authorization: `Bearer ${token}` } });
    if (!response.ok) return;
    const blob = await response.blob();
    window.open(URL.createObjectURL(blob), "_blank", "noopener,noreferrer");
  };

  return (
    <AdminShell title="Applications Listing">
      <div className="bg-white border border-gray-300 rounded-lg p-4 flex flex-wrap gap-3 items-center justify-between">
        <input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Search by applicant, email or job..." className="w-full md:w-[360px] border border-gray-300 rounded-md px-3 py-2 text-sm" />
        <select value={limit} onChange={(e) => { setLimit(Number(e.target.value)); setPage(1); }} className="border border-gray-300 rounded-md px-2 py-2 text-sm">
          <option value={10}>10 rows</option>
          <option value={25}>25 rows</option>
          <option value={50}>50 rows</option>
        </select>
      </div>

      <div className="bg-white rounded-lg border border-gray-300 p-0 overflow-auto">
        <h2 className="font-semibold text-xl px-4 py-3 border-b border-gray-300">Applications ({applications.total})</h2>
        <table className="w-full text-sm min-w-[1080px]">
          <thead>
            <tr className="text-left text-gray-700 bg-[#f4f6fa]">
              <th className="py-2 px-4">Applicant</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Job</th>
              <th>Resume</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.data.map((application) => (
              <tr key={application._id} className="border-t border-gray-200 hover:bg-[#fffdf5]">
                <td className="py-3 px-4 font-medium">{application.fullName}</td>
                <td>{application.email}</td>
                <td>{application.phone}</td>
                <td>{application.jobId?.title || "-"}</td>
                <td>
                  <button className="text-blue-600" onClick={() => openProtectedResume(application.resumeFilePath)}>
                    View / Download
                  </button>
                </td>
                <td className="space-x-2">
                  <button className="text-indigo-600" onClick={() => setSelectedCoverLetter(application.coverLetter)}>
                    View Cover Letter
                  </button>
                  <button
                    className="text-red-600"
                    onClick={async () => {
                      await api.delete(`/applications/${application._id}`, token);
                      load();
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {!loading && applications.data.length === 0 && (
              <tr>
                <td colSpan={6} className="py-10 text-center text-gray-500">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex items-center justify-between gap-2 p-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">Showing {applications.data.length} records</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded border" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
              Prev
            </button>
            <span className="text-sm text-gray-600">
              Page {applications.page} of {applications.totalPages}
            </span>
            <button
              className="px-3 py-1.5 rounded border"
              disabled={page >= applications.totalPages}
              onClick={() => setPage((p) => Math.min(applications.totalPages, p + 1))}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {selectedCoverLetter && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Cover Letter</h3>
              <button className="text-gray-500" onClick={() => setSelectedCoverLetter(null)}>
                Close
              </button>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed max-h-[60vh] overflow-auto">
              {selectedCoverLetter}
            </p>
          </div>
        </div>
      )}
    </AdminShell>
  );
}