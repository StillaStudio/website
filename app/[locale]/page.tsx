import { Header } from "@/components/header"
import Image from "next/image"
import Logo from '@/public/images/home/logo.svg';
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { getAssetPath } from '@/lib/utils/assets'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('home')

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={getAssetPath("/videos/homepage/homepage.mp4")} type="video/mp4" />
        </video>
        <div className="text-center absolute bottom-0">
          <Image alt={t('logoAlt')} src={Logo} width="218" height={218}></Image>
        </div>
      </section >

    </div >
  )
}
