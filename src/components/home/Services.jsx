import React from 'react';
import { Snowflake, Zap, Droplet, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'hvac',
    image: 'https://images.unsplash.com/photo-1621259599507-6a7f0e34ed6a?q=80&w=600',
    color: 'bg-brand-blue',
    icon: Snowflake,
    title: 'MECHANICAL SOLUTIONS',
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
    links: [
      { text: 'HVAC Solutions', path: '/services/hvac' },
      { text: 'Fire Fighting Solutions', path: '/services/fire' }
    ]
  },
  {
    id: 'electrical',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=600',
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
    link: '/services/electrical',
    linkText: 'View Electrical Services'
  },
  {
    id: 'phe',
    image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=600',
    color: 'bg-brand-blue',
    icon: Droplet,
    title: 'PUBLIC HEALTH ENGINEERING',
    description: 'Comprehensive PHE solutions ensuring safe, efficient management of water supply and drainage.',
    features: [
      'Water Supply Systems',
      'Drainage Systems',
      'Water Treatment & Recycling',
      'Rainwater Harvesting',
      'Leak Detection',
      'Pumping Stations',
      'Plumbing Design'
    ],
    link: '/services/phe',
    linkText: 'View PHE Services'
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
              className={`${service.color} rounded-xl overflow-hidden text-white shadow-xl flex flex-col h-full`}
            >
              {/* Image at the top */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                />
                {/* Icon badge over image */}
                <div className="absolute bottom-3 right-3 w-12 h-12 rounded-full border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                  <service.icon size={22} />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-bold font-poppins mb-4 tracking-wide">{service.title}</h4>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Red line divider inside the card */}
                <div className="w-12 h-0.5 bg-white/40 mb-6"></div>

                <ul className="space-y-2.5 mb-10 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                      <Check size={15} className="mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link 
                    to={service.id === 'hvac' ? '/services/mechanical' : service.link}
                    className="inline-flex items-center gap-2 font-semibold text-sm hover:translate-x-2 transition-transform w-fit text-white"
                  >
                    {service.linkText || 'Learn More'} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
