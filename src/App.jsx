import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Training from "./components/Training";
import Courses from "./components/Courses";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import CyberLandingPage from "./components/CyberLandingPage";
import RemoteInternship from "./components/RemoteInternship";

function App() {
  return (
    <>
      {/* Router */}
      <Router>
        <Routes>
          <Route path="/" element={<RemoteInternship />} />
          <Route path="/training" element={<Training />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/programs" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/apply" element={<Courses />} />
          <Route path="/cybersecuritysignup" element={<CyberLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
