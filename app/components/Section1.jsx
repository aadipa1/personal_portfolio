"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const Section1 = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1FA2FF] to-[#A6FFCB]">
              Hello, I'm {" "}
            </span>
            <br></br>
            <TypeAnimation
      sequence={[
        
        'Aadi',
        1000,
        'Driven',
        1000,
        'Passionate',
        1000,
        'Hardworking',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /> 
          </h1>
          <p className = "text-base sm:text-lg mb-6 lg:text-xl text-[#ADB7BE]">
            I am a Computer Science and Stastistics Student at UNC-Chapel Hill.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] hover:bg-slate-200 text-black">Contact Me</button>
            <a href="/Patel_Aadi_Resume.pdf" download="Aadi_Patel_Resume">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#a6ffcb] via-[#12d8fa] to-[#1fa2ff] hover:bg-slate-800 text-black mt-3">
                Download Resume
                </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className = "w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
            src="/headshot.JPG"
            alt = "picture of me"
            className = "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1