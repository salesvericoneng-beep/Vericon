import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, PenTool, Cpu, Server, Share2, AlignJustify, Lightbulb, ZapOff, Wrench,
  Battery, ShieldCheck, BatteryCharging, Building2, Sun, Zap
} from 'lucide-react';
import WhyChooseVericon from '../components/WhyChooseVericon';

const electricalServices = [
  { icon: <PenTool size={32} strokeWidth={1.5} />, title: 'Electrical Design', desc: 'Safe and efficient electrical system design using latest standards and tools.', color: 'text-brand-red' },
  { icon: <Cpu size={32} strokeWidth={1.5} />, title: 'Power Distribution', desc: 'Design and installation of LT & HT power distribution systems.', color: 'text-brand-blue' },
  { icon: <Server size={32} strokeWidth={1.5} />, title: 'LT & HT Panels', desc: 'Manufacturing and installation of LT and HT panels with highest safety standards.', color: 'text-brand-red' },
  { icon: <Share2 size={32} strokeWidth={1.5} />, title: 'Cabling & Wiring', desc: 'Structured and neatly executed cabling solutions for reliable power supply.', color: 'text-brand-red' },
  { icon: <AlignJustify size={32} strokeWidth={1.5} />, title: 'Cable Trays & Busducts', desc: 'Installation of cable trays, busducts and supporting systems.', color: 'text-brand-blue' },
  { icon: <Lightbulb size={32} strokeWidth={1.5} />, title: 'Lighting Systems', desc: 'Indoor, outdoor and industrial lighting solutions with energy efficiency.', color: 'text-brand-red' },
  { icon: <ZapOff size={32} strokeWidth={1.5} />, title: 'Earthing & Lightning', desc: 'Effective earthing and lightning protection systems for safety and compliance.', color: 'text-brand-red' },
  { icon: <Wrench size={32} strokeWidth={1.5} />, title: 'Testing & Commissioning', desc: 'Complete testing and commissioning for safe and smooth operations.', color: 'text-brand-red' }
];

const systems = [
  { icon: <Cpu size={40} strokeWidth={1.5} />, title: 'Power Distribution\nSystems' },
  { icon: <Battery size={40} strokeWidth={1.5} />, title: 'DG Set\nSystems' },
  { icon: <ShieldCheck size={40} strokeWidth={1.5} />, title: 'Electrical Protection\nSystems' },
  { icon: <BatteryCharging size={40} strokeWidth={1.5} />, title: 'UPS & Battery\nSystems' },
  { icon: <Building2 size={40} strokeWidth={1.5} />, title: 'Building Management\nSystems (BMS)' },
  { icon: <Sun size={40} strokeWidth={1.5} />, title: 'Solar Power\nIntegration' }
];

export default function ElectricalSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] bg-brand-dark flex flex-col justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=2000" 
            alt="Electrical Systems" 
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
            <span className="text-white font-medium">Electrical Solutions</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Electrical Solutions</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium">
              Powering Performance. Ensuring Reliability.
            </p>
            <p className="text-gray-300 mb-10 leading-relaxed">
              We provide safe, reliable and energy-efficient electrical solutions tailored for commercial, industrial and infrastructure projects.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold transition-colors">
              Get a Quote <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <div className="mb-8">
                <span className="text-brand-red font-bold text-sm tracking-wide uppercase">ABOUT ELECTRICAL SOLUTIONS</span>
                <div className="w-12 h-1 bg-brand-blue mt-2"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Delivering Safe, Smart and Sustainable Power Solutions
              </h2>
              <div className="text-gray-700 text-base leading-relaxed space-y-6">
                <p>
                  VERICON Engineering offers complete electrical engineering solutions from design to commissioning. Our systems are built to ensure safety, reliability, efficiency and long-term performance.
                </p>
                <p>
                  We use advanced technology, quality components and industry best practices to deliver solutions that meet global standards and client requirements.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1000" 
                  alt="Electrical Panel Room" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Electrical Services */}
      <section className="py-20 bg-gray-50/50 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">OUR ELECTRICAL SERVICES</h2>
            <div className="w-12 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {electricalServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
              >
                <div className={`w-16 h-16 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center ${service.color} mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-brand-blue font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Electrical Systems We Work With */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">ELECTRICAL SYSTEMS WE WORK WITH</h2>
            <div className="w-10 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {systems.map((system, idx) => (
              <div key={idx} className="flex flex-col items-center text-center max-w-[120px]">
                <div className="text-brand-blue mb-4">
                  {system.icon}
                </div>
                <span className="text-brand-dark font-bold text-xs whitespace-pre-line leading-tight">
                  {system.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Why Choose Vericon for Electrical */}
      <WhyChooseVericon />

      {/* 6. CTA Bar with Engineer Background */}
      <section className="relative bg-[#001838] py-16 overflow-hidden">
        {/* Background Image on Right Side */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-40 md:opacity-100">
          <img 
            src="https://images.unsplash.com/photo-1574689211272-bc1550ce15f5?q=80&w=1000" 
            alt="Engineer inspecting panels" 
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001838] via-[#001838]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Looking for Reliable Electrical Solutions?</h2>
            <p className="text-blue-100/90 text-sm md:text-base">Let's power your project with safety, efficiency and excellence.</p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2 text-sm">
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="bg-white hover:bg-gray-100 text-brand-blue px-6 py-3 rounded-md font-bold transition-colors text-sm flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
