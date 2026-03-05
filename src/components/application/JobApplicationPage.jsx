import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "../Navbar";
import PersonalDetailsSection from "./PersonalDetailsSection";
import ResponsibilityAlignmentSection from "./ResponsibilityAlignmentSection";
import RequirementChecklistSection from "./RequirementChecklistSection";
import ResumeUploadSection from "./ResumeUploadSection";
import StickyJobSnapshot from "./StickyJobSnapshot";
// Mock Data Images
import Hubtel from "../../assets/hubtel.png";

const JobApplicationPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // Fallback mock data if state is empty (e.g. direct link access)
  const job = location.state?.jobData || {
    id: id,
    companyName: "Hubtel",
    companyLogo: Hubtel,
    title: "Senior Product Designer",
    location: "Lagos, Nigeria",
    type: "Full Time",
    salary: "₦350k - ₦500k/mo",
    responsibilities: [
      "Lead the end-to-end design process for major features.",
      "Create high-fidelity wireframes and prototypes.",
      "Conduct user research and usability testing.",
    ],
    requirements: [
      "5+ years of experience in product design.",
      "Strong portfolio demonstrating expertise in UI/UX.",
      "Proficiency in Figma and prototyping tools.",
    ],
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    about: "",
    responsibilityResponses: {},
    requirementResponses: {},
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    console.log("JobApplicationPage Mounted. Job ID:", id);
    window.scrollTo(0, 0);
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("resp_")) {
      setFormData((prev) => ({
        ...prev,
        responsibilityResponses: {
          ...prev.responsibilityResponses,
          [name]: value,
        },
      }));
    } else if (name.startsWith("req_")) {
      setFormData((prev) => ({
        ...prev,
        requirementResponses: { ...prev.requirementResponses, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.fullName || !formData.email || !resumeFile) {
      alert("Please fill in required fields and upload your resume.");
      return;
    }

    console.log("Application Submitted:", {
      ...formData,
      resume: resumeFile,
      jobId: job._id || job.id,
    });
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (isSubmitted) {
    return (
      <div className="font-['Outfit'] bg-[#F9FAFB] min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-[#2d1b4e] mb-4">
              Application Sent!
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Thanks for applying to <strong>{job.companyName}</strong>. We've
              received your application and will review it shortly.
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-[#ffc12b] text-[#2d1b4e] font-bold px-8 py-3 rounded-full hover:bg-[#ffcd57] transition-all shadow-md"
            >
              Browse More Jobs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-['Outfit'] bg-[#F9FAFB] min-h-screen pb-32">
      <Navbar />

      {/* 1. Page Header (Job Info) */}
      <div className="pt-28 pb-16 bg-white border-b border-gray-100 relative overflow-hidden">
        {/* Decoration */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ffc12b]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            to={`/jobs/${job.id}`}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2d1b4e] transition-colors font-medium mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Job Details
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center justify-center shrink-0">
              <img
                src={job.companyLogo}
                alt={job.companyName}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#2d1b4e] mb-2">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-lg text-gray-500">
                <span className="font-bold text-[#2d1b4e]">
                  {job.companyName}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                <span>{job.location}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                <span>{job.salary}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Form Layout */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (Form) */}
          <div className="lg:col-span-8 space-y-10">
            <PersonalDetailsSection
              formData={formData}
              handleChange={handleChange}
            />

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="mb-6 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-[#2d1b4e]">
                  Professional Summary
                </h3>
                <p className="text-gray-400 text-sm">
                  Briefly describe why you fit this role
                </p>
              </div>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="I believe I am a great fit because..."
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#2d1b4e] focus:ring-2 focus:ring-[#2d1b4e]/20 outline-none transition-all text-gray-700 leading-relaxed min-h-[150px] resize-y"
              />
            </div>

            <ResponsibilityAlignmentSection
              responsibilities={job.responsibilities}
              responses={formData.responsibilityResponses}
              handleChange={handleChange}
            />

            <RequirementChecklistSection
              requirements={job.requirements}
              responses={formData.requirementResponses}
              handleChange={handleChange}
            />

            <ResumeUploadSection file={resumeFile} setFile={setResumeFile} />
          </div>

          {/* Right Column (Sticky Snapshot) */}
          <div className="lg:col-span-4 relative hidden lg:block h-full">
            <StickyJobSnapshot job={job} onApply={handleSubmit} />
          </div>

          {/* Mobile Submit Button */}
          <div className="lg:hidden col-span-1">
            <button
              onClick={handleSubmit}
              className="w-full bg-[#ffc12b] text-[#2d1b4e] font-bold py-4 rounded-xl hover:bg-[#ffcd57] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg mb-8"
            >
              Submit Application
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobApplicationPage;
