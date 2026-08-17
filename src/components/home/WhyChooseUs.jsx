import React from 'react';
import { 
  Users, Star, Settings, Shield, Check, HardHat, Clock, 
  Cpu, CircleDollarSign, ArrowDown, Headset, ClipboardList, ShieldCheck, Handshake
} from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    titleLine1: 'EXPERIENCED',
    titleLine2: 'ENGINEERS',
    description: 'Deep engineering expertise backed by hands-on project experience.',
    iconComponent: () => (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <Users size={40} className="text-[#003B8F] relative top-2" strokeWidth={1.5} />
        <Star size={18} className="text-[#CE1126] absolute top-0" strokeWidth={2} />
      </div>
    )
  },
  {
    titleLine1: 'END-TO-END',
    titleLine2: 'SOLUTIONS',
    description: 'From design to commissioning, we deliver integrated solutions.',
    iconComponent: () => (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <Settings size={40} className="text-[#003B8F] absolute top-1 left-1" strokeWidth={1.5} />
        <Settings size={24} className="text-[#CE1126] absolute bottom-1 right-1" strokeWidth={1.5} />
      </div>
    )
  },
  {
    titleLine1: 'QUALITY &',
    titleLine2: 'RELIABILITY',
    description: 'Quality systems and disciplined execution built for dependable performance.',
    iconComponent: () => (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <Shield size={44} className="text-[#003B8F]" strokeWidth={1.2} />
        <Check size={20} className="text-[#CE1126] absolute" strokeWidth={3} />
      </div>
    )
  },
  {
    titleLine1: 'SAFETY',
    titleLine2: 'FIRST',
    description: 'Protecting people, assets and the environment at every stage.',
    iconComponent: () => (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <HardHat size={44} className="text-[#003B8F]" strokeWidth={1.2} />
        <div className="absolute bottom-3 w-8 h-[3px] bg-[#CE1126] rounded-full"></div>
      </div>
    )
  },
  {
    titleLine1: 'ON-TIME',
    titleLine2: 'DELIVERY',
    description: 'Committed to schedules, milestones and dependable project delivery.',
    iconComponent: () => (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <Clock size={44} className="text-[#003B8F]" strokeWidth={1.2} />
        <div className="absolute bg-[#CE1126] w-1 h-3 top-[18px] rounded-full"></div>
        <div className="absolute bg-[#CE1126] w-3 h-1 top-[28px] left-[32px] rounded-full"></div>
      </div>
    )
  },
  {
    titleLine1: 'ADVANCED',
    titleLine2: 'TECHNOLOGY',
    description: 'Applying modern technology to deliver smarter engineering solutions.',
    iconComponent: () => (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <Cpu size={44} className="text-[#003B8F]" strokeWidth={1.2} />
        <div className="absolute w-4 h-4 border-2 border-[#CE1126] rounded-sm"></div>
      </div>
    )
  },
  {
    titleLine1: 'OPTIMIZED',
    titleLine2: 'SOLUTIONS',
    description: 'Optimized solutions delivering long-term value without compromising quality.',
    iconComponent: () => (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <CircleDollarSign size={40} className="text-[#003B8F]" strokeWidth={1.2} />
        <ArrowDown size={20} className="text-[#CE1126] absolute -right-1 bottom-0 bg-white" strokeWidth={2.5} />
      </div>
    )
  },
  {
    titleLine1: 'AFTER-SALES',
    titleLine2: 'SUPPORT',
    description: 'Responsive AMC and technical support for lasting system performance.',
    iconComponent: () => (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <Headset size={44} className="text-[#003B8F]" strokeWidth={1.2} />
        <div className="absolute w-2.5 h-2.5 bg-[#CE1126] rounded-full bottom-3 right-[18px]"></div>
      </div>
    )
  },
  {
    titleLine1: 'STANDARDS &',
    titleLine2: 'COMPLIANCE',
    description: 'Following applicable codes, standards and proven industry practices.',
    iconComponent: () => (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <ClipboardList size={40} className="text-[#003B8F] absolute top-1 left-3" strokeWidth={1.2} />
        <ShieldCheck size={20} className="text-[#CE1126] absolute bottom-1 right-1 bg-white" strokeWidth={2} />
      </div>
    )
  },
  {
    titleLine1: 'TRUSTED',
    titleLine2: 'PARTNERSHIP',
    description: 'Building lasting relationships through transparency and collaboration.',
    iconComponent: () => (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <Handshake size={44} className="text-[#003B8F]" strokeWidth={1.2} />
        <div className="absolute w-3 h-1 bg-[#CE1126] top-[29px] left-[15px] rotate-45"></div>
        <div className="absolute w-3 h-1 bg-[#CE1126] top-[29px] right-[15px] -rotate-45"></div>
      </div>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden" id="why-us">
      {/* Dotted Background top-left */}
      <div 
        className="absolute top-0 left-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#003B8F 3px, transparent 3px)', backgroundSize: '24px 24px' }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h3 className="text-[#003B8F] font-bold uppercase tracking-wider text-sm mb-4">WHY CHOOSE VERICON</h3>
          <div className="w-12 h-[3px] mx-auto bg-gradient-to-r from-[#003B8F] 50% to-[#CE1126] 50% mb-6"></div>
          <h2 className="text-4xl md:text-[44px] font-bold font-poppins text-[#003B8F] mb-6 tracking-tight">
            Engineering Excellence <span className="text-[#CE1126]">You Can Trust</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We combine engineering expertise, disciplined execution and innovation<br className="hidden md:block" /> to deliver reliable solutions and lasting value.
          </p>
        </div>

        {/* 10-card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[1400px] mx-auto">
          {reasons.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,59,143,0.1)] transition-all duration-300 hover:-translate-y-1 h-full border border-gray-50"
            >
              {/* Dual-color Icon */}
              <div className="mb-10 scale-[1.45] origin-center">
                <item.iconComponent />
              </div>

              {/* Title */}
              <h4 className="text-[15px] leading-snug font-bold text-[#003B8F] font-poppins mb-4 tracking-wide uppercase">
                {item.titleLine1}<br />
                {item.titleLine2}
              </h4>

              {/* Small Red Divider */}
              <div className="w-8 h-[2px] bg-[#CE1126] mb-5"></div>

              {/* Description */}
              <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
