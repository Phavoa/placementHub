import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  CheckCircle2, 
  Target, 
  ArrowRight, 
  Award, 
  Briefcase, 
  Zap, 
  Users, 
  Sparkles,
  ClipboardCheck,
  Search,
  BookOpen,
  PieChart,
  ShieldCheck,
  TrendingUp,
  Star,
  ExternalLink
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CAP = () => {
  const navigate = useNavigate();
  const journeyRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const stagger = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="font-['Outfit'] bg-white text-[#2d1b4e] overflow-x-hidden selection:bg-[#ffc12b] selection:text-[#2d1b4e]">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#2d1b4e]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.1),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 w-24 h-24 bg-[#ffc12b] rounded-3xl blur-3xl opacity-10 pointer-events-none"
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-[#ffc12b] text-xs font-bold tracking-widest uppercase"
              >
                <Sparkles className="w-3 h-3" /> Transformative Career Path
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
              >
                Become <span className="text-white">Job-Ready.</span> <br />
                <span className="text-[#ffc12b]">Get Hired Faster.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-purple-100 text-lg md:text-xl max-w-xl leading-relaxed lg:mx-0 mx-auto opacity-90"
              >
                The Career Acceleration Program (CAP) equips you with the <span className="text-white font-semibold border-b border-[#ffc12b]">practical skills</span> and certification needed to move from “applicant” to “hireable candidate.”
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 pt-2"
              >
                <button 
                  onClick={() => navigate("/internship-application")}
                  className="group relative w-full sm:w-auto px-8 py-4 bg-[#ffc12b] text-[#2d1b4e] rounded-xl font-bold text-lg hover:shadow-lg transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Vetting <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                  Join Next Cohort
                </button>
              </motion.div>
            </div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] border border-white/5">
                <div className="bg-[#1a0f30] rounded-[2.2rem] p-6 overflow-hidden relative">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center text-gray-500">
                        <UserIcon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="h-1.5 w-20 bg-white/10 rounded mb-2"></div>
                        <div className="h-1 w-12 bg-white/5 rounded"></div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Applicant</span>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                      <div className="w-10 h-10 bg-[#ffc12b]/20 rounded-lg flex items-center justify-center text-[#ffc12b]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="h-1.5 w-24 bg-[#ffc12b]/40 rounded mb-2"></div>
                        <div className="h-1 w-16 bg-[#ffc12b]/20 rounded"></div>
                      </div>
                      <span className="text-[10px] font-bold text-[#ffc12b] uppercase">Vetted</span>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-blue-600/20 rounded-xl border border-blue-500/20">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-28 bg-white/60 rounded mb-2"></div>
                        <div className="h-1.5 w-16 bg-white/20 rounded"></div>
                      </div>
                      <span className="text-[10px] font-bold text-blue-400 uppercase">Hired</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS CAP --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2d1b4e] leading-tight mb-6">
                What is the <span className="text-[#ffc12b]">CAP?</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                CAP is a short, intensive training designed for candidates who need to improve their job-readiness after assessment. It focuses on practical, in-demand skills and real-world project experience.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Zap />, text: "Practical Skills" },
                  { icon: <Sparkles />, text: "AI Skills" },
                  { icon: <Target />, text: "Industry Specific" },
                  { icon: <Users />, text: "Interview Ready" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-[#ffc12b] transition-all">
                    <div className="text-[#2d1b4e] group-hover:text-[#ffc12b] transition-colors">{React.cloneElement(item.icon, { className: "w-5 h-5" })}</div>
                    <span className="font-bold text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-[#2d1b4e] rounded-2xl text-white flex gap-4 items-center">
                <Award className="w-10 h-10 text-[#ffc12b] shrink-0" />
                <p className="font-semibold text-sm sm:text-base leading-relaxed">
                  Successful candidates earn a verified certification and are positioned for hiring opportunities.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative lg:block hidden">
               <div className="aspect-square bg-gray-100 rounded-[2.5rem] relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b4e]/5 to-transparent"></div>
                 <div className="grid grid-cols-2 gap-4 p-8 relative z-10">
                    <div className="p-6 bg-white rounded-2xl shadow-sm space-y-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><BookOpen className="w-5 h-5" /></div>
                      <div className="h-2 w-16 bg-gray-100 rounded"></div>
                      <div className="h-2 w-10 bg-gray-50 rounded"></div>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-sm translate-y-8 space-y-3">
                      <div className="w-8 h-8 bg-[#ffc12b]/10 text-[#ffc12b] rounded-lg flex items-center justify-center"><TrendingUp className="w-5 h-5" /></div>
                      <div className="h-2 w-20 bg-gray-100 rounded"></div>
                    </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHO IT'S FOR --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2d1b4e] mb-4">Who Should Take CAP?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">Identify yourself in these situations, and and let us help you bridge the gap.</p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid lg:grid-cols-4 md:grid-cols-2 gap-6"
          >
            {[
              { title: "No Callback", desc: "You’re not getting interview callbacks after multiple applications." },
              { title: "Lack Experience", desc: "You’ve been told you lack the practical experience required." },
              { title: "Job-Ready Goal", desc: "You want to become job-ready quickly through intensive training." },
              { title: "Gap in Vetting", desc: "You didn’t pass the initial vetting at the required level." }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#ffc12b]/30 hover:shadow-xl transition-all h-full"
              >
                <div className="w-12 h-12 bg-[#2d1b4e]/5 text-[#2d1b4e] rounded-xl flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#2d1b4e] mb-3">{card.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- HOW IT WORKS (The Pathway) --- */}
      <section ref={journeyRef} className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2d1b4e] mb-6">How CAP Works</h2>
            <div className="inline-block px-6 py-2 bg-[#ffc12b] text-[#2d1b4e] font-bold italic text-lg rounded-full">
              “The upgrade path to your dream career.”
            </div>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 md:-translate-x-1/2">
               <motion.div 
                style={{ scaleY: pathLength, transformOrigin: "top" }}
                className="w-full h-full bg-[#ffc12b] rounded-full"
               ></motion.div>
            </div>

            <div className="space-y-20">
              {[
                { title: "Apply & Complete Vetting", icon: <ClipboardCheck /> },
                { title: "Get Assessed", icon: <Target /> },
                { title: "Enroll in CAP", icon: <PieChart />, tag: "If needed" },
                { title: "Get Certified", icon: <Award /> },
                { title: "Enter Placement Pool", icon: <Briefcase /> }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeIn}
                  className={`relative flex items-center gap-10 md:gap-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1 hidden md:block text-right">
                     {idx % 2 === 0 && <h3 className="text-xl font-bold px-10">{step.title}</h3>}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white border-2 border-[#ffc12b] rounded-full flex items-center justify-center text-[#2d1b4e] shadow-xl">
                      {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                    </div>
                  </div>

                  <div className="flex-1 text-left">
                     <div className="md:px-10">
                       <h3 className="text-xl font-bold md:hidden mb-1">{step.title}</h3>
                       {idx % 2 !== 0 && <h3 className="text-xl font-bold hidden md:block">{step.title}</h3>}
                       {step.tag && <span className="text-xs font-bold text-[#ffc12b] uppercase tracking-widest">{step.tag}</span>}
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT YOU GET --- */}
      <section className="py-24 bg-[#2d1b4e] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">What You Gain</h2>
              <p className="text-lg text-purple-100/70 leading-relaxed mb-8 font-medium">
                The program is designed to deliver immediate, tangible value that sets you apart in the job market.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-3xl font-bold text-[#ffc12b] mb-1">Bigfix</div>
                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-40">Certified Status</div>
                 </div>
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-[10px] font-bold tracking-widest uppercase opacity-40">Practical Skills</div>
                 </div>
              </div>
            </motion.div>

            <motion.div variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-3">
              {[
                "Practical, job-ready skills",
                "Hands-on project experience",
                "Interview preparation",
                "Workplace readiness training",
                "Bigfix Certified status",
                "Priority access to hiring"
              ].map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeIn}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all font-bold text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                  {benefit}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section className="py-24 bg-[#EFECF4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
               {...fadeIn}
               className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-white"
            >
              <h2 className="text-lg font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Program Fee</h2>
              <div className="mb-10 text-5xl md:text-6xl font-bold text-[#2d1b4e]">
                ₦50,000 <span className="text-lg font-medium opacity-40">One-time</span>
              </div>

              <div className="mb-10 p-4 bg-orange-50 border border-orange-100 rounded-xl text-orange-700 font-bold text-sm inline-flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5" /> 
                 Only available to candidates who complete the vetting process.
              </div>

              <button 
                onClick={() => navigate("/internship-application")}
                className="w-full py-5 bg-[#2d1b4e] text-white rounded-xl font-bold text-lg hover:bg-purple-900 transition-all shadow-lg active:scale-95"
              >
                Apply & Enroll Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- EXPECTATION SETTING --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[#2d1b4e] p-10 md:p-14 rounded-3xl text-center text-white relative overflow-hidden shadow-2xl">
            <motion.div {...fadeIn} className="relative z-10 space-y-8">
              <h2 className="text-3xl font-bold">What to Expect</h2>
              <p className="text-lg text-purple-100/80 leading-relaxed font-medium">
                CAP prepares you for employment and significantly improves your chances of getting hired.
              </p>
              <div className="w-12 h-0.5 bg-[#ffc12b] mx-auto"></div>
              <p className="text-base text-gray-300 italic font-medium">
                “Final hiring decisions are made by employers, but certified candidates are positioned ahead of typical applicants.”
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-[#2d1b4e] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-10 relative z-10">
          <motion.div {...fadeIn}>
             <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
               Start Your <span className="text-[#ffc12b]">Journey Today.</span>
             </h2>
             <p className="text-lg md:text-xl text-purple-100/60 max-w-xl mx-auto font-medium">
               Complete your vetting process and transform your career trajectory.
             </p>
          </motion.div>

          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
             <button 
              onClick={() => navigate("/internship-application")}
              className="group w-full sm:w-auto px-10 py-5 bg-[#ffc12b] text-[#2d1b4e] rounded-xl font-bold text-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Apply for Vetting <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 border border-white/20 rounded-xl font-bold text-xl hover:bg-white/10 transition-all">
              View Next Cohort
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const UserIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default CAP;
