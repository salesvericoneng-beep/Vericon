import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, Zap, Leaf, Cpu, Activity, 
  BarChart3, ShieldCheck, Sun, CheckCircle2, PhoneCall
} from 'lucide-react';
import WhyChooseVericon from '../components/WhyChooseVericon';

const energyServices = [
  {
    id: 1,
    title: 'Comprehensive MEP Energy Audits',
    description: 'Detailed investment-grade energy audits to identify energy leaks, power consumption spikes, thermal losses, and immediate ROI optimization opportunities.',
    icon: <BarChart3 className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000',
  },
  {
    id: 2,
    title: 'HVAC Thermal & Chiller Optimization',
    description: 'Optimizing chiller staging, variable refrigerant flow (VRF) tuning, secondary pumping automation, and smart cooling controls to reduce HVAC power by up to 30%.',
    icon: <Activity className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000',
  },
  {
    id: 3,
    title: 'Power Factor Correction & Harmonic Filtration',
    description: 'Installation of automatic power factor correction (APFC) panels and active harmonic filters to eliminate utility penalties and improve power quality.',
    icon: <Zap className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=1000',
  },
  {
    id: 4,
    title: 'Smart VFD & Inverter Control Systems',
    description: 'Deploying Variable Frequency Drives (VFDs) on pumps, cooling tower fans, and blowers to dynamically match motor speed with real-time demand.',
    icon: <Cpu className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000',
  },
  {
    id: 5,
    title: 'Green Building Compliance (LEED / IGBC / GRIHA)',
    description: 'Engineering design optimization, energy modeling, and documentation to help your facility achieve prestigious green building certifications and tax credits.',
    icon: <Leaf className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1000',
  },
  {
    id: 6,
    title: 'Solar & Renewable Energy Integration',
    description: 'Seamless interconnection of rooftop solar PV systems, hybrid inverters, and battery storage with building electrical distribution grids.',
    icon: <Sun className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1000',
  },
  {
    id: 7,
    title: 'Automated BMS & IoT Energy Analytics',
    description: 'Cloud-connected Building Management Systems providing continuous energy dashboards, peak load shedding, and automated anomaly alerts.',
    icon: <Activity className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
  },
  {
    id: 8,
    title: 'Lighting Modernization & Daylight Harvesting',
    description: 'Transitioning to high-lumen smart LED fixtures integrated with occupancy sensors and automated daylight harvesting controls.',
    icon: <ShieldCheck className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?q=80&w=1000',
  }
];

export default function EnergyOptimizationSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50/30 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] bg-brand-dark flex flex-col justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=2000" 
            alt="Energy Optimization" 
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
            <span className="text-white font-medium">Energy Optimization</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Energy <span className="text-brand-red">Optimization</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium">
              Slash facility utility bills by 20%–35%, reduce your carbon footprint, and elevate your facility to global green building standards with precision MEP energy engineering.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-red-900/40 transition-all flex items-center gap-2 group"
              >
                <span>Request Energy Audit</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:+919876543210" 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <PhoneCall size={18} />
                <span>Consult Energy Engineer</span>
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
                SUSTAINABLE ENGINEERING
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Lower Operating Expenses <br/>
                <span className="text-brand-red">While Enhancing Comfort</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Energy costs represent the largest ongoing operational expenditure for modern commercial and industrial facilities. VERICON combines certified energy auditors, smart IoT telemetry, and advanced MEP engineering to systematically eliminate energy waste.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  '20% - 35% Energy Cost Reduction',
                  'Investment Grade Energy Audits',
                  'LEED / IGBC / GRIHA Certification',
                  'VFD & Smart Inverter Tuning',
                  'APFC & Harmonic Control',
                  'Clear ROI & Payback Models'
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000" 
                  alt="Energy Optimization" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1 block">Green Performance</span>
                    <h3 className="text-xl font-bold">Data-Driven Energy Reduction</h3>
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
              OUR OPTIMIZATION SCOPE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-poppins">
              Comprehensive <span className="text-brand-red">Energy Solutions</span>
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-600 text-base leading-relaxed">
              From power factor correction to automated chiller plant controls, we optimize every watt of power consumed by your building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {energyServices.map((srv) => (
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
              Ready to Cut Facility Energy Costs?
            </h2>
            <p className="text-blue-100 max-w-xl text-sm md:text-base">
              Schedule an energy audit today and discover your building’s full energy savings potential.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all shrink-0 flex items-center gap-2"
          >
            <span>Book an Energy Audit</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
