import React from 'react'
import Mail from '@/assets/Icons/Mail'
import Cookie from '@/assets/Icons/Cookie'

const Contacts = () => {
  return (
    <div className='container pt-10 pb-20 wrapper'>
      <div className='flex items-center'>
        <div className='flex-1'>
          <div className='h3'>
            Thank you so much for visiting
            <span className='px-3 py-1 mx-2 rounded-md bg-accent'><a href='./'>heer’s website</a></span>
            ,
            <div>I appreciate your time and presence.</div>
          </div>
          <div className='body'>Shoot me an email if you want to go biking and design websites together! </div>
        </div>
        <div className='rounded-md w-52 h-52 bg-secondary'></div>
      </div>

      <div className='flex gap-x-4'>
        <div className='px-4 py-2 rounded-md bg-primary-light drop-shadow-xl'>
          <a href="mailto:kusumpreetheer@gmail.com" className='flex items-center gap-x-2'>
            <Mail/> 
            E-mail
          </a>
        </div>
        <div className='px-4 py-2 rounded-md bg-primary-light drop-shadow-md'>
          <a href="https://www.linkedin.com/in/kusum-heer/" target='blank' className='flex items-center gap-x-2'>
            <Cookie/>
            Linked-In
          </a>
      </div>
      </div>
    </div>
  )
}

export default Contacts