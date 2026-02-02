import { Header } from "@/components/header"
import { ProjectsGrid } from "@/components/projects-grid"
import { getAllProjects } from "@/lib/projects"
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'

const categoryKeys = [
  'all',
  'creativeDirection',
  'visualIdentity',
  'printEditorial',
  'illustrationPatterns',
  'webDesign',
  'film',
  'socialMedia',
] as const

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('work')
  const projects = getAllProjects(locale as 'en' | 'pt')

  // Build translations object for client component
  const translations: Record<string, string> = {}
  for (const key of categoryKeys) {
    translations[key] = t(`categories.${key}`)
  }

  return (
    <div className="min-h-screen">
      <Header dark/>

      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <ProjectsGrid
            projects={projects}
            categoryKeys={categoryKeys}
            translations={translations}
          />
        </div>
      </main>
    </div>
  )
}
