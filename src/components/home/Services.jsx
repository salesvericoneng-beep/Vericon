import React from 'react';
import { Settings, Zap, Flame, Droplet, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'mechanical',
    image: 'https://images.unsplash.com/photo-1621259599507-6a7f0e34ed6a?q=80&w=600',
    icon: Settings,
    color: 'text-[#003B8F]',
    borderColor: 'border-[#003B8F]',
    bgColor: 'bg-[#003B8F]',
    titleLine1: 'MECHANICAL',
    titleLine2: 'SOLUTIONS',
    description: 'Advanced HVAC and mechanical systems designed for efficiency, comfort and sustainability.',
    link: '/services/mechanical'
  },
  {
    id: 'electrical',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=600',
    icon: Zap,
    color: 'text-[#CE1126]',
    borderColor: 'border-[#CE1126]',
    bgColor: 'bg-[#CE1126]',
    titleLine1: 'ELECTRICAL',
    titleLine2: 'SOLUTIONS',
    description: 'Safe, reliable and efficient electrical systems that power your projects seamlessly.',
    link: '/services/electrical'
  },
  {
    id: 'fire',
    image: 'https://images.unsplash.com/photo-1582298538104-fe2e74cb07f2?q=80&w=600',
    icon: Flame,
    color: 'text-[#1E3A5F]',
    borderColor: 'border-[#1E3A5F]',
    bgColor: 'bg-[#1E3A5F]',
    titleLine1: 'FIRE FIGHTING',
    titleLine2: 'SOLUTIONS',
    description: 'Comprehensive fire protection systems engineered to safeguard lives, assets and infrastructure.',
    link: '/services/fire'
  },
  {
    id: 'phe',
    image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=600',
    icon: Droplet,
    color: 'text-[#1B7042]',
    borderColor: 'border-[#1B7042]',
    bgColor: 'bg-[#1B7042]',
    titleLine1: 'PUBLIC HEALTH',
    titleLine2: 'ENGINEERING',
    description: 'Sustainable water supply, plumbing and drainage solutions for healthier communities.',
    link: '/services/phe'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50 relative" id="services">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h3 className="text-[#003B8F] font-bold uppercase tracking-wider text-sm mb-4">OUR ENGINEERING SERVICES</h3>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Integrated Engineering. <span className="text-[#CE1126]">Built for Performance.</span>
          </h2>
          {/* Small Divider */}
          <div className="w-12 h-1 mx-auto flex mb-8">
            <div className="w-1/2 h-full bg-[#CE1126]"></div>
            <div className="w-1/2 h-full bg-[#003B8F]"></div>
          </div>
          <p className="text-gray-600 text-lg">
            VERICON delivers end-to-end MEP and public health engineering solutions that combine expertise, innovation and reliability to create sustainable spaces and stronger communities.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 relative group flex flex-col h-full"
            >
              {/* Dotted Background for bottom */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-48 opacity-[0.15] pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(#64748b 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}
              ></div>

              {/* Image */}
              <div className={`relative h-48 w-full border-b-4 ${service.borderColor}`}>
                <img
                  src={service.image}
                  alt={service.titleLine1}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Icon Circle */}
              <div className="relative flex justify-center -mt-8 mb-4 z-10">
                <div className={`w-16 h-16 rounded-full border-[5px] border-white ${service.bgColor} flex items-center justify-center text-white shadow-sm group-hover:-translate-y-1 transition-transform`}>
                  <service.icon size={24} strokeWidth={2} />
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 pb-6 flex flex-col items-center flex-grow text-center relative z-10">
                <h4 className={`text-[19px] font-extrabold font-poppins tracking-wide ${service.color} mb-0 leading-tight`}>{service.titleLine1}</h4>
                <h4 className="text-[19px] font-medium text-gray-500 tracking-wide mb-4 leading-tight">{service.titleLine2}</h4>
                
                <div className={`w-8 h-[2px] ${service.bgColor} mb-5`}></div>

                <p className="text-gray-500 text-[13px] leading-relaxed flex-grow mb-8 font-medium">
                  {service.description}
                </p>

                <div className="w-full text-left mt-auto">
                  <Link 
                    to={service.link}
                    className={`inline-flex items-center gap-2 font-bold text-xs tracking-wider uppercase hover:translate-x-2 transition-transform ${service.color}`}
                  >
                    EXPLORE <ArrowRight size={14} strokeWidth={2.5} />
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
