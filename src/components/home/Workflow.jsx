import React, { useState } from 'react';
import { Users, Search, PenTool, Settings, ClipboardCheck, Handshake, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Users,
    label: 'Consultation',
    desc: 'Understanding your needs, site conditions and project goals to create a tailored plan.',
    color: '#D80C20',
  },
  {
    icon: Search,
    label: 'Survey & Assessment',
    desc: 'On-site evaluation and detailed technical feasibility study of the project area.',
    color: '#123EB7',
  },
  {
    icon: PenTool,
    label: 'Design & Planning',
    desc: 'Engineering drawings, BOQ preparation and a complete project execution plan.',
    color: '#D80C20',
  },
  {
    icon: Settings,
    label: 'Execution',
    desc: 'Professional installation by certified, experienced technicians and engineers.',
    color: '#123EB7',
  },
  {
    icon: ClipboardCheck,
    label: 'Testing & Commissioning',
    desc: 'Rigorous system testing to ensure peak performance, compliance and safety.',
    color: '#D80C20',
  },
  {
    icon: Handshake,
    label: 'Handover',
    desc: 'Full documentation, client training and formal project completion sign-off.',
    color: '#123EB7',
  },
  {
    icon: Headset,
    label: 'AMC & Support',
    desc: 'Ongoing maintenance contracts and dedicated after-sales technical support.',
    color: '#D80C20',
  },
];

export default function Workflow() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-brand-blue relative overflow-hidden">

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-white/60 font-bold uppercase tracking-widest text-xs mb-3">OUR PROJECT WORKFLOW</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-poppins leading-tight">
            A Process Built on <span className="text-brand-red">Precision</span>
          </h2>
          <div className="flex w-12 h-[3px] mt-5 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-white/40" />
            <div className="w-1/2 h-full bg-brand-red" />
          </div>
        </div>


        {/* Main Cards Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = active === i;
            return (
              <motion.div
                key={i}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`relative cursor-pointer rounded-2xl p-5 flex flex-col gap-3 border transition-all duration-300 overflow-hidden group
                  ${isActive
                    ? 'bg-white border-white shadow-2xl scale-[1.04]'
                    : 'bg-white/10 border-white/15 hover:bg-white/15 hover:border-white/30'
                  }`}
              >
                {/* Step number watermark */}
                <span
                  className={`absolute top-2 right-3 font-black text-5xl leading-none select-none transition-all duration-300 ${
                    isActive ? 'text-brand-blue/10' : 'text-white/5'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
                  }`}
                  style={{ background: step.color }}
                />

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-white/80'
                  }`}
                  style={{ background: isActive ? step.color : 'rgba(255,255,255,0.12)' }}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                {/* Label */}
                <h4
                  className={`font-bold text-sm leading-tight transition-colors duration-300 ${
                    isActive ? 'text-brand-dark' : 'text-white'
                  }`}
                >
                  {step.label}
                </h4>

                {/* Description */}
                <p
                  className={`text-xs leading-relaxed transition-colors duration-300 ${
                    isActive ? 'text-gray-500' : 'text-white/50'
                  }`}
                >
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom step indicator bar */}
        <div className="flex gap-1 mt-8 justify-center">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                active === i ? 'w-8 bg-white' : 'w-3 bg-white/25'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
