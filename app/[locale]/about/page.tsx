import { Header } from "@/components/header"
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('about')

  return (
    <div className="min-h-screen">
      <Header dark />

      <main className="pt-24 pb-20 bg-white">

        {/* About Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-5xl font-normal leading-tight serif">
                  Still a Studio. A multidisciplinary creative studio designing visuals that invite audiences to pause - a continuous act of stillness amid the noise.
                </h2>
              </div>

              <div className="flex flex-col gap-8">
                <p className="text-2xl font-normal leading-relaxed">
                  We are graphic designers and storytellers in an endless conversation with illustration, photography and film.
                </p>
                <p className="text-2xl font-normal leading-relaxed">
                  We are made of matter in combustion. And believe us, there is power in being made of wonder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blue Section */}
        <section className="bg-[url(/website/images/home/hero-image.png)] h-[800px]">
          <div className="container mx-0">
          </div>
        </section>

        {/* The Practice Section */}
        <section className="bg-black text-white py-32 px-6">
          <div className="container mx-auto max-w-5xl">
            <h3 className="text-4xl md:text-5xl font-light text-center mb-24 serif">{t('practice.title')}</h3>

            <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
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
    </div>
  )
}
