import { useCallback, useEffect, useRef, useState } from "react";
import { api } from "../../lib/api";
import { useAdminAuth } from "./use-admin-auth";
import {
  BriefcaseBusiness, ChevronLeft, ChevronRight,
  Pencil, Trash2, ToggleLeft, ToggleRight,
  Plus, X, Search, ArrowUpDown, Loader2,
} from "lucide-react";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";

const toText = (items) => items.join("\n");
const toList = (value) =>
  value.split("\n").map((i) => i.trim()).filter(Boolean);

const initialJob = {
  title: "", department: "", location: "",
  description: "", requirements: "", responsibilities: "",
  niceToHave: "", benefits: "",
  salary: "", experience: "", employmentType: "", status: "active",
};

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
      {label}
    </label>
    {children}
  </div>
);

const inputCls =
  "w-full px-4 py-1.5 text-sm rounded-sm border border-border bg-gray-100 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all duration-200";

const CustomSelect = ({ value, onChange, options, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${inputCls} cursor-pointer flex items-center justify-between pr-2 gap-2`}
      >
        <span>{selectedOption?.label || "Select..."}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-border rounded-sm shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-sm cursor-pointer transition-colors hover:bg-primary/10 ${value === option.value ? "bg-primary/5 text-primary font-medium" : "text-foreground"
                }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const StatusBadge = ({ status }) =>
  status === "active" ? (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
      Active
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-red-600">
      Inactive
    </span>
  );

export function AdminJobsPage() {
  const token = useAdminAuth();

  /* state */
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("-createdAt");
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState({ data: [], total: 0, page: 1, totalPages: 1 });
  const [jobForm, setJobForm] = useState(initialJob);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const formRef = useRef(null);

  const toggleForm = () => {
    if (showForm) {
      // close: animate out then unmount
      setFormVisible(false);
      setTimeout(() => setShowForm(false), 320);
    } else {
      setShowForm(true);
      // let DOM mount before triggering transition
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setFormVisible(true))
      );
    }
  };

  const loadJobs = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    const res = await api.get(
      `/jobs?page=${page}&limit=${limit}&q=${encodeURIComponent(q)}&sort=${encodeURIComponent(sort)}`,
      token
    );
    setJobs(res);
    setLoading(false);
  }, [token, page, q, limit, sort]);

  useEffect(() => { loadJobs(); }, [loadJobs]);

  /* ── save ── */
  const saveJob = async (e) => {
    e.preventDefault();
    const payload = {
      ...jobForm,
      requirements: toList(jobForm.requirements),
      responsibilities: toList(jobForm.responsibilities),
      niceToHave: toList(jobForm.niceToHave),
      benefits: toList(jobForm.benefits),
    };
    try {
      if (editingId) {
        const res = await api.put(`/jobs/${editingId}`, payload, token);
        toast.success(res?.message || "Job updated successfully");
      } else {
        const res = await api.post("/jobs", payload, token);
        toast.success(res?.message || "Job created successfully");
      }
      setEditingId(null);
      setJobForm(initialJob);
      setFormVisible(false);
      setTimeout(() => setShowForm(false), 320);
      loadJobs();
    } catch (err) {
      toast.error(err?.message || "Failed to save job");
    }
  };

  const firstRecord = jobs.total === 0 ? 0 : (page - 1) * limit + 1;
  const lastRecord = Math.min(page * limit, jobs.total);

  const getPageNumbers = () => {
    const total = jobs.totalPages;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    if (page <= 4) return [1, 2, 3, 4, 5, "...", total];
    if (page >= total - 3) return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
    return [1, "...", page - 1, page, page + 1, "...", total];
  };

  // Sort options for custom select
  const sortOptions = [
    { value: "-createdAt", label: "Newest First" },
    { value: "createdAt", label: "Oldest First" },
    { value: "title", label: "Title A–Z" },
    { value: "-title", label: "Title Z–A" },
  ];

  // Limit options for custom select
  const limitOptions = [
    { value: 10, label: "10" },
    { value: 25, label: "25" },
    { value: 50, label: "50" },
  ];

  return (
    <div className="space-y-5">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
            <BriefcaseBusiness size={18} className="text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">Job Openings</h1>
            <p className="text-xs text-muted-foreground">{jobs.total} total positions</p>
          </div>
        </div>

        <button
          onClick={() => {
            if (showForm && editingId) {
              setEditingId(null);
              setJobForm(initialJob);
              if (!showForm) toggleForm();
            } else {
              toggleForm();
            }
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold transition-all duration-200 bg-primary text-white hover:bg-primary/90 shadow-sm shadow-primary/20`}
        >
          <Plus size={15} /> Add Job Opening
        </button>
      </div>

      {showForm && (
        <div
          ref={formRef}
          style={{
            overflow: "hidden",
            maxHeight: formVisible ? "2000px" : "0px",
            opacity: formVisible ? 1 : 0,
            transform: formVisible ? "translateY(0)" : "translateY(-12px)",
            transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <form
            onSubmit={saveJob}
            className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm"
          >
            {/* Form header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center">
                  <BriefcaseBusiness size={16} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground">
                    {editingId ? "Edit Job Opening" : "Create New Job Opening"}
                  </h2>
                  <p className="text-xs text-muted-foreground">Fill in all required fields below</p>
                </div>
              </div>
              <button
                type="button"
                onClick={toggleForm}
                className="w-7 h-7 rounded-sm flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={14} />
              </button>
            </div>

            {/* Form body */}
            <div className="p-6 grid gap-4">

              {/* Title */}
              <Field label="Job Title">
                <input
                  className={inputCls}
                  placeholder="e.g. Senior React Developer"
                  value={jobForm.title}
                  onChange={(e) => setJobForm((p) => ({ ...p, title: e.target.value }))}
                  required
                />
              </Field>

              {/* Department + Location */}
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Department">
                  <input
                    className={inputCls}
                    placeholder="e.g. Engineering"
                    value={jobForm.department}
                    onChange={(e) => setJobForm((p) => ({ ...p, department: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="Location">
                  <input
                    className={inputCls}
                    placeholder="e.g. Remote / Mumbai"
                    value={jobForm.location}
                    onChange={(e) => setJobForm((p) => ({ ...p, location: e.target.value }))}
                    required
                  />
                </Field>
              </div>

              {/* Description */}
              <Field label="Description">
                <textarea
                  className={inputCls}
                  placeholder="Describe the role and what the team does…"
                  value={jobForm.description}
                  onChange={(e) => setJobForm((p) => ({ ...p, description: e.target.value }))}
                  rows={3}
                  required
                />
              </Field>

              {/* Responsibilities + Requirements */}
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Responsibilities (one per line)">
                  <textarea
                    className={inputCls}
                    placeholder={"- Build features\n- Review PRs\n- Write tests"}
                    value={jobForm.responsibilities}
                    onChange={(e) => setJobForm((p) => ({ ...p, responsibilities: e.target.value }))}
                    rows={4}
                    required
                  />
                </Field>
                <Field label="Requirements (one per line)">
                  <textarea
                    className={inputCls}
                    placeholder={"- 3+ years React\n- TypeScript\n- REST APIs"}
                    value={jobForm.requirements}
                    onChange={(e) => setJobForm((p) => ({ ...p, requirements: e.target.value }))}
                    rows={4}
                    required
                  />
                </Field>
              </div>

              {/* Nice to Have + Benefits */}
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Nice to Have (one per line)">
                  <textarea
                    className={inputCls}
                    placeholder={"- GraphQL\n- Docker"}
                    value={jobForm.niceToHave}
                    onChange={(e) => setJobForm((p) => ({ ...p, niceToHave: e.target.value }))}
                    rows={3}
                  />
                </Field>
                <Field label="Benefits (one per line)">
                  <textarea
                    className={inputCls}
                    placeholder={"- Health insurance\n- Flexible hours"}
                    value={jobForm.benefits}
                    onChange={(e) => setJobForm((p) => ({ ...p, benefits: e.target.value }))}
                    rows={3}
                  />
                </Field>
              </div>

              {/* Salary + Experience + Employment Type + Status */}
              <div className="grid md:grid-cols-4 gap-4">
                <Field label="Salary">
                  <input
                    className={inputCls}
                    placeholder="e.g. ₹12–18 LPA"
                    value={jobForm.salary}
                    onChange={(e) => setJobForm((p) => ({ ...p, salary: e.target.value }))}
                  />
                </Field>
                <Field label="Experience">
                  <input
                    className={inputCls}
                    placeholder="e.g. 3–5 years"
                    value={jobForm.experience}
                    onChange={(e) => setJobForm((p) => ({ ...p, experience: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="Employment Type ">
                  <input
                    className={inputCls}
                    placeholder="e.g. Full-time"
                    value={jobForm.employmentType}
                    onChange={(e) => setJobForm((p) => ({ ...p, employmentType: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="Status">
                  <CustomSelect
                    value={jobForm.status}
                    onChange={(value) => setJobForm((p) => ({ ...p, status: value }))}
                    options={[
                      { value: "active", label: "Active" },
                      { value: "inactive", label: "Inactive" },
                    ]}
                  />
                </Field>
              </div>
            </div>

            {/* Form footer */}
            <div className="px-6 py-4 border-t border-border flex items-center justify-end gap-3 bg-muted/30">
              <button
                type="button"
                onClick={toggleForm}
                className="px-4 py-2 rounded-sm text-sm font-medium text-foreground border border-border hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-sm text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20"
              >
                {editingId ? "Update Job" : "Create Job"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white border border-border rounded-lg shadow-sm">

        {/* Table toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-border">
          <h2 className="text-sm font-bold text-foreground">All Job Openings
            <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              {jobs.total}
            </span>
          </h2>
          <div className="flex items-center gap-2 flex-wrap">
            {/* Search */}
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => { setQ(e.target.value); setPage(1); }}
                placeholder="Search jobs…"
                className="w-80 pl-8 pr-3 py-1.5 text-sm rounded-sm border border-border bg-gray-100 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all w-52"
              />
            </div>
            {/* Custom Sort Select */}
            <div className="relative">
              <CustomSelect
                value={sort}
                onChange={(value) => { setSort(value); setPage(1); }}
                options={sortOptions}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="bg-muted/50 text-muted-foreground text-sm font-semibold border-b border-gray-200 uppercase tracking-wide">
                <th className="text-left px-5 py-2.5 font-semibold">Title</th>
                <th className="text-left px-5 py-2.5 font-semibold">Department</th>
                <th className="text-left px-5 py-2.5 font-semibold">Type</th>
                <th className="text-left px-5 py-2.5 font-semibold">Experience</th>
                <th className="text-left px-5 py-2.5 font-semibold">Status</th>
                <th className="text-left px-5 py-2.5 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-16 text-center">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Loader2 size={18} className="animate-spin text-primary" />
                      <span className="text-sm">Loading jobs…</span>
                    </div>
                  </td>
                </tr>
              ) : jobs.data.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-16 text-center">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <BriefcaseBusiness size={32} className="text-border" />
                      <p className="text-sm">No job openings found.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                jobs.data.map((job, idx) => (
                  <tr
                    key={job._id}
                    className="hover:bg-orange-50/40 transition-colors duration-150 group"
                  >
                    <td className="px-5 py-3 font-semibold text-foreground">{job.title}</td>
                    <td className="px-5 py-3 text-muted-foreground">{job.department}</td>
                    <td className="px-5 py-3 text-muted-foreground">{job.employmentType}</td>
                    <td className="px-5 py-3 text-muted-foreground">{job.experience}</td>
                    <td className="px-5 py-3">
                      <StatusBadge status={job.status} />
                    </td>
                    <td className="px-5 py-2">
                      <div className="flex items-center gap-3">
                        {/* Edit */}
                        <button
                          title="Edit"
                          onClick={() => {
                            setEditingId(job._id);
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
                            if (!showForm) {
                              setShowForm(true);
                              requestAnimationFrame(() =>
                                requestAnimationFrame(() => setFormVisible(true))
                              );
                            }
                          }}
                          className="p-1.5 rounded-sm text-muted-foreground text-blue-600 bg-blue-50 transition-all"
                        >
                          <Pencil className=" text-blue-600" size={15} />
                        </button>

                        {/* Delete */}
                        <button
                          title="Delete"
                          onClick={async () => {
                            try {
                              const res = await api.delete(`/jobs/${job._id}`, token);
                              toast.success(res?.message || "Job deleted successfully");
                              loadJobs();
                            } catch (err) {
                              toast.error(err?.message || "Failed to delete job");
                            }
                          }}
                          className="p-1.5 rounded-sm text-muted-foreground text-destructive bg-destructive/10 transition-all"
                        >
                          <Trash2 className=" text-red-600" size={15} />
                        </button>

                        {/* Toggle status */}
                        <button
                          title="Toggle status"
                          onClick={async () => {
                            try {
                              const res = await api.patch(
                                `/jobs/${job._id}`,
                                { status: job.status === "active" ? "inactive" : "active" },
                                token
                              );
                              toast.success(res?.message || "Status updated successfully");
                              loadJobs();
                            } catch (err) {
                              toast.error(err?.message || "Failed to toggle status");
                            }
                          }}
                          className={`
                            relative inline-flex items-center w-7 h-4 rounded-full 
                              transition-all duration-300 ease-in-out
                              ${job.status === "active" ? "bg-orange-500" : "bg-gray-300"}
                            `}
                        >
                          <span
                            className={`
                            absolute top-[2px] left-[2px] w-3 h-3 bg-white rounded-full 
                            shadow-md transform transition-all duration-300
                            ${job.status === "active" ? "translate-x-3" : "translate-x-0"}
                          `}
                          />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3 border-t border-border bg-muted/20">

          <p className="text-xs text-muted-foreground whitespace-nowrap">
            {jobs.total === 0
              ? "No records"
              : `Showing ${firstRecord} – ${lastRecord} of ${jobs.total} records`}
          </p>

          <div className="flex items-center gap-1">
            {/* Prev */}
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="flex items-center justify-center w-8 h-8 rounded-sm border border-border text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={15} />
            </button>

            {/* Page numbers */}
            {getPageNumbers().map((p, i) =>
              p === "..." ? (
                <span key={`ellipsis-${i}`} className="px-1 text-muted-foreground text-sm select-none">…</span>
              ) : (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`flex items-center justify-center w-8 h-8 rounded-sm text-xs font-semibold border transition-all
                    ${page === p
                      ? "bg-primary text-white border-primary shadow-sm shadow-primary/20"
                      : "border-border text-foreground hover:border-primary hover:text-primary"
                    }`}
                >
                  {p}
                </button>
              )
            )}

            {/* Next */}
            <button
              disabled={page >= jobs.totalPages}
              onClick={() => setPage((p) => Math.min(jobs.totalPages, p + 1))}
              className="flex items-center justify-center w-8 h-8 rounded-sm border border-border text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={15} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Rows per page:</label>
            <CustomSelect
              value={limit}
              onChange={(value) => { setLimit(value); setPage(1); }}
              options={limitOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}