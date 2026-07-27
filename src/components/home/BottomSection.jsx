import React from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BottomSection() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">

          {/* Column 2: Clients */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-6">OUR CLIENTS</h3>
            <div className="grid grid-cols-3 gap-3">
              {['DLF', 'L&T', 'Godrej', 'TATA', 'Wipro', 'HCL', 'Cipla', 'IndiGo', 'More'].map((client, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-md h-16 flex items-center justify-center shadow-sm">
                  <span className="font-bold text-gray-400 text-sm">{client}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Testimonials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-6">TESTIMONIALS</h3>
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-md relative">
              <Quote className="text-brand-blue/20 absolute top-6 left-6" size={40} />
              <div className="relative z-10 pt-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  "Vericon Engineering Services delivered our HVAC and Electrical project with outstanding quality and timely completion. Their team is highly professional and reliable."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">- Project Manager</h5>
                    <p className="text-xs text-gray-500">DLF Limited</p>
                  </div>
                  <div className="flex gap-1 text-amber-400">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="absolute -bottom-4 right-6 flex gap-2">
                <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors shadow-sm">
                  <ChevronLeft size={16} />
                </button>
                <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors shadow-sm">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
