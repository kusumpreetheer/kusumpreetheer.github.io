import React from 'react'
import Mail from '@/assets/Icons/Mail'
import Cookie from '@/assets/Icons/Cookie'
import contactInfoArt from '@/assets/contactInfoArt.png'

const Contacts = () => {
  return (
    <div className='container md:pt-10 md:pb-20 wrapper'>
      <div className='flex items-center my-4'>
        <div className='flex-1'>
          <div className='md:h3 h3-mobile'>
            Thank you so much for visiting
            <span className='px-3 py-1 mx-2 rounded-md bg-accent'><a href='./'>heer’s website</a></span>
            ,
            <div>I appreciate your time and presence.</div>
          </div>
          <div className='my-2 md:body body-mobile'>Shoot me an email if you want to go biking and design websites together! </div>
        </div>
        <div className='rounded-lg w-65 h-65 border-blur-sm'>
          <img src={contactInfoArt} alt="stars" className='hidden rounded-md border-blur-sm md:block' />
        </div>
      </div>

      <div className='flex gap-x-4'>
        <div className='px-4 py-2 rounded-md bg-primary drop-shadow-xl'>
          <a href="mailto:kusumpreetheer@gmail.com" className='flex items-center gap-x-2 md:bold bold-mobile'>
            <Mail/> 
            E-mail
          </a>
        </div>
        <div className='px-4 py-2 rounded-md bg-primary drop-shadow-md'>
          <a href="https://www.linkedin.com/in/kusum-heer/" target='blank' className='flex items-center gap-x-2 md:bold bold-mobile'>
            <Cookie/>
            Linked-In
          </a>
      </div>
      </div>
    </div>
  )
}

export default Contacts