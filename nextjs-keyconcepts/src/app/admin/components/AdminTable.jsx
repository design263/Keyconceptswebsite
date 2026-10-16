'use client'

import { useMemo } from 'react'
import { ChevronLeft, ChevronRight, Loader2, Search, SlidersHorizontal } from 'lucide-react'
import { AdminCustomSelect } from './AdminCustomSelect'
import { AdminAdvanceFilter, AdminFilterChips } from './AdminAdvanceFilter'

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
  tableHeight = 'max-h-[calc(100vh-280px)] min-h-[140px]',
  fullHeight = false,
  searchInputClassName = 'w-full md:w-60 pl-7 pr-3 py-1.5 text-xs rounded-md border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 placeholder:text-xs hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f1592a]/20 focus:border-[#f1592a] transition-all duration-150 shadow-2xs',
  advanceFilter,
  filterAction,
  filterChips,
  filterDrawer,
  quickTabs,
}) {
  const firstRecord = total === 0 ? 0 : (page - 1) * limit + 1
  const lastRecord = Math.min(page * limit, total)
  const colSpan = columns.length

  // Calculate active filter count when using advanceFilter schema
  const activeCount = useMemo(() => {
    if (filterAction?.activeCount !== undefined) return filterAction.activeCount
    if (!advanceFilter?.fields || !advanceFilter?.values) return 0

    let count = 0
    advanceFilter.fields.forEach((field) => {
      if (field.type === 'dateRange') {
        const fromVal = advanceFilter.values[field.fromKey || `${field.key}From`]
        const toVal = advanceFilter.values[field.toKey || `${field.key}To`]
        if (fromVal || toVal) count++
      } else {
        const val = advanceFilter.values[field.key]
        if (val !== undefined && val !== null && String(val).trim() !== '' && val !== 'all') {
          count++
        }
      }
    })
    return count
  }, [filterAction, advanceFilter])

  // Resolve filter button action
  const resolvedFilterAction = advanceFilter
    ? {
        isOpen: advanceFilter.isOpen,
        onToggle: advanceFilter.onToggle,
        onSearch: advanceFilter.onSearch,
        activeCount,
      }
    : filterAction

  // Resolve filter drawer
  const resolvedFilterDrawer = advanceFilter ? (
    <AdminAdvanceFilter
      isOpen={advanceFilter.isOpen}
      onClose={advanceFilter.onToggle || advanceFilter.onClose}
      title={advanceFilter.title}
      subtitle={advanceFilter.subtitle}
      fields={advanceFilter.fields}
      values={advanceFilter.values}
      onApply={advanceFilter.onApply}
      onReset={advanceFilter.onReset}
    />
  ) : (
    filterDrawer
  )

  // Resolve active filter chips
  const resolvedFilterChips = advanceFilter ? (
    <AdminFilterChips
      fields={advanceFilter.fields}
      values={advanceFilter.values}
      onRemove={advanceFilter.onRemove}
      onClearAll={advanceFilter.onClearAll}
    />
  ) : (
    filterChips
  )

  return (
    <div
      className={`bg-white border border-gray-200/90 rounded-xl shadow-xs w-full min-w-0 flex flex-col overflow-hidden transition-all duration-300 ${
        fullHeight ? 'flex-1' : ''
      }`}
    >
      {/* Table Toolbar Header with text-xs controls */}
      <div className="shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-4 sm:px-5 py-2.5 border-b border-gray-200 bg-white rounded-t-xl">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-bold text-gray-900 tracking-tight">
            {title}
          </h2>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-orange-50 text-[#f1592a] border border-orange-200/60 shadow-2xs">
            {total}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {search && (
            <div className="flex items-center gap-2 flex-wrap">
              <div className="relative flex items-center">
                <Search
                  size={13}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
                <input
                  value={search.value}
                  onChange={(e) => search.onChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && resolvedFilterAction?.onSearch) {
                      resolvedFilterAction.onSearch()
                    }
                  }}
                  placeholder={search.placeholder}
                  className={`${searchInputClassName} ${resolvedFilterAction ? 'pr-7' : ''}`}
                />
                {resolvedFilterAction && (
                  <button
                    type="button"
                    onClick={resolvedFilterAction.onToggle}
                    title="Advance Filter"
                    className={`absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-md text-xs transition-colors ${
                      resolvedFilterAction.isOpen || resolvedFilterAction.activeCount > 0
                        ? 'text-[#f1592a] bg-orange-50 border border-orange-200/60'
                        : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <SlidersHorizontal size={12} />
                    {resolvedFilterAction.activeCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#f1592a] text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none shadow-2xs">
                        {resolvedFilterAction.activeCount}
                      </span>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
          {quickTabs}
          {sort && (
            <div className="relative">
              <AdminCustomSelect
                value={sort.value}
                onChange={sort.onChange}
                options={sort.options}
                buttonClassName="px-2.5 py-1.5 text-xs rounded-md border border-gray-200 bg-white text-gray-800 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f1592a]/20 focus:border-[#f1592a] shadow-2xs"
              />
            </div>
          )}
          {toolbarExtra}
        </div>
      </div>

      {/* Advance Filter Bottom Drawer Section */}
      {resolvedFilterDrawer}

      {/* Active Filter Chips */}
      {resolvedFilterChips}

      {/* Scrollable Table Viewport with Fixed/Sticky Header */}
      <div
        className={`overflow-x-auto overflow-y-auto w-full custom-scrollbar relative border-b border-gray-200/80 transition-all duration-300 ${
          fullHeight ? 'flex-1' : ''
        } ${tableHeight}`}
      >
        <table className="w-full text-left text-xs border-collapse" style={{ minWidth }}>
          <thead className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur-xs border-b border-gray-200 shadow-2xs">
            <tr className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-4 py-2.5 text-left font-semibold text-gray-600 ${column.headerClassName || ''}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {loading ? (
              <tr>
                <td colSpan={colSpan} className="py-12 text-center">
                  <div className="flex flex-col items-center justify-center gap-2 text-gray-500">
                    <Loader2 size={18} className="animate-spin text-[#f1592a]" />
                    <span className="text-xs font-medium">{loadingMessage}</span>
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={colSpan} className="py-12 text-center">
                  <div className="flex flex-col items-center justify-center gap-2 text-gray-400">
                    {EmptyIcon && <EmptyIcon size={26} className="text-gray-300 stroke-[1.5]" />}
                    <p className="text-xs font-medium text-gray-500">{emptyMessage}</p>
                  </div>
                </td>
              </tr>
            ) : (
              data.map((item, index) => renderRow(item, index))
            )}
          </tbody>
        </table>
      </div>

      {/* Table Pagination Footer */}
      <div className="shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3 bg-gray-50/60 rounded-b-xl border-t border-gray-100">
        <div className="text-xs text-gray-500 font-medium whitespace-nowrap order-2 sm:order-1">
          {total === 0 ? (
            'No records found'
          ) : (
            <>
              Showing <span className="font-semibold text-gray-900">{firstRecord}</span>–<span className="font-semibold text-gray-900">{lastRecord}</span> of{' '}
              <span className="font-semibold text-gray-900">{total}</span> records
            </>
          )}
        </div>

        <div className="flex items-center gap-1.5 order-1 sm:order-2">
          <button
            disabled={page <= 1}
            onClick={() => onPageChange(Math.max(1, page - 1))}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs cursor-pointer"
            title="Previous page"
          >
            <ChevronLeft size={13} />
            <span className="hidden sm:inline">Prev</span>
          </button>

          <div className="inline-flex items-center gap-1 p-0.5 rounded-lg bg-gray-100/70 border border-gray-200/80">
            {getPageNumbers(page, totalPages).map((p, i) =>
              p === '...' ? (
                <span
                  key={`ellipsis-${i}`}
                  className="w-5 text-center text-gray-400 text-xs font-semibold select-none"
                >
                  ...
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => onPageChange(p)}
                  className={`h-6 min-w-[26px] px-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    page === p
                      ? 'bg-[#f1592a] text-white shadow-xs shadow-[#f1592a]/25'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  {p}
                </button>
              )
            )}
          </div>

          <button
            disabled={page >= totalPages}
            onClick={() => onPageChange(Math.min(totalPages, page + 1))}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs cursor-pointer"
            title="Next page"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={13} />
          </button>
        </div>

        <div className="flex items-center gap-2 order-3">
          <label className="text-xs font-medium text-gray-500 whitespace-nowrap">
            Rows per page:
          </label>
          <AdminCustomSelect
            value={limit.toString()}
            onChange={(value) => onLimitChange(Number(value))}
            options={limitOptions}
            direction="top"
            className="w-16"
            buttonClassName="w-full px-2 py-1 text-xs font-medium rounded-md border border-gray-200 bg-white text-gray-800 hover:border-gray-300 focus:outline-none focus:ring-1.5 focus:ring-[#f1592a]/30 focus:border-[#f1592a] shadow-2xs cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export { AdminTable, DEFAULT_LIMIT_OPTIONS }
