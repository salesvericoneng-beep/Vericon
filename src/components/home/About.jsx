import React from 'react';
import { Eye, Target, Diamond, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[40%] relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-8 lg:mb-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("/Picture1.jpg")' }}
            ></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[60%] flex flex-col"
          >
            <h3 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-3">ABOUT VERICON</h3>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 leading-tight mb-6">
              Engineering Solutions<br/>That Build a Better Tomorrow
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
              VERICON Engineering Private Limited is a leading provider of HVAC, Electrical, Fire Fighting and MEP solutions. We deliver end-to-end engineering services with a commitment to quality, safety and timely delivery.
            </p>

            {/* Vision, Mission, Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6 mb-10 items-stretch">
              {/* Vision */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-start text-left bg-white p-5 xl:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_15px_40px_-10px_rgba(0,87,184,0.15)] hover:border-brand-blue/30 hover:-translate-y-2 transition-all duration-300 h-full"
              >
                <div className="text-brand-blue mb-3 bg-blue-50 p-2.5 rounded-xl">
                  <Eye size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base">Our Vision</h4>
                <p className="text-xs xl:text-sm text-gray-600 leading-relaxed">
                  To be a trusted engineering partner, recognized for excellence, innovation and reliability in delivering high-performance MEP solutions.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-start text-left bg-white p-5 xl:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_15px_40px_-10px_rgba(206,17,38,0.15)] hover:border-brand-red/30 hover:-translate-y-2 transition-all duration-300 h-full"
              >
                <div className="text-brand-red mb-3 bg-red-50 p-2.5 rounded-xl">
                  <Target size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base">Our Mission</h4>
                <p className="text-xs xl:text-sm text-gray-600 leading-relaxed">
                  To deliver engineering excellence through innovative solutions, dependable execution and an unwavering commitment to quality, safety and customer satisfaction.
                </p>
              </motion.div>

              {/* Values */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-start text-left bg-white p-5 xl:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_15px_40px_-10px_rgba(0,87,184,0.15)] hover:border-brand-blue/30 hover:-translate-y-2 transition-all duration-300 h-full"
              >
                <div className="text-brand-blue mb-3 bg-blue-50 p-2.5 rounded-xl">
                  <Diamond size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base">Our Values</h4>
                <p className="text-xs xl:text-sm text-gray-600 leading-relaxed font-medium leading-[1.6]">
                  Trust • Integrity • Excellence • Safety • Innovation • Commitment • Partnership
                </p>
              </motion.div>
            </div>

            <Link 
              to="/about" 
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors w-fit"
            >
              Know More About Us <ArrowRight size={18} />
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
