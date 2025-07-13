'use client'

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaSass,
  FaFigma,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJest,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiMysql,
} from 'react-icons/si'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const about = {
  title: 'Sobre mim',
  description:
    "Sou um desenvolvedor com forte capacidade de aprendizado e foco em resultados. Tenho experiência em desenvolvimento full stack, utilizando tecnologias como Next.js, ReactJS, Node.js, TypeScript e bancos de dados relacionais e não relacionais. Também atuo com UI/UX, criando interfaces intuitivas e acessíveis no Figma. Atualmente curso Engenharia de Software e mantenho minha evolução contínua por meio de cursos e projetos práticos. Estou preparado para contribuir com soluções modernas, escaláveis e bem estruturadas, agregando valor real à sua empresa.",
  info: [
    { fieldName: 'Nome', fieldValue: 'Khristopher Kidman' },
    { fieldName: 'Experiência', fieldValue: '2 Years' },
    { fieldName: 'Nacionalidade', fieldValue: 'Brasileira' },
    { fieldName: 'Email', fieldValue: 'khristopheroficial@gmail.com' },
  ],
}

const experience = {
  title: 'Experiência',
  description:
    'Tenho experiência na criação de aplicações modernas que combinam desempenho, usabilidade e design intuitivo, garantindo que cada interação do usuário seja fluida e eficiente. Trabalho com React, TypeScript, Next.js, NodeJS e Tailwind, explorando as melhores práticas para entregar produtos escaláveis ​​e de alta qualidade.',
  items: [
    {
      company: 'Sujeito Programador',
      position: 'Desenvolvedor Full Stack',
      duration: '2023',
    },
  ],
}

const education = {
  title: 'Educação',
  description:
    'Atualmente curso Engenharia de Software e complemento minha formação com cursos voltados ao aprimoramento técnico. Acredito que o aprendizado contínuo é essencial para me manter atualizado e evoluir como desenvolvedor, explorando novas tecnologias e adotando as melhores práticas no desenvolvimento web.',
  items: [
    {
      institution: 'Senac',
      degree: 'Técnico em suporte e manutenção de computadores',
      duration: '2019',
    },
    {
      institution: 'B7Web',
      degree: 'Desenvolvedor Full Stack',
      duration: '2022 - Present',
    },
    {
      institution: 'Sujeito Programador',
      degree: 'Desenvolvedor Full Stack',
      duration: '2023 - Present',
    },
    {
      institution: 'Descomplica',
      degree: 'Engenheiro de Software',
      duration: '2024 - Present',
    },
  ],
}

const skills = {
  title: 'Skills',
  description:
    'Essas são as tecnologias que mais fazem parte do meu dia a dia e que utilizo com frequência no desenvolvimento de projetos.',
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3 />, name: 'Css3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React-Js' },
    { icon: <FaNodeJs />, name: 'Node' },
    { icon: <SiTypescript />, name: 'Typescript' },
    { icon: <SiNextdotjs />, name: 'NextJs' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <FaSass />, name: 'Sass' },
    { icon: <SiPrisma />, name: 'Prisma' },
    { icon: <SiPostgresql />, name: 'Postgresql' },
    { icon: <SiMongodb />, name: 'MongoDb' },
    { icon: <SiMysql />, name: 'MySql' },
    { icon: <SiJest />, name: 'Jest' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <FaFigma />, name: 'Figma' },
  ],
}

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-primaryLight min-h-screen flex items-center justify-center py-8 sm:py-10 xl:py-0"
    >
      <div className="container mx-auto px-4 sm:px-6 xl:px-0">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-10 sm:gap-[60px]"
        >
          {/* Tabs laterais */}
          <TabsList className="flex flex-col w-full max-w-[320px] sm:max-w-[360px] xl:max-w-[380px] mx-auto xl:mx-0 gap-4 sm:gap-6">
            <TabsTrigger value="experience" className="bg-[#232329]">
              Experiência
            </TabsTrigger>
            <TabsTrigger value="education" className="bg-[#232329]">
              Educação
            </TabsTrigger>
            <TabsTrigger value="skills" className="bg-[#232329]">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about" className="bg-[#232329]">
              Sobre mim
            </TabsTrigger>
          </TabsList>

          {/* Conteúdo com altura reduzida no mobile */}
          <div className="w-full h-[600px] sm:h-[650px] xl:h-[700px] overflow-hidden relative">
            {/* EXPERIENCE */}
            <TabsContent
              value="experience"
              className="absolute inset-0 overflow-y-auto pr-4"
            >
              <div className="flex flex-col gap-6 sm:gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">
                  {experience.description}
                </p>
                <ScrollArea className="h-[340px] sm:h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] min-h-[180px] sm:h-[184px] py-5 px-6 sm:px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-2"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-lg sm:text-xl max-w-[260px] text-center lg:text-left break-words">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-2 sm:gap-3 mt-1">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm break-words">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent
              value="education"
              className="absolute inset-0 overflow-y-auto pr-4"
            >
              <div className="flex flex-col gap-6 sm:gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">
                  {education.description}
                </p>
                <ScrollArea className="h-[340px] sm:h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] min-h-[180px] sm:h-[184px] py-5 px-6 sm:px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-2"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-lg sm:text-xl max-w-[260px] text-center lg:text-left break-words">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-2 sm:gap-3 mt-1">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm break-words">
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent
              value="skills"
              className="absolute inset-0 overflow-y-auto pr-4"
            >
              <div className="flex flex-col gap-6 sm:gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[120px] sm:h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-4xl sm:text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* ABOUT */}
            <TabsContent
              value="about"
              className="absolute inset-0 overflow-y-auto pr-4"
            >
              <div className="flex flex-col gap-6 sm:gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl sm:text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 sm:gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-3 sm:gap-4"
                    >
                      <span className="text-white/60 text-sm">{item.fieldName}</span>
                      <span className="text-base sm:text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;