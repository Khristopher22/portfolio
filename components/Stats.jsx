"use client"

import CountUp from 'react-countup';

const stats = [
    {
        num: 2,
        text: "Anos de experiência",
    },
    {
        num: 31,
        text: "Projetos concluídos",
    },
    {
        num: 23,
        text: "Tecnologias dominadas ",
    },
    {
        num: 200,
        text: "commits",
    },

]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row flex-wrap items-center xl:items-start justify-center xl:justify-between gap-6 max-w-full">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-auto flex flex-col items-center xl:flex-row xl:items-center gap-2 xl:gap-4 text-center xl:text-left"
                        >
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p
                                className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                                    } leading-snug text-white/80`}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Stats;