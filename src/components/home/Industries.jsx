import React from 'react';
import { Building2, Stethoscope, Coffee, Briefcase, Truck, Factory, FlaskConical, Wheat, BookOpen, Home, Landmark, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { icon: Building2, label: 'Commercial Buildings' },
  { icon: Stethoscope, label: 'Hospitals' },
  { icon: Coffee, label: 'Hotels & Resorts' },
  { icon: Briefcase, label: 'IT Parks & Offices' },
  { icon: Truck, label: 'Warehouses & Logistics' },
  { icon: Factory, label: 'Manufacturing Plants' },
  { icon: FlaskConical, label: 'Pharmaceutical' },
  { icon: Wheat, label: 'Food Processing Plants' },
  { icon: BookOpen, label: 'Educational Institutions' },
  { icon: Home, label: 'Residential Complexes' },
  { icon: Landmark, label: 'Government Projects' },
  { icon: Settings, label: 'Industrial Facilities' }
];

export default function Industries() {
  return (
    <section className="py-16 bg-white" id="industries">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2">INDUSTRIES WE SERVE</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
            Empowering Diverse Industries
          </h2>
          {/* Small Divider */}
          <div className="w-12 h-1 mx-auto flex">
            <div className="w-1/2 h-full bg-brand-red"></div>
            <div className="w-1/2 h-full bg-brand-blue"></div>
          </div>
        </div>

        {/* 6x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="mb-4 text-brand-blue group-hover:text-brand-red transition-colors">
                <ind.icon size={36} strokeWidth={1.2} />
              </div>
              <span className="text-xs font-semibold text-gray-800 leading-tight">
                {ind.label.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word} {i !== ind.label.split(' ').length - 1 && <br />}
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
