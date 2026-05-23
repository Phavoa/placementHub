import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Users, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  ShieldCheck, 
  Rocket,
  Award,
  Zap,
  ArrowDown
} from "lucide-react";
import Navbar from "./Navbar";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import AboutHeroImage from "../assets/about-hero.png";
import TransitionImg from "../assets/transition-img.png";

const About = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-[#FEFEFA] font-['Outfit'] overflow-x-hidden selection:bg-[#FFC12B] selection:text-[#3E1D67]">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 bg-linear-to-br from-[#3E1D67] via-[#2d1b4e] to-[#1a1128] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#FFC12B] rounded-full blur-[140px]"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px]"
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#FFC12B] font-bold text-sm tracking-widest uppercase mb-6">
                  Elevating Talent Globally
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                  Bridging the Gap <br />
                  <span className="text-[#FFC12B] inline-block mt-2">Between Talent</span> <br />
                  & Opportunity
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-purple-100/80 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                Placement Hub is more than a recruitment agency. We are a pathway to excellence, 
                empowering individuals and strengthening businesses through intentional development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4"
              >
                <button className="bg-[#FFC12B] text-[#3E1D67] px-8 py-4 rounded-xl font-black text-lg shadow-2xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all">
                  Our Programs
                </button>
                <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-white/10 transition-all">
                  Learn More
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/10 group aspect-4/5">
                <img 
                  src={AboutHeroImage} 
                  alt="About Hero" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2d1b4e]/80 via-transparent to-transparent"></div>
              </div>

              {/* Float Glass Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl border border-white/20 z-20 hidden md:block"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-[#FFC12B] rounded-2xl flex items-center justify-center text-[#3E1D67] shadow-lg">
                    <Award className="w-10 h-10" />
                  </div>
                  <div className="text-white">
                    <p className="font-black text-2xl leading-none italic">200+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#FFC12B] mt-1">Success Stories</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* --- WHO WE ARE (PARA 1 & 2) --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-12 xl:col-span-7 space-y-12">
              <motion.div {...fadeIn}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[2px] bg-[#FFC12B]"></div>
                  <span className="text-purple-500 font-black tracking-widest uppercase text-sm">Our Legacy</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-[#2d1b4e] mb-8 leading-tight">
                  A Recruitment Agency with a <br /> 
                  <span className="text-purple-500 italic">Global Vision</span>
                </h2>
                <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                  <p className="border-l-4 border-purple-100 pl-8">
                    ABOUT: Placement Hub is a recruitment agency with an internal internship academy dedicated to bridging 
                    the gap between talent and opportunity in today’s competitive job market. We understand that 
                    while many individuals possess the passion and willingness to work, they may not yet have the 
                    in-demand skills employers require.
                  </p>
                  <p className="pl-9">
                    At the same time, organizations are constantly seeking competent, job-ready professionals who can 
                    deliver value from day one. This is where Placement Hub stands out. We go beyond the traditional 
                    role of recruitment by not only sourcing and placing candidates but also intentionally developing 
                    them to meet industry standards.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                {...fadeIn}
                className="relative bg-linear-to-br from-[#2d1b4e] to-[#1a1128] p-10 md:p-16 rounded-[3rem] shadow-3xl text-white overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>
                <Users className="w-16 h-16 text-[#FFC12B]/20 absolute top-10 right-10" />
                
                <h3 className="text-3xl font-black mb-8 text-[#FFC12B] flex items-center gap-4">
                  <div className="w-2 h-8 bg-[#FFC12B]"></div>
                  Our Approach
                </h3>
                <p className="text-purple-50 text-lg md:text-xl leading-relaxed mb-10 font-medium italic relative z-10">
                  "Our approach is centered on creating a seamless connection between 
                  employers and highly capable candidates, ensuring long-term success for both parties."
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
                    <Users className="w-8 h-8 text-[#FFC12B] mb-4 group-hover:scale-110 transition-transform" />
                    <p className="font-black text-lg mb-2">Recruitment</p>
                    <p className="text-xs text-purple-200/70 leading-relaxed font-medium">Directly connecting top-tier talent with ambitious global organizations.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
                    <Rocket className="w-8 h-8 text-[#FFC12B] mb-4 group-hover:scale-110 transition-transform" />
                    <p className="font-black text-lg mb-2">Development</p>
                    <p className="text-xs text-purple-200/70 leading-relaxed font-medium">Focused internal academy training to ensure day-one readiness and value.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-12 xl:col-span-5 relative hidden xl:block"
            >
              <div className="sticky top-32">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
                  <img src={TransitionImg} alt="Story" className="w-full h-auto" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[3rem]"></div>
                </div>
                {/* Visual Accent */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl -z-10 opacity-50"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl -z-10 opacity-50"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VALUES GRID (PARA 2) --- */}
      <section className="py-32 bg-[#F4F1F8] px-6 relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-0 left-0 w-full text-[20vw] font-black text-[#3E1D67]/[0.02] leading-none whitespace-nowrap select-none italic translate-y-[-20%]">
          EXCELLENCE INTEGRITY IMPACT
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            {...fadeIn}
            className="mb-20"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white text-[#3E1D67] font-bold text-xs tracking-widest uppercase mb-6 shadow-sm border border-purple-100">
              Core Principles
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-[#2d1b4e] mb-6 leading-tight">
              Committed to <br /> <span className="text-purple-500 italic">Sustainable Growth</span>
            </h2>
            <p className="text-gray-500 max-w-4xl text-base md:text-lg leading-relaxed font-light">
              Placement Hub is committed to excellence, integrity, and impact. We partner with organizations across various industries 
              to understand their workforce needs and deliver candidates who are not only qualified but also aligned with their business goals and culture. 
              For job seekers, we provide more than just employment opportunities; we offer a pathway to growth, self-development, and long-term career success. 
              Our dual approach to recruitment and internship enables us to consistently deliver value, ensuring businesses gain access to skilled 
              talent while candidates are empowered to unlock their full potential.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-12 gap-8"
          >
            {/* Excellence - Large Card */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="md:col-span-8 bg-white p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(45,27,78,0.05)] border border-white hover:shadow-3xl transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-50 rounded-full group-hover:scale-150 transition-transform duration-700 -z-10"></div>
              <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center text-[#3E1D67] mb-8 group-hover:bg-[#3E1D67] group-hover:text-white transition-colors">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <h4 className="text-3xl font-black text-[#2d1b4e] mb-6 tracking-tight italic">Excellence</h4>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                We partner with organizations across various industries to understand their workforce needs and deliver candidates who are not only qualified but also aligned with their business goals and culture.
              </p>
            </motion.div>

            {/* Integrity - Small Card */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="md:col-span-4 bg-[#FFC12B] p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <Target className="w-16 h-16 text-[#3E1D67]/20 self-end -mb-8 rotate-12" />
              <div>
                <h4 className="text-3xl font-black text-[#3E1D67] mb-4">Integrity</h4>
                <p className="text-[#3E1D67]/80 leading-relaxed font-medium">
                  For job seekers, we provide more than just employment opportunities; we offer a pathway to growth, self-development, and long-term career success.
                </p>
              </div>
            </motion.div>

            {/* Impact - Wide Card */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="md:col-span-12 bg-linear-to-r from-[#2d1b4e] to-[#3E1D67] p-12 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-12 group"
            >
              <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center text-[#FFC12B] shrink-0 border border-white/20">
                <TrendingUp className="w-14 h-14" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-[#FFC12B] mb-4 tracking-tight italic">Impact</h4>
                <p className="text-purple-100 text-lg md:text-xl leading-relaxed font-light">
                  Our dual approach enables us to consistently deliver value, ensuring businesses gain access to skilled talent while candidates are empowered to unlock their full potential.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- THE ACADEMY (PARA 3) --- */}
      <section className="py-32 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 font-['Outfit']">
          <motion.div 
            initial={{ opacity: 0, x: -80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute -inset-10 bg-linear-to-tr from-[#FFC12B]/40 to-purple-500/10 rounded-full blur-[100px] -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(45,27,78,0.3)] perspective-1000">
               <img 
                src={AboutHeroImage} 
                alt="Internship Academy" 
                className="w-full object-cover aspect-video scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-bl from-transparent via-transparent to-[#3E1D67]/60"></div>
              
              {/* Overlay Badge */}
              <div className="absolute top-10 left-10 bg-white shadow-xl px-6 py-4 rounded-3xl flex items-center gap-4 border border-purple-50 backdrop-blur-md">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  <Zap className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Enrollment</p>
                  <p className="text-lg font-black text-[#3E1D67]">Open Now</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-10"
          >
            <div>
              <span className="text-[#FFC12B] font-black text-xs tracking-[0.3em] uppercase mb-4 block">Strategic Initiative</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#2d1b4e] leading-tight">
                Our Internal <br />
                <span className="text-purple-500">Internship <br /> Academy</span>
              </h2>
            </div>
            
            <div className="space-y-8 relative">
              <div className="absolute left-[-40px] top-0 bottom-0 w-[1px] bg-linear-to-b from-purple-100 via-purple-500 to-transparent hidden lg:block"></div>
              
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic font-medium">
                At the core of our operations is our internal internship academy, a strategic initiative that equips prospective candidates with the practical knowledge, technical expertise, and professional competencies needed to thrive in the workplace.
              </p>
              
              <p className="text-gray-500 text-lg leading-relaxed border-l-4 border-[#FFC12B] pl-8">
                Through our Career Acceleration Program, individuals who may not initially meet job requirements can receive structured internship tailored to current market demands. This program focuses on hands-on learning, real-world applications, and industry-relevant skills that enhance employability and boost confidence. We believe that talent can be nurtured, and with the right guidance and exposure, individuals can evolve into top-performing professionals.
              </p>

              <div className="grid sm:grid-cols-2 gap-10 pt-6">
                <div className="group">
                  <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-[#FFC12B] group-hover:text-white transition-all mb-4">
                    <Zap className="w-7 h-7" />
                  </div>
                  <h5 className="font-black text-xl text-[#2d1b4e] mb-2 tracking-tight">Career Expansion</h5>
                  <p className="text-sm text-gray-500 leading-relaxed italic">Structured internship programs fine-tuned for today's market demands.</p>
                </div>
                <div className="group">
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 group-hover:bg-[#3E1D67] group-hover:text-white transition-all mb-4">
                    <Lightbulb className="w-7 h-7" />
                  </div>
                  <h5 className="font-black text-xl text-[#2d1b4e] mb-2 tracking-tight">Hands-on Skills</h5>
                  <p className="text-sm text-gray-500 leading-relaxed italic">Real-world applications designed to boost day-one workplace confidence.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- VISION --- */}
      <section className="py-56 px-6 bg-linear-to-br from-[#2d1b4e] via-[#3E1D67]/80 to-[#1a1128] relative overflow-hidden">
        {/* Extended Top Mask for deeper atmosphere */}
        <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-white to-transparent opacity-100 z-0"></div>

        {/* Cinematic Animated Mesh Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-[#FFC12B] rounded-full blur-[140px]"
          />
          <motion.div 
            animate={{ 
              x: [0, -120, 0],
              y: [0, 80, 0],
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-purple-500 rounded-full blur-[160px]"
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-20">
          <motion.div {...fadeIn}>
            <div className="inline-block px-6 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-3xl text-[#FFC12B] font-black text-xs uppercase tracking-[0.5em] mb-16 shadow-2xl shadow-amber-500/10">
              Our Vision
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-[#FFC12B] mb-12 tracking-tighter leading-tight italic">
              Shaping the <br /> Future of Work
            </h2>
            
            <div className="space-y-12">
              <p className="text-base md:text-xl text-purple-100 leading-relaxed font-light italic opacity-80 max-w-4xl mx-auto border-y border-white/10 py-10">
                "As the world of work continues to evolve, Placement Hub remains dedicated to staying ahead by continuously adapting our internship programs and recruitment strategies to meet emerging trends and industry demands."
              </p>
              
              <p className="text-xl md:text-3xl text-white leading-tight font-black max-w-5xl mx-auto tracking-tight">
                "We are driven by a vision to shape the future of work by raising a generation of 
                skilled, competent, and confident professionals <span className="text-[#FFC12B]">who are ready to make meaningful contributions in any organization</span>."
              </p>

              <div className="pt-8">
                <p className="text-xl text-amber-100/60 font-medium">
                  At Placement Hub, we are not just filling vacancies; we are building careers, transforming lives, and strengthening businesses.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-24">
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-[#FFC12B] blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-[#FFC12B] text-[#3E1D67] px-14 py-6 rounded-3xl font-black text-2xl shadow-2xl flex items-center gap-4">
                  Join Our Academy
                  <Rocket className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                </div>
              </motion.button>
              
              <a href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, border: "2px solid rgba(255,193,43,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white/20 text-white px-14 py-6 rounded-3xl font-black text-2xl backdrop-blur-lg hover:bg-white/5 transition-all"
                >
                  Contact Us
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default About;
