import React from 'react'
import myImageIllustration from '../assets/me-illustration.png'
import figma from '../assets/Projects/technologyDrawings/figma.png'
import mantine from '../assets/Projects/technologyDrawings/mantine.png'
import nextJS from '../assets/Projects/technologyDrawings/nextJS.png'
import react from '../assets/Projects/technologyDrawings/react.png'
import shadCN from '../assets/Projects/technologyDrawings/shadCN.png'
import tailwind from '../assets/Projects/technologyDrawings/tailwind.png'
import typeScript from '../assets/Projects/technologyDrawings/typeScript.png'
import vercel from '../assets/Projects/technologyDrawings/vercel.png'

const Hero = () => {
  return (
    <div className='container pt-40 wrapper'>
      <div className='flex items-center items-between gap-x-4'>
        <div className='flex-1'>
          <div className='md:h2 h2-mobile'>Welcome to</div>
          <div className='md:py-4 md:h1 h1-mobile'>Heer’s Workspace</div>
          <div className='flex flex-wrap md:h3 subtitle-mobile gap-y-2'>
            <span>
              I enjoy<span className='px-1 mx-2 rounded-sm md:rounded-md md:py-1 md:px-3 bg-accent'>web development</span> and <span className='px-1 mx-2 rounded-sm md:rounded-md md:py-1 md:px-3 bg-accent'>visualizing data</span>, having studied at the University of Calgary which lies at the heart of the Rocky Mountains I care to travel to different latitudes, and places to learn, and experience diverse cultures.
            </span>
          </div>
        </div>
        <img src={myImageIllustration} alt="Illustration" className="hidden object-fill w-1/3 h-full rounded-md md:block" />
      </div>

      <div className='flex flex-wrap my-8 md:my-16 md:gap-x-12 gap-x-8 gap-y-4'>
        <div className='w-10 h-10 bg-transparent rounded-md md:w-16 md:h-16'><img src={figma} /></div>
        <div className='w-10 h-10 bg-transparent rounded-md md:w-16 md:h-16'><img src={mantine} /></div>
        <div className='w-10 h-10 bg-transparent rounded-md md:w-16 md:h-16'><img src={nextJS} /></div>
        <div className='w-10 h-10 bg-transparent rounded-md md:w-16 md:h-16'><img src={react} /></div>
        <div className='w-10 h-10 bg-transparent rounded-md md:w-16 md:h-16'><img src={shadCN} /></div>
        <div className='w-10 h-10 bg-transparent rounded-md md:w-16 md:h-16'><img src={tailwind} /></div>
        <div className='w-10 h-10 bg-transparent rounded-md md:w-16 md:h-16'><img src={typeScript} /></div>
        <div className='w-10 h-10 bg-transparent rounded-md md:w-16 md:h-16'><img src={vercel} /></div>
      </div>
    </div>
  )
}

export default Hero