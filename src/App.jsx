import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import ContactUs from './components/ContactUs';
import CyberLandingPage from './components/CyberLandingPage';
import RemoteInternship from './components/RemoteInternship';

function App() {
  return (
    <>
      {/* Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/remote-internship" element={<RemoteInternship />} />
          <Route path="/cybersecuritysignup" element={<CyberLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
