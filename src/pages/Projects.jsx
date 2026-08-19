import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Tag, ArrowRight } from 'lucide-react';
import CTA from '../components/home/CTA';

const categories = ['All', 'Commercial', 'Industrial', 'Residential', 'Healthcare', 'Educational'];

const projects = [
  {
    id: 1,
    title: 'Nexus Tech Park',
    category: 'Commercial',
    location: 'Hyderabad',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000',
    desc: 'Complete MEP installation for a 2M sq.ft IT Park including advanced BMS.'
  },
  {
    id: 2,
    title: 'Apex Manufacturing Unit',
    category: 'Industrial',
    location: 'Pune',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1000',
    desc: 'Heavy-duty industrial electrical distribution and high-capacity HVAC setup.'
  },
  {
    id: 3,
    title: 'LifeCare Multi-Specialty',
    category: 'Healthcare',
    location: 'Bangalore',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000',
    desc: 'Precision clean room HVAC and critical life-safety fire systems.'
  },
  {
    id: 4,
    title: 'Skyline Residences',
    category: 'Residential',
    location: 'Mumbai',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000',
    desc: 'Premium residential tower plumbing, electrical, and fire suppression systems.'
  },
  {
    id: 5,
    title: 'Global Institute of Science',
    category: 'Educational',
    location: 'Chennai',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000',
    desc: 'Energy-efficient HVAC and campus-wide smart lighting solutions.'
  },
  {
    id: 6,
    title: 'PharmaTech Labs',
    category: 'Industrial',
    location: 'Hyderabad',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1000',
    desc: 'Strict compliance HVAC design for pharmaceutical manufacturing.'
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="pt-20 min-h-screen bg-brand-light">

      {/* Hero */}
      <section className="relative py-20 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-poppins font-bold text-white mb-4"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Explore our diverse range of successful engineering projects delivered with precision across multiple sectors.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${activeTab === cat
                    ? 'bg-brand-blue text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-brand-border'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl group border border-transparent hover:border-brand-blue/30 transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <button className="self-end bg-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">
                      <Tag size={14} />
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-poppins font-bold text-brand-blue mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-2">{project.desc}</p>

                    <div className="flex items-center justify-between border-t border-brand-border pt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={16} className="text-brand-red" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={16} className="text-brand-red" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-poppins font-bold text-gray-400">No projects found in this category.</h3>
            </div>
          )}

        </div>
      </section>

      <CTA />
    </div>
  );
}
