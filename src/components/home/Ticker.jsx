import React from 'react';
import { motion } from 'framer-motion';

const tickerItems = [
  "Delivering Excellence in MEP Projects",
  "Trusted HVAC Solutions",
  "24/7 AMC Support Available",
  "Global Standards in Fire Fighting Systems",
  "Innovative Electrical Engineering",
  "Comprehensive Industrial Solutions",
  "Expert Project Management"
];

export default function Ticker() {
  return (
    <div className="bg-[#0B121F] border-y border-gray-800 text-white py-3 overflow-hidden flex whitespace-nowrap">
      <motion.div
        className="flex gap-12 items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
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
