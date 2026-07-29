import React from 'react';
import { motion } from 'framer-motion';

const directors = [
  {
    name: 'Director 1',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400',
    description: 'Visionary leader with over 20 years of experience in engineering and project management.'
  },
  {
    name: 'Director 2',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
    description: 'Expert in technical operations, ensuring the highest standards of quality and safety in every project.'
  },
  {
    name: 'Director 3',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400',
    description: 'Streamlines operational workflows to deliver complex solutions on time and within budget.'
  },
  {
    name: 'Director 4',
    role: 'Finance Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
    description: 'Strategic financial planner driving sustainable growth, investments and robust business practices.'
  }
];

export default function BottomSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-3">OUR LEADERSHIP</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-6">
            Meet Our Directors
          </h2>
          {/* Small Divider */}
          <div className="w-16 h-1 mx-auto flex">
            <div className="w-1/2 h-full bg-brand-red"></div>
            <div className="w-1/2 h-full bg-brand-blue"></div>
          </div>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Image Container */}
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={director.image} 
                  alt={director.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 font-poppins mb-1">{director.name}</h4>
                <p className="text-brand-red font-semibold text-xs mb-4 uppercase tracking-widest">{director.role}</p>
                <div className="w-12 h-0.5 bg-gray-200 mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {director.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
