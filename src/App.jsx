import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Training from "./components/Training";
import Courses from "./components/Courses";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import CyberLandingPage from "./components/CyberLandingPage";
import RemoteInternship from "./components/RemoteInternship";
import JobListPage from "./components/JobListPage";
import JobDetailsPage from "./components/JobDetailsPage";
import CreateJobPage from "./components/admin/CreateJobPage";
import JobApplicationPage from "./components/application/JobApplicationPage";
import InternshipPaymentPage from "./components/InternshipPaymentPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RemoteInternship />} />
          <Route path="/training" element={<Training />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/programs" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/apply" element={<Courses />} />
          <Route path="/jobs" element={<JobListPage />} />
          <Route path="/jobs/:id/apply" element={<JobApplicationPage />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />
          <Route path="/jobs/:id/payment" element={<InternshipPaymentPage />} />
          <Route
            path="/internship-payment"
            element={<InternshipPaymentPage />}
          />
          <Route path="/admin/create-job" element={<CreateJobPage />} />
          <Route path="/cybersecuritysignup" element={<CyberLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
