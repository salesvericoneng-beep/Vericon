import React from 'react';
import { Users, Diamond, Clock, Cpu, ShieldCheck, HeartPulse, DollarSign, Smile, Globe, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  { icon: Users, label: 'Experienced Engineers' },
  { icon: Diamond, label: 'Quality Materials' },
  { icon: Clock, label: 'On-Time Delivery' },
  { icon: Cpu, label: 'Advanced Technology' },
  { icon: ShieldCheck, label: 'AMC & After Sales Support' },
  { icon: HeartPulse, label: 'Safety First' },
  { icon: DollarSign, label: 'Cost Effective' },
  { icon: Smile, label: 'Customer Satisfaction' },
  { icon: Globe, label: 'Global Standards' },
  { icon: Layers, label: 'End-to-End Solutions' }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white" id="why-us">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2">WHY CHOOSE VERICON</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">
            Engineering Excellence You Can Trust
          </h2>
        </div>

        {/* 10 Items in a Row (Scrollable on mobile) */}
        <div className="flex overflow-x-auto pb-6 gap-6 md:gap-4 justify-start xl:justify-center scrollbar-hide">
          {reasons.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center min-w-[100px] text-center shrink-0"
            >
              <div className="w-14 h-14 mb-4 text-brand-blue flex items-center justify-center">
                <item.icon size={36} strokeWidth={1.5} className="drop-shadow-sm" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-gray-800 leading-tight">
                {item.label.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word} {i !== item.label.split(' ').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
