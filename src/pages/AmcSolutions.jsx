import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, Headset, ShieldCheck, Wrench, Clock, 
  Activity, Zap, Snowflake, Flame, Droplet, RefreshCw, CheckCircle2, PhoneCall
} from 'lucide-react';
import WhyChooseVericon from '../components/WhyChooseVericon';

const amcServices = [
  {
    id: 1,
    title: 'HVAC Preventive & Breakdown Maintenance',
    description: 'Scheduled servicing of chillers, AHUs, FCUs, VRF/VRV units, cooling towers, and air distribution systems to ensure optimal climate efficiency.',
    icon: <Snowflake className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000',
  },
  {
    id: 2,
    title: 'Electrical Systems & Substation AMC',
    description: 'Comprehensive maintenance of HT/LT panels, transformers, switchgear, capacitor banks, DG sets, and emergency UPS backup systems.',
    icon: <Zap className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=1000',
  },
  {
    id: 3,
    title: 'Fire Protection & Life Safety Audits',
    description: 'Periodic testing and certification of fire hydrant systems, auto sprinklers, smoke detectors, gas suppression, and emergency alarm panels.',
    icon: <Flame className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1000',
  },
  {
    id: 4,
    title: 'PHE & Plumbing Maintenance',
    description: 'Complete inspection and maintenance of booster pumps, drainage sumps, water treatment plants (WTP/STP), and pipeline networks.',
    icon: <Droplet className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1584483749216-41f237ee4828?q=80&w=1000',
  },
  {
    id: 5,
    title: '24/7 Emergency Breakdown Support',
    description: 'Round-the-clock technical helpline with rapid emergency response teams equipped to resolve critical MEP faults and prevent facility downtime.',
    icon: <Headset className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000',
  },
  {
    id: 6,
    title: 'Thermal Imaging & Predictive Diagnostics',
    description: 'Advanced thermographic scanning and vibration analysis to detect hot spots, insulation breakdown, and mechanical wear before failure occurs.',
    icon: <Activity className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000',
  },
  {
    id: 7,
    title: 'Spare Parts & Consumables Management',
    description: 'Supply of genuine OEM spare parts, filters, refrigerants, and lubricants backed by warranty and transparent inventory tracking.',
    icon: <Wrench className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000',
  },
  {
    id: 8,
    title: 'Comprehensive & Non-Comprehensive AMC Contracts',
    description: 'Flexible contract models customized to your facility size, operational hours, and budget with guaranteed SLA compliance.',
    icon: <ShieldCheck className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000',
  }
];

export default function AmcSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50/30 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] bg-brand-dark flex flex-col justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000" 
            alt="Annual Maintenance Contract" 
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
            <span className="text-white font-medium">Annual Maintenance Contract</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Annual Maintenance <span className="text-brand-red">Contracts (AMC)</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium">
              Maximize equipment longevity, ensure 99.9% facility uptime, and reduce operational risks with our comprehensive 24/7 multi-discipline MEP maintenance solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-red-900/40 transition-all flex items-center gap-2 group"
              >
                <span>Request AMC Proposal</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:+919876543210" 
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <PhoneCall size={18} />
                <span>24/7 Helpline</span>
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
                TOTAL LIFECYCLE CARE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Reliable Engineering Support <br/>
                <span className="text-brand-red">When You Need It Most</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                VERICON delivers complete Annual Maintenance Contracts tailored for commercial buildings, industrial plants, hospitals, IT parks, and residential complexes. Our team of certified engineers ensures preventive care, rapid fault resolution, and full statutory compliance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  'Guaranteed Rapid SLA Response',
                  'Dedicated Facility Engineers',
                  'Predictive Thermal Audits',
                  'Statutory Safety Clearances',
                  'OEM Spare Parts Warranty',
                  'Detailed Monthly Health Reports'
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
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000" 
                  alt="AMC Operations" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="text-xs font-mono uppercase tracking-widest text-rose-300 mb-1 block">Facility Protection</span>
                    <h3 className="text-xl font-bold">Zero-Downtime Facility Commitment</h3>
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
              OUR MAINTENANCE SCOPE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-poppins">
              Comprehensive <span className="text-brand-red">AMC Solutions</span>
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-600 text-base leading-relaxed">
              From HVAC and power substations to fire life safety and public health plumbing, we manage all your MEP infrastructure under a unified SLA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amcServices.map((srv) => (
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
              Need a Tailored AMC Contract?
            </h2>
            <p className="text-blue-100 max-w-xl text-sm md:text-base">
              Get in touch with our lifecycle support directors for a site inspection and custom maintenance proposal.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all shrink-0 flex items-center gap-2"
          >
            <span>Contact Maintenance Team</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
