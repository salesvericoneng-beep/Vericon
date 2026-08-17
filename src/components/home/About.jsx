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
            
            <ul className="text-gray-600 text-lg mb-10 leading-relaxed font-medium list-disc pl-5 marker:text-brand-red space-y-3">
              <li><strong>VERICON Engineering Private Limited</strong> is a trusted engineering partner delivering integrated MEP solutions across diverse projects and industries.</li>
              <li>We combine technical expertise, quality-driven execution and a strong commitment to safety, reliability and timely delivery to create lasting value for our clients.</li>
            </ul>

            {/* Vision, Mission Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Vision */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-start text-left"
              >
                <h4 className="text-brand-red font-bold uppercase text-xs tracking-widest mb-2">OUR VISION</h4>
                <div className="flex w-10 h-[3px] mb-4">
                  <div className="w-1/2 h-full bg-brand-red"></div>
                  <div className="w-1/2 h-full bg-brand-blue"></div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold font-poppins leading-tight mb-3 tracking-tight">
                  <span className="text-brand-blue block">Shaping the Future.</span>
                  <span className="text-brand-red block">Engineering Lasting Value.</span>
                </h3>
                
              </motion.div>

              {/* Mission */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-start text-left"
              >
                <h4 className="text-brand-red font-bold uppercase text-xs tracking-widest mb-2">OUR MISSION</h4>
                <div className="flex w-10 h-[3px] mb-4">
                  <div className="w-1/2 h-full bg-brand-blue"></div>
                  <div className="w-1/2 h-full bg-brand-red"></div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold font-poppins leading-tight mb-3 tracking-tight">
                  <span className="text-brand-blue block">Engineering with Integrity.</span>
                  <span className="text-brand-red block">Delivering with Impact.</span>
                </h3>
              </motion.div>

              {/* Values */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-start text-left md:col-span-2 pt-2"
              >
                <h4 className="text-brand-red font-bold uppercase text-xs tracking-widest mb-2">OUR VALUES</h4>
                <div className="flex w-10 h-[3px] mb-4">
                  <div className="w-1/2 h-full bg-brand-red"></div>
                  <div className="w-1/2 h-full bg-brand-blue"></div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold font-poppins leading-relaxed tracking-tight text-brand-blue">
                  Trust <span className="text-brand-red mx-2">•</span> Integrity <span className="text-brand-red mx-2">•</span> Excellence <span className="text-brand-red mx-2">•</span> Safety <span className="text-brand-red mx-2">•</span> Innovation <span className="text-brand-red mx-2">•</span> Accountability <span className="text-brand-red mx-2">•</span> Partnership
                </h3>
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
