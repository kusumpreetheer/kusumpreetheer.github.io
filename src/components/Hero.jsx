import React from 'react'
import myImageIllustration from '../assets/me-illustration.png'

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
        <div className='bg-[#E18686] w-16 h-16 rounded-md'></div>
        <div className='bg-[#F6D7C7] w-16 h-16 rounded-md'></div>
        <div className='bg-[#EFD67C] w-16 h-16 rounded-md'></div>
        <div className='bg-[#C2EAAA] w-16 h-16 rounded-md'></div>
        <div className='bg-[#C6E9E7] w-16 h-16 rounded-md'></div>
        <div className='bg-[#B1CBF2] w-16 h-16 rounded-md'></div>
        <div className='bg-[#D5BCF5] w-16 h-16 rounded-md'></div>
        <div className='bg-[#F8BAF5] w-16 h-16 rounded-md'></div>
        <div className='bg-[#F9A2AC] w-16 h-16 rounded-md'></div>
      </div>
    </div>
  )
}

export default Hero