import React, { useState } from "react";
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
        "We provide internship placements, full-time roles, part-time positions, contract/temporary assignments, and graduate/entry-level placements, depending on the organization’s requirements and candidate profile.",
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
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    {
      name: "Ayomide",
      role: "Job role",
      text: "Placement Hub gave me the opportunity I had been hoping for. They directly connected me with a job that suits my skills and career goals perfectly. Their guidance and support throughout the process made everything smooth and stress-free.",
    },
    {
      name: "Ibrahim",
      role: "Job role",
      text: "I'm grateful to Placement Hub for connecting me with Big Fix Technologies and guiding me throughout the hiring process. Their steady communication and reassurance made the journey seamless.",
    },
    {
      name: "Vincent",
      role: "Job role",
      text: "With Placement Hub, I finally found a role that is a great fit for me. If you're struggling to find the right opportunity, I highly recommend giving Placement Hub a shot.",
    },
  ];

  const nextSlide = () => {
    setCurrentTestimonialIndex((prev) =>
      prev + 3 >= testimonials.length ? 0 : prev + 3,
    );
  };

  const prevSlide = () => {
    setCurrentTestimonialIndex((prev) =>
      prev - 3 < 0 ? Math.max(0, testimonials.length - 3) : prev - 3,
    );
  };

  return (
    <div className="font-['Outfit'] bg-white text-gray-900 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#f8f7fa] overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>

        {/* Navbar Placeholder */}
        <Navbar />

        <div className="bg-[#EFECF4] grid lg:grid-cols-2 gap-12 items-center relative z-10  mx-auto w-full ">
          <div className="pl-4 md:pl-12 lg:pl-20 pt-12 pb-20">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-2xl md:text-6xl lg:text-5xl font-bold text-[#2d1b4e] leading-[1.1]">
                Get Placed. Get Prepared. <br />
                Build Your Career.
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
                We help you find the best remote internships with top companies
                to kickstart your career. Gain experience, network, and grow.
              </p>
              <button
                onClick={() => navigate("/internship-application")}
                className="bg-[#2d1b4e] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-purple-900 transition-all shadow-xl hover:shadow-2xl  hover:-translate-y-1"
              >
                Apply Now
              </button>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 flex-1">
            {/* Hero Image Container */}
            <div className="relative z-10 flex justify-center">
              <div className="relative">
                <img
                  src={SmilingMan}
                  alt="Happy professional"
                  className="object-contain w-full h-full md:w-full md:h-full z-10 relative"
                />

                {/* Floating Cards */}
                <div className="absolute top-10 -left-4 md:left-0 bg-[#EBF0F3] backdrop-blur-sm p-3 rounded-2xl shadow flex flex-col items-center gap-3 animate-bounce-slow border border-gray-100 z-20 w-[260px]">
                  <div className="w-full flex items-center justify-between gap-2">
                    <div>
                      <img src={Hubtel} alt="Hubtel" className="h-4 mb-0.5" />
                      <p className="text-sm text-gray-00">Kokomlemle</p>
                    </div>
                    <p className="text-sm text-[#3E1D67] font-bold px-2 py-0.5 bg-white rounded-md">
                      Full Time
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#3E1D67] font-bold">
                      Graphic Designer
                    </p>
                    <p className="text-sm text-gray-500">
                      The company seeks to employ the services of
                      a.....................
                      <span className="text-[#3E1D67] font-bold cursor-pointer">
                        Read More
                      </span>
                    </p>
                  </div>
                </div>

                {/* Company Logos Floating */}
                <div className="absolute bottom-10 left-0 md:-left-10  bg-[#EBF0F3] backdrop-blur-sm p-3 rounded-2xl shadow flex flex-col animate-bounce-slow border border-gray-100 z-20 w-[240px]">
                  <div className="w-full flex items-center justify-between gap-2">
                    <div className="flex w-full  justify-between items-center gap-2">
                      <div className="flex items-center gap-4">
                        <img src={Mail} alt="Hubtel" className="h-4 mb-0.5" />
                        <p className="text-sm text-gray-00">Congratulations</p>
                      </div>

                      <FiCheckSquare />
                    </div>
                  </div>
                  <p className="text-sm">You have got an Email</p>
                </div>

                <div className="absolute -bottom-10 right-8 -translate-y-1/2 bg-[#F1F5F9] backdrop-blur-md p-4 rounded-3xl shadow-xl flex flex-col items-center animatebounce-slow border border-white/50 z-20">
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-gray-900">200+</h3>
                    <p className="text-gray-600 text-sm font-medium mt-1">
                      Got job on our platform
                    </p>
                  </div>

                  <div className="flex justify-center items-center -space-x-3 mt-2">
                    {[32, 12, 23, 14, 5].map((i, index) => (
                      <img
                        key={index}
                        src={`https://i.pravatar.cc/100?img=${i}`}
                        alt="User"
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-600 font-bold shadow-sm text-lg z-10">
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
      <section className="bg-[#2d1b4e] py-24 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-20">
            Here's How You Start
          </h2>

          <div className="grid md:grid-cols-4 gap-8 md:gap-12 text-center">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center">
              <span className="text-[12rem] font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none select-none">
                1
              </span>
              <div className="relative z-10 pt-12">
                <h3 className="text-2xl font-bold mb-2">
                  Select Preferred Field
                </h3>
                <p className="text-[#ffc12b] font-bold text-sm mb-4 uppercase tracking-wide">
                  Only 5 minutes
                </p>
                <p className="text-white/80 max-w-xs mx-auto leading-relaxed">
                  Go through the available internship options below and select
                  your preferred field.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col items-center">
              <span className="text-[12rem] font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none select-none">
                2
              </span>
              <div className="relative z-10 pt-12">
                <h3 className="text-2xl font-bold mb-2">Registration Fee</h3>
                <p className="text-[#ffc12b] font-bold text-sm mb-4 uppercase tracking-wide">
                  Quick and easy
                </p>
                <p className="text-white/80 max-w-xs mx-auto leading-relaxed">
                  Registration requires a one-time payment to confirm your
                  enrollment and give you access to our services and
                  opportunities
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center">
              <span className="text-[12rem] font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none select-none">
                3
              </span>
              <div className="relative z-10 pt-12">
                <h3 className="text-2xl font-bold mb-2">
                  Schedule Your Interview
                </h3>
                <p className="text-[#ffc12b] font-bold text-sm mb-4 uppercase tracking-wide">
                  Let’s get to know you
                </p>
                <p className="text-white/80 max-w-xs mx-auto leading-relaxed">
                  Set up a quick interview with our team to explore placement
                  opportunities tailored to you.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center">
              <span className="text-[12rem] font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none select-none">
                4
              </span>
              <div className="relative z-10 pt-12">
                <h3 className="text-2xl font-bold mb-2">Placement Fee</h3>
                <p className="text-[#ffc12b] font-bold text-sm mb-4 uppercase tracking-wide">
                  Get started
                </p>
                <p className="text-white/80 max-w-xs mx-auto leading-relaxed">
                  The placement fee covers the recruitment process and
                  administrative costs associated with your placement
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/internship-application")}
            className="mt-20 bg-[#ffc12b] text-[#2d1b4e] px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#ffcd57] transition-all hover:scale-105 shadow-lg"
          >
            Get started
          </button>
        </div>
      </section>

      {/* --- CHOOSE YOUR PATH --- */}
      <section className="py-24 px-4 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-[#E0DAED] text-[#2d1b4e] px-6 py-2 rounded-lg text-sm font-bold tracking-wide uppercase inline-block mb-6">
              CAREER FIELDS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Can't find your niche? Reach out, we're always creating new
              opportunities for job seekers like you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    navigate(`/jobs?category=${role.split(" ")[0]}`)
                  }
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group cursor-pointer"
                >
                  <div className="bg-[#F3F0F9] p-3 rounded-lg text-[#2d1b4e] group-hover:bg-[#2d1b4e] group-hover:text-white transition-colors">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-800 text-lg">
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PARTNERSHIPS --- */}
      <section className="bg-[#2d1b4e] py-24 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Top Block */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnerships</h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We are open to partnerships with employers.
            <br className="hidden md:block" /> Join our network of employers to
            access our talent pool
          </p>

          {/* Bottom Block */}
          <div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact">
                <button className="bg-transparent border border-[#FFC12B] text-[#FFC12B] font-bold px-8 py-3 rounded-xl hover:bg-[#FFC12B]/10 transition-all w-full sm:w-auto min-w-[160px] cursor-pointer">
                  Book a Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="bg-white py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f1f1f] mb-4">
              What people are saying about us
            </h2>
            <p className="text-gray-500 text-lg">
              See what interns are saying about our services
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${currentTestimonialIndex * (100 / 3)}%)`,
                }}
              >
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F9FAFB] p-8 rounded-[2.5rem] shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col h-full"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div>
                        <h4 className="font-bold text-xl text-[#2d1b4e]">
                          {t.name}
                        </h4>
                        <p className="text-gray-500 text-sm">{t.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {t.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows on sides */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#2d1b4e] text-white flex items-center justify-center hover:bg-purple-900 transition-colors shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#2d1b4e] text-white flex items-center justify-center hover:bg-purple-900 transition-colors shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* --- ELIGIBILITY --- */}
      <section className="bg-[#FFFDF5] py-24 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-[#1f1f1f]">
          Who Is Eligible to Apply
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-24">
          {/* Fresh Graduates */}
          <div className="flex flex-col items-center">
            <div className="bg-transparent mb-6">
              <GraduationCap
                className="w-10 h-10 text-[#ffc12b]"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="font-bold text-2xl mb-4 text-[#2d1b4e]">
              Fresh Graduates
            </h3>
            <p className="text-gray-500 max-w-[280px] text-base leading-relaxed">
              Ideal for those seeking their first professional opportunity and
              career growth.
            </p>
          </div>

          {/* Undergraduates */}
          <div className="flex flex-col items-center">
            <div className="bg-transparent mb-6">
              <Backpack
                className="w-10 h-10 text-[#ffc12b]"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="font-bold text-2xl mb-4 text-[#2d1b4e]">
              Undergraduates
            </h3>
            <p className="text-gray-500 max-w-[280px] text-base leading-relaxed">
              Suitable for students looking to gain hands-on experience while
              studying.
            </p>
          </div>

          {/* Corp Members */}
          <div className="flex flex-col items-center">
            <div className="bg-transparent mb-6">
              <Users className="w-10 h-10 text-[#ffc12b]" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-2xl mb-4 text-[#2d1b4e]">
              Corp Members
            </h3>
            <p className="text-gray-500 max-w-[280px] text-base leading-relaxed">
              Open to NYSC members ready for placement or career development.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-[#FFF9EA] p-8 md:p-14 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-transparent shadow-sm">
          <div className="text-left">
            <h4 className="font-bold text-2xl text-[#2d1b4e] mb-2">
              Not sure if you qualify?
            </h4>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#ffc12b] text-[#2d1b4e] px-10 py-5 rounded-2xl font-bold hover:bg-[#ffcd57] transition-all shadow-sm whitespace-nowrap text-lg"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* --- PROGRAM FEATURES & FEE --- */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1f1f1f]">
              Internships Placement Program Fee
            </h2>
            <p className="text-gray-500 text-lg">
              Unlock full access to our placement program, including all
              resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-[#F9FAFB] p-10 rounded-[2rem] flex flex-col items-start text-left">
              <h3 className="font-bold text-2xl mb-6 text-[#2d1b4e]">
                Program Benefits
              </h3>
              <ul className="space-y-3 text-gray-600 font-medium mb-8">
                {[
                  "Career Support & Coaching",
                  "Interview Prep",
                  "Job Readiness Training",
                  "Tailored Application Advice",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-[#2d1b4e] font-bold mt-auto hover:gap-3 transition-all">
                Partner with us <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F9FAFB] p-10 rounded-[2rem] flex flex-col items-start text-left">
              <h3 className="font-bold text-2xl mb-6 text-[#2d1b4e]">
                Placement Experience
              </h3>
              <ul className="space-y-3 text-gray-600 font-medium mb-8">
                {[
                  "Hands-on Project Work",
                  "Career Readiness",
                  "Tailored Placement",
                  "Guidance and Support",
                  "Smooth Transition to Employment",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-[#2d1b4e] font-bold mt-auto hover:gap-3 transition-all">
                Partner with us <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F9FAFB] p-10 rounded-[2rem] flex flex-col items-start text-left">
              <h3 className="font-bold text-2xl mb-6 text-[#2d1b4e]">
                Career Resources & Support
              </h3>
              <ul className="space-y-3 text-gray-600 font-medium mb-8">
                {[
                  "Career Advisor",
                  "Cross-Cultural Skills",
                  "Professional Reference",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-[#2d1b4e] font-bold mt-auto hover:gap-3 transition-all">
                Partner with us <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Card 4 - Pricing */}
            <div className="bg-[#2d1b4e] p-10 rounded-[2rem] flex items-center justify-center gap-10 text-center relative overflow-hidden">
              <h3 className="font-bold text-2xl text-white mb-2 whitespace-nowrap">
                Join the program
              </h3>

              <button
                onClick={() => navigate("/internship-application")}
                className="bg-[#ffc12b] text-[#2d1b4e] px-10 py-3 rounded-lg font-bold hover:bg-[#ffcd57] transition-all shadow-lg"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="bg-[#f9fafb] py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-24">
            <h2 className="text-4xl font-bold mb-4 text-[#1f1f1f]">FAQs</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Got questions about joining our placement program? Check here for
              answers.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-100"
              >
                <button
                  className="w-full flex justify-between items-start text-left p-6 sm:p-8"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="font-bold text-[#2d1b4e] text-lg md:text-xl pr-8">
                    {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-6 h-6 text-[#2d1b4e] shrink-0 mt-1" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 shrink-0 mt-1" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === idx
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-8 text-gray-600 leading-relaxed pt-0">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto bg-[#2d1b4e] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden text-white shadow-2xl">
          <div className="relative z-10 flex justify-between items-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-left  ">
              Start The Journey <br /> That Starts Everything!
            </h2>

            <button
              onClick={() => navigate("/internship-application")}
              className="bg-[#ffc12b] text-[#2d1b4e] px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-400 shadow-xl transition-transform hover:scale-105"
            >
              Join now
            </button>
          </div>
          {/* Shapes */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
};

export default RemoteInternship;
