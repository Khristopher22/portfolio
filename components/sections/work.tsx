'use client'

import { useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { FaFigma } from 'react-icons/fa'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import Link from 'next/link'
import Image from 'next/image'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import WorkSliderBtns from '@/components/WorkSliderBtns'

const projects = [
  {
    num: '01',
    category: 'Full-Stack',
    title: 'BarberPro',
    description:
      'Organização e controle em um só lugar pensado para resolver a rotina desorganizada de barbearias que ainda usam papel, este sistema permite ao barbeiro controlar agendamentos, serviços e preços de forma simples e centralizada. Com interface responsiva e moderna, o projeto oferece uma base sólida para digitalização de pequenos negócios — reduzindo falhas operacionais e melhorando a gestão do tempo.',
    stack: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'Typescript' },
      { name: 'Tailwind' },
      { name: 'Postgresql' },
      { name: 'Stripe' },
    ],
    image: '/assets/work/Home.png',
    live: 'https://frontbarber.vercel.app/',
    github: 'https://github.com/Khristopher22/frontbarber',
    figma:
      'https://www.figma.com/design/X0UQ8EDrz9W3Ub2HvVaiKG/Barber-PRO?m=auto&t=KYUe9qwBJNkFRINn-6',
  },
  {
    num: '02',
    category: 'Full-Stack',
    title: 'Sujeito Pizza',
    description:
      'Sistema Full-Stack completo para Pizzarias! Gerenciamento de pedidos, produtos, categorias e clientes, com autenticação segura e cadastro de imagens. O projeto é totalmente responsivo, garantindo uma experiência consistente em qualquer dispositivo. Além disso, conta com um aplicativo para garçons desenvolvido em React Native, proporcionando um atendimento mais ágil e eficiente.',
    stack: [
      { name: 'React.js' },
      { name: 'React.Native' },
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'Typescript' },
      { name: 'Sass' },
      { name: 'Postgresql' },
    ],
    image: '/assets/work/Produtos.png',
    live: '',
    github: 'https://github.com/KhrisMassaneiro/frontpizzaria',
    figma: 'https://www.figma.com/design/3Dz6epyYn6w6HZJSjzBpH2/Sujeito-Pizza?node-id=0-1&t=7MDf2IApDjaGprh9-1',
  },
  {
    num: '03',
    category: 'Full-Stack',
    title: 'Dev Controle',
    description:
      'Uma solução completa para gerenciar chamados e clientes! Com o cadastro de clientes e registros de chamadas, você pode adicionar, editar e excluir chamadas facilmente. O sistema também possui autenticação segura, garantindo que apenas usuários autorizados tenham acesso ao painel. Ideal para empresas que precisam de um controle eficiente e organizado de seus chamados.',
    stack: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Typescript' },
      { name: 'MongoDb' },
    ],
    image: '/assets/work/dashboard.png',
    live: 'https://devcontrole-nine.vercel.app/',
    github: 'https://github.com/Khristopher22/sistemachamados',
    figma:
      'https://www.figma.com/design/HY2JjNzAD2cn5jKsup9Bwp/Dev-Controle?node-id=0-1&t=xUSLPVuuan4TC8pp-1',
  },
  {
    num: '04',
    category: 'Front-End',
    title: 'DevCurrency',
    description:
      'Projeto de listagem de criptomoedas com preços em tempo real, mostrando as máximas e mínimas do mercado. O projeto exibe informações detalhadas sobre cada criptomoeda, permitindo que você acompanhe as flutuações do mercado em tempo real e tome decisões mais informadas.',
    stack: [{ name: 'React.Js' }, { name: 'Typescript' }],
    image: '/assets/work/currency.png',
    live: 'https://criptomoeda-alpha.vercel.app/',
    github: 'https://github.com/Khristopher22/criptomoeda',
    figma: '',
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  return (
    <section
      id="work"
      className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse xl:flex-row xl:gap-[30px] gap-8">

          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between">
            <div className="flex flex-col gap-[20px] sm:gap-[30px] h-auto xl:h-[50%]">
              <div className="text-6xl sm:text-7xl xl:text-8xl font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-2xl sm:text-[32px] xl:text-[42px] font-bold leading-tight text-white capitalize">
                Projeto {project.category}
              </h2>
              <p className="text-sm sm:text-base text-white/60">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-base sm:text-lg xl:text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-3 sm:gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[52px] sm:w-[60px] xl:w-[70px] h-[52px] sm:h-[60px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-2xl sm:text-[28px] xl:text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Acessar projeto</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[52px] sm:w-[60px] xl:w-[70px] h-[52px] sm:h-[60px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-2xl sm:text-[28px] xl:text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.figma && (
                  <Link href={project.figma} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[52px] sm:w-[60px] xl:w-[70px] h-[52px] sm:h-[60px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <FaFigma className="text-2xl sm:text-[28px] xl:text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Figma</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="h-[220px] sm:h-[320px] xl:h-[480px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[420px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[20px] sm:text-[22px] w-[42px] sm:w-[44px] h-[42px] sm:h-[44px] flex justify-center items-center transition-all"
                iconsStyles="w-5 h-5 sm:w-6 h-6"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
