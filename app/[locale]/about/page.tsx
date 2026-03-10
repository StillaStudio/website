import { Header } from "@/components/header"
import { PracticeSection } from "@/components/practice-section"
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('about')
  const tContact = await getTranslations('contact')

  return (
    <div className="min-h-screen bg-[#FDFCF5]">
      <Header dark />

      <main className="pt-24 pb-20 bg-[#FDFCF5]">

        {/* About Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl font-normal leading-tight serif mb-16">
              Still a Studio. A multidisciplinary creative studio designing visuals that invite audiences to pause - a continuous act of stillness amid the noise.
            </h2>

            <div className="flex justify-end">
              <p className="text-2xl font-normal leading-relaxed max-w-2xl text-justify">
                We are graphic designers and storytellers in an endless conversation with illustration, photography and film.
              </p>
            </div>
          </div>
        </section>

        {/* Blue Section */}
        <section className="w-full bg-[url(/website/images/home/hero-image.webp)] bg-center bg-cover bg-no-repeat h-[800px]">
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
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-24">
              <div>
                <h3 className="text-[48px] mb-8 serif">{t('team.title')}</h3>
                <div className="space-y-2">
                  <p className="text-[24px]">Andréa Simões</p>
                  <p className="text-[24px]">Inês Oliveira</p>
                </div>
              </div>

              <div>
                <h3 className="text-[48px] mb-8 serif">{t('services.title')}</h3>
                <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                  <p className="text-[24px]">{t('services.artDirection')}</p>
                  <p className="text-[24px]">{t('services.illustration')}</p>
                  <p className="text-[24px]">{t('services.brandStrategy')}</p>
                  <p className="text-[24px]">{t('services.naming')}</p>
                  <p className="text-[24px]">{t('services.branding')}</p>
                  <p className="text-[24px]">{t('services.packaging')}</p>
                  <p className="text-[24px]">{t('services.copy')}</p>
                  <p className="text-[24px]">{t('services.photography')}</p>
                  <p className="text-[24px]">{t('services.corporatePresentations')}</p>
                  <p className="text-[24px]">{t('services.print')}</p>
                  <p className="text-[24px]">{t('services.creativeDirection')}</p>
                  <p className="text-[24px]">{t('services.patternDesign')}</p>
                  <p className="text-[24px]">{t('services.editorial')}</p>
                  <p className="text-[24px]">{t('services.socialMediaDesign')}</p>
                  <p className="text-[24px]">{t('services.film')}</p>
                  <p className="text-[24px]">{t('services.visualIdentity')}</p>
                  <p className="text-[24px]">{t('services.identitySystems')}</p>
                  <p className="text-[24px]">{t('services.webDesign')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 px-6 bg-[#FDFCF5]">
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
