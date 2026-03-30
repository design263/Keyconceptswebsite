import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/api";
import { AdminShell } from "../../components/admin/admin-shell";
import { useAdminAuth } from "./use-admin-auth";

export function AdminLeadsPage() {
  const token = useAdminAuth();
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [leads, setLeads] = useState({ data: [], total: 0, page: 1, totalPages: 1 });
  const [selectedLeadMessage, setSelectedLeadMessage] = useState(null);

  const load = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setLeads(await api.get(`/contact-leads?page=${page}&limit=${limit}&q=${encodeURIComponent(q)}&sort=-createdAt`, token));
    setLoading(false);
  }, [token, page, q, limit]);

  useEffect(() => { load(); }, [load]);

  return (
    <AdminShell title="Contact Leads Listing">
      <div className="bg-white border border-gray-300 rounded-lg p-4 flex flex-wrap gap-3 items-center justify-between">
        <input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Search leads..." className="w-full md:w-[360px] border border-gray-300 rounded-md px-3 py-2 text-sm" />
        <select value={limit} onChange={(e) => { setLimit(Number(e.target.value)); setPage(1); }} className="border border-gray-300 rounded-md px-2 py-2 text-sm">
          <option value={10}>10 rows</option>
          <option value={25}>25 rows</option>
          <option value={50}>50 rows</option>
        </select>
      </div>

      <div className="bg-white rounded-lg border border-gray-300 p-0 overflow-auto">
        <h2 className="font-semibold text-xl px-4 py-3 border-b border-gray-300">Contact Leads ({leads.total})</h2>
        <table className="w-full text-sm min-w-[1050px]">
          <thead><tr className="text-left text-gray-700 bg-[#f4f6fa]"><th className="py-2 px-4">Name</th><th>Email</th><th>Subject</th><th>Message</th><th>Actions</th></tr></thead>
          <tbody>
            {leads.data.map((lead) => (
              <tr key={lead._id} className="border-t border-gray-200 hover:bg-[#fffdf5]">
                <td className="py-3 px-4 font-medium">{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.subject}</td>
                <td className="max-w-sm truncate">{lead.message}</td>
                <td className="space-x-2">
                  <button className="text-indigo-600" onClick={() => setSelectedLeadMessage(lead.message)}>View Message</button>
                  <button className="text-red-600" onClick={async () => { await api.delete(`/contact-leads/${lead._id}`, token); load(); }}>Delete</button>
                </td>
              </tr>
            ))}
            {!loading && leads.data.length === 0 && <tr><td colSpan={5} className="py-10 text-center text-gray-500">No leads found.</td></tr>}
          </tbody>
        </table>
        <div className="flex items-center justify-between gap-2 p-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">Showing {leads.data.length} records</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded border" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
            <span className="text-sm text-gray-600">Page {leads.page} of {leads.totalPages}</span>
            <button className="px-3 py-1.5 rounded border" disabled={page >= leads.totalPages} onClick={() => setPage((p) => Math.min(leads.totalPages, p + 1))}>Next</button>
          </div>
        </div>
      </div>

      {selectedLeadMessage && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-4"><h3 className="text-xl font-semibold">Lead Message</h3><button className="text-gray-500" onClick={() => setSelectedLeadMessage(null)}>Close</button></div>
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed max-h-[60vh] overflow-auto">{selectedLeadMessage}</p>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
