'use client'

import { ChevronLeft, ChevronRight, Loader2, Search } from 'lucide-react'
import { AdminCustomSelect } from './AdminCustomSelect'

const DEFAULT_LIMIT_OPTIONS = [
  { value: '10', label: '10' },
  { value: '25', label: '25' },
  { value: '50', label: '50' },
]

function getPageNumbers(page, totalPages) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
  if (page <= 4) return [1, 2, 3, 4, 5, '...', totalPages]
  if (page >= totalPages - 3) {
    return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
  }
  return [1, '...', page - 1, page, page + 1, '...', totalPages]
}

function AdminTable({
  title,
  total,
  columns,
  data,
  loading,
  loadingMessage,
  emptyIcon: EmptyIcon,
  emptyMessage,
  renderRow,
  search,
  sort,
  toolbarExtra,
  page,
  totalPages,
  limit,
  onPageChange,
  onLimitChange,
  limitOptions = DEFAULT_LIMIT_OPTIONS,
  minWidth = '760px',
  searchInputClassName = 'w-full md:w-64 pl-8 pr-3 py-1.5 text-sm rounded-sm border border-gray-200 bg-gray-100 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#f1592a]/20 focus:border-[#f1592a] transition-all',
}) {
  const firstRecord = total === 0 ? 0 : (page - 1) * limit + 1
  const lastRecord = Math.min(page * limit, total)
  const colSpan = columns.length

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-gray-200">
        <h2 className="text-sm font-bold text-foreground">
          {title}
          <span className="ml-2 px-2 py-0.5 rounded-full bg-[#f1592a]/10 text-[#f1592a] text-xs font-semibold">
            {total}
          </span>
        </h2>
        <div className="flex items-center gap-2 flex-wrap">
          {search && (
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                value={search.value}
                onChange={(e) => search.onChange(e.target.value)}
                placeholder={search.placeholder}
                className={searchInputClassName}
              />
            </div>
          )}
          {sort && (
            <div className="relative">
              <AdminCustomSelect
                value={sort.value}
                onChange={sort.onChange}
                options={sort.options}
              />
            </div>
          )}
          {toolbarExtra}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ minWidth }}>
          <thead>
            <tr className="bg-muted/50 text-muted-foreground text-sm font-semibold border-b border-gray-300 uppercase tracking-wide">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`text-left px-5 py-2.5 font-semibold ${column.headerClassName || ''}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {loading ? (
              <tr>
                <td colSpan={colSpan} className="py-16 text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Loader2 size={18} className="animate-spin text-[#f1592a]" />
                    <span className="text-sm">{loadingMessage}</span>
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={colSpan} className="py-16 text-center">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    {EmptyIcon && <EmptyIcon size={32} className="text-border" />}
                    <p className="text-sm">{emptyMessage}</p>
                  </div>
                </td>
              </tr>
            ) : (
              data.map((item, index) => renderRow(item, index))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3 border-t border-gray-200 bg-muted/20">
        <p className="text-xs text-muted-foreground whitespace-nowrap">
          {total === 0
            ? 'No records'
            : `Showing ${firstRecord} - ${lastRecord} of ${total} records`}
        </p>

        <div className="flex items-center gap-1">
          <button
            disabled={page <= 1}
            onClick={() => onPageChange(Math.max(1, page - 1))}
            className="flex items-center justify-center w-8 h-8 rounded-sm border border-gray-200 text-muted-foreground hover:border-[#f1592a] hover:text-[#f1592a] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={15} />
          </button>

          {getPageNumbers(page, totalPages).map((p, i) =>
            p === '...' ? (
              <span
                key={`ellipsis-${i}`}
                className="px-1 text-muted-foreground text-sm select-none"
              >
                ...
              </span>
            ) : (
              <button
                key={p}
                onClick={() => onPageChange(p)}
                className={`flex items-center justify-center w-8 h-8 rounded-sm text-xs font-semibold border transition-all
                  ${
                    page === p
                      ? 'bg-[#f1592a] text-white border-[#f1592a] shadow-sm shadow-[#f1592a]/20'
                      : 'border-gray-200 text-foreground hover:border-[#f1592a] hover:text-[#f1592a]'
                  }`}
              >
                {p}
              </button>
            )
          )}

          <button
            disabled={page >= totalPages}
            onClick={() => onPageChange(Math.min(totalPages, page + 1))}
            className="flex items-center justify-center w-8 h-8 rounded-sm border border-gray-200 text-muted-foreground hover:border-[#f1592a] hover:text-[#f1592a] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={15} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">
            Rows per page:
          </label>
          <AdminCustomSelect
            value={limit.toString()}
            onChange={(value) => onLimitChange(Number(value))}
            options={limitOptions}
          />
        </div>
      </div>
    </div>
  )
}

export { AdminTable, DEFAULT_LIMIT_OPTIONS }
