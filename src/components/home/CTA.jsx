import React from 'react';
import { HardHat } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-gradient-to-r from-[#0B1528] via-[#003B82] to-[#B3001B] py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
      >
        {/* Faint blueprint background pattern (optional) */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] mix-blend-overlay pointer-events-none"></div>

        {/* Left Section */}
        <div className="flex items-center gap-6 md:gap-10 relative z-10 w-full md:w-1/2">
          <div className="text-white/80 shrink-0">
            <HardHat size={80} strokeWidth={1} />
          </div>
          <div className="flex flex-col text-white">
            <span className="text-xl md:text-2xl font-semibold leading-tight">Engineering Excellence.</span>
            <span className="text-xl md:text-2xl font-semibold leading-tight mt-1">Built on Trust.</span>
            <span className="text-xl md:text-2xl font-semibold leading-tight mt-1">Driven by Innovation.</span>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[2px] h-24 bg-brand-red/50 relative z-10"></div>
        {/* Horizontal Divider for mobile */}
        <div className="block md:hidden w-full h-[2px] bg-brand-red/50 relative z-10"></div>

        {/* Right Section */}
        <div className="relative z-10 w-full md:w-1/2 flex items-center md:pl-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-poppins">
            Let’s build something<br/>great together.
          </h2>
        </div>

      </motion.div>
    </section>
  );
}
