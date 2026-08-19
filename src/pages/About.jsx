import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, ShieldCheck, Award, Lightbulb, Handshake, UserCheck, TrendingUp } from 'lucide-react';
import CTA from '../components/home/CTA';

export default function About() {
  return (
    <div className="pt-16 min-h-screen bg-white font-poppins">
      
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden bg-white">
        
        {/* Background Image Container - Dictates height on mobile, full screen on desktop */}
        <div className="relative w-full h-auto lg:h-[75vh]">
          <img 
            src="/About-Hero.png" 
            alt="About Vericon" 
            className="w-full h-full lg:object-cover lg:object-center object-contain block"
          />
          
          {/* White Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent w-[90%] md:w-[70%] lg:w-[50%]"></div>

          {/* Absolute Overlay Container */}
          <div className="absolute inset-0 z-10 container mx-auto px-4 sm:px-8 lg:px-20 xl:px-24 pt-4 lg:pt-[140px]">
            
            {/* Left Column - Content (Scaled dynamically) */}
            <div className="w-[65%] sm:w-[55%] lg:w-1/2 h-full flex flex-col justify-center pb-[5%] lg:pb-[15%]">
              
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="font-extrabold font-poppins leading-[1.1] tracking-tight mb-[3%] lg:mb-6"
              >
                <div className="mb-[1%] lg:mb-2 text-[clamp(24px,4vw,70px)] uppercase">
                  <span className="text-brand-blue mr-2 lg:mr-4">ABOUT</span>
                  <span className="text-brand-red">US</span>
                </div>
                <span className="block text-gray-900 mt-[2%] lg:mt-4 text-[clamp(12px,2.5vw,36px)] font-bold">Engineering Solutions</span>
                <span className="block text-gray-900 text-[clamp(12px,2.5vw,36px)] font-bold">That Build a Better Tomorrow</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-gray-700 max-w-xl font-medium text-[clamp(8px,1.5vw,18px)] leading-[1.3]"
              >
              </motion.p>
            </div>
          </div>
        </div>

        {/* Bottom Blue Curved Swoosh */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[20px] md:h-[60px] lg:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" className="fill-[#001A3B]"></path>
          </svg>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="py-8 md:py-24 bg-white relative z-30 mt-[-2px]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="/Picture2.jpg" 
                  alt="Engineer" 
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right Text */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col"
            >
              <div className="mb-2">
                <span className="text-brand-blue font-bold text-sm tracking-widest uppercase">WHO WE ARE</span>
                <div className="w-12 h-1 bg-brand-red mt-2"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8 leading-tight">
                <span className="text-gray-900 block mb-2">Building Excellence.</span>
                <span className="text-brand-red block">Delivering Trust.</span>
              </h2>
              
              <div className="mt-2 bg-blue-50 border-l-4 border-brand-blue p-6 lg:p-8 rounded-r-2xl shadow-sm">
                <p className="text-gray-900 text-lg lg:text-xl font-medium leading-relaxed">
                  <strong className="text-brand-blue font-bold">VERICON Engineering Private Limited</strong> is a leading provider of HVAC, Electrical, Fire Fighting and MEP solutions.
                  <p>We deliver end-to-end engineering services with a commitment to quality, safety and timely delivery.</p>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* 3. Our Core Values Section */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          
          {/* Header */}
          <div className="text-center mb-14 flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase"
            >
              <span className="text-brand-blue mr-3">OUR</span>
              <span className="text-brand-red">CORE VALUES</span>
            </motion.h2>
            
            {/* Split Accent Line */}
            <div className="flex w-16 h-1 mt-4 mb-4 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-brand-blue"></div>
              <div className="w-1/2 h-full bg-brand-red"></div>
            </div>

            {/* Subtitle */}
            <p className="text-gray-700 text-base md:text-lg max-w-2xl font-normal mt-1">
              Values that <strong className="font-bold text-gray-900">guide our actions</strong>. Principles that <strong className="font-bold text-gray-900">build our legacy</strong>.
            </p>
          </div>

          {/* 5 Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Card 1: TRUST */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-7 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md bg-brand-red group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck size={36} strokeWidth={1.8} />
              </div>
              <h3 className="font-extrabold text-base md:text-lg uppercase tracking-wider mb-2 text-brand-red">
                TRUST
              </h3>
              <div className="w-8 h-0.5 mb-4 bg-brand-red"></div>
              <p className="text-gray-600 text-xs md:text-sm font-normal leading-relaxed">
                Building confidence through transparency and reliable delivery.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-red"></div>
            </motion.div>

            {/* Card 2: QUALITY */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-7 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md bg-brand-blue group-hover:scale-105 transition-transform duration-300">
                <Award size={36} strokeWidth={1.8} />
              </div>
              <h3 className="font-extrabold text-base md:text-lg uppercase tracking-wider mb-2 text-brand-blue">
                QUALITY
              </h3>
              <div className="w-8 h-0.5 mb-4 bg-brand-blue"></div>
              <p className="text-gray-600 text-xs md:text-sm font-normal leading-relaxed">
                We are committed to delivering the highest standards of quality in everything we do.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-blue"></div>
            </motion.div>

            {/* Card 3: INNOVATION */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-7 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md bg-brand-red group-hover:scale-105 transition-transform duration-300">
                <Lightbulb size={36} strokeWidth={1.8} />
              </div>
              <h3 className="font-extrabold text-base md:text-lg uppercase tracking-wider mb-2 text-brand-red">
                INNOVATION
              </h3>
              <div className="w-8 h-0.5 mb-4 bg-brand-red"></div>
              <p className="text-gray-600 text-xs md:text-sm font-normal leading-relaxed">
                Embracing new ideas and technologies to create better solutions.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-red"></div>
            </motion.div>

            {/* Card 4: ACCOUNTABILITY */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-7 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md bg-brand-blue group-hover:scale-105 transition-transform duration-300">
                <UserCheck size={36} strokeWidth={1.8} />
              </div>
              <h3 className="font-extrabold text-base md:text-lg uppercase tracking-wider mb-2 text-brand-blue">
                ACCOUNTABILITY
              </h3>
              <div className="w-8 h-0.5 mb-4 bg-brand-blue"></div>
              <p className="text-gray-600 text-xs md:text-sm font-normal leading-relaxed">
                Taking ownership and delivering on our commitments.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-blue"></div>
            </motion.div>

            {/* Card 5: PARTNERSHIP */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-7 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md bg-brand-red group-hover:scale-105 transition-transform duration-300">
                <Handshake size={36} strokeWidth={1.8} />
              </div>
              <h3 className="font-extrabold text-base md:text-lg uppercase tracking-wider mb-2 text-brand-red">
                PARTNERSHIP
              </h3>
              <div className="w-8 h-0.5 mb-4 bg-brand-red"></div>
              <p className="text-gray-600 text-xs md:text-sm font-normal leading-relaxed">
                Building lasting relationships through collaboration and mutual success.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-red"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Vision and Mission Split Section */}
      <section className="py-14 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">

            {/* Left Column: VISION */}
            <div className="flex flex-col">
              <h3 className="text-brand-red font-bold uppercase tracking-widest text-xs mb-2">OUR VISION</h3>
              <div className="flex w-8 h-[2px] mb-5">
                <div className="w-1/2 h-full bg-brand-red"></div>
                <div className="w-1/2 h-full bg-brand-blue"></div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins leading-snug tracking-tight mb-4">
                <span className="text-brand-blue block">Shaping the Future.</span>
                <span className="text-brand-red block">Engineering Lasting Value.</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
                We envision a future where engineering creates smarter, safer and more sustainable environments that empower communities and enrich generations to come.
              </p>
              <div className="w-full relative rounded-2xl overflow-hidden shadow-xl flex-grow min-h-[260px] mt-auto">
                <img src="/building.jpg" alt="Modern Building" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Column: MISSION & VALUES */}
            <div className="flex flex-col">
              <h3 className="text-brand-red font-bold uppercase tracking-widest text-xs mb-2">OUR MISSION</h3>
              <div className="flex w-8 h-[2px] mb-5">
                <div className="w-1/2 h-full bg-brand-blue"></div>
                <div className="w-1/2 h-full bg-brand-red"></div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins leading-snug tracking-tight mb-3">
                <span className="text-brand-blue block">Engineering with Integrity.</span>
                <span className="text-brand-red block">Delivering with Impact.</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                We are committed to engineering excellence through integrity, innovation and collaboration to deliver measurable impact for our clients, our people and the world around us.
              </p>

              {/* Values List */}
              <div className="flex flex-col divide-y divide-gray-100">
                {[
                  { icon: <Target size={20} strokeWidth={1.8} />, color: 'text-brand-blue', title: 'ENGINEERING EXCELLENCE', desc: 'Technical expertise, precision and dependable execution in everything we do.' },
                  { icon: <TrendingUp size={20} strokeWidth={1.8} />, color: 'text-brand-red', title: 'LASTING VALUE', desc: 'Delivering efficient, reliable and future-ready solutions that create long-term value.' },
                  { icon: <ShieldCheck size={20} strokeWidth={1.8} />, color: 'text-brand-blue', title: 'QUALITY & SAFETY', desc: 'Upholding uncompromising standards of quality, safety and integrity.' },
                  { icon: <Lightbulb size={20} strokeWidth={1.8} />, color: 'text-green-600', title: 'INNOVATION & SUSTAINABILITY', desc: 'Embracing innovation and sustainable practices to build a better tomorrow.' },
                  { icon: <Handshake size={20} strokeWidth={1.8} />, color: 'text-brand-blue', title: 'TRUSTED PARTNERSHIPS', desc: 'Building long-term relationships through transparency, trust and collaboration.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 py-4">
                    <div className={`w-9 h-9 shrink-0 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wider mb-0.5">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* CTA Section */}
      <CTA />
      
    </div>
  );
}
