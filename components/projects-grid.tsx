'use client'

import { useState } from 'react'
import Image from "next/image"
import { Link } from "@/i18n/routing"
import type { LocalizedProject } from "@/lib/projects"
import { getAssetPath } from '@/lib/utils/assets'

// Map category keys to role keywords (case-insensitive matching) - includes EN and PT
const categoryRoleMap: Record<string, string[]> = {
  all: [],
  creativeDirection: ['Creative Direction', 'Direção Criativa'],
  visualIdentity: ['Visual Identity', 'Branding', 'Brand Strategy', 'Identidade Visual'],
  printEditorial: ['Print', 'Editorial', 'Packaging', 'Gráfico', 'Graphic Design', 'Design Gráfico'],
  illustrationPatterns: ['Illustration', 'Pattern Design', 'Ilustração', 'Design de Padrões'],
  webDesign: ['Web Design', 'Webdesign'],
  film: ['Film', 'Filme'],
  socialMedia: ['Social Media', 'Redes Sociais'],
}

interface ProjectsGridProps {
  projects: LocalizedProject[]
  categoryKeys: readonly string[]
  translations: Record<string, string>
}

export function ProjectsGrid({ projects, categoryKeys, translations }: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((project) => {
        const roleKeywords = categoryRoleMap[activeCategory] || []
        return roleKeywords.some((keyword) =>
          project.role.toLowerCase().includes(keyword.toLowerCase())
        )
      })

  return (
    <>
      {/* Filter Categories */}
      <div className="flex flex-wrap gap-6 text-sm">
        {categoryKeys.map((categoryKey) => (
          <button
            key={categoryKey}
            onClick={() => setActiveCategory(categoryKey)}
            className={`hover:opacity-70 transition-opacity hover:cursor-pointer ${
              activeCategory === categoryKey ? 'font-bold' : ''
            }`}
          >
            {translations[categoryKey]}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-3 mt-10">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={`/work/${project.id}`} className="group">
            <div className="relative overflow-hidden bg-secondary h-202.5 mb-3">
              <Image
                src={getAssetPath(project.image || "/placeholder.svg")}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-base font-regular mb-15">{project.title}</h3>
          </Link>
        ))}
      </div>

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-muted-foreground mt-10">
          No projects found in this category.
        </p>
      )}
    </>
  )
}
