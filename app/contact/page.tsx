"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


import { FaEnvelope, FaLinkedin, FaDiscord } from 'react-icons/fa';

const info = [
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'khristopheroficial@gmail.com'
    },
    {
        icon: <FaDiscord />,
        title: 'Discord',
        description: 'khristopher_kidman'
    },
    {
        icon: <FaLinkedin />,
        title: 'Linkedin',
        description: 'Khristopher Kidman',
    }
]

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className='py-6'
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">

                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            action="https://formsubmit.co/khristopheroficial@gmail.com"
                            method="POST"
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >

                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                I am ready for new challenges and committed to applying my skills in the best way possible. With determination and a desire to grow, I want to actively contribute to the success of your company. Contact me by email.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="phone" placeholder="Phone" />
                            </div>

                            <Textarea
                                name="message"
                                className="h-[200px]"
                                placeholder="Type your message here."
                                required
                            />

                            <Button size="md" className="max-w-40">
                                Send message
                            </Button>

                        </form>
                    </div>

                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rouded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;