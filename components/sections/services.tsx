'use client'

import { BsArrowDownRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Desenvolvedor Web',
    description: 'Meu foco é desenvolver aplicações modernas que combinem desempenho, usabilidade e design intuitivo, garantindo que cada interação do usuário seja fluida e eficiente.',
  },
  {
    num: '02',
    title: 'Design de UI/UX',
    description: 'Meu objetivo é criar interfaces que não sejam apenas visualmente atraentes, mas também intuitivas e funcionais. Usando ferramentas como o Figma, consigo transformar ideias em designs impressionantes, sempre com foco na experiência do usuário.',
  },
]

const Services = () => {
  return (
    <section id="services" className="bg-primaryLight min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4 sm:px-6 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] sm:gap-[60px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="h-full min-h-[340px] sm:min-h-[400px] xl:min-h-[420px] flex flex-col justify-between gap-4 sm:gap-6 group p-4 sm:p-6 bg-transparent"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <a
                  href="#work"
                  className="w-[52px] sm:w-[60px] xl:w-[70px] h-[52px] sm:h-[60px] xl:h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-2xl sm:text-3xl" />
                </a>
              </div>

              <h2 className="text-2xl sm:text-[32px] xl:text-[42px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              <p className="text-sm sm:text-base text-white/60">
                {service.description}
              </p>

              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
