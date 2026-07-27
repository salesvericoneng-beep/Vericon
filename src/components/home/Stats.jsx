import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '250+', label: 'Projects\nCompleted' },
  { value: '150+', label: 'Happy\nClients' },
  { value: '50+', label: 'Expert\nEngineers' },
  { value: '15+', label: 'Years of\nExperience' },
  { value: '98%', label: 'Client\nSatisfaction' }
];

export default function Stats() {
  return (
    <section className="py-16 bg-[#001838]">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2">OUR ACHIEVEMENTS</h3>
          <h2 className="text-3xl font-bold font-poppins text-white">
            Numbers That Reflect Our Commitment
          </h2>
        </div>

        {/* Stats Row */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-y-10 gap-x-2 md:flex-nowrap md:justify-between md:gap-0">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center w-[45%] sm:w-[30%] md:w-1/5"
              >
                <div className="text-4xl md:text-5xl font-bold font-poppins text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-blue-100 whitespace-pre-line leading-snug">
                  {stat.label}
                </div>
              </motion.div>
              
              {/* Vertical Divider */}
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-16 bg-blue-800/50"></div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
