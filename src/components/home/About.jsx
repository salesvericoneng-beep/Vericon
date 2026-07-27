import React from 'react';
import { Eye, Target, Diamond, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-8 lg:mb-0"
          >
            {/* Using a blue-tinted overlay over an industrial image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}
            ></div>
            <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-3">ABOUT VERICON</h3>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 leading-tight mb-6">
              Engineering Solutions<br/>That Build a Better Tomorrow
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
              Vericon Engineering Services is a leading provider of MEP, HVAC, Electrical and Fire Fighting solutions. We deliver end-to-end engineering services with a commitment to quality, safety and timely delivery.
            </p>

            {/* Vision, Mission, Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Vision */}
              <div className="flex flex-col items-start text-left bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-brand-blue mb-4">
                  <Eye size={36} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To be a globally trusted engineering partner known for innovation, quality and reliability.
                </p>
              </div>

              {/* Mission */}
              <div className="flex flex-col items-start text-left bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-brand-red mb-4">
                  <Target size={36} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To deliver excellence in engineering services through technology, commitment and integrity.
                </p>
              </div>

              {/* Values */}
              <div className="flex flex-col items-start text-left bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-brand-blue mb-4">
                  <Diamond size={36} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Our Values</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Integrity, Quality, Safety, Innovation and Customer Satisfaction.
                </p>
              </div>
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
