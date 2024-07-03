import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import CourseRater from './projectPages/courseRater'; // Import your project page component with correct casing
import WebDev from './ui/webDev'; // Import the WebDev component with correct casing

const App = () => {
  return (
    <Router>
      <div className='container overflow-hidden'>
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
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
