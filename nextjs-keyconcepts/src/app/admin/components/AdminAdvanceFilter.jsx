'use client'

import { useMemo, useState } from 'react'
import { RotateCcw, SlidersHorizontal, X } from 'lucide-react'
import { AdminCustomSelect, inputCls } from './AdminCustomSelect'
import { AdminDatePicker } from './AdminDatePicker'

const FieldWrapper = ({ label, children, className = '' }) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    <label className="text-xs font-semibold text-gray-700">
      {label}
    </label>
    {children}
  </div>
)

/**
 * Reusable Advance Filter Drawer Component
 * Renders a dynamic, themed filter section based on a fields configuration schema.
 */
export function AdminAdvanceFilter({
  isOpen,
  onClose,
  title = 'Advance Filter',
  subtitle = 'Filter records by multiple criteria',
  fields = [],
  values = {},
  onApply,
  onReset,
  className = '',
}) {
  const [prevValues, setPrevValues] = useState(values)
  const [draft, setDraft] = useState(values)

  // Standard React pattern for adjusting state when prop changes
  if (values !== prevValues) {
    setPrevValues(values)
    setDraft(values)
  }

  const handleFieldChange = (key, val) => {
    setDraft((prev) => ({ ...prev, [key]: val }))
  }

  const handleApply = () => {
    onApply(draft)
  }

  const handleReset = () => {
    const emptyValues = {}
    fields.forEach((field) => {
      if (field.type === 'dateRange') {
        if (field.fromKey) emptyValues[field.fromKey] = ''
        if (field.toKey) emptyValues[field.toKey] = ''
      } else {
        emptyValues[field.key] = ''
      }
    })
    setDraft(emptyValues)
    if (onReset) {
      onReset(emptyValues)
    }
  }

  return (
    <div
      className={`shrink-0 overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen
          ? 'max-h-[800px] opacity-100 border-b border-gray-200'
          : 'max-h-0 opacity-0 pointer-events-none border-b-0'
      }`}
    >
      <div className={`p-4 sm:p-5 bg-gray-50/80 ${className}`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-gray-200/60">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#f1592a]/10 flex items-center justify-center text-[#f1592a]">
              <SlidersHorizontal size={13} />
            </div>
            <h3 className="text-xs font-bold text-gray-900">{title}</h3>
            {subtitle && <span className="text-[11px] text-gray-500 hidden sm:inline">• {subtitle}</span>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-6 h-6 rounded-md flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-200/60 transition-colors cursor-pointer"
            title="Close Advance Filter"
          >
            <X size={14} />
          </button>
        </div>

      {/* Dynamic Filter Fields Grid (3 columns on desktop, responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fields.map((field) => {
          const colSpanCls =
            field.colSpan === 3
              ? 'md:col-span-3'
              : field.colSpan === 2
              ? 'md:col-span-2'
              : 'md:col-span-1'

          // Render Select field using custom themed dropdown
          if (field.type === 'select' || !field.type) {
            return (
              <FieldWrapper key={field.key} label={field.label} className={colSpanCls}>
                <AdminCustomSelect
                  value={draft[field.key] ?? ''}
                  onChange={(val) => handleFieldChange(field.key, val)}
                  options={field.options || []}
                  placeholder={field.placeholder || '--Select--'}
                />
              </FieldWrapper>
            )
          }

          // Render Date Range field (From - To) with custom themed date pickers
          if (field.type === 'dateRange') {
            const fromKey = field.fromKey || `${field.key}From`
            const toKey = field.toKey || `${field.key}To`
            return (
              <FieldWrapper key={field.key} label={field.label} className={colSpanCls}>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <AdminDatePicker
                      value={draft[fromKey] ?? ''}
                      onChange={(val) => handleFieldChange(fromKey, val)}
                      placeholder="From Date"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground font-semibold">-</span>
                  <div className="relative flex-1">
                    <AdminDatePicker
                      value={draft[toKey] ?? ''}
                      onChange={(val) => handleFieldChange(toKey, val)}
                      placeholder="To Date"
                    />
                  </div>
                </div>
              </FieldWrapper>
            )
          }

          // Render Single Date field with custom themed date picker
          if (field.type === 'date') {
            return (
              <FieldWrapper key={field.key} label={field.label} className={colSpanCls}>
                <AdminDatePicker
                  value={draft[field.key] ?? ''}
                  onChange={(val) => handleFieldChange(field.key, val)}
                  placeholder={field.placeholder || 'Select date'}
                />
              </FieldWrapper>
            )
          }

          // Render Text field
          return (
            <FieldWrapper key={field.key} label={field.label} className={colSpanCls}>
              <input
                type="text"
                placeholder={field.placeholder || `Enter ${field.label}...`}
                value={draft[field.key] ?? ''}
                onChange={(e) => handleFieldChange(field.key, e.target.value)}
                className={inputCls}
              />
            </FieldWrapper>
          )
        })}
      </div>

      {/* Drawer Action Buttons */}
        {/* Drawer Action Buttons */}
        <div className="flex items-center justify-end gap-2 mt-4 pt-3 border-t border-gray-200/60">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-2xs cursor-pointer"
          >
            <RotateCcw size={12} />
            Reset
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-2xs cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="px-4 py-1.5 text-xs font-semibold rounded-md bg-[#f1592a] text-white hover:bg-[#f1592a]/90 transition-all shadow-xs shadow-[#f1592a]/20 cursor-pointer"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * Reusable Active Filter Chips Bar
 * Automatically generates human-readable tags and a Clear All button from fields schema and values.
 */
export function AdminFilterChips({
  fields = [],
  values = {},
  onRemove,
  onClearAll,
  className = '',
}) {
  const activeChips = useMemo(() => {
    const list = []

    fields.forEach((field) => {
      if (field.type === 'dateRange') {
        const fromKey = field.fromKey || `${field.key}From`
        const toKey = field.toKey || `${field.key}To`
        const fromVal = values[fromKey]
        const toVal = values[toKey]

        if (fromVal || toVal) {
          list.push({
            key: field.key,
            field,
            label: `${field.label}: ${fromVal || '...'} to ${toVal || '...'}`,
          })
        }
      } else {
        const val = values[field.key]
        if (val !== undefined && val !== null && String(val).trim() !== '' && val !== 'all') {
          let displayVal = String(val)

          // If select, find human label
          if (field.options) {
            const found = field.options.find((opt) => {
              if (typeof opt === 'object' && opt !== null) {
                return String(opt.value) === String(val)
              }
              return String(opt) === String(val)
            })
            if (found) {
              displayVal = typeof found === 'object' ? found.label : String(found)
            }
          }

          list.push({
            key: field.key,
            field,
            label: `${field.label}: ${displayVal}`,
          })
        }
      }
    })

    return list
  }, [fields, values])

  if (activeChips.length === 0) return null

  return (
    <div
      className={`flex items-center gap-2 px-5 py-2.5 bg-gray-50 border-b border-gray-200 flex-wrap ${className}`}
    >
      {activeChips.map((chip) => (
        <span
          key={chip.key}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-medium bg-white border border-gray-200 text-foreground shadow-xs"
        >
          <span>{chip.label}</span>
          <button
            type="button"
            onClick={() => onRemove(chip.key, chip.field)}
            className="text-muted-foreground hover:text-foreground transition-colors p-0.5 rounded-xs"
            title={`Remove ${chip.label}`}
          >
            <X size={12} />
          </button>
        </span>
      ))}

      <button
        type="button"
        onClick={onClearAll}
        className="px-3 py-1 text-xs font-semibold rounded-sm bg-slate-700 hover:bg-slate-800 text-white transition-colors shadow-xs"
      >
        Clear All
      </button>
    </div>
  )
}
