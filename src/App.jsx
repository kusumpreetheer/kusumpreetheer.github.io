import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import CourseRater from './projectPages/CourseRater';

const App = () => {
  return (
    <div className='h-full overflow-y-auto '>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <section id="Hero">
              <Hero />
            </section>
            <section id="Projects">
              <Projects />
            </section>
            <section id="Contacts">
              <Contacts />
            </section>
          </>
        } />
        <Route path="/courseRater" element={<CourseRater />} />
      </Routes>
    </div>
  );
}

export default App;
