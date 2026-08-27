import React from 'react';
import { Building2, Stethoscope, Coffee, Briefcase, Truck, FlaskConical, BookOpen, Home, Landmark, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { icon: Building2, label: 'Commercial Buildings', desc: 'Custom MEP systems ensuring energy efficiency and comfort for large office spaces and malls.' },
  { icon: Stethoscope, label: 'Hospitals', desc: 'Specialized HVAC and clean room solutions for critical healthcare environments.' },
  { icon: Coffee, label: 'Hotels & Resorts', desc: 'Premium MEP integration for optimal guest comfort and continuous operational reliability.' },
  { icon: Briefcase, label: 'IT Parks & Offices', desc: 'Scalable electrical and cooling infrastructure for uninterrupted technology operations.' },
  { icon: Truck, label: 'Warehouses & Logistics', desc: 'Robust fire protection and ventilation systems for expansive storage facilities.' },
  { icon: FlaskConical, label: 'Pharmaceutical', desc: 'Precision climate control and cleanroom setups meeting strict regulatory standards.' },
  { icon: BookOpen, label: 'Educational Institutions', desc: 'Safe, sustainable MEP designs enhancing learning environments for students.' },
  { icon: Home, label: 'Residential Complexes', desc: 'Reliable plumbing, electrical, and HVAC for comfortable, modern living spaces.' },
  { icon: Landmark, label: 'Government Projects', desc: 'Compliant and robust infrastructure tailored for public sector buildings.' },
  { icon: Settings, label: 'Industrial Facilities', desc: 'Heavy-duty MEP solutions supporting complex manufacturing and industrial operations.' }
];

export default function Industries() {
  return (
    <section className="py-16 bg-white" id="industries">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2">INDUSTRIES WE SERVE</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-brand-blue mb-4">
            Empowering Diverse <span className="text-brand-red">Industries</span>
          </h2>
          {/* Small Divider */}
          <div className="w-12 h-1 mx-auto flex">
            <div className="w-1/2 h-full bg-brand-red"></div>
            <div className="w-1/2 h-full bg-brand-blue"></div>
          </div>
        </div>

        {/* 5x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-brand-blue transition-all group overflow-hidden relative h-40 cursor-pointer"
            >
              {/* Default State */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                <div className="mb-4 text-brand-blue">
                  <ind.icon size={36} strokeWidth={1.2} />
                </div>
                <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                  {ind.label}
                </span>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-brand-blue text-white transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm font-semibold mb-2 whitespace-nowrap">
                  {ind.label}
                </span>
                <p className="text-[12px] leading-relaxed line-clamp-3">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
