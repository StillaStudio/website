'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // Get browser language preference
    const browserLang = navigator.language.toLowerCase()
    const locale = browserLang.startsWith('pt') ? 'pt' : 'en'
    router.replace(`/${locale}`)
  }, [router])

  return null
}
