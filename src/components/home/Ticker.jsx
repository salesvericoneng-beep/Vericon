import React from 'react';
import { motion } from 'framer-motion';

const tickerItems = [
  "Trusted HVAC Services",
  "Innovative Electrical Services",
  "Fire Fighting Services",
  "Delivering Excellence in MEP Projects",
  "24/7 AMC Support",
  "Energy Optimization Services",
  "Expert Project Management",
  "Quality Assurance & Testing",
  "Sustainable & Green Building Solutions",
  "Comprehensive AMC & Retrofit Services",
  "Quality - Safety - Reliability",
  "Building Long-Term Partnerships"
];

export default function Ticker() {
  return (
    <div className="bg-[#0B121F] border-y border-gray-800 text-white py-3 overflow-hidden flex whitespace-nowrap">
      <motion.div
        key="ticker-animation-v3"
        className="flex gap-12 items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 250 }}
      >
        {/* Duplicate items for seamless looping */}
        {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
           <div key={index} className="flex items-center gap-12">
             <span className="text-sm font-medium tracking-wide">
               {item}
             </span>
             <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block"></span>
           </div>
        ))}
      </motion.div>
    </div>
  );
}
