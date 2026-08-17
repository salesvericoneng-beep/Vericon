import React from 'react';
import { ArrowRight, Settings, Wrench, ShieldCheck, Award, Briefcase, Users, Building2, HardHat, RefreshCw, Lightbulb, Leaf, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* Background Image Container - Dictates height on mobile, full screen on desktop */}
      <div className="relative w-full h-auto lg:h-[85vh]">
        <img
          src="/Home -Hero.png"
          alt="Vericon Engineering Hero"
          className="w-full h-full lg:object-cover lg:object-center object-contain block"
        />

        {/* Absolute Overlay Container */}
        <div className="absolute inset-0 z-10 container mx-auto px-4 sm:px-8 lg:px-20 xl:px-24 pt-[100px] lg:pt-[120px]">

          {/* Left Column - Content (Scaled dynamically) */}
          <div className="w-[60%] sm:w-[55%] lg:w-1/2 h-full flex flex-col justify-center pb-[5%] lg:pb-0">

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="font-extrabold font-poppins leading-[1.1] tracking-tight mb-[3%] lg:mb-4"
            >
              <span className="block text-brand-blue mb-[1%] lg:mb-2 text-[clamp(14px,3.5vw,60px)]">ENGINEERING</span>
              <span className="block text-brand-red mb-[1%] lg:mb-2 text-[clamp(14px,3.5vw,60px)]">EXCELLENCE</span>
              <span className="block text-gray-900 mt-[1%] lg:mt-2 text-[clamp(11px,2.5vw,48px)]">BUILT ON TRUST</span>
              <span className="block text-gray-900 text-[clamp(11px,2.5vw,48px)]">DRIVEN BY INNOVATION</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-gray-700 max-w-xl mb-[4%] lg:mb-8 font-medium text-[clamp(8px,1.5vw,18px)] leading-[1.3]"
            >
              Integrated MEP Solutions – Engineered for Performance, Reliability and Sustainability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-[clamp(4px,1vw,16px)] mb-[5%] lg:mb-16"
            >
              <Link to="/services" className="bg-brand-blue text-white rounded font-semibold flex items-center justify-center transition-colors px-[clamp(8px,2vw,32px)] py-[clamp(4px,1vw,12px)] text-[clamp(7px,1.2vw,16px)] gap-[clamp(2px,0.5vw,8px)] shadow-md hover:bg-blue-700">
                Explore our Solutions <ArrowRight className="w-[clamp(8px,1.5vw,18px)] h-[clamp(8px,1.5vw,18px)]" />
              </Link>
              <Link to="/contact" className="bg-white text-gray-800 border border-gray-300 rounded font-semibold flex items-center justify-center transition-colors px-[clamp(8px,2vw,32px)] py-[clamp(4px,1vw,12px)] text-[clamp(7px,1.2vw,16px)] gap-[clamp(2px,0.5vw,8px)] shadow-sm hover:bg-gray-50">
                Contact Us <ArrowRight className="w-[clamp(8px,1.5vw,18px)] h-[clamp(8px,1.5vw,18px)]" />
              </Link>
            </motion.div>

          </div>

          {/* Right Side - Vertical Stack of 4 Cards (DESKTOP ONLY overlay) */}
          <div className="hidden lg:flex flex-col gap-4 absolute right-6 md:right-12 lg:right-20 xl:right-24 top-1/2 -translate-y-1/2 z-20">
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white/95 backdrop-blur-md rounded-xl p-5 border-2 border-white/80 flex items-center gap-5 w-64 hover:-translate-x-2 shadow-lg hover:shadow-[0_15px_40px_-5px_rgba(0,87,184,0.6)] hover:border-brand-blue transition-all duration-300 cursor-pointer">
              <div className="text-brand-blue shrink-0"><HardHat size={40} strokeWidth={1.5} /></div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-blue text-[17px] leading-tight">Project</span>
                <span className="font-bold text-gray-800 text-[17px] leading-tight mb-2">Engineering</span>
                <div className="w-8 h-[2px] bg-brand-blue"></div>
              </div>
            </motion.div>
            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-white/95 backdrop-blur-md rounded-xl p-5 border-2 border-white/80 flex items-center gap-5 w-64 hover:-translate-x-2 shadow-lg hover:shadow-[0_15px_40px_-5px_rgba(0,87,184,0.6)] hover:border-brand-blue transition-all duration-300 cursor-pointer">
              <div className="text-brand-blue shrink-0">
                <Settings size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-blue text-[17px] leading-tight">Annual</span>
                <span className="font-bold text-gray-800 text-[17px] leading-tight mb-2">Maintenance</span>
                <div className="w-8 h-[2px] bg-brand-blue"></div>
              </div>
            </motion.div>
            {/* Card 3 */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-white/95 backdrop-blur-md rounded-xl p-5 border-2 border-white/80 flex items-center gap-5 w-64 hover:-translate-x-2 shadow-lg hover:shadow-[0_15px_40px_-5px_rgba(21,128,61,0.6)] hover:border-green-700 transition-all duration-300 cursor-pointer">
              <div className="text-green-700 shrink-0">
                <RefreshCw size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-green-700 text-[17px] leading-tight">Revamp &</span>
                <span className="font-bold text-gray-800 text-[17px] leading-tight mb-2">Retrofits</span>
                <div className="w-8 h-[2px] bg-green-700"></div>
              </div>
            </motion.div>
            {/* Card 4 */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-white/95 backdrop-blur-md rounded-xl p-5 border-2 border-white/80 flex items-center gap-5 w-64 hover:-translate-x-2 shadow-lg hover:shadow-[0_15px_40px_-5px_rgba(21,128,61,0.6)] hover:border-green-700 transition-all duration-300 cursor-pointer">
              <div className="text-green-700 shrink-0">
                <Zap size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-green-700 text-[17px] leading-tight">Energy</span>
                <span className="font-bold text-gray-800 text-[17px] leading-tight mb-2">Optimization</span>
                <div className="w-8 h-[2px] bg-green-700"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>



    </section>
  );
}
