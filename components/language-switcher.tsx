'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { useState, useRef, useEffect } from 'react'

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' }
] as const

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLocale = locales.find(l => l.code === locale) || locales[0]

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as 'en' | 'pt' })
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[16px] font-regular hover:opacity-70 transition-opacity flex items-center gap-1"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {currentLocale.label}
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 py-1 bg-white border border-gray-200 rounded shadow-lg min-w-[60px] z-50"
          role="listbox"
        >
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => handleLocaleChange(l.code)}
              className={`w-full px-3 py-1 text-left text-sm hover:bg-gray-100 transition-colors text-black ${
                l.code === locale ? 'font-medium' : ''
              }`}
              role="option"
              aria-selected={l.code === locale}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
