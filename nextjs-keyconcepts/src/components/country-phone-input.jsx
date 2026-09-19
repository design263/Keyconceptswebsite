'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Search, X } from 'lucide-react'
import { ALL_COUNTRIES } from '@/data/countries'

export function CountryPhoneInput({
  selectedCountry = ALL_COUNTRIES[0],
  onCountryChange,
  phoneNumber = '',
  onPhoneChange,
  error = '',
  placeholder,
  id = 'phone',
  name = 'phone',
  required = false,
  disabled = false,
  inputClassName = '',
  containerClassName = '',
  size = 'md', // 'sm' | 'md' | 'lg'
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef(null)
  const searchInputRef = useRef(null)

  // Filter countries based on search query
  const filteredCountries = ALL_COUNTRIES.filter((c) => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return true
    return (
      c.name.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.iso.toLowerCase().includes(q)
    )
  })

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
        setSearchQuery('')
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        setSearchQuery('')
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const paddingY = size === 'sm' ? 'py-1.5' : size === 'lg' ? 'py-3.5' : 'py-2.5'

  return (
    <div className={`relative ${containerClassName}`} ref={dropdownRef}>
      <div className="flex gap-2 items-center w-full">
        {/* Country Code Trigger Button */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          className={`px-3 ${paddingY} text-sm border rounded-xl bg-white flex items-center justify-between gap-1.5 font-medium cursor-pointer shrink-0 transition-all select-none shadow-sm ${
            error ? 'border-red-500' : 'border-gray-200 hover:border-[#f1592a]/50'
          } ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}`}
          title={`Select Country Code (Current: ${selectedCountry.name} ${selectedCountry.code})`}
          aria-label={`Select country code, currently ${selectedCountry.name} ${selectedCountry.code}`}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="text-base leading-none">{selectedCountry.flag}</span>
          <span className="font-mono text-xs sm:text-sm font-semibold text-gray-800">
            {selectedCountry.code}
          </span>
          <ChevronDown
            size={14}
            className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180 text-[#f1592a]' : ''}`}
          />
        </button>

        {/* Local Phone Input Field */}
        <div className="relative flex-1">
          <input
            type="tel"
            id={id}
            name={name}
            value={phoneNumber}
            required={required}
            disabled={disabled}
            onChange={(e) => {
              const digitsOnly = e.target.value.replace(/[^\d\s-]/g, '')
              onPhoneChange(digitsOnly)
            }}
            placeholder={placeholder || selectedCountry.placeholder || 'Enter phone number'}
            className={`block w-full px-3.5 ${paddingY} text-sm border rounded-xl focus:ring-1 focus:ring-[#f1592a] focus:border-[#f1592a] outline-none transition-all bg-white text-gray-900 ${
              error ? 'border-red-500' : 'border-gray-200'
            } ${inputClassName}`}
          />
        </div>
      </div>

      {/* Error message */}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}

      {/* Searchable Dropdown Popover */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Country calling codes"
          className="absolute top-full left-0 mt-1.5 w-72 sm:w-80 max-h-72 bg-white border border-gray-200 rounded-2xl shadow-2xl z-[250] overflow-hidden flex flex-col animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {/* Search Box Header */}
          <div className="p-2 border-b border-gray-100 bg-gray-50/80 sticky top-0 z-10 flex items-center gap-2">
            <Search size={14} className="text-gray-400 shrink-0 ml-1.5" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country or code (+91, UK, USA)..."
              className="w-full px-2 py-1.5 text-xs sm:text-sm bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 hover:bg-gray-200 rounded-full text-gray-400 hover:text-gray-600 shrink-0"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Scrollable Country List */}
          <div className="overflow-y-auto max-h-56 divide-y divide-gray-50/50">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((c) => {
                const isSelected = c.iso === selectedCountry.iso && c.code === selectedCountry.code
                return (
                  <button
                    key={`${c.iso}-${c.code}`}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onCountryChange(c)
                      setIsOpen(false)
                      setSearchQuery('')
                    }}
                    className={`w-full px-3 py-2 text-left hover:bg-[#f1592a]/10 flex items-center justify-between text-xs sm:text-sm cursor-pointer transition-colors ${
                      isSelected ? 'bg-[#f1592a]/5 font-semibold' : ''
                    }`}
                  >
                    <span className="flex items-center gap-2.5 truncate">
                      <span className="text-base leading-none shrink-0">{c.flag}</span>
                      <span className="text-gray-800 truncate">{c.name}</span>
                    </span>
                    <span className="font-mono text-xs text-gray-500 font-semibold shrink-0 ml-2">
                      {c.code}
                    </span>
                  </button>
                )
              })
            ) : (
              <div className="p-4 text-center text-xs text-gray-400">
                No country found matching "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
