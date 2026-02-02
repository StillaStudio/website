import { Header } from "@/components/header"
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('contact')

  return (
    <div className="min-h-screen">
      <Header />

      <main className="min-h-screen bg-black text-white flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 serif">{t('title')}</h1>
            <p className="text-lg mb-8 font-light">
              {t.rich('description', {
                email: (chunks) => <span className="font-medium">{chunks}</span>
              })}
            </p>
            <a href="mailto:hello@still-a-studio.com" className="text-lg underline hover:opacity-70 transition-opacity">
              hello@still-a-studio.com
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>
              <a href="mailto:hello@still-a-studio.com" className="hover:opacity-70 transition-opacity">
                hello@still-a-studio.com
              </a>
            </div>
            <div>{t('location')}</div>
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
      </main>
    </div>
  )
}
