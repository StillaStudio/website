import { Header } from "@/components/header"
import { PracticeSection } from "@/components/practice-section"
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('about')
  const tContact = await getTranslations('contact')

  return (
    <div className="min-h-screen bg-white">
      <Header dark />

      <main className="pt-24 pb-20 bg-white">

        {/* About Section */}
        <section className="py-16 md:py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-normal leading-tight serif mb-8 md:mb-16">
              {t('headline')}
            </h2>

            <div className="flex justify-end">
              <p className="text-lg md:text-2xl font-normal leading-relaxed max-w-2xl text-justify">
                {t('description1')}
              </p>
            </div>
          </div>
        </section>

        {/* Blue Section */}
        <section className="w-full h-[400px] md:h-[800px] relative">
          <Image
            src="/images/home/ABOUT.webp"
            alt="About Still a Studio"
            fill
            className="object-cover"
            priority
          />
        </section>

        {/* The Practice Section */}
        <PracticeSection
          translations={{
            title: t('practice.title'),
            step1: { title: t('practice.step1.title') },
            step2: { title: t('practice.step2.title'), description: t('practice.step2.description') },
            step3: { title: t('practice.step3.title'), description: t('practice.step3.description') },
            step4: { title: t('practice.step4.title'), description: t('practice.step4.description') },
            step5: { title: t('practice.step5.title'), description: t('practice.step5.description') },
            step6: { title: t('practice.step6.title'), description: t('practice.step6.description') },
            end: t('practice.end'),
          }}
        />

        {/* Core Team & Services */}
        <section className="py-16 md:py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
              <div>
                <h3 className="text-3xl md:text-[48px] mb-6 md:mb-8 serif">{t('team.title')}</h3>
                <div className="space-y-2">
                  <p className="text-lg md:text-[24px]">Andréa Simões</p>
                  <p className="text-lg md:text-[24px]">Inês Oliveira</p>
                </div>
              </div>

              <div>
                <h3 className="text-3xl md:text-[48px] mb-6 md:mb-8 serif">{t('services.title')}</h3>
                <div className="grid grid-cols-2 gap-x-12 md:gap-x-24 gap-y-3">
                  <p className="text-base md:text-[24px]">{t('services.artDirection')}</p>
                  <p className="text-base md:text-[24px]">{t('services.brandStrategy')}</p>
                  <p className="text-base md:text-[24px]">{t('services.branding')}</p>
                  <p className="text-base md:text-[24px]">{t('services.copy')}</p>
                  <p className="text-base md:text-[24px]">{t('services.corporatePresentations')}</p>
                  <p className="text-base md:text-[24px]">{t('services.creativeDirection')}</p>
                  <p className="text-base md:text-[24px]">{t('services.editorial')}</p>
                  <p className="text-base md:text-[24px]">{t('services.film')}</p>
                  <p className="text-base md:text-[24px]">{t('services.identitySystems')}</p>
                  <p className="text-base md:text-[24px]">{t('services.illustration')}</p>
                  <p className="text-base md:text-[24px]">{t('services.naming')}</p>
                  <p className="text-base md:text-[24px]">{t('services.packaging')}</p>
                  <p className="text-base md:text-[24px]">{t('services.patternDesign')}</p>
                  <p className="text-base md:text-[24px]">{t('services.photography')}</p>
                  <p className="text-base md:text-[24px]">{t('services.print')}</p>
                  <p className="text-base md:text-[24px]">{t('services.socialMediaDesign')}</p>
                  <p className="text-base md:text-[24px]">{t('services.visualIdentity')}</p>
                  <p className="text-base md:text-[24px]">{t('services.webDesign')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 px-6 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-base">
          <div>
            <a href="mailto:hello@still-a-studio.com" className="hover:opacity-70 transition-opacity">
              hello@still-a-studio.com
            </a>
          </div>
          <div>{tContact('location')}</div>
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
