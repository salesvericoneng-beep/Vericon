import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, PenTool, Cpu, Server, Share2, AlignJustify, Lightbulb, ZapOff, Wrench,
  Battery, ShieldCheck, BatteryCharging, Building2, Sun, Zap
} from 'lucide-react';
import WhyChooseVericon from '../components/WhyChooseVericon';

const electricalServices = [
  { 
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800',
    icon: <PenTool size={24} strokeWidth={1.8} />, 
    title: 'Electrical Design', 
    desc: 'Safe and efficient electrical system design using latest standards, load calculations, and engineering tools.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=800',
    icon: <Cpu size={24} strokeWidth={1.8} />, 
    title: 'Power Distribution', 
    desc: 'Design and installation of LT & HT power distribution networks, transformers, and switchyards.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800',
    icon: <Server size={24} strokeWidth={1.8} />, 
    title: 'LT & HT Panels', 
    desc: 'Manufacturing and installation of PCC, MCC, APFC, and AMF control panels with highest safety standards.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800',
    icon: <Share2 size={24} strokeWidth={1.8} />, 
    title: 'Cabling & Wiring', 
    desc: 'Structured and neatly executed heavy power cabling solutions for reliable, loss-free power supply.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800',
    icon: <AlignJustify size={24} strokeWidth={1.8} />, 
    title: 'Cable Trays & Busducts', 
    desc: 'Installation of perforated and ladder cable trays, sandwich busducts, and heavy-duty support systems.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?q=80&w=800',
    icon: <Lightbulb size={24} strokeWidth={1.8} />, 
    title: 'Lighting Systems', 
    desc: 'Indoor, outdoor, and industrial lighting solutions integrated with energy-efficient daylight and smart sensors.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800',
    icon: <ZapOff size={24} strokeWidth={1.8} />, 
    title: 'Earthing & Lightning', 
    desc: 'Effective chemical earthing and early streamer emission lightning protection systems for complete asset safety.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800',
    icon: <Wrench size={24} strokeWidth={1.8} />, 
    title: 'Testing & Commissioning', 
    desc: 'Complete pre-commissioning relay coordination, insulation resistance, and dielectric testing for smooth operation.' 
  }
];

const electricalSystems = [
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
            <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed font-medium">
              Powering Performance. Ensuring Reliability.
            </p>
            <p className="text-gray-300 mb-10 leading-relaxed">
              We provide safe, reliable and energy-efficient electrical solutions tailored for commercial, industrial and infrastructure projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold transition-colors">
                Get a Quote <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-4 rounded-md font-bold transition-colors">
                ← All Services
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

      {/* 3. Our Electrical Services Grid with Images */}
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

      {/* 4. Electrical Systems We Work With */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">ELECTRICAL SYSTEMS WE WORK WITH</h2>
            <div className="w-10 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {electricalSystems.map((system, idx) => (
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
