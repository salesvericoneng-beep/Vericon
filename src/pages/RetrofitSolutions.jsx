import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, RefreshCw, Layers, Cpu, ShieldCheck, 
  Wrench, Building2, Zap, Flame, CheckCircle2, PhoneCall
} from 'lucide-react';
import WhyChooseVericon from '../components/WhyChooseVericon';

const retrofitServices = [
  {
    id: 1,
    title: 'Aging MEP Infrastructure Overhaul',
    description: 'Comprehensive audit and modernization of obsolete mechanical, electrical, and plumbing assets to restore peak performance and reduce operating costs.',
    icon: <RefreshCw className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000',
  },
  {
    id: 2,
    title: 'HVAC Chiller & Ducting Retrofit',
    description: 'Upgrading legacy chillers, AHUs, and duct networks to modern energy-efficient VRF and magnetic-bearing chiller systems with zero disruption to occupants.',
    icon: <Layers className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000',
  },
  {
    id: 3,
    title: 'Electrical Panel & Substation Upgrades',
    description: 'Replacing aged switchgears, transformers, capacitor banks, and cabling with modern fault-resistant distribution systems with enhanced protection.',
    icon: <Zap className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=1000',
  },
  {
    id: 4,
    title: 'Fire Safety Code Compliance Retrofits',
    description: 'Upgrading existing fire alarm systems, smoke management, sprinklers, and pump rooms to comply with the latest NBC, NFPA, and local fire authority mandates.',
    icon: <Flame className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1000',
  },
  {
    id: 5,
    title: 'Plumbing & Drainage Re-engineering',
    description: 'Re-routing, pipe relining, and modernizing deteriorated water supply and drainage infrastructure with corrosion-resistant modern piping materials.',
    icon: <Wrench className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1584483749216-41f237ee4828?q=80&w=1000',
  },
  {
    id: 6,
    title: 'Smart BMS & Automation Integration',
    description: 'Integrating legacy equipment into centralized Building Management Systems (BMS) with IoT sensors, smart metering, and automated climate controls.',
    icon: <Cpu className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000',
  },
  {
    id: 7,
    title: 'Commercial & Industrial Facility Revamp',
    description: 'Turnkey renovation of MEP systems for IT parks, manufacturing plants, hospitals, and corporate offices expanding capacity or repurposing space.',
    icon: <Building2 className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000',
  },
  {
    id: 8,
    title: 'Capacity Expansion & Load Upgrades',
    description: 'Engineering modifications to support higher electrical loads, expanded cooling tonnage, and increased water consumption for growing businesses.',
    icon: <ShieldCheck className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000',
  }
];

export default function RetrofitSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50/30 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] bg-brand-dark flex flex-col justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000" 
            alt="Revamp and Retrofit" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001838] via-[#001838]/85 to-transparent w-full md:w-[75%]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Revamp & Retrofit</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Revamp & <span className="text-brand-red">Retrofit Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium">
              Transform aging facility systems into high-efficiency, code-compliant, and future-proof MEP infrastructure with zero disruption to your daily operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-red-900/40 transition-all flex items-center gap-2 group"
              >
                <span>Request Retrofit Audit</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:+919876543210" 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <PhoneCall size={18} />
                <span>Talk to an Expert</span>
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-brand-blue font-bold uppercase tracking-wider text-xs mb-3 block">
                MODERNIZING EXISTING ASSETS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Extend Building Lifespan <br/>
                <span className="text-brand-red">Without Rebuilding</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As building systems age, energy bills rise and safety risks escalate. VERICON specializes in phased retrofitting of mechanical, electrical, fire protection, and plumbing networks, upgrading efficiency while keeping your facility running smoothly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  'Zero Business Interruption',
                  'Up to 35% Energy Savings',
                  'Latest NBC & Safety Compliance',
                  'BMS & IoT Smart Integration',
                  'Turnkey Phased Execution',
                  'Rapid Capital Payback'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000" 
                  alt="Retrofit Engineering" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="text-xs font-mono uppercase tracking-widest text-rose-300 mb-1 block">Facility Modernization</span>
                    <h3 className="text-xl font-bold">Smart, Phased Engineering Upgrades</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Detailed Services Grid */}
      <section className="py-20 bg-gray-50/70 border-t border-gray-200/60">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-blue font-bold uppercase tracking-wider text-xs mb-3 block">
              OUR RETROFIT CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-poppins">
              Comprehensive <span className="text-brand-red">Revamp Services</span>
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-600 text-base leading-relaxed">
              From localized equipment swaps to whole-facility MEP replacements, we deliver precision re-engineering for commercial and industrial structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {retrofitServices.map((srv) => (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md p-2.5 rounded-xl shadow-md">
                    {srv.icon}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue mb-2.5 font-poppins group-hover:text-brand-red transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Vericon */}
      <WhyChooseVericon />

      {/* 5. Bottom CTA */}
      <section className="py-16 bg-brand-blue text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-3">
              Plan Your Building Retrofit
            </h2>
            <p className="text-blue-100 max-w-xl text-sm md:text-base">
              Contact our engineering consultants today for a comprehensive facility audit and phased revamping strategy.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all shrink-0 flex items-center gap-2"
          >
            <span>Schedule Facility Audit</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
