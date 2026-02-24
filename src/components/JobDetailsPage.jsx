import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionBlock from "./SectionBlock";
import StickyApplyCard from "./StickyApplyCard";
import SimilarJobs from "./SimilarJobs";
import Hubtel from "../assets/hubtel.png";
import {
  MapPin,
  Clock,
  DollarSign,
  ArrowLeft,
  Share2,
  Heart,
  CheckCircle2,
} from "lucide-react";

const JobDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const previewData = location.state?.jobData;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setIsSaved(savedJobs.includes(id));
  }, [id]);

  const handleSave = () => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    let newSavedJobs;
    if (isSaved) {
      newSavedJobs = savedJobs.filter((jobId) => jobId !== id);
    } else {
      newSavedJobs = [...savedJobs, id];
    }
    localStorage.setItem("savedJobs", JSON.stringify(newSavedJobs));
    setIsSaved(!isSaved);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: job.title,
          text: `Check out this ${job.title} position at ${job.companyName}!`,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // Job Data (Preview or Mock)
  const job = previewData
    ? {
        id: "preview",
        companyName: previewData.companyName || "Company Name",
        companyLogo: Hubtel, // Fallback/Placeholder
        title: previewData.title || "Job Title",
        description: previewData.overview || "Job Description",
        location: previewData.location,
        type: previewData.type,
        salary: previewData.salary || "Not specified",
        posted: "Just now",
        tags: ["Preview", "Job"],
        overview: previewData.overview,
        responsibilities: previewData.responsibilities.filter((i) => i),
        requirements: previewData.requirements.filter((i) => i),
        benefits: previewData.benefits.filter((i) => i),
      }
    : {
        id: id,
        companyName: "Hubtel",
        companyLogo: Hubtel,
        title: "Senior Product Designer",
        description:
          "We are looking for an experienced Product Designer to join our team and help shape the future of fintech in Africa.",
        location: "Lagos, Nigeria",
        type: "Full Time",
        salary: "₦350k - ₦500k/mo",
        posted: "2 days ago",
        tags: ["Design", "Figma", "UI/UX", "Prototyping"],
        overview: (
          <>
            <p>
              As a Senior Product Designer at Hubtel, you will drive the design
              vision for our core payment products. You will collaborate closely
              with engineers, product managers, and researchers to create
              intuitive and impactful user experiences.
            </p>
            <p>
              We value creativity, user-centric thinking, and a passion for
              solving complex problems. You will work in a fast-paced
              environment where your contributions will directly impact millions
              of users across the continent.
            </p>
          </>
        ),
        responsibilities: [
          "Lead the end-to-end design process for major features, from concept to launch.",
          "Create high-fidelity wireframes, prototypes, and design specs using Figma.",
          "Conduct user research and usability testing to validate design decisions.",
          "Collaborate with the engineering team to ensure high-quality implementation.",
          "Mentor junior designers and contribute to the design system.",
        ],
        requirements: [
          "5+ years of experience in product design, preferably in fintech or SaaS.",
          "Strong portfolio demonstrating expertise in UI/UX and interaction design.",
          "Proficiency in Figma, Adobe XO, and prototyping tools.",
          "Excellent communication skills and ability to articulate design rationale.",
          "Experience working in an agile environment.",
        ],
        benefits: [
          "Competitive salary and performance-based bonuses.",
          "Comprehensive health insurance for you and your family.",
          "Remote-friendly work policy and flexible hours.",
          "Professional development budget and learning resources.",
          "Regular team retreats and social events.",
        ],
      };

  // Create a serializable version of the job object for navigation state
  // (Removes React elements like 'overview' JSX to prevent DataCloneError)
  const serializableJob = {
    ...job,
    overview: typeof job.overview === "string" ? job.overview : "",
    companyLogo: typeof job.companyLogo === "string" ? job.companyLogo : "", // Ensure image path is string
  };

  return (
    <div className="font-['Outfit'] bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#F9FAFB] pt-32 pb-20 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ffc12b] rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/4 pointer-events-none animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2d1b4e] rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/4 pointer-events-none animate-float-delayed"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-8">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2d1b4e] transition-colors font-medium group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />{" "}
              Back to Jobs
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center justify-center shrink-0">
                <img
                  src={job.companyLogo}
                  alt={job.companyName}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-[#2d1b4e] mb-2 leading-tight">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-600 text-lg mt-4">
                  <span className="font-bold text-[#2d1b4e] text-xl">
                    {job.companyName}
                  </span>
                  <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-5 h-5 text-[#ffc12b]" /> {job.location}
                  </div>
                  <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-5 h-5 text-[#ffc12b]" /> {job.type}
                  </div>
                  <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  <div className="flex items-center gap-1.5 font-bold text-[#2d1b4e] bg-[#ffc12b]/10 px-3 py-1 rounded-full">
                    <DollarSign className="w-4 h-4 text-[#ffc12b]" />{" "}
                    {job.salary}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {job.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-600 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 shrink-0 mt-6 lg:mt-0 w-full lg:w-auto">
              <button
                onClick={handleSave}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all shadow-sm ${isSaved ? "bg-red-50 border-red-200 text-red-500" : "border-gray-200 bg-white text-gray-400 hover:text-red-500 hover:border-red-500 hover:bg-red-50"}`}
              >
                <Heart className={`w-6 h-6 ${isSaved ? "fill-current" : ""}`} />
              </button>
              <button
                onClick={handleShare}
                className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-[#2d1b4e] hover:border-[#2d1b4e] hover:bg-purple-50 transition-all shadow-sm"
              >
                <Share2 className="w-6 h-6" />
              </button>
              <Link
                to={`/jobs/${id}/apply`}
                state={{ jobData: serializableJob }}
                className="flex-1 lg:flex-none bg-[#ffc12b] text-[#2d1b4e] px-8 py-3 rounded-full font-bold hover:bg-[#ffcd57] transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl text-lg flex items-center justify-center text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl w-full mx-auto px-4 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* LEFT COLUMN (Content) */}
        <div className="lg:col-span-8 space-y-16">
          <SectionBlock title="Job Overview">{job.overview}</SectionBlock>

          <SectionBlock
            title="Key Responsibilities"
            listItems={job.responsibilities}
          />

          <SectionBlock title="Requirements" listItems={job.requirements} />

          <SectionBlock title="Benefits" listItems={job.benefits} />

          <SectionBlock title={`About ${job.companyName}`}>
            <p>
              Hubtel is a leading fintech company in Africa, processing millions
              of transactions daily. We are dedicated to simplifying payments
              and connecting businesses with their customers. Our mission is to
              drive financial inclusion and economic growth across the continent
              through technology.
            </p>
          </SectionBlock>
        </div>

        {/* RIGHT COLUMN (Sticky Card) */}
        <div className="lg:col-span-4 relative hidden lg:block h-full">
          <StickyApplyCard
            job={job}
            applicationJobData={serializableJob}
            isSaved={isSaved}
            onSave={handleSave}
            onShare={handleShare}
          />
        </div>
      </main>

      {/* --- SIMILAR JOBS --- */}
      <SimilarJobs />

      {/* --- CTA SECTION --- */}
      <section className="bg-[#2d1b4e] py-24 px-4 text-center rounded-[3rem] mx-4 mb-16 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc12b] rounded-full blur-[150px] opacity-20 pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 pointer-events-none animate-pulse delay-700"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-['Nerko_One']">
            Ready to take the next step?
          </h2>
          <p className="text-xl text-gray-300 font-light">
            Join thousands of professionals finding their dream jobs on
            Placement Hub.
          </p>
          <div className="pt-4">
            <Link
              to={`/jobs/${id}/apply`}
              state={{ jobData: serializableJob }}
              className="inline-block bg-[#ffc12b] text-[#2d1b4e] px-12 py-5 rounded-full font-bold text-xl hover:bg-[#ffcd57] transition-all shadow-xl hover:scale-105 hover:shadow-2xl"
            >
              Create Your Profile
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetailsPage;
