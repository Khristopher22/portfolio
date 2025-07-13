'use client'

import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

import Social from '@/components/Social'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'
import Services from '@/components/sections/services'
import Contact from '@/components/sections/contact'
import Resume from '@/components/sections/resume'
import Work from '@/components/sections/work'

export default function Home() {
  return (
    <main className="h-full scroll-smooth">
      {/* Seção Home */}
      <section id="home" className="min-h-[calc(100vh-104px)]">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Desenvolvedor de Software</span>
              <h1 className="h1">
                Olá, eu sou <br /> <span className="text-accent">Khristopher Kidman</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Sou especialista em criar experiências digitais elegantes e sou proficiente em diversas linguagens de programação e tecnologias.
              </p>

              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button asChild variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <a href="/assets/curriculum/curriculum.pdf" download="curriculum.pdf">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </a>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
              </div>
            </div>

            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>

        <Stats />
      </section>

      {/* Outras seções */}
      <Services />
      <Work />
      <Resume />
      <Contact />
    </main>
  )
}