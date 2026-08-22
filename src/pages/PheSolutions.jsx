import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, Droplet, Waves, Sprout, ShieldAlert, 
  Database, PenTool, Wrench, Search, Building2, Activity, Gauge
} from 'lucide-react';
import WhyChooseVericon from '../components/WhyChooseVericon';

const pheServices = [
  {
    image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800',
    icon: <Droplet size={24} strokeWidth={1.8} />,
    title: 'Water Supply & Distribution',
    desc: 'Design and installation of pressurized cold and hot water networks, ring mains, and riser distribution for uninterrupted supply.'
  },
  {
    image: 'https://images.unsplash.com/photo-1584483749216-41f237ee4828?q=80&w=800',
    icon: <Waves size={24} strokeWidth={1.8} />,
    title: 'Sewage & Drainage Systems',
    desc: 'Gravity and pumped drainage systems for soil, waste, and rainwater management to ensure zero waterlogging and hygiene.'
  },
  {
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800',
    icon: <Sprout size={24} strokeWidth={1.8} />,
    title: 'WTP & STP Treatment Plants',
    desc: 'Turnkey Water Treatment Plants (WTP), Sewage Treatment Plants (STP), and Greywater Recycling for maximum sustainable reuse.'
  },
  {
    image: 'https://images.unsplash.com/photo-1519888998845-db43085e5052?q=80&w=800',
    icon: <Database size={24} strokeWidth={1.8} />,
    title: 'Rainwater Harvesting',
    desc: 'Customized catchment, pre-filtration, storage, and ground recharge wells compliant with local municipal environmental codes.'
  },
  {
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800',
    icon: <Search size={24} strokeWidth={1.8} />,
    title: 'Leak Detection & Conservation',
    desc: 'Smart acoustic and electronic leak telemetry and pressure management to eliminate non-revenue water loss.'
  },
  {
    image: 'https://images.unsplash.com/photo-1621259599507-6a7f0e34ed6a?q=80&w=800',
    icon: <Gauge size={24} strokeWidth={1.8} />,
    title: 'Hydro-Pneumatic Pumping',
    desc: 'Underground/overhead storage tanks, VFD-driven booster pump skids, and precision pressure control stations.'
  },
  {
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800',
    icon: <PenTool size={24} strokeWidth={1.8} />,
    title: 'Plumbing Design & Sanitary',
    desc: 'Complete architectural plumbing, CPVC/UPVC/CI pipe installations, and modern fixture layouts with long-lasting integrity.'
  },
  {
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800',
    icon: <Wrench size={24} strokeWidth={1.8} />,
    title: 'PHE Maintenance & AMC',
    desc: 'Scheduled pump servicing, pipe descaling, bacterial water testing, and 24/7 breakdown support across facility lifecycles.'
  }
];

const pheSystems = [
  { icon: <Droplet size={40} strokeWidth={1.5} />, title: 'Pressurized Water\nDistribution' },
  { icon: <Sprout size={40} strokeWidth={1.5} />, title: 'WTP & STP\nTreatment Plants' },
  { icon: <Waves size={40} strokeWidth={1.5} />, title: 'Stormwater &\nSewage Networks' },
  { icon: <Database size={40} strokeWidth={1.5} />, title: 'Rainwater Harvesting\n& Recharge' },
  { icon: <Gauge size={40} strokeWidth={1.5} />, title: 'Hydro-Pneumatic\nBooster Systems' },
  { icon: <Building2 size={40} strokeWidth={1.5} />, title: 'Internal & External\nSanitary Piping' }
];

export default function PheSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] bg-brand-dark flex flex-col justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000" 
            alt="Public Health Engineering" 
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
            <span className="text-white font-medium">Public Health Engineering (PHE)</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">PHE Solutions</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed font-medium">
              Sustainable Water & Plumbing Engineering. Built for Health & Hygiene.
            </p>
            <p className="text-gray-300 mb-10 leading-relaxed">
              We deliver complete Public Health Engineering (PHE) solutions spanning water distribution, treatment, drainage, and recycling systems for modern infrastructure.
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
                <span className="text-brand-red font-bold text-sm tracking-wide uppercase">ABOUT PHE SOLUTIONS</span>
                <div className="w-12 h-1 bg-brand-blue mt-2"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Delivering Clean Water, Efficient Sanitation & Sustainable Drainage
              </h2>
              <div className="text-gray-700 text-base leading-relaxed space-y-6">
                <p>
                  Public Health Engineering is essential for ensuring hygiene, environmental sustainability, and long-term asset value. VERICON designs and implements robust water networks that guarantee high efficiency and minimal water loss.
                </p>
                <p>
                  From large commercial developments to pharmaceutical campuses, our plumbing systems adhere strictly to IPC, NBC, and Uniform Plumbing Code (UPC-I) standards.
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
                  src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1000" 
                  alt="Water Infrastructure" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our PHE Services Grid with Images */}
      <section className="py-20 bg-gray-50/50 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">OUR PHE SERVICES</h2>
            <div className="w-12 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {pheServices.map((service, idx) => (
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

      {/* 4. PHE Systems We Work With */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">PHE SYSTEMS WE WORK WITH</h2>
            <div className="w-10 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {pheSystems.map((system, idx) => (
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

      {/* 6. CTA Bar with Water Infrastructure Background */}
      <section className="relative bg-[#001838] py-16 overflow-hidden">
        {/* Background Image on Right Side */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-40 md:opacity-100">
          <img 
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1000" 
            alt="Water Treatment and Plumbing" 
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001838] via-[#001838]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Build Sustainable Water Infrastructure?</h2>
            <p className="text-blue-100/90 text-sm md:text-base">Contact us today to discuss your Public Health Engineering requirements with our specialists.</p>
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
