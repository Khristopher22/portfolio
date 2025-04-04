"use client";

import { 
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaNodeJs,
    FaGithub,
    FaSass,
    FaFigma
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs, SiTypescript, SiJest, SiPrisma, SiPostgresql,SiMongodb, SiMysql  } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
    title: 'About me',
    description: "I am a developer with great potential, passionate about technology and always looking to improve. With experience in full stack development, I master technologies such as ReactJS, Node.js, TypeScript and databases. In addition, I have knowledge in UI/UX, using Figma to create intuitive and accessible interfaces. I am studying Software Engineering and constantly updating myself with courses to evolve as a professional. I am ready to add value to your company, contributing with innovative and well-structured solutions.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Khristopher Kidman"
        },
        {
            fieldName: "Experience",
            fieldValue: "2 Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Brasileira"
        },
        {
            fieldName: "Email",
            fieldValue: "khristopheroficial@gmail.com"
        },
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "I have experience in creating modern applications that combine performance, usability and intuitive design, ensuring that each user interaction is fluid and efficient. I work with React, TypeScript, Next.js, NodeJS and Tailwind, exploring best practices to deliver scalable and high-quality products.",
    items:[
        {
            company: "Sujeito Programador",
            position: "Full Stack Developer",
            duration: "2023"
        },
        
        
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "I am currently studying Software Engineering and taking courses to improve my knowledge. I believe that continuous learning is essential to stay up to date and evolve as a developer, always looking for new technologies and best practices in web development.",
    items:[
        {
            institution: "Senac",
            degree: "Computer support and maintenance technician",
            duration: "2019"
        },
        {
            institution: "B7Web",
            degree: "Full Stack Developer",
            duration: "2022 - Present"
        },
        {
            institution: "Sujeito Programador",
            degree: "Full Stack Developer",
            duration: "2023 - Present"
        },
        {
            institution: "Descomplica",
            degree: "Software engineering",
            duration: "2024 - Present"
        },
    ]
}

const skills = {
    title: "My skills",
    description: "These are the technologies that are most part of my daily life and that I use frequently in developing projects.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5" 
        },
        {
            icon: <FaCss3 />,
            name: "Css3" 
        },
        {
            icon: <FaJs />,
            name: "JavaScript" 
        },
        {
            icon: <FaReact />,
            name: "React-Js" 
        },
        {
            icon: <FaNodeJs />,
            name: "Node" 
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind" 
        },
        {
            icon: <FaSass />,
            name: "Sass" 
        },
        {
            icon: <SiNextdotjs />,
            name: "NextJs" 
        },
        {
            icon: <SiTypescript />,
            name: "Typescript" 
        },
        {
            icon: <SiPrisma />,
            name: "Prisma" 
        },
        {
            icon: <SiPostgresql />,
            name: "Postgresql" 
        },
        {
            icon: <SiMongodb />,
            name: "MongoDb" 
        },
        {
            icon: <SiMysql  />,
            name: "MySql" 
        },
        {
            icon: <SiJest />,
            name: "Jest" 
        },
        {
            icon: <FaGithub />,
            name: "GitHub" 
        },
        {
            icon: <FaFigma/>,
            name: "Figma" 
        },
    ]
}

const Resume = () => {
    return(
        <motion.div 
            initial={{opacity: 0}}
            animate={{
                opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue="experience" 
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className='min-h-[70px] w-full'>
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map(( item, index )=> {
                                            return(
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map(( item, index )=> {
                                            return(
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[80px] text-center lg:text-left '>{item.degree}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full h-full mb-6">
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index) => {
                                        return(
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div> 
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {about.description}
                                </p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index)=> {
                                        return(
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-xl'>{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>

                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume