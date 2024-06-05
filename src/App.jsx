import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

const App = () => {

  return (
    <>
      <div className='container overflow-hidden'>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contacts  />
      </div>
    </>
  )
}

export default App
