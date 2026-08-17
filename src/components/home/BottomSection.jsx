import React from 'react';
import { motion } from 'framer-motion';

const directors = [
  {
    name: 'Director 1',
    role: 'VIVEK REDDY',
    image: '/1.jpeg',
  },
  {
    name: 'Director 2',
    role: 'EHTESHAM AHMAD',
    image: '/2.jpeg',
  },
  {
    name: 'Director 3',
    role: 'SHAIK ABDUL MUJEEB',
    image: '/3.jpeg',  },
  {
    name: 'Director 4',
    role: 'MOHD MOIZUDDIN',
    image: '/4.jpeg',
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
