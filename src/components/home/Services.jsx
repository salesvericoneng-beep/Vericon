import React from 'react';
import { Snowflake, Zap, Flame, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'hvac',
    percentage: '50%',
    color: 'bg-brand-blue',
    icon: Snowflake,
    title: 'HVAC SOLUTIONS',
    description: 'We provide advanced HVAC solutions for commercial, industrial and institutional projects with a focus on energy efficiency and performance.',
    features: [
      'Design & Engineering',
      'Installation & Commissioning',
      'Maintenance & AMC',
      'Industrial HVAC',
      'Ventilation & Air Conditioning',
      'Ducting & Clean Room Solutions',
      'Heat Recovery Systems',
      'Building Automation'
    ],
    linkText: 'View HVAC Services'
  },
  {
    id: 'electrical',
    percentage: '25%',
    color: 'bg-brand-red',
    icon: Zap,
    title: 'ELECTRICAL SOLUTIONS',
    description: 'Reliable electrical systems designed and delivered to power your projects safely and efficiently.',
    features: [
      'Electrical Design & Execution',
      'Power Distribution',
      'Panels & Cable Trays',
      'Industrial Electrical Solutions',
      'Lighting Solutions',
      'Testing & Commissioning',
      'Maintenance & AMC'
    ],
    linkText: 'View Electrical Services'
  },
  {
    id: 'fire',
    percentage: '25%',
    color: 'bg-brand-blue',
    icon: Flame,
    title: 'FIRE FIGHTING SOLUTIONS',
    description: 'End-to-end fire fighting systems that ensure safety, compliance and protection.',
    features: [
      'Fire Alarm Systems',
      'Hydrant & Sprinkler Systems',
      'Fire Pumps & Tanks',
      'Smoke & Heat Detection',
      'Emergency Systems',
      'Fire Safety Compliance',
      'Maintenance & AMC'
    ],
    linkText: 'View Fire Fighting Services'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-brand-light relative" id="services">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-3">OUR ENGINEERING SERVICES</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-6">
            Comprehensive Solutions, Exceptional Results
          </h2>
          {/* Small Divider */}
          <div className="w-16 h-1 mx-auto flex">
            <div className="w-1/2 h-full bg-brand-red"></div>
            <div className="w-1/2 h-full bg-brand-blue"></div>
          </div>
        </div>

        {/* 3-Column Split */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.color} rounded-xl p-8 text-white shadow-xl flex flex-col h-full`}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-5xl font-bold font-poppins">{service.percentage}</div>
                  <div className="text-sm font-medium opacity-90 mt-1">of Our Expertise</div>
                </div>
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center">
                  <service.icon size={28} />
                </div>
              </div>

              <h4 className="text-xl font-bold font-poppins mb-4 tracking-wide">{service.title}</h4>
              <p className="text-white/90 text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Red line divider inside the card */}
              <div className="w-12 h-0.5 bg-brand-red mb-8"></div>

              <ul className="space-y-3 mb-10 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                    <Check size={16} className="mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to={`/services#${service.id}`}
                className="inline-flex items-center gap-2 font-semibold text-sm hover:translate-x-2 transition-transform w-fit mt-auto"
              >
                {service.linkText} <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
