'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const inputCls =
  'w-full px-4 py-1.5 text-sm rounded-sm border border-gray-200 bg-gray-100 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#f1592a]/20 focus:border-[#f1592a] transition-all duration-200'

function AdminCustomSelect({ value, onChange, options, className = '' }) {
  const [isOpen, setIsOpen] = useState(false)
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

  const selectedOption = options.find((opt) => opt.value === value)

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${inputCls} cursor-pointer flex items-center justify-between pr-2 gap-2`}
      >
        <span>{selectedOption?.label || 'Select...'}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {isOpen && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-sm shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={`px-4 py-2 text-sm cursor-pointer transition-colors hover:bg-[#f1592a]/10 ${
                value === option.value
                  ? 'bg-[#f1592a]/5 text-[#f1592a] font-medium'
                  : 'text-foreground'
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { AdminCustomSelect, inputCls }
