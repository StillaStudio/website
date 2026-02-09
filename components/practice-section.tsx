'use client'

import { useState } from 'react'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils/assets'

interface PracticeSectionProps {
  translations: {
    title: string
    step1: { title: string }
    step2: { title: string; description: string }
    step3: { title: string; description: string }
    step4: { title: string; description: string }
    step5: { title: string; description: string }
    step6: { title: string; description: string }
    end: string
  }
}

const imagePositions = {
  1: 'top-8 left-8',
  2: 'top-1/2 -translate-y-1/2 left-8',
  3: 'bottom-8 left-8',
  4: 'top-8 right-8',
  5: 'top-1/2 -translate-y-1/2 right-8',
  6: 'bottom-8 right-8',
}

export function PracticeSection({ translations }: PracticeSectionProps) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section className="bg-black text-white py-20 px-87.5 relative overflow-hidden min-h-200">
      <div className="container mx-auto max-w-4xl relative z-10">
        <h3 className="text-[48px] text-center mb-30.25 serif">
          {translations.title}
        </h3>

        <div className="grid md:grid-cols-2 gap-x-16 md:gap-x-24 gap-y-8 md:gap-y-12">
          {/* Left Column: Steps 1-3 */}
          <div className="space-y-8 md:space-y-12">
            <div
              onMouseEnter={() => setHoveredStep(1)}
              onMouseLeave={() => setHoveredStep(null)}
              className="cursor-default hover:cursor-pointer"
            >
              <h4 className="text-[24px] font-normal mb-2">{translations.step1.title}</h4>
            </div>

            <div
              onMouseEnter={() => setHoveredStep(2)}
              onMouseLeave={() => setHoveredStep(null)}
              className="cursor-default hover:cursor-pointer"
            >
              <h4 className="text-[24px] font-normal mb-2">{translations.step2.title}</h4>
              <p className="text-[16px] text-[#FDFCF5] leading-relaxed">
                {translations.step2.description}
              </p>
            </div>

            <div
              onMouseEnter={() => setHoveredStep(3)}
              onMouseLeave={() => setHoveredStep(null)}
              className="cursor-default hover:cursor-pointer"
            >
              <h4 className="text-[24px] font-normal mb-2">{translations.step3.title}</h4>
              <p className="text-[16px] text-[#FDFCF5] leading-relaxed">
                {translations.step3.description}
              </p>
            </div>
          </div>

          {/* Right Column: Steps 4-6 */}
          <div className="space-y-8 md:space-y-12">
            <div
              onMouseEnter={() => setHoveredStep(4)}
              onMouseLeave={() => setHoveredStep(null)}
              className="cursor-default hover:cursor-pointer"
            >
              <h4 className="text-[24px] font-normal mb-2">{translations.step4.title}</h4>
              <p className="text-[16px] text-[#FDFCF5] leading-relaxed">
                {translations.step4.description}
              </p>
            </div>

            <div
              onMouseEnter={() => setHoveredStep(5)}
              onMouseLeave={() => setHoveredStep(null)}
              className="cursor-default hover:cursor-pointer"
            >
              <h4 className="text-[24px] font-normal mb-2">{translations.step5.title}</h4>
              <p className="text-[16px] text-[#FDFCF5] leading-relaxed">{translations.step5.description}</p>
            </div>

            <div
              onMouseEnter={() => setHoveredStep(6)}
              onMouseLeave={() => setHoveredStep(null)}
              className="cursor-default hover:cursor-pointer"
            >
              <h4 className="text-[24px] font-normal mb-2">{translations.step6.title}</h4>
              <p className="text-[16px] text-[#FDFCF5] leading-relaxed">
                {translations.step6.description}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-34.75">
          <p className="text-lg md:text-xl font-light">{translations.end}</p>
        </div>
      </div>

      {/* Hover Images */}
      {[1, 2, 3, 4, 5, 6].map((step) => (
        <div
          key={step}
          className={`absolute ${imagePositions[step as keyof typeof imagePositions]}
            w-64 h-64 pointer-events-none transition-opacity duration-500 z-0
            ${hoveredStep === step ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="relative w-full h-full">
            <Image
              src={getAssetPath(`/images/about/${step}.webp`)}
              alt={`Practice step ${step}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  )
}
