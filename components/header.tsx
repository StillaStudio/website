'use client'

import { Link } from "@/i18n/routing"
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './language-switcher'
import { useState } from 'react'

export function Header({dark}: {dark?: boolean}) {
  const t = useTranslations('header')
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header className={`${!dark? "text-white bg-transparent" : 'bg-background'} fixed top-0 left-0 right-0 z-50`}>
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-base md:text-2xl font-regular relative inline-block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="inline-block">
            Still a{' '}
            <span
              className="inline-block transition-all duration-300 ease-in-out"
              style={{
                opacity: isHovered ? 1 : 0,
                width: isHovered ? 'auto' : '0px',
                overflow: 'hidden',
              }}
            >
              Creative{' '}
            </span>
            <span className="inline-block">Studio</span>
          </span>
        </Link>

        <nav className="flex items-center gap-3 md:gap-8">
          <Link href="/work" className="text-sm md:text-2xl font-regular hover:opacity-70 transition-opacity">
            {t('work')}
          </Link>
          <Link href="/about" className="text-sm md:text-2xl font-regular hover:opacity-70 transition-opacity">
            {t('about')}
          </Link>
          <Link href="/contact" className="text-sm md:text-2xl font-regular hover:opacity-70 transition-opacity">
            {t('contact')}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}
