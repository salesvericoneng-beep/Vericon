import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, ShieldCheck, Award, Lightbulb, Handshake, Building2, HardHat, Calendar, ThumbsUp, TrendingUp } from 'lucide-react';
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
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-brand-blue tracking-wide uppercase">OUR CORE VALUES</h2>
            <div className="flex mt-3">
              <div className="w-8 h-1 bg-brand-blue"></div>
              <div className="w-8 h-1 bg-brand-red"></div>
            </div>
          </div>

          {/* 5 Icons Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            
            {/* Value 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-4 border-brand-blue/20 flex items-center justify-center mb-6 text-brand-blue bg-white shadow-lg">
                <ShieldCheck size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">INTEGRITY</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed px-2">We operate with honesty and transparency in everything we do.</p>
            </motion.div>

            {/* Value 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-4 border-brand-red/20 flex items-center justify-center mb-6 text-brand-red bg-white shadow-lg">
                <Award size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">QUALITY</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed px-2">We are committed to delivering the highest standards of quality.</p>
            </motion.div>

            {/* Value 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-4 border-brand-blue/20 flex items-center justify-center mb-6 text-brand-blue bg-white shadow-lg">
                <Users size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">SAFETY</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed px-2">We prioritize the safety of our people, clients and communities.</p>
            </motion.div>

            {/* Value 4 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-4 border-brand-red/20 flex items-center justify-center mb-6 text-brand-red bg-white shadow-lg">
                <Lightbulb size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">INNOVATION</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed px-2">We embrace new technologies to deliver smart solutions.</p>
            </motion.div>

            {/* Value 5 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-4 border-brand-blue/20 flex items-center justify-center mb-6 text-brand-blue bg-white shadow-lg">
                <Handshake size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">COMMITMENT</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed px-2">We are dedicated to our clients and deliver on our promises.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Mission, Vision, Experience Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0B1528] rounded-3xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 shadow-2xl"
          >
            
            {/* Mission */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">OUR MISSION</h3>
              <div className="text-brand-red mb-6 bg-brand-red/10 p-5 rounded-2xl">
                <Target size={40} strokeWidth={1.5} />
              </div>
              <p className="text-blue-100/90 leading-relaxed">
                To deliver engineering excellence through innovative solutions, dependable execution and an unwavering commitment to quality, safety and customer satisfaction.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">OUR VISION</h3>
              <div className="text-brand-blue mb-6 bg-brand-blue/10 p-5 rounded-2xl">
                <Eye size={40} strokeWidth={1.5} />
              </div>
              <p className="text-blue-100/90 leading-relaxed">
                To be a trusted engineering partner, recognized for excellence, innovation and reliability in delivering high-performance MEP solutions.
              </p>
            </div>

            {/* Experience */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-white font-bold tracking-wider uppercase mb-6 text-sm">OUR EXPERIENCE</h3>
              <div className="text-brand-blue mb-6 bg-brand-blue/10 p-5 rounded-2xl">
                <Users size={40} strokeWidth={1.5} />
              </div>
              <p className="text-blue-100/90 leading-relaxed">
                With years of expertise and a team of skilled professionals, we have successfully delivered projects of every scale.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Vision and Mission Split Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
            
            {/* Left Column: VISION */}
            <div className="flex flex-col">
              <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">OUR VISION</h3>
              <div className="flex w-12 h-[3px] mb-8">
                <div className="w-1/2 h-full bg-brand-red"></div>
                <div className="w-1/2 h-full bg-brand-blue"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins leading-tight tracking-tight mb-8">
                <span className="text-brand-blue block mb-2">Shaping the Future.</span>
                <span className="text-brand-red block">Engineering Lasting Value.</span>
              </h2>
              <div className="flex w-12 h-[3px] mb-8">
                <div className="w-1/2 h-full bg-brand-red"></div>
                <div className="w-1/2 h-full bg-brand-blue"></div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-md font-medium">
                We envision a future where engineering creates smarter, safer and more sustainable environments that empower communities and enrich generations to come.
              </p>
              <div className="w-full relative rounded-tr-3xl overflow-hidden shadow-2xl flex-grow min-h-[400px] mt-auto">
                <img src="/building.jpg" alt="Modern Building" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Column: MISSION & VALUES */}
            <div className="flex flex-col">
              <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">OUR MISSION</h3>
              <div className="flex w-12 h-[3px] mb-8">
                <div className="w-1/2 h-full bg-brand-blue"></div>
                <div className="w-1/2 h-full bg-brand-red"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins leading-tight tracking-tight mb-6">
                <span className="text-brand-blue block mb-2">Engineering with Integrity.</span>
                <span className="text-brand-red block">Delivering with Impact.</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-12 font-medium">
                We are committed to engineering excellence through integrity, innovation and collaboration to deliver measurable impact for our clients, our people and the world around us.
              </p>

              {/* Values List */}
              <div className="flex flex-col space-y-8">
                {/* 1 */}
                <div className="flex items-start gap-6 border-b border-gray-100 pb-8">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-brand-blue">
                    <Target size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-brand-dark font-bold text-lg mb-2 uppercase tracking-wide">ENGINEERING EXCELLENCE</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">Technical expertise, precision and dependable execution in everything we do.</p>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex items-start gap-6 border-b border-gray-100 pb-8">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-brand-red">
                    <TrendingUp size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-brand-dark font-bold text-lg mb-2 uppercase tracking-wide">LASTING VALUE</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">Delivering efficient, reliable and future-ready solutions that create long-term value.</p>
                  </div>
                </div>
                {/* 3 */}
                <div className="flex items-start gap-6 border-b border-gray-100 pb-8">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-brand-blue">
                    <ShieldCheck size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-brand-dark font-bold text-lg mb-2 uppercase tracking-wide">QUALITY & SAFETY</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">Upholding uncompromising standards of quality, safety and integrity.</p>
                  </div>
                </div>
                {/* 4 */}
                <div className="flex items-start gap-6 border-b border-gray-100 pb-8">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-green-600">
                    <Lightbulb size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-brand-dark font-bold text-lg mb-2 uppercase tracking-wide">INNOVATION & SUSTAINABILITY</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">Embracing innovation and sustainable practices to build a better, smarter tomorrow.</p>
                  </div>
                </div>
                {/* 5 */}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-brand-blue">
                    <Handshake size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-brand-dark font-bold text-lg mb-2 uppercase tracking-wide">TRUSTED PARTNERSHIPS</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">Building long-term relationships through transparency, trust and collaboration.</p>
                  </div>
                </div>
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
