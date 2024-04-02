'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Slide } from 'react-awesome-reveal'
import { useTranslations } from 'next-intl'
export default function ProjectsSection() {
  const t = useTranslations('ProjectsSection')
  const [scrollDirection, setScrollDirection] = useState('up')

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'up' : 'down'

      if (direction !== scrollDirection) {
        setScrollDirection(direction)
      }

      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateScrollDirection)

    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [scrollDirection])

  return (
    <div
      id="projects"
      className="container py-10 md:py-20  px-4 md:px-6  mx-auto"
    >
      <div className="flex-col flex  md:flex-row pb-24">
        <h3 className="w-56 pb-4">{t('ourPortfolio')}</h3>
        <div>
          <h2 className="">{t('projects')}</h2>
        </div>
      </div>
      <div className="grid-container">
        <Slide
          duration={1200}
          delay={1}
          direction={scrollDirection === 'down' ? 'down' : 'up'}
          className="div1"
        >
          <div>
            <div>
              <Image
                src="/projects/greenbuilding.jpg"
                alt="projects"
                width={1536}
                height={500}
              />
              <p className="py-2">{t('exteriorDesign')}</p>
              <div className="border-t border-neutral-400 w-full border-dashed"></div>
            </div>
          </div>
        </Slide>
        <Slide
          duration={1200}
          delay={1}
          direction={scrollDirection === 'down' ? 'down' : 'up'}
          className="div2"
        >
          <div>
            <div>
              <Image
                src="/projects/interior.jpg"
                alt="projects"
                width={400}
                height={500}
              />
              <p className="py-2">{t('interiorDesign')}</p>
              <div className="border-t border-neutral-400 w-full border-dashed"></div>
            </div>
          </div>
        </Slide>
        <Slide
          duration={1200}
          delay={1}
          direction={scrollDirection === 'down' ? 'down' : 'up'}
          className="div3"
        >
          <div>
            <div>
              <Image
                src="/projects/garden.jpg"
                alt="projects"
                width={400}
                height={0}
              />
              <p className="py-2">{t('exteriorDesign')}</p>
              <div className="border-t border-neutral-400 w-full border-dashed"></div>
            </div>
          </div>
        </Slide>
        <Slide
          duration={1200}
          delay={1}
          direction={scrollDirection === 'down' ? 'down' : 'up'}
          className="div4"
        >
          <div>
            <div>
              <Image
                src="/projects/balcony.jpg"
                alt="projects"
                width={1256}
                height={0}
              />
              <p className="py-2">{t('modernExteriorDesign')}</p>
              <div className="border-t border-neutral-400 w-full border-dashed"></div>
            </div>
          </div>
        </Slide>
        <Slide
          duration={1200}
          delay={1}
          direction={scrollDirection === 'down' ? 'down' : 'up'}
          className="div5"
        >
          <div>
            <div>
              <Image
                src="/projects/brands.jpg"
                alt="projects"
                width={600}
                height={0}
              />
              <p className="py-2">{t('brandIdentity')}</p>
              <div className="border-t border-neutral-400 w-full border-dashed"></div>
            </div>
          </div>
        </Slide>
        <Slide
          duration={1200}
          delay={1}
          direction={scrollDirection === 'down' ? 'down' : 'up'}
          className="div6"
        >
          <div>
            <div>
              <Image
                src="/projects/dashboard.jpg"
                alt="projects"
                width={400}
                height={0}
              />
            </div>
            <div>
              <p className="py-2">{t('minimalism')}</p>
              <div className="border-t border-neutral-400 w-full border-dashed"></div>
            </div>
          </div>
        </Slide>
        <Slide
          duration={1200}
          delay={1}
          direction={scrollDirection === 'down' ? 'down' : 'up'}
          className="div7"
        >
          <div>
            <div>
              <Image
                src="/projects/fasade.jpg"
                alt="projects"
                width={600}
                height={0}
              />
              <p className="py-2">{t('luxuryDesign')}</p>
              <div className="border-t border-neutral-400 w-full border-dashed"></div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}
