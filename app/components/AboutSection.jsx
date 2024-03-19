'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>R</li>
                <li>SQL</li>
                <li>Java</li>
                <li>HTML</li>
                <li>React</li>
            </ul>
        )
    },
    {
        tile: "Education",
        id: "Education",
        content: (
            <ul className="list-disc pl-2">
                <li>University of North Carolina, Chapel Hill</li>
                <li>Cleveland Community College</li>
                <li>Shelby High School</li>
            </ul>
        ),
    },
]

const AboutSection = () => {
    const[tab, setTab] = useState("skills")
    const[isPending, startTransition ] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/UNC.png" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I'm an undergraduate student at the University of North Carolina at Chapel Hill, studying Computer Science and Statistics & Analytics. 
                        I'm interested in working in either the business/finance sector or the sports industry. 
                        My skills in Python, R, and SQL make me passionate about using data to solve problems and make informed decisions.
                        Whether it's helping a business grow or improving a sports team's performance through analytics, 
                        I'm excited to apply my knowledge and make a difference in these areas.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}> Skills </TabButton>
                        
                        <TabButton 
                        selectTab={() => handleTabChange("Education")} 
                        active={tab === "Education"}> Education 
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection