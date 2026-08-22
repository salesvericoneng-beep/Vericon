import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Droplet, Waves, Sprout, ShieldAlert, Database, PenTool, Wrench, Search } from 'lucide-react';
import WhyChooseVericon from '../components/WhyChooseVericon';

const pheServices = [
  {
    id: 1,
    title: 'Water Supply & Distribution Systems',
    description: 'Design and installation of reliable cold and hot water supply networks for uninterrupted and efficient water distribution.',
    icon: <Droplet className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1000',
  },
  {
    id: 2,
    title: 'Sewage & Stormwater Drainage Systems',
    description: 'Planning and execution of effective sewage, wastewater, and stormwater drainage systems to ensure proper sanitation and flood management.',
    icon: <Waves className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1584483749216-41f237ee4828?q=80&w=1000',
  },
  {
    id: 3,
    title: 'Water Treatment & Recycling Solutions',
    description: 'Design and implementation of Water Treatment Plants (WTP), Sewage Treatment Plants (STP), and Grey Water Recycling Systems to maximize water reuse and sustainability.',
    icon: <Sprout className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1000',
  },
  {
    id: 4,
    title: 'Rainwater Harvesting Systems',
    description: 'Customized rainwater harvesting solutions that collect, filter, and store rainwater, reducing dependency on municipal water sources while promoting environmental conservation.',
    icon: <Database className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1519888998845-db43085e5052?q=80&w=1000',
  },
  {
    id: 5,
    title: 'Leak Detection & Water Conservation',
    description: 'Advanced monitoring systems and smart technologies to identify leaks, minimize water loss, and improve the efficiency of water distribution networks.',
    icon: <Search className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000',
  },
  {
    id: 6,
    title: 'Pumping Stations & Storage Solutions',
    description: 'Design and installation of underground and overhead water storage tanks, pumping stations, booster systems, and pressure management solutions.',
    icon: <ShieldAlert className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1621259599507-6a7f0e34ed6a?q=80&w=1000',
  },
  {
    id: 7,
    title: 'Plumbing Design & Installation',
    description: 'Complete plumbing engineering services with high-quality materials and modern installation practices for long-lasting performance.',
    icon: <PenTool className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000',
  },
  {
    id: 8,
    title: 'Operation, Maintenance & AMC',
    description: 'Preventive maintenance, inspections, system optimization, and Annual Maintenance Contracts (AMC) to ensure reliable and efficient operation throughout the system lifecycle.',
    icon: <Wrench className="text-brand-blue" size={32} />,
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1000',
  }
];

export default function PheSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50/30 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] bg-brand-dark flex flex-col justify-center">
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
            <span className="text-white font-medium">PHE Solutions</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Public Health Engineering <span className="text-brand-blue">(PHE)</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium">
              Ensuring the safe, efficient, and sustainable management of water supply, drainage, and sanitation systems for residential, commercial, industrial, and institutional projects.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold transition-colors">
              Consult an Expert <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-blue tracking-wide uppercase">OVERVIEW</h2>
            <div className="w-12 h-1 bg-brand-red mt-3 mb-8 mx-auto"></div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We provide comprehensive Public Health Engineering (PHE) solutions that ensure the safe, efficient, and sustainable management of water supply, drainage, and sanitation systems for residential, commercial, industrial, and institutional projects. Our solutions are designed to promote public health, conserve water resources, and comply with the latest engineering standards and environmental regulations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              By integrating advanced technologies with sustainable engineering practices, we help clients reduce water consumption, improve operational efficiency, and build resilient infrastructure for the future.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Zig-Zag Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-24">
          
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our PHE Services</h2>
            <div className="w-16 h-1 bg-brand-blue mt-4 mx-auto"></div>
          </div>

          {pheServices.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-1/2"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-1/2 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 ml-0 md:ml-20">
                    {service.description}
                  </p>
                </motion.div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Why Choose Vericon */}
      <WhyChooseVericon />

      {/* 4. CTA Section */}
      <section className="py-20 bg-brand-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Sustainable Water Infrastructure?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your Public Health Engineering requirements and let our experts design the perfect solution for you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 rounded-md font-bold transition-colors shadow-lg hover:shadow-xl">
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}
