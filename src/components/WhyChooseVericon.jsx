import React from 'react';
import { Users, ShieldCheck, Award, Clock, Headphones } from 'lucide-react';

const whyChooseItems = [
  {
    icon: <Users size={36} strokeWidth={1.5} />,
    title: 'Experienced Engineers',
    desc: 'Skilled professionals with vast industry experience.',
  },
  {
    icon: <ShieldCheck size={36} strokeWidth={1.5} />,
    title: 'Safety First',
    desc: 'Strict adherence to safety standards and protocols.',
  },
  {
    icon: <Award size={36} strokeWidth={1.5} />,
    title: 'Quality Assurance',
    desc: 'High quality components and tested solutions.',
  },
  {
    icon: <Clock size={36} strokeWidth={1.5} />,
    title: 'On-Time Delivery',
    desc: 'Commitment to timely execution and delivery.',
  },
  {
    icon: <Headphones size={36} strokeWidth={1.5} />,
    title: 'AMC Support',
    desc: 'Reliable annual maintenance and technical support.',
  },
];

export default function WhyChooseVericon({ className = "py-16 md:py-20 bg-[#F8FAFC]" }) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-brand-blue tracking-wide uppercase">
            WHY CHOOSE VERICON?
          </h2>
          <div className="w-12 h-1 bg-brand-red mt-3"></div>
        </div>

        {/* 5-Card Horizontal Strip */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {whyChooseItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-brand-blue mb-5 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-brand-dark font-bold text-sm md:text-base mb-2 font-poppins">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
