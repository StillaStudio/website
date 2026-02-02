import { Header } from "@/components/header"
import Image from "next/image"
import { getProjectById, getAllProjectIds } from "@/lib/projects"
import { notFound } from "next/navigation"
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllProjectIds().map((id) => ({
      locale,
      slug: id,
    }))
  )
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations('project')
  const tContact = await getTranslations('contact')
  const project = getProjectById(slug, locale as 'en' | 'pt')

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header dark />

      <main className="pt-17">
        {/* Project Hero */}
        <div className="px-6 mb-30 mt-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-7xl mb-4 serif">{project.title}</h1>
            <p className="text-[24px] serif">{project.subtitle}</p>
          </div>
        </div>

        {/* Main Media */}
        {project.media[0]?.type === 'video' ? (
          <video
            src={project.media[0].src}
            autoPlay={!project.media[0].controls}
            muted={!project.media[0].controls}
            loop={!project.media[0].controls}
            controls={project.media[0].controls}
            playsInline
            className="w-full h-auto"
          />
        ) : (
          <div className="aspect-video relative">
            <Image src={project.media[0]?.src || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        )}


        {/* Project Info */}
        <div className="px-6 my-30">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16">
            <div>
              {project.description.map((paragraph, index) => (
                <p key={index} className="text-base mb-8">
                  {index === 0 ? (
                    <>
                      <span className="font-medium">{project.title}</span> {paragraph.replace(project.title, "")}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">{t('ourRole')}</p>
                <p>{project.role}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">{t('finalClient')}</p>
                <p>{project.client}</p>
              </div>
              {project.award && (
                <div>
                  <p className="text-muted-foreground mb-1">{t('award')}</p>
                  <p>{project.award}</p>
                </div>
              )}
              <div>
                <p className="text-muted-foreground mb-1">{t('date')}</p>
                <p>{project.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Media */}
        {project.media.slice(1, 3).map((item, index) => (
          <div key={index}>
            {item.type === 'video' ? (
              <video
                src={item.src}
                autoPlay={!item.controls}
                muted={!item.controls}
                loop={!item.controls}
                controls={item.controls}
                playsInline
                className="w-full h-auto"
              />
            ) : (
              <div className="aspect-video relative bg-black">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={`${project.title} ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        ))}

        {/* Quote */}
        {project.quoteText && (
          <div className="container my-30 max-w-5xl mx-auto">
            <div className="relative max-w-1/2 mb-[110px]">
              {project.quoteText && project.quoteText?.length > 0 && project.quoteText.map((paragraph, index) => (
                <p key={index} className="text-[24px] mb-[24px]">{paragraph}</p>
              ))}
            </div>
            {project.quote && (
              <blockquote className="ml-auto max-w-3/4 text-[40px] font-light leading-relaxed serif">
                "{project.quote}"
              </blockquote>
            )}
          </div>
        )}

        {/* Additional Media */}
        {project.media.slice(3).map((item, index) => (
          <div key={index}>
            {item.type === 'video' ? (
              <video
                src={item.src}
                autoPlay={!item.controls}
                muted={!item.controls}
                loop={!item.controls}
                controls={item.controls}
                playsInline
                className="w-full h-auto"
              />
            ) : (
              <div className="aspect-video relative bg-black">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={`${project.title} ${index + 4}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </main>
      <footer className="border-t border-white/10 py-8 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
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
