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
          <div className='h2'>Welcome to</div>
          <div className='py-4 h1'>Heer’s Workspace</div>
          <div className='h3'>
            I enjoy
            <span className='px-3 py-1 mx-2 rounded-md bg-accent'>web development</span>
            and
            <span className='px-3 py-1 mx-2 rounded-md bg-accent'>visualizing data</span>,
            having studied at the University of Calgary which lies at the heart of the Rocky Mountains I care to travel to different latitudes, and places to learn, and experience diverse cultures.
          </div>
        </div>
        <img src={myImageIllustration} alt="Illustration" className="object-fill w-1/3 h-full rounded-md" />
      </div>

      <div className='flex my-16 gap-x-12'>
        <div className='w-16 h-16 bg-transparent rounded-md'><img src={figma} /></div>
        <div className='w-16 h-16 bg-transparent rounded-md'><img src={mantine} /></div>
        <div className='w-16 h-16 bg-transparent rounded-md'><img src={nextJS} /></div>
        <div className='w-16 h-16 bg-transparent rounded-md'><img src={react} /></div>
        <div className='w-16 h-16 bg-transparent rounded-md'><img src={shadCN} /></div>
        <div className='w-16 h-16 bg-transparent rounded-md'><img src={tailwind} /></div>
        <div className='w-16 h-16 bg-transparent rounded-md'><img src={typeScript} /></div>
        <div className='w-16 h-16 bg-transparent rounded-md'><img src={vercel} /></div>
      </div>
    </div>
  )
}

export default Hero