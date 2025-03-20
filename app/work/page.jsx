"use client";

import { motion } from 'framer-motion'
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { FaFigma } from "react-icons/fa";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '../../components/WorkSliderBtns';

const projects = [
    {
        num: "01",
        category: "Full-Stack",
        title: "BarberPro",
        description: "Complete system for modern barbershops! Manage appointments, cuts, prices and customers in a practical and secure way. With a fully responsive website, offer the best experience on any device. Choose between Normal and Pro plans to expand your business and attract more customers.",
        stack: [{ name: "React.js" }, { name: "Next.js" }, { name: "Node.js" }, { name: "Typescript" }, { name: "Tailwind" }, { name: "Postgresql" }, { name: "Stripe" },],
        image: '/assets/work/Home.png',
        live: 'https://frontbarber.vercel.app/',
        github: "https://github.com/Khristopher22/frontbarber",
        figma: "https://www.figma.com/design/X0UQ8EDrz9W3Ub2HvVaiKG/Barber-PRO?m=auto&t=KYUe9qwBJNkFRINn-6",
    },
    {
        num: "02",
        category: "Full-Stack",
        title: "Sujeito Pizza",
        description: "Complete FullStack system for pizzerias! Management of orders, products, categories and customers with secure authentication and image registration. The project is fully responsive, ensuring a perfect experience on any device. In addition, it has an application for waiters in React Native, providing faster and more efficient service.",
        stack: [{ name: "React.js" }, { name: "React.Native" }, { name: "Next.js" }, { name: "Node.js" }, { name: "Typescript" }, { name: "Sass" }, { name: "Postgresql" },],
        image: '/assets/work/Produtos.png',
        live: '',
        github: "https://github.com/KhrisMassaneiro/frontpizzaria",
        figma: "https://www.figma.com/design/3Dz6epyYn6w6HZJSjzBpH2/Sujeito-Pizza?node-id=0-1&t=7MDf2IApDjaGprh9-1",
    },
    {
        num: "03",
        category: "Full-Stack",
        title: "Dev Controle",
        description: "A complete solution for managing calls and customers! With customer registration and call logs, you can easily add, edit and delete calls. The system also has secure authentication, ensuring that only authorized users have access to the panel. Ideal for companies that need efficient and organized control of their calls.",
        stack: [{ name: "React.js" }, { name: "Next.js" }, { name: "Typescript" }, { name: "MongoDb" },],
        image: '/assets/work/dashboard.png',
        live: 'https://devcontrole-nine.vercel.app/',
        github: "https://github.com/Khristopher22/sistemachamados",
        figma: "https://www.figma.com/design/HY2JjNzAD2cn5jKsup9Bwp/Dev-Controle?node-id=0-1&t=xUSLPVuuan4TC8pp-1",
    },
    {
        num: "04",
        category: "Front-End",
        title: "DevCurrency",
        description: "Cryptocurrency listing project with real-time prices, showing market highs and lows. The project displays detailed information about each cryptocurrency, allowing you to track market fluctuations in real time and make more informed decisions.",
        stack: [{ name: "React.Js" }, { name: "Typescript" }],
        image: '/assets/work/currency.png',
        live: 'https://criptomoeda-alpha.vercel.app/',
        github: "https://github.com/Khristopher22/criptomoeda",
        figma: "",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            <div className='text-8xl font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                {project.category} Project
                            </h2>
                            <p className='text-white/60'>{project.description}</p>
                            <ul className='flex flex-wrap gap-2'>
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className='text-xl text-accent'>
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className='border border-white/20'></div>

                            <div className='flex items-center gap-4'>
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repositorio</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={project.figma}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <FaFigma className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Figma</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className='w-full'>
                                        <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>

                                            <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>

                                            <div className='relative w-full h-full'>
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className='object-cover'
                                                    alt=''
                                                />
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                )
                            })}

                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;