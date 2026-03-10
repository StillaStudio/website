'use client'

import { Link } from "@/i18n/routing"
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './language-switcher'
import { useState } from 'react'

export function Header({dark}: {dark?: boolean}) {
  const t = useTranslations('header')
  const [isHovered, setIsHovered] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`${!dark? "text-white bg-transparent" : 'bg-white'} fixed top-0 left-0 right-0 z-50 px-6 py-3 md:py-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className={`text-base md:text-2xl font-normal relative z-50 ${menuOpen && dark ? 'text-white' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="inline-flex items-baseline">
            <span>Still a{'\u00A0'}</span>
            <span
              className="transition-all duration-200 ease-in-out overflow-hidden inline-block"
              style={{
                opacity: isHovered ? 1 : 0,
                maxWidth: isHovered ? '120px' : '0',
                fontWeight: 300,
                whiteSpace: 'nowrap',
              }}
            >
              Creative{'\u00A0'}
            </span>
            <span>Studio</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/work" className="text-2xl font-regular hover:opacity-70 transition-opacity">
            {t('work')}
          </Link>
          <Link href="/about" className="text-2xl font-regular hover:opacity-70 transition-opacity">
            {t('about')}
          </Link>
          <Link href="/contact" className="text-2xl font-regular hover:opacity-70 transition-opacity">
            {t('contact')}
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile menu button + language switcher */}
        <div className={`md:hidden flex items-center gap-3 relative z-50 ${menuOpen ? 'text-white' : dark ? 'text-black' : 'text-white'}`}>
          <button
            className="text-sm hover:opacity-70 transition-opacity"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Mobile fullscreen menu */}
        <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} ${menuOpen || !dark ? 'text-white' : 'text-black'}`}>
          <Link href="/work" className="text-white text-2xl hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>
            {t('work')}
          </Link>
          <Link href="/about" className="text-white text-2xl hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>
            {t('about')}
          </Link>
          <Link href="/contact" className="text-white text-2xl hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>
            {t('contact')}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
