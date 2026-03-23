import React, { useState, useRef } from "react";
import {
  Briefcase,
  Monitor,
  Megaphone,
  Globe,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  MessageSquare,
  Backpack,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SmilingMan from "../assets/manSmiling.png";
import Hubtel from "../assets/hubtel.png";
import Mail from "../assets/emailIcon.png";
import { FiCheckSquare } from "react-icons/fi";

const RemoteInternship = () => {
  const navigate = useNavigate();
  // --- Data ---

  const faqs = [
    {
      question: "What is placement?",
      answer:
        "Placement refers to the process of matching qualified candidates to job roles within an organization.",
    },
    {
      question: "Who can apply for placements?",
      answer:
        "Placement Hub is open to HND and BSc graduates, as well as individuals with relevant skills and at least one year of experience. We also consider candidates with strong communication, interpersonal, and teamwork skills.",
    },
    {
      question: "What types of placements does Placement Hub offer?",
      answer:
        "We provide internship placements and graduate/entry-level placements, depending on the organization’s requirements and candidate profile.",
    },
    {
      question: "Why choose Placement Hub’s placement internship program?",
      answer:
        "Our placement internship program prepares you with practical skills, personalized guidance, and meaningful work experience, giving you the confidence and tools to excel in your career.",
    },
    {
      question: "How do I apply for a placement?",
      answer:
        "You can apply online through our platform. The process typically involves submitting an application, paying a small application fee, scheduling an interview, and completing any pre-placement assessments or training.",
    },
    {
      question: "How does Placement Hub match candidates to organizations?",
      answer:
        "We carefully review candidates’ skills, experience, and career goals, then match them to organizations’ specific needs. Our goal is to ensure a mutually beneficial fit for both parties.",
    },
    {
      question: "Can organizations request specific skills or qualifications?",
      answer:
        "Absolutely. Placement Hub tailors candidate recommendations based on the organization’s requirements, ensuring that every placement aligns with the needed skill set.",
    },
    {
      question: "What benefits do candidates get from Placement Hub?",
      answer:
        "Candidates gain meaningful work experience, professional references, skill development, and access to roles that align with their career goals.",
    },
    {
      question: "How long does the placement process take?",
      answer:
        "The duration varies depending on the organization and type of placement, but our structured process is designed to minimize waiting time and ensure candidates start their roles efficiently.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);
  const testimonialSliderRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    {
      name: "Ayomide",
      role: "Intern",
      text: "Placement Hub gave me the opportunity I had been hoping for. They directly connected me with an internship that suits my skills and career goals perfectly. Their guidance and support throughout the process made everything smooth and stress-free.",
    },
    {
      name: "Ibrahim",
      role: "Intern",
      text: "I'm grateful to Placement Hub for connecting me with Big Fix Technologies and guiding me throughout the hiring process. Their steady communication and reassurance made the journey seamless.",
    },
    {
      name: "Vincent",
      role: "Intern",
      text: "With Placement Hub, I finally found a role that is a great fit for me. If you're struggling to find the right opportunity, I highly recommend giving Placement Hub a shot.",
    },
  ];

  const nextSlide = () => {
    if (testimonialSliderRef.current) {
      testimonialSliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    if (testimonialSliderRef.current) {
      testimonialSliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  return (
    <div className="font-['Outfit'] bg-white text-gray-900 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#f8f7fa] overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>

        {/* Navbar Placeholder */}
        <Navbar />

        <div className="bg-[#EFECF4] grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 mx-auto w-full">
          <div className="px-6 md:px-0 md:pl-12 lg:pl-20 pt-10 sm:pt-12 pb-10 md:pb-20 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="space-y-5 sm:space-y-6 md:space-y-8 animate-fade-in-up flex flex-col items-center md:items-start w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-[#2d1b4e] leading-[1.2] md:leading-[1.1]">
                Get Placed. <br className="md:hidden" /> Get Prepared.{" "}
                <br className="hidden md:block" />
                Build Your Career.
              </h1>
              <p className="text-gray-600 text-sm sm:text-base md:text-xl max-w-lg leading-relaxed px-2 md:px-0">
                We help you find the best internships with top companies to
                kickstart your career. Gain experience, network, and grow.
              </p>
              <button
                onClick={() => navigate("/internship-application")}
                className="bg-[#2d1b4e] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-purple-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto mt-2 sm:mt-0"
              >
                Apply Now
              </button>
            </div>
          </div>

          <div className="relative mt-8 sm:mt-12 lg:mt-0 flex-1 w-full max-w-md mx-auto sm:max-w-xl md:max-w-none">
            {/* Hero Image Container */}
            <div className="relative z-10 flex justify-center mt-6 md:mt-0 px-4 sm:px-8 md:px-4">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-none">
                <img
                  src={SmilingMan}
                  alt="Happy professional"
                  className="object-contain w-full h-full z-10 relative drop-shadow-lg"
                />

                {/* Floating Cards */}
                <div className="absolute top-6 sm:top-10 -left-4 sm:-left-4 md:left-0 bg-[#EBF0F3]/95 md:bg-[#EBF0F3] backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl md:rounded-2xl shadow flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 animate-bounce-slow border border-gray-100 z-20 w-[140px] sm:w-[190px] md:w-[260px]">
                  <div className="w-full flex items-center justify-between gap-1 md:gap-2">
                    <div>
                      <img
                        src={Hubtel}
                        alt="Hubtel"
                        className="h-2 sm:h-3 md:h-4 mb-0.5"
                      />
                      <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-600">
                        Kokomlemle
                      </p>
                    </div>
                    <p className="text-[7.5px] sm:text-[10px] md:text-sm text-[#3E1D67] font-bold px-1 sm:px-1.5 md:px-2 py-0.5 bg-white rounded-sm sm:rounded-md scale-90 sm:scale-100 origin-right">
                      Internship
                    </p>
                  </div>
                  <div className="w-full text-left">
                    <p className="text-[10px] sm:text-xs md:text-sm text-[#3E1D67] font-bold leading-tight">
                      Graphic Designer
                    </p>
                    <p className="text-[8px] sm:text-[10px] md:text-sm text-gray-500 leading-tight md:leading-snug mt-0.5">
                      The company seeks to employ the services of a...
                      <span className="text-[#3E1D67] font-bold cursor-pointer ml-0.5 sm:ml-1 hidden sm:inline">
                        Read More
                      </span>
                    </p>
                  </div>
                </div>

                {/* Company Logos Floating */}
                <div className="absolute bottom-12 sm:bottom-16 md:bottom-10 left-0 md:-left-10 bg-[#EBF0F3]/95 md:bg-[#EBF0F3] backdrop-blur-sm p-1.5 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl md:rounded-2xl shadow flex flex-col animate-bounce-slow border border-gray-100 z-20 w-[120px] sm:w-[170px] md:w-[240px]">
                  <div className="w-full flex items-center justify-between gap-1 sm:gap-2">
                    <div className="flex w-full justify-between items-center gap-1 sm:gap-2">
                      <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
                        <img
                          src={Mail}
                          alt="Mail"
                          className="h-2.5 sm:h-3 md:h-4 mb-0.5"
                        />
                        <p className="text-[8px] sm:text-xs md:text-sm text-gray-600 leading-none">
                          Congratulations
                        </p>
                      </div>
                      <FiCheckSquare className="text-green-600 w-3 sm:w-3 md:w-4 h-3 sm:h-3 md:h-4 shrink-0" />
                    </div>
                  </div>
                  <p className="text-[7.5px] sm:text-[10px] md:text-sm mt-1 text-gray-700 leading-none">
                    You have got an Email
                  </p>
                </div>

                {/* Users Placed Floating */}
                <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-10 right-0 sm:right-4 md:right-8 -translate-y-1/2 bg-[#F1F5F9]/95 md:bg-[#F1F5F9] backdrop-blur-md p-2 sm:p-3 md:p-4 rounded-xl md:rounded-3xl shadow-xl flex flex-col items-center animate-bounce-slow border border-white/50 z-20 w-[100px] sm:w-[140px] md:w-auto">
                  <div className="text-center">
                    <h3 className="font-bold text-xs sm:text-sm md:text-lg text-gray-900 leading-none">
                      200+
                    </h3>
                    <p className="text-gray-600 text-[8px] sm:text-[10px] md:text-sm font-medium mt-0.5 md:mt-1 leading-none">
                      Got placed
                    </p>
                  </div>

                  <div className="flex justify-center items-center -space-x-1 sm:-space-x-2 md:-space-x-3 mt-1 md:mt-2">
                    {[32, 12, 23, 14, 5].map((i, index) => (
                      <img
                        key={index}
                        src={`https://i.pravatar.cc/100?img=${i}`}
                        alt="User"
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 rounded-full border border-white md:border-2 object-cover"
                      />
                    ))}
                    <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 md:border-2 flex items-center justify-center text-gray-600 font-bold shadow-sm text-xs md:text-lg z-10 leading-none">
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* --- HOW TO START --- */}
      <section className="bg-[#2d1b4e] py-16 md:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 md:mb-20">
            Here's How You Start
          </h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-12 text-center">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center">
              <span className="text-[10rem] md:text-[12rem] font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none select-none pointer-events-none mt-4 md:mt-0">
                1
              </span>
              <div className="relative z-10 pt-6 md:pt-12 px-4">
                <h3 className="text-2xl sm:text-2xl font-bold mb-2">Apply</h3>
                <p className="text-[#ffc12b] font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wide">
                  Start Your Journey
                </p>
                <p className="text-white/80 max-w-xs mx-auto leading-relaxed text-sm sm:text-base">
                  Hit <span className="italic">Apply Now</span> and fill in a
                  few basic details. It only takes a couple of minutes to get
                  the ball rolling.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center">
              <span className="text-[10rem] md:text-[12rem] font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none select-none pointer-events-none mt-4 md:mt-0">
                2
              </span>
              <div className="relative z-10 pt-6 md:pt-12 px-4">
                <h3 className="text-2xl sm:text-2xl font-bold mb-2">
                  Registration Fee
                </h3>
                <p className="text-[#ffc12b] font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wide">
                  Quick and easy
                </p>
                <p className="text-white/80 max-w-xs mx-auto leading-relaxed text-sm sm:text-base">
                  A one-time registration fee confirms your application and
                  gives you instant access to schedule your interview.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center">
              <span className="text-[10rem] md:text-[12rem] font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none select-none pointer-events-none mt-4 md:mt-0">
                3
              </span>
              <div className="relative z-10 pt-6 md:pt-12 px-4">
                <h3 className="text-2xl sm:text-2xl font-bold mb-2">
                  Schedule Your Interview
                </h3>
                <p className="text-[#ffc12b] font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wide">
                  Let’s get to know you
                </p>
                <p className="text-white/80 max-w-xs mx-auto leading-relaxed text-sm sm:text-base">
                  Book a quick interview with our team — we'll learn more about
                  you and match you with the internship opportunities that fit
                  best.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/internship-application")}
            className="mt-16 md:mt-20 bg-[#ffc12b] text-[#2d1b4e] px-10 sm:px-12 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#ffcd57] transition-all hover:scale-105 shadow-lg italic w-full sm:w-auto"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* --- CHOOSE YOUR PATH --- */}
      <section className="py-16 md:py-24 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="bg-[#E0DAED] text-[#2d1b4e] px-5 sm:px-6 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase inline-block mb-4 sm:mb-6">
              CAREER FIELDS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Can't find your niche? Reach out, we're always creating new
              opportunities for internship seekers like you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              "Tech & IT Internships",
              "Business Internships",
              "Finance & Accounting Internships",
              "Administrative & Office Internships",
              "Marketing & Media Internships",
              "Healthcare Internships",
              "Legal & Compliance Internships",
              "Logistics & Supply Chain Internships",
              "Engineering & Technical Internships",
            ].map((role, idx) => (
              <div
                key={idx}
                onClick={() =>
                  navigate(`/internships?category=${role.split(" ")[0]}`)
                }
                className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group cursor-pointer"
              >
                <div className="bg-[#F3F0F9] p-2.5 sm:p-3 rounded-lg text-[#2d1b4e] group-hover:bg-[#2d1b4e] group-hover:text-white transition-colors shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-bold text-gray-800 text-sm sm:text-lg">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERSHIPS --- */}
      <section className="bg-[#2d1b4e] py-16 md:py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Top Block */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6">
              Partnerships
            </h2>
            <p className="text-white/80 text-sm sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We are open to partnerships with employers.
              <br className="hidden md:block" /> Join our network of employers
              to access our talent pool
            </p>
          </div>

          {/* Bottom Block */}
          <div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link to="/partnership-contact" className="w-full sm:w-auto">
                <button className="bg-transparent border border-[#FFC12B] text-[#FFC12B] font-bold px-8 py-3.5 sm:py-3 rounded-xl hover:bg-[#FFC12B]/10 transition-all w-full sm:w-auto min-w-[160px] cursor-pointer text-sm sm:text-base">
                  Book a Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="bg-white py-16 md:py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f1f1f] mb-3 md:mb-4">
              What people are saying about us
            </h2>
            <p className="text-gray-500 text-sm sm:text-lg">
              See what interns are saying about our services
            </p>
          </div>

          <div className="relative xl:px-12">
            <div className="overflow-hidden -mx-6 sm:mx-0 px-6 sm:px-0">
              <div
                ref={testimonialSliderRef}
                className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F9FAFB] p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shrink-0 w-[85vw] sm:w-[320px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col h-auto snap-center"
                  >
                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                      <div>
                        <h4 className="font-bold text-lg sm:text-xl text-[#2d1b4e]">
                          {t.name}
                        </h4>
                        <p className="text-gray-500 text-xs sm:text-sm">
                          {t.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows on sides */}
            <button
              onClick={prevSlide}
              className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#2d1b4e] text-white items-center justify-center hover:bg-purple-900 transition-colors shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#2d1b4e] text-white items-center justify-center hover:bg-purple-900 transition-colors shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Mobile/Tablet slider hints */}
            <div className="flex xl:hidden justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2d1b4e]/10 text-[#2d1b4e] flex items-center justify-center hover:bg-[#2d1b4e]/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2d1b4e]/10 text-[#2d1b4e] flex items-center justify-center hover:bg-[#2d1b4e]/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- ELIGIBILITY --- */}
      <section className="bg-[#FFFDF5] py-16 md:py-24 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-20 text-[#1f1f1f]">
          Who Is Eligible to Apply
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 mb-16 md:mb-24">
          {/* Fresh Graduates */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="bg-transparent mb-4 md:mb-6">
              <GraduationCap
                className="w-10 h-10 md:w-12 md:h-12 text-[#ffc12b]"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-3 md:mb-4 text-[#2d1b4e]">
              Fresh Graduates
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed px-2 md:px-0">
              Ideal for those seeking their first professional opportunity and
              career growth.
            </p>
          </div>

          {/* Undergraduates */}

          {/* Corp Members */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="bg-transparent mb-4 md:mb-6">
              <Users
                className="w-10 h-10 md:w-12 md:h-12 text-[#ffc12b]"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-3 md:mb-4 text-[#2d1b4e]">
              Corp Members
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed px-2 md:px-0">
              Open to NYSC members ready for placement or career development.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-[#FFF9EA] p-6 sm:p-8 md:p-14 rounded-[2rem] md:rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 border border-transparent shadow-sm">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-[#2d1b4e] mb-2">
              Not sure if you qualify?
            </h4>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
              Contact our admissions team and we'll help you determine the best
              program for your situation.
            </p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#ffc12b] text-[#2d1b4e] px-8 sm:px-10 py-3.5 sm:py-4 md:py-5 rounded-xl md:rounded-2xl font-bold hover:bg-[#ffcd57] transition-all shadow-sm whitespace-nowrap text-sm sm:text-base md:text-lg w-full md:w-auto mt-2 md:mt-0"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* --- PROGRAM FEATURES & FEE --- */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#1f1f1f]">
              Internships Placement Benefits
            </h2>
            <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto">
              Unlock full access to our placement program, including all
              resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-[#F9FAFB] p-6 sm:p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-start text-left">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 text-[#2d1b4e]">
                Program Benefits
              </h3>
              <ul className="space-y-3 text-gray-600 font-medium mb-6 md:mb-8 text-sm md:text-base">
                {[
                  "Career Support & Coaching",
                  "Interview Prep",
                  "Job Readiness Training",
                  "Tailored Application Advice",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-[#2d1b4e] font-bold mt-auto hover:gap-3 transition-all text-sm md:text-base">
                Contact us <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F9FAFB] p-6 sm:p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-start text-left">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 text-[#2d1b4e]">
                Placement Experience
              </h3>
              <ul className="space-y-3 text-gray-600 font-medium mb-6 md:mb-8 text-sm md:text-base">
                {[
                  "Hands-on Project Work",
                  "Career Readiness",
                  "Tailored Placement",
                  "Guidance and Support",
                  "Smooth Transition to Employment",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-[#2d1b4e] font-bold mt-auto hover:gap-3 transition-all text-sm md:text-base">
                Contact us <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F9FAFB] p-6 sm:p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-start text-left">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 text-[#2d1b4e]">
                Career Resources & Support
              </h3>
              <ul className="space-y-3 text-gray-600 font-medium mb-6 md:mb-8 text-sm md:text-base">
                {[
                  "Career Advisor",
                  "Cross-Cultural Skills",
                  "Professional Reference",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-[#2d1b4e] font-bold mt-auto hover:gap-3 transition-all text-sm md:text-base">
                Contact us <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Card 4 - Pricing */}
            <div className="bg-[#2d1b4e] p-6 sm:p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 text-center relative overflow-hidden">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white mb-0 whitespace-nowrap">
                Join the program
              </h3>

              <button
                onClick={() => navigate("/internship-application")}
                className="bg-[#ffc12b] text-[#2d1b4e] px-8 sm:px-10 py-3.5 sm:py-3 rounded-xl md:rounded-lg font-bold hover:bg-[#ffcd57] transition-all shadow-lg w-full md:w-auto text-sm sm:text-base"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="bg-[#f9fafb] py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 text-[#1f1f1f]">
              FAQs
            </h2>
            <p className="text-gray-500 text-sm sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Got questions about joining our placement program? Check here for
              answers.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-100"
              >
                <button
                  className="w-full flex justify-between items-start text-left p-5 sm:p-6 md:p-8"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="font-bold text-[#2d1b4e] text-sm sm:text-base md:text-xl pr-4 sm:pr-8">
                    {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-[#2d1b4e] shrink-0 mt-0.5" />
                  ) : (
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-400 shrink-0 mt-0.5" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === idx
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-8 text-gray-600 leading-relaxed pt-0 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="px-4 sm:px-6 pb-16 md:pb-24 pt-4 md:pt-0">
        <div className="max-w-7xl mx-auto bg-[#2d1b4e] rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden text-white shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-0 leading-[1.2] text-center md:text-left">
              Start The Journey <br className="hidden md:block" /> That Starts
              Everything!
            </h2>

            <button
              onClick={() => navigate("/internship-application")}
              className="bg-[#ffc12b] text-[#2d1b4e] px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg md:text-xl hover:bg-yellow-400 shadow-xl transition-transform hover:scale-105 w-full md:w-auto mt-2 md:mt-0"
            >
              Join now
            </button>
          </div>
          {/* Shapes */}
          <div className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] opacity-40"></div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
};

export default RemoteInternship;
