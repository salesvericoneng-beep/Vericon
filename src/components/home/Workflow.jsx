import React from 'react';
import { Users, Search, PenTool, Settings, ClipboardCheck, ShieldCheck, Handshake, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { icon: Users, label: 'Consultation' },
  { icon: Search, label: 'Survey &\nAssessment' },
  { icon: PenTool, label: 'Design &\nPlanning' },
  { icon: Settings, label: 'Execution' },
  { icon: ClipboardCheck, label: 'Testing &\nCommissioning' },
  { icon: Handshake, label: 'Handover' },
  { icon: Headset, label: 'AMC &\nSupport' }
];

export default function Workflow() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2">OUR PROJECT WORKFLOW</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">
            A Process Built on Precision
          </h2>
        </div>

        {/* Workflow Steps Horizontal */}
        <div className="relative flex justify-between items-start w-full overflow-x-auto pb-8 scrollbar-hide px-4">
          
          {/* Background Dotted Line */}
          <div className="absolute top-[45px] left-[6%] right-[6%] h-[2px] bg-transparent border-t-2 border-dotted border-brand-red/40 -z-10 hidden md:block"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center relative z-10 w-28 md:w-32 shrink-0 group"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center text-brand-dark shadow-sm group-hover:border-brand-red group-hover:text-brand-blue transition-colors mb-4 bg-clip-padding relative">
                
                {/* Red/Blue decoration lines on the circle like in the screenshot */}
                <svg className="absolute inset-[-2px] w-[calc(100%+4px)] h-[calc(100%+4px)] -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="49" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeDasharray="30 200" strokeLinecap="round" />
                </svg>

                <step.icon size={32} strokeWidth={1.5} />
                
                {/* Connecting Arrow for mobile/small screens (hidden on desktop because of bg line) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-8 w-6 h-0.5 bg-brand-red/40 md:hidden flex items-center justify-end">
                    <div className="w-1.5 h-1.5 border-t border-r border-brand-red/80 rotate-45"></div>
                  </div>
                )}
                
                {/* Connecting Arrow for Desktop on the dotted line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-[50%] w-3 h-3 text-brand-red -mt-1.5 translate-x-3 items-center justify-center pointer-events-none">
                    <div className="w-2 h-2 border-t-2 border-r-2 border-brand-red rotate-45"></div>
                  </div>
                )}
              </div>

              {/* Label */}
              <span className="text-xs md:text-sm font-semibold text-gray-800 text-center whitespace-pre-line leading-tight">
                {step.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
