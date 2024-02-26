import { Spotlight } from '@/components/ui/Spotlight';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import React from 'react'

const Hero = () => {
    const words = [
        {
          text: "Only",
        },
        {
          text: "Place",
        },
        {
          text: "you",
        },
        {
          text: "need, ",
        },
        {
          text: "Admark8.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
    <div className="md:h-[30rem] py-5 px-8 w-full  flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" flex-col p-4 max-w-7xl flex items-center jusce  mx-auto relative z-10  w-full pt-20 md:pt-0">
      <TypewriterEffectSmooth words={words} className='mx-auto text-3xl'/>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
    </div>
  )
}

export default Hero