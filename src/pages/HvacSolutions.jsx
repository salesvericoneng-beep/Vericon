import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, PenTool, Wrench, ClipboardCheck, Wind, Snowflake, Share2, Droplets, Settings,
  Grid, Server, Box, Speaker, Monitor, RefreshCw,
  Users, Leaf, ShieldCheck, Clock, Headset
} from 'lucide-react';

const hvacServices = [
  { icon: <PenTool size={32} strokeWidth={1.5} />, title: 'HVAC System Design', desc: 'Customized HVAC designs using advanced tools and engineering best practices.' },
  { icon: <Wrench size={32} strokeWidth={1.5} />, title: 'Installation', desc: 'Professional installation of HVAC systems with top-quality workmanship.' },
  { icon: <ClipboardCheck size={32} strokeWidth={1.5} />, title: 'Commissioning', desc: 'System testing, balancing and commissioning for optimal performance.' },
  { icon: <Wind size={32} strokeWidth={1.5} />, title: 'Ventilation Solutions', desc: 'Fresh air ventilation and exhaust solutions for healthy indoor environments.' },
  { icon: <Snowflake size={32} strokeWidth={1.5} />, title: 'Air Conditioning Systems', desc: 'Efficient cooling solutions including VRF, VRV, Split, Chillers, AHU & FCU systems.' },
  { icon: <Share2 size={32} strokeWidth={1.5} />, title: 'Ducting Solutions', desc: 'GI, MS, SS ducting systems designed and installed as per SMACNA standards.' },
  { icon: <Droplets size={32} strokeWidth={1.5} />, title: 'Chilled Water Systems', desc: 'Centralized chilled water systems for large buildings and industrial facilities.' },
  { icon: <Settings size={32} strokeWidth={1.5} />, title: 'Annual Maintenance', desc: 'Comprehensive AMC services to ensure system reliability and efficiency.' }
];

const systems = [
  { icon: <Grid size={40} strokeWidth={1.5} />, title: 'VRF / VRV\nSystems' },
  { icon: <Server size={40} strokeWidth={1.5} />, title: 'Chiller\nSystems' },
  { icon: <Box size={40} strokeWidth={1.5} />, title: 'AHU /\nFAHU Systems' },
  { icon: <Speaker size={40} strokeWidth={1.5} />, title: 'FCU\nSystems' },
  { icon: <Monitor size={40} strokeWidth={1.5} />, title: 'DX / Split\nSystems' },
  { icon: <RefreshCw size={40} strokeWidth={1.5} />, title: 'Heat Recovery\nSystems' },
  { icon: <Wind size={40} strokeWidth={1.5} />, title: 'Make-up Air\nSystems' }
];

const whyChoose = [
  { icon: <Users size={36} strokeWidth={1.5} />, title: 'Experienced Engineers', desc: 'Skilled team with years of HVAC industry experience.' },
  { icon: <Leaf size={36} strokeWidth={1.5} />, title: 'Energy Efficient', desc: 'Systems designed for maximum efficiency and lower operating costs.' },
  { icon: <ShieldCheck size={36} strokeWidth={1.5} />, title: 'Quality Assurance', desc: 'Strict quality control at every stage of the project.' },
  { icon: <Clock size={36} strokeWidth={1.5} />, title: 'On-Time Delivery', desc: 'Commitment to timely execution and delivery.' },
  { icon: <Headset size={36} strokeWidth={1.5} />, title: 'After Sales Support', desc: 'Reliable support and maintenance services.' }
];

export default function HvacSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] bg-brand-dark flex flex-col justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1621259599507-6a7f0e34ed6a?q=80&w=2000" 
            alt="HVAC Systems" 
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
            <span className="text-white font-medium">HVAC Solutions</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">HVAC Solutions</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium">
              High-performance HVAC systems designed for comfort, efficiency, and sustainability.
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
                <span className="text-brand-blue font-bold text-sm tracking-wide uppercase">ABOUT HVAC SOLUTIONS</span>
                <div className="w-12 h-1 bg-brand-red mt-2"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Engineered for Comfort.<br />Built for Performance.
              </h2>
              <div className="text-gray-700 text-base leading-relaxed space-y-6">
                <p>
                  At VERICON Engineering Services, we deliver end-to-end HVAC solutions for a wide range of commercial, industrial, and residential projects. Our systems ensure optimal indoor air quality, energy efficiency, and consistent comfort in every environment.
                </p>
                <p>
                  From concept and design to installation, testing and maintenance, we provide reliable HVAC systems tailored to your needs.
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
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1000" 
                  alt="Industrial Chillers" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our HVAC Services */}
      <section className="py-20 bg-gray-50/50 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">OUR HVAC SERVICES</h2>
            <div className="w-12 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {hvacServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 rounded-full border border-blue-100 bg-blue-50/50 flex items-center justify-center text-brand-blue mb-6">
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

      {/* 4. HVAC Systems We Work With */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">HVAC SYSTEMS WE WORK WITH</h2>
            <div className="w-10 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {systems.map((system, idx) => (
              <div key={idx} className="flex flex-col items-center text-center max-w-[120px]">
                <div className="text-brand-blue mb-4">
                  {system.icon}
                </div>
                <span className="text-brand-dark font-bold text-sm whitespace-pre-line leading-tight">
                  {system.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Why Choose Vericon for HVAC */}
      <section className="py-20 bg-gray-50/50 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">WHY CHOOSE VERICON FOR HVAC SOLUTIONS?</h2>
            <div className="w-10 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-brand-blue mb-6">
                  {item.icon}
                </div>
                <h3 className="text-brand-dark font-bold text-sm mb-3">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed px-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CTA Bar */}
      <section className="bg-[#001838] py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Need Reliable HVAC Solutions?</h2>
            <p className="text-blue-100/80">Let's build the right system for your project.</p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2 text-sm">
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="bg-transparent border border-white/30 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-bold transition-colors text-sm flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
