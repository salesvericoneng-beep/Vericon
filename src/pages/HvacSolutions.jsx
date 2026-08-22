import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, Snowflake, Wind, Thermometer,
  Activity, Settings, Layers, Factory, FlaskConical, BarChart2, Gauge,
  Cpu, Building2, ShieldCheck, Fan
} from 'lucide-react';
import WhyChooseVericon from '../components/WhyChooseVericon';

const hvacServices = [
  { 
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800',
    icon: <Snowflake size={24} strokeWidth={1.8} />, 
    title: 'Central Air Conditioning', 
    desc: 'High-efficiency centralized chiller plants, cooling towers and hydronic circulation for large commercial and industrial complexes.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800',
    icon: <Activity size={24} strokeWidth={1.8} />, 
    title: 'Chilled Water Piping', 
    desc: 'Heavy-duty pre-insulated chilled water distribution piping networks engineered to ASHRAE and ASME standards.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1621259599507-6a7f0e34ed6a?q=80&w=800',
    icon: <Wind size={24} strokeWidth={1.8} />, 
    title: 'Air Handling Units (AHU)', 
    desc: 'Custom double-skin modular AHUs and FCUs configured with advanced multi-stage filtration and automated BMS integration.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800',
    icon: <Fan size={24} strokeWidth={1.8} />, 
    title: 'Fresh Air & Ventilation', 
    desc: 'Energy Recovery Ventilators (ERV), kitchen exhaust hoods, basement ventilation, and stairwell pressurization systems.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800',
    icon: <Thermometer size={24} strokeWidth={1.8} />, 
    title: 'Precision Air Conditioning', 
    desc: 'Mission-critical CRAC units and in-row cooling systems providing ±0.5°C and ±3% RH tolerances for data centers and server rooms.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=800',
    icon: <Settings size={24} strokeWidth={1.8} />, 
    title: 'VRF / VRV Systems', 
    desc: 'Multi-zone variable refrigerant flow systems offering flexible simultaneous heating, cooling, and energy optimization.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=800',
    icon: <Factory size={24} strokeWidth={1.8} />, 
    title: 'Industrial Ventilation', 
    desc: 'Engineered dilution ventilation, dust extraction, local exhaust hoods, and HVLS fan systems for manufacturing plants.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800',
    icon: <FlaskConical size={24} strokeWidth={1.8} />, 
    title: 'Clean Room & TAB Services', 
    desc: 'ISO 14644 / GMP compliant clean room HVAC design with HEPA cascades, along with certified Testing, Adjusting & Balancing (TAB).' 
  }
];

const hvacSystems = [
  { icon: <Snowflake size={40} strokeWidth={1.5} />, title: 'Chiller Plants\n(Air & Water Cooled)' },
  { icon: <Settings size={40} strokeWidth={1.5} />, title: 'VRF / VRV\nMulti-Split' },
  { icon: <Thermometer size={40} strokeWidth={1.5} />, title: 'Precision Cooling\n(CRAC / Data Centers)' },
  { icon: <Wind size={40} strokeWidth={1.5} />, title: 'Air Handling\nUnits (AHU / FCU)' },
  { icon: <Layers size={40} strokeWidth={1.5} />, title: 'Ductwork & Air\nDistribution' },
  { icon: <Building2 size={40} strokeWidth={1.5} />, title: 'Building Management\nSystems (BMS)' }
];

export default function HvacSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] bg-brand-dark flex flex-col justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1621259599507-6a7f0e34ed6a?q=80&w=2000" 
            alt="HVAC Engineering" 
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
            <span className="text-white font-medium">HVAC Solutions</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">HVAC Solutions</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed font-medium">
              Climate Control & Energy Efficiency. Engineered for Comfort.
            </p>
            <p className="text-gray-300 mb-10 leading-relaxed">
              We provide complete Heating, Ventilation & Air Conditioning solutions engineered for commercial, industrial, healthcare and mission-critical facilities.
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
                <span className="text-brand-red font-bold text-sm tracking-wide uppercase">ABOUT HVAC SOLUTIONS</span>
                <div className="w-12 h-1 bg-brand-blue mt-2"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Delivering Sustainable, Energy-Efficient Climate Control
              </h2>
              <div className="text-gray-700 text-base leading-relaxed space-y-6">
                <p>
                  VERICON Engineering designs and installs high-performance HVAC systems that optimize indoor environmental quality (IEQ), thermal comfort, and energy performance across complex industrial and commercial spaces.
                </p>
                <p>
                  From centralized chiller plants to VRF/VRV multi-zone systems and ISO cleanroom environments, our certified engineers adhere to ASHRAE, ISHRAE, and NBC guidelines to ensure superior lifecycle efficiency.
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
                  alt="HVAC Chiller Plant" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our HVAC Services Grid with Images */}
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
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 flex flex-col group"
              >
                {/* Image Header */}
                <div className="h-44 overflow-hidden relative bg-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md p-2.5 rounded-xl shadow-md text-brand-blue">
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

      {/* 4. HVAC Systems We Work With */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">HVAC SYSTEMS WE WORK WITH</h2>
            <div className="w-10 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {hvacSystems.map((system, idx) => (
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

      {/* 6. CTA Bar with Engineer Background */}
      <section className="relative bg-[#001838] py-16 overflow-hidden">
        {/* Background Image on Right Side */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-40 md:opacity-100">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000" 
            alt="HVAC Ventilation Ductwork" 
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001838] via-[#001838]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Looking for High-Performance HVAC Solutions?</h2>
            <p className="text-blue-100/90 text-sm md:text-base">Let's design and engineer an energy-efficient climate control system for your facility.</p>
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
