import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, Flame, ShieldAlert, Bell, Droplets, 
  Wind, Cylinder, Waves, Wrench, ShieldCheck, Building2, Activity, Gauge
} from 'lucide-react';
import WhyChooseVericon from '../components/WhyChooseVericon';

const fireServices = [
  {
    image: '/fire_alarm.png',
    icon: <Bell size={24} strokeWidth={1.8} />,
    title: 'Fire Alarm & Detection',
    desc: 'Intelligent conventional and addressable smoke, heat, and flame detection systems with automated BMS and notification integration.'
  },
  {
    image: '/hydrant.png',
    icon: <Droplets size={24} strokeWidth={1.8} />,
    title: 'Fire Hydrant Systems',
    desc: 'High-pressure internal and external hydrant networks, landing valves, hose reels, and dedicated fire pump house automation.'
  },
  {
    image: '/sprinkler.png',
    icon: <Waves size={24} strokeWidth={1.8} />,
    title: 'Automatic Fire Sprinklers',
    desc: 'Wet pipe, dry pipe, and pre-action sprinkler systems engineered with precision hydraulic calculations to NFPA & NBC standards.'
  },
  {
    image: '/extinguisher.png',
    icon: <ShieldAlert size={24} strokeWidth={1.8} />,
    title: 'Fire Extinguishers',
    desc: 'Complete range of ABC dry powder, CO2, foam-based, and clean agent extinguishers with scheduled refilling, testing and certification.'
  },
  {
    image: '/clean_agent.png',
    icon: <Wind size={24} strokeWidth={1.8} />,
    title: 'Clean Agent Suppression',
    desc: 'FM-200, Novec 1230, and Inergen total flooding systems engineered for zero-residue protection in data centers and server rooms.'
  },
  {
    image: '/gas_suppression.png',
    icon: <Cylinder size={24} strokeWidth={1.8} />,
    title: 'Gas Suppression Systems',
    desc: 'CO2 and dry chemical total flooding systems with pneumatic and electric actuators for electrical rooms and hazardous storage.'
  },
  {
    image: '/deluge_foam.png',
    icon: <Flame size={24} strokeWidth={1.8} />,
    title: 'Deluge, Spray & Foam',
    desc: 'High/medium velocity water spray and high-expansion foam systems with automatic deluge valves for transformers and chemical vessels.'
  },
  {
    image: 'https://images.unsplash.com/photo-1542456485-645903b41d4c?q=80&w=800',
    icon: <Wrench size={24} strokeWidth={1.8} />,
    title: 'Fire Pump Houses & NOC',
    desc: 'Complete Main, Standby Diesel, and Jockey pump installations, hydro-pneumatic testing, and Fire NOC liaison support.'
  }
];

const fireSystems = [
  { icon: <Bell size={40} strokeWidth={1.5} />, title: 'Addressable Fire\nAlarm Systems' },
  { icon: <Waves size={40} strokeWidth={1.5} />, title: 'Automatic Sprinkler\nNetworks' },
  { icon: <Droplets size={40} strokeWidth={1.5} />, title: 'Fire Hydrant &\nStandpipe Systems' },
  { icon: <Wind size={40} strokeWidth={1.5} />, title: 'Clean Agent Gas\nSuppression' },
  { icon: <Gauge size={40} strokeWidth={1.5} />, title: 'Dedicated Fire\nPump Stations' },
  { icon: <Building2 size={40} strokeWidth={1.5} />, title: 'Life Safety &\nBMS Integration' }
];

export default function FireFightingSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] bg-brand-dark flex flex-col justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2000" 
            alt="Fire Fighting Solutions" 
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
            <Link to="/services/mechanical" className="hover:text-white transition-colors">Mechanical</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Fire Fighting Solutions</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Fire Fighting Solutions</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed font-medium">
              Protecting Lives. Safeguarding Infrastructure.
            </p>
            <p className="text-gray-300 mb-10 leading-relaxed">
              We provide advanced fire detection, suppression, and life-safety engineering compliant with National Building Code (NBC), NFPA, and IS standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold transition-colors">
                Get a Quote <ArrowRight size={20} />
              </Link>
              <Link to="/services/mechanical" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-4 rounded-md font-bold transition-colors">
                ← Mechanical Solutions
              </Link>
            </div>
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
                <span className="text-brand-red font-bold text-sm tracking-wide uppercase">ABOUT FIRE PROTECTION SOLUTIONS</span>
                <div className="w-12 h-1 bg-brand-blue mt-2"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Engineering Dependable, Life-Safety Fire Protection Systems
              </h2>
              <div className="text-gray-700 text-base leading-relaxed space-y-6">
                <p>
                  VERICON Engineering provides end-to-end fire protection solutions encompassing early stage hazard assessment, hydraulic design, equipment supply, statutory approvals, and precision installation.
                </p>
                <p>
                  From automatic sprinkler networks to clean agent gas suppression and automated fire hydrant pump rooms, every system is engineered for zero-failure reliability when seconds matter most.
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
                  src="https://images.unsplash.com/photo-1542456485-645903b41d4c?q=80&w=1000" 
                  alt="Fire Protection Systems" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Fire Services Grid with Images */}
      <section className="py-20 bg-gray-50/50 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">OUR FIRE FIGHTING SERVICES</h2>
            <div className="w-12 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {fireServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-red-100 transition-all duration-300 flex flex-col group"
              >
                {/* Image Header */}
                <div className="h-44 overflow-hidden relative bg-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md p-2.5 rounded-xl shadow-md text-brand-red">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-brand-blue mb-2.5 font-poppins group-hover:text-brand-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Fire Systems We Work With */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">FIRE SYSTEMS WE WORK WITH</h2>
            <div className="w-10 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {fireSystems.map((system, idx) => (
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

      {/* 5. Why Choose Vericon */}
      <WhyChooseVericon />

      {/* 6. CTA Bar with Fire Engineer Background */}
      <section className="relative bg-[#001838] py-16 overflow-hidden">
        {/* Background Image on Right Side */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-40 md:opacity-100">
          <img 
            src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1000" 
            alt="Fire Safety Engineering" 
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001838] via-[#001838]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Need a Reliable Fire Safety System?</h2>
            <p className="text-blue-100/90 text-sm md:text-base">Talk to our fire protection engineers today. We design, install, and maintain compliant systems.</p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2 text-sm">
              Request Consultation <ArrowRight size={16} />
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
