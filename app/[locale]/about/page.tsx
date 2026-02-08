import { Header } from "@/components/header"
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('about')
  const tContact = await getTranslations('contact')

  return (
    <div className="min-h-screen">
      <Header dark />

      <main className="pt-24 pb-20 bg-white">

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
        <section className="w-full bg-[url(/website/images/home/hero-image.png)] bg-center bg-cover bg-no-repeat h-[800px]">
        </section>

        {/* The Practice Section */}
        <section className="bg-black text-white py-32 px-6">
          <div className="container mx-auto max-w-5xl">
            <h3 className="text-4xl md:text-5xl font-light text-center mb-24 serif">{t('practice.title')}</h3>

            <div className="grid md:grid-cols-2 gap-x-20 gap-y-6">
              <div>
                <h4 className="text-lg font-light mb-3">{t('practice.step1.title')}</h4>
              </div>

              <div>
                <h4 className="text-lg font-light mb-3">{t('practice.step4.title')}</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {t('practice.step4.description')}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-light mb-3">{t('practice.step2.title')}</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {t('practice.step2.description')}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-light mb-3">{t('practice.step5.title')}</h4>
                <p className="text-sm text-white/70 leading-relaxed">{t('practice.step5.description')}</p>
              </div>

              <div>
                <h4 className="text-lg font-light mb-3">{t('practice.step3.title')}</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {t('practice.step3.description')}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-light mb-3">{t('practice.step6.title')}</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {t('practice.step6.description')}
                </p>
              </div>
            </div>

            <div className="text-center mt-32">
              <p className="text-2xl font-light serif">{t('practice.end')}</p>
            </div>
          </div>
        </section>

        {/* Core Team & Services */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-24">
              <div>
                <h3 className="text-3xl font-light mb-8 serif">{t('team.title')}</h3>
                <div className="space-y-2">
                  <p className="text-base">Andréa Simões</p>
                  <p className="text-base">Inês Oliveira</p>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-light mb-8 serif">{t('services.title')}</h3>
                <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                  <p className="text-base">{t('services.artDirection')}</p>
                  <p className="text-base">{t('services.illustration')}</p>
                  <p className="text-base">{t('services.brandStrategy')}</p>
                  <p className="text-base">{t('services.naming')}</p>
                  <p className="text-base">{t('services.branding')}</p>
                  <p className="text-base">{t('services.packaging')}</p>
                  <p className="text-base">{t('services.copy')}</p>
                  <p className="text-base">{t('services.photography')}</p>
                  <p className="text-base">{t('services.corporatePresentations')}</p>
                  <p className="text-base">{t('services.print')}</p>
                  <p className="text-base">{t('services.creativeDirection')}</p>
                  <p className="text-base">{t('services.patternDesign')}</p>
                  <p className="text-base">{t('services.editorial')}</p>
                  <p className="text-base">{t('services.socialMediaDesign')}</p>
                  <p className="text-base">{t('services.film')}</p>
                  <p className="text-base">{t('services.visualIdentity')}</p>
                  <p className="text-base">{t('services.identitySystems')}</p>
                  <p className="text-base">{t('services.webDesign')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-8 px-6">
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
