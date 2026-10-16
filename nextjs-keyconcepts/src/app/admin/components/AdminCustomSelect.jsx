'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const inputCls =
  'w-full px-2.5 py-1.5 text-xs rounded-md border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f1592a]/20 focus:border-[#f1592a] transition-all duration-150 shadow-2xs'

function AdminCustomSelect({
  value,
  onChange,
  options = [],
  placeholder = '--Select--',
  className = '',
  buttonClassName = '',
  disabled = false,
  direction = 'auto', // 'auto' | 'top' | 'bottom'
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [openDirection, setOpenDirection] = useState('bottom')
  const selectRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleToggle = () => {
    if (disabled) return

    if (!isOpen) {
      if (direction === 'auto' && selectRef.current) {
        const rect = selectRef.current.getBoundingClientRect()
        const spaceBelow = window.innerHeight - rect.bottom
        setOpenDirection(spaceBelow < 220 ? 'top' : 'bottom')
      } else {
        setOpenDirection(direction)
      }
    }
    setIsOpen((prev) => !prev)
  }

  // Normalize options array to standard { value, label } format
  const normalizedOptions = useMemo(() => {
    return (options || []).map((opt) => {
      if (typeof opt === 'object' && opt !== null) {
        return {
          value: opt.value !== undefined ? String(opt.value) : '',
          label: opt.label !== undefined ? String(opt.label) : String(opt.value ?? ''),
        }
      }
      return { value: String(opt), label: String(opt) }
    })
  }, [options])

  const selectedOption = normalizedOptions.find(
    (opt) => String(opt.value) === String(value ?? '')
  )

  const displayText = selectedOption?.label || placeholder

  const isUp = openDirection === 'top'

  return (
    <div ref={selectRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={handleToggle}
        className={`${buttonClassName || inputCls} cursor-pointer flex items-center justify-between text-left pr-2 gap-1.5 transition-all duration-150 ${
          isOpen ? 'ring-2 ring-[#f1592a]/20 border-[#f1592a] bg-white' : ''
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span className="truncate text-gray-800 font-normal text-xs">
          {displayText}
        </span>
        <ChevronDown
          size={12}
          className={`text-gray-400 shrink-0 transition-transform duration-200 ${
            isOpen ? (isUp ? 'rotate-0 text-[#f1592a]' : 'rotate-180 text-[#f1592a]') : (isUp ? 'rotate-180' : '')
          }`}
        />
      </button>

      {isOpen && (
        <ul
          className={`absolute z-50 left-0 right-0 ${
            isUp ? 'bottom-full mb-1.5' : 'top-full mt-1.5'
          } bg-white border border-gray-200 rounded-md shadow-2xl max-h-56 overflow-y-auto py-1 text-xs custom-scrollbar animate-in fade-in duration-100 divide-y divide-gray-50 min-w-full`}
        >
          {normalizedOptions.length === 0 ? (
            <li className="px-3 py-2 text-xs text-gray-400 text-center">
              No options available
            </li>
          ) : (
            normalizedOptions.map((option) => {
              const isSelected = String(value ?? '') === option.value
              return (
                <li
                  key={option.value}
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                  className={`px-3 py-1.5 text-xs cursor-pointer transition-colors flex items-center justify-between ${
                    isSelected
                      ? 'bg-orange-50 text-[#f1592a] font-semibold'
                      : 'text-gray-700 hover:bg-orange-50/50 hover:text-[#f1592a]'
                  }`}
                >
                  <span className="truncate text-xs">{option.label}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f1592a] ml-2 shrink-0" />
                  )}
                </li>
              )
            })
          )}
        </ul>
      )}
    </div>
  )
}

export { AdminCustomSelect, inputCls }
