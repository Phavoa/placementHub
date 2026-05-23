import React from "react";
import { motion } from "framer-motion";
import { Send, Zap } from "lucide-react";

const Subscribe = () => {
  return (
    <section className="py-24 px-6 bg-[#FEFEFA]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-[#3E1D67] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(45,27,78,0.4)]"
      >
        {/* --- PREMIUM ANIMATED BACKGROUND --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              x: [0, 80, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] bg-[#FFC12B] rounded-full blur-[140px]"
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, 60, 0],
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-1/4 -left-1/4 w-[900px] h-[900px] bg-purple-500 rounded-full blur-[160px]"
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-[#FFC12B] font-black text-xs tracking-[0.4em] uppercase shadow-inner"
            >
              <Zap className="w-4 h-4 fill-current" />
              Join Our Community
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter italic text-center"
            >
              Stay Ahead in the <br /> 
              <span className="text-[#FFC12B]">Future of Work</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-purple-100/70 text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed italic text-center"
            >
              Subscribe to our newsletter for exclusive internship alerts, career accelerators, and the latest global talent trends.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full max-w-2xl pt-8"
            >
              <form className="relative flex flex-col sm:flex-row gap-4 group">
                <div className="relative grow">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    style={{
                      width: "100%",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "2px solid rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(64px)",
                      WebkitBackdropFilter: "blur(64px)",
                      borderRadius: "1.5rem",
                      padding: "1.25rem 1.5rem",
                      color: "white",
                      fontSize: "1rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                      transition: "all 0.3s ease",
                      outline: "none"
                    }}
                    className="placeholder:text-purple-200/20 focus:border-[#FFC12B]/30 focus:ring-4 focus:ring-[#FFC12B]/10"
                  />
                  <div className="absolute inset-0 rounded-[2rem] bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
                
                <button className="relative group/btn overflow-hidden bg-[#FFC12B] text-[#3E1D67] px-8 py-4 rounded-[1.5rem] font-black text-lg shadow-2xl shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-4 shrink-0">
                  <span className="relative z-10 flex items-center gap-3">
                    Subscribe
                    <Send className="w-5 h-5 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform duration-500" />
                  </span>
                  {/* Premium Shimmer Effect */}
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                </button>
              </form>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 opacity-40">
                <p className="text-purple-100 text-sm font-black uppercase tracking-widest">Join 5,000+ Professionals</p>
                <div className="w-1 h-1 bg-purple-400 rounded-full hidden sm:block"></div>
                <p className="text-purple-100 text-sm font-medium italic">No spam. Only high-impact opportunities.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;