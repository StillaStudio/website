'use client'

import { useState } from 'react'
import Image from "next/image"
import { Link } from "@/i18n/routing"
import type { LocalizedProject, ProjectCategory } from "@/lib/projects"
import { getAssetPath } from '@/lib/utils/assets'

interface ProjectsGridProps {
  projects: LocalizedProject[]
  categoryKeys: readonly string[]
  translations: Record<string, string>
}

export function ProjectsGrid({ projects, categoryKeys, translations }: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((project) =>
        project.categories.includes(activeCategory as ProjectCategory)
      )

  return (
    <>
      {/* Filter Categories */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-6 text-xs md:text-sm">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3 mt-8 md:mt-10">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={`/work/${project.id}`} className="group">
            <div className="relative overflow-hidden bg-secondary aspect-4/3 md:h-202.5 md:aspect-auto mb-8 md:mb-15">
              <Image
                src={getAssetPath(project.image || "/placeholder.svg")}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500"
              />
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Title overlay */}
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-base font-regular opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 px-6 text-center">
                {project.title}
              </h3>
            </div>
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
