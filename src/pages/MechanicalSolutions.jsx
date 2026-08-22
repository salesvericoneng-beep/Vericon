import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Snowflake, Flame } from 'lucide-react';
import WhyChooseVericon from '../components/WhyChooseVericon';

export default function MechanicalSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50/30 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] bg-brand-dark flex flex-col justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000" 
            alt="Mechanical Solutions" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001838] via-[#001838]/80 to-transparent w-full md:w-[70%]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Mechanical Solutions</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Mechanical Solutions</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium">
              Comprehensive Mechanical Engineering, from advanced HVAC systems to cutting-edge Fire Fighting infrastructure.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold transition-colors">
              Get a Quote <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Specialized Departments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-brand-blue tracking-wide uppercase">OUR MECHANICAL DEPARTMENTS</h2>
            <div className="w-12 h-1 bg-brand-red mt-3"></div>
            <p className="text-gray-600 max-w-2xl mt-6">
              VERICON Engineering Services offers end-to-end mechanical solutions divided into two specialized departments to ensure the highest level of expertise and quality for your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* HVAC Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="h-64 relative">
                <img src="https://images.unsplash.com/photo-1621259599507-6a7f0e34ed6a?q=80&w=800" alt="HVAC Solutions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-brand-blue/80 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -bottom-8 left-8 w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center border-4 border-white shadow-lg z-10">
                  <Snowflake size={32} />
                </div>
              </div>
              <div className="p-10 pt-14 flex flex-col grow">
                <h3 className="text-2xl font-bold text-brand-blue mb-4">HVAC Solutions</h3>
                <p className="text-gray-600 mb-8 leading-relaxed grow">
                  High-performance heating, ventilation, and air conditioning systems designed for optimal comfort, energy efficiency, and sustainability across commercial and industrial facilities.
                </p>
                <Link to="/services/hvac" className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:text-brand-red transition-colors w-fit">
                  Explore HVAC <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>

            {/* Fire Fighting Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="h-64 relative">
                <img src="https://images.unsplash.com/photo-1542456485-645903b41d4c?q=80&w=800" alt="Fire Fighting Solutions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-brand-red/80 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -bottom-8 left-8 w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center border-4 border-white shadow-lg z-10">
                  <Flame size={32} />
                </div>
              </div>
              <div className="p-10 pt-14 flex flex-col grow">
                <h3 className="text-2xl font-bold text-brand-red mb-4">Fire Fighting Solutions</h3>
                <p className="text-gray-600 mb-8 leading-relaxed grow">
                  Advanced fire protection and suppression systems engineered to safeguard lives and property, fully compliant with international safety standards and local regulations.
                </p>
                <Link to="/services/fire" className="inline-flex items-center gap-2 text-brand-red font-bold group-hover:text-brand-blue transition-colors w-fit">
                  Explore Fire Fighting <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Vericon */}
      <WhyChooseVericon />

      {/* CTA Section */}
      <section className="relative py-20 bg-brand-dark">
        <div className="absolute inset-0">
          <img src="/cta-bg-engineering.png" alt="Background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to discuss your mechanical engineering needs?</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            Our team of expert engineers is ready to design and execute tailored solutions for your next project.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold transition-all text-lg">
            Contact Us Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}
