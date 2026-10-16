'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from 'lucide-react'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const formatYMD = (year, month, day) => {
  const m = String(month + 1).padStart(2, '0')
  const d = String(day).padStart(2, '0')
  return `${year}-${m}-${d}`
}

const parseYMD = (str) => {
  if (!str || typeof str !== 'string') return null
  const parts = str.split('-')
  if (parts.length === 3) {
    const y = parseInt(parts[0], 10)
    const m = parseInt(parts[1], 10) - 1
    const d = parseInt(parts[2], 10)
    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
      return new Date(y, m, d)
    }
  }
  return null
}

export function AdminDatePicker({
  value = '',
  onChange,
  placeholder = 'Select date',
  className = '',
  disabled = false,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  const parsedDate = useMemo(() => parseYMD(value), [value])

  const today = useMemo(() => new Date(), [])
  const todayYMD = useMemo(
    () => formatYMD(today.getFullYear(), today.getMonth(), today.getDate()),
    [today]
  )

  const [prevDateStr, setPrevDateStr] = useState(value)
  const [viewYear, setViewYear] = useState(() => parsedDate?.getFullYear() || today.getFullYear())
  const [viewMonth, setViewMonth] = useState(() => parsedDate?.getMonth() ?? today.getMonth())

  // Standard React pattern for adjusting view state when value prop changes
  if (value !== prevDateStr) {
    setPrevDateStr(value)
    if (parsedDate) {
      setViewYear(parsedDate.getFullYear())
      setViewMonth(parsedDate.getMonth())
    }
  }

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear((y) => y - 1)
    } else {
      setViewMonth((m) => m - 1)
    }
  }

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear((y) => y + 1)
    } else {
      setViewMonth((m) => m + 1)
    }
  }

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay()
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate()

    const days = []

    // Previous month filler days
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const d = daysInPrevMonth - i
      const prevM = viewMonth === 0 ? 11 : viewMonth - 1
      const prevY = viewMonth === 0 ? viewYear - 1 : viewYear
      days.push({
        day: d,
        month: prevM,
        year: prevY,
        isCurrentMonth: false,
        ymd: formatYMD(prevY, prevM, d),
      })
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      days.push({
        day: d,
        month: viewMonth,
        year: viewYear,
        isCurrentMonth: true,
        ymd: formatYMD(viewYear, viewMonth, d),
      })
    }

    // Next month filler days to complete 35 or 42 grid cells
    const totalCells = days.length <= 35 ? 35 : 42
    const remaining = totalCells - days.length
    for (let d = 1; d <= remaining; d++) {
      const nextM = viewMonth === 11 ? 0 : viewMonth + 1
      const nextY = viewMonth === 11 ? viewYear + 1 : viewYear
      days.push({
        day: d,
        month: nextM,
        year: nextY,
        isCurrentMonth: false,
        ymd: formatYMD(nextY, nextM, d),
      })
    }

    return days
  }, [viewYear, viewMonth])

  const handleSelectDay = (dayObj) => {
    onChange(dayObj.ymd)
    setIsOpen(false)
  }

  const handleClear = (e) => {
    e.stopPropagation()
    onChange('')
    setIsOpen(false)
  }

  const handleToday = () => {
    onChange(todayYMD)
    setViewYear(today.getFullYear())
    setViewMonth(today.getMonth())
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Trigger Button */}
      <div
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        className={`w-full px-3 py-1.5 text-xs rounded-sm border border-gray-200 bg-gray-100 text-foreground flex items-center justify-between cursor-pointer transition-all duration-150 group ${
          isOpen ? 'ring-1 ring-[#f1592a]/30 border-[#f1592a] bg-white' : ''
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <div className="flex items-center gap-2 truncate">
          <CalendarIcon
            size={13}
            className={`shrink-0 transition-colors ${
              value ? 'text-[#f1592a]' : 'text-muted-foreground'
            }`}
          />
          <span
            className={`truncate font-medium ${
              value ? 'text-foreground' : 'text-muted-foreground font-normal'
            }`}
          >
            {value || placeholder}
          </span>
        </div>

        {value && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="p-0.5 rounded-xs text-muted-foreground hover:text-foreground hover:bg-gray-200 transition-colors shrink-0"
            title="Clear date"
          >
            <X size={12} />
          </button>
        )}
      </div>

      {/* Popover Dropdown Calendar */}
      {isOpen && (
        <div className="absolute z-50 left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-xl p-3 w-64 text-xs animate-in fade-in zoom-in-95 duration-100 select-none">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-gray-100">
            <button
              type="button"
              onClick={prevMonth}
              className="p-1 rounded-sm text-muted-foreground hover:text-foreground hover:bg-gray-100 transition-colors"
              title="Previous Month"
            >
              <ChevronLeft size={15} />
            </button>

            <span className="font-bold text-foreground text-xs">
              {MONTH_NAMES[viewMonth]} {viewYear}
            </span>

            <button
              type="button"
              onClick={nextMonth}
              className="p-1 rounded-sm text-muted-foreground hover:text-foreground hover:bg-gray-100 transition-colors"
              title="Next Month"
            >
              <ChevronRight size={15} />
            </button>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 text-center font-semibold text-muted-foreground text-[10px] mb-1">
            {DAY_NAMES.map((name) => (
              <div key={name} className="py-0.5">
                {name}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-y-0.5 text-center text-xs">
            {calendarDays.map((d) => {
              const isSelected = value === d.ymd
              const isToday = todayYMD === d.ymd

              return (
                <button
                  key={d.ymd}
                  type="button"
                  onClick={() => handleSelectDay(d)}
                  className={`w-7 h-7 mx-auto flex items-center justify-center rounded-sm transition-all text-xs ${
                    isSelected
                      ? 'bg-[#f1592a] text-white font-bold shadow-xs'
                      : isToday
                      ? 'ring-1 ring-[#f1592a] text-[#f1592a] font-semibold hover:bg-[#f1592a]/10'
                      : d.isCurrentMonth
                      ? 'text-foreground hover:bg-[#f1592a]/10 hover:text-[#f1592a]'
                      : 'text-muted-foreground/35 hover:bg-gray-100 hover:text-foreground'
                  }`}
                >
                  {d.day}
                </button>
              )
            })}
          </div>

          {/* Popover Footer: Clear & Today */}
          <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-gray-100 text-xs">
            <button
              type="button"
              onClick={handleClear}
              className="text-xs font-medium text-muted-foreground hover:text-red-500 transition-colors"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={handleToday}
              className="text-xs font-bold text-[#f1592a] hover:text-[#f1592a]/80 transition-colors"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
