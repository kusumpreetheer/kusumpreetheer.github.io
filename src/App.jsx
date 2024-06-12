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
        <section id="Hero">
          <Hero />
        </section>
        {/* 
      <section id="About">
        <About />
      </section> 
      */}
        <section id="Projects">
          <Projects />
        </section>
        <section id="Contacts">
          <Contacts />
        </section>
      </div>
    </>
  )
}

export default App
