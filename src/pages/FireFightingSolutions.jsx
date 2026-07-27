import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, Flame, ShieldCheck, Users, Clock, Headset, ClipboardList
} from 'lucide-react';

const fireServices = [
  {
    id: 1,
    title: 'Fire Alarm Systems',
    image: '/fire_alarm.png',
    description:
      'Our intelligent fire alarm systems provide early detection and quick alerts to ensure fast emergency response. Available in conventional and addressable models, they are tailored to fit residential, commercial, and industrial setups. Seamlessly integrates with fire suppression and building management systems. Enhances safety, minimizes risk, and ensures regulatory compliance. Reliable protection when seconds matter most.',
  },
  {
    id: 2,
    title: 'Fire Hydrant Systems',
    image: '/hydrant.png',
    description:
      'Our fire hydrant systems deliver high-pressure water supply to combat large-scale fires effectively. They include pumps, pipes, valves, and hoses built to the latest fire safety standards. Ideal for factories, warehouses, and high-rise buildings with wide coverage needs. Designed for durability, performance, and easy maintenance. A critical component in any comprehensive firefighting setup.',
  },
  {
    id: 3,
    title: 'Automatic Fire Sprinklers',
    image: '/sprinkler.png',
    description:
      'Sprinkler systems automatically sense heat and distribute water to quickly control or extinguish fires before they spread. These systems feature ceiling and roof-mounted heads placed strategically throughout your facility. We utilize hydraulic balancing and advanced heat-sensing technology to guarantee immediate response and minimal water damage during an emergency. Designed and installed to NFPA and NBC standards.',
  },
  {
    id: 4,
    title: 'Fire Extinguishers',
    image: '/extinguisher.png',
    description:
      'We supply, install, and maintain a complete range of fixed and portable fire extinguishers. Our inventory includes ABC dry powder, CO2, foam-based, and clean agent extinguishers suited for all fire risk categories. We ensure your facility is equipped with the right type of extinguisher for specific fire hazards, and provide regular refills and testing. Fully compliant with NBC and IS standards.',
  },
  {
    id: 5,
    title: 'Clean Agent Systems',
    image: '/clean_agent.png',
    description:
      'FM-200® fire suppression is an advanced, environmentally acceptable Halon replacement. This gas-based system has zero ozone depleting potential, is non-conductive, entirely safe for people, and leaves no residue. It is the perfect solution for protecting sensitive equipment in server rooms, data centers, and telecommunication facilities without causing collateral damage. Fast, effective, and internationally certified.',
  },
  {
    id: 6,
    title: 'Gas Suppression Systems',
    image: '/gas_suppression.png',
    description:
      'Our dry chemical powder and gas-based total flooding systems use premium nitrogen cylinders and ASME-grade pressure vessels. Designed with both electric and pneumatic actuation devices, these factory-designed units offer rapid fire knockdown. Perfect for industrial settings and critical control rooms where water-based suppression is not viable. Compliant with NFPA 2001, ISO 14520, and relevant IS codes.',
  },
  {
    id: 7,
    title: 'Deluge, Spray & Foam Systems',
    image: '/deluge_foam.png',
    description:
      'We offer high and medium velocity water spray systems featuring automatic Deluge Valve actuation. These systems create a thick foam blanket or powerful water spray, specifically designed for protecting vessels, chemical plants, and areas exposed to flammable liquids and gases. Rigorous hydraulic calculations ensure optimal flow and coverage. Essential protection for petrochemical, oil & gas, and industrial facilities.',
  },
];

const whyChoose = [
  { icon: <Users size={36} strokeWidth={1.5} />, title: 'Experienced Engineers', desc: 'Skilled team with extensive experience in fire protection systems.' },
  { icon: <ShieldCheck size={36} strokeWidth={1.5} />, title: 'Quality Assurance', desc: 'Use of certified materials and strict quality control at every stage.' },
  { icon: <ClipboardList size={36} strokeWidth={1.5} />, title: 'Compliance Focused', desc: 'All systems comply with national & international fire safety standards.' },
  { icon: <Clock size={36} strokeWidth={1.5} />, title: 'On-Time Delivery', desc: 'Timely execution and commitment to project deadlines.' },
  { icon: <Headset size={36} strokeWidth={1.5} />, title: 'AMC & Support', desc: 'Comprehensive annual maintenance and 24/7 technical support.' },
];

export default function FireFightingSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[520px] md:h-[600px] bg-brand-dark flex flex-col justify-center py-24 md:py-0">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2000"
            alt="Fire Fighting Systems"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001838] via-[#001838]/85 to-transparent w-full md:w-[75%]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">

          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-gray-300 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} />
            <Link to="/services/mechanical" className="hover:text-white transition-colors">Mechanical Solutions</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Fire Fighting Solutions</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Flame size={14} />
              Fire Fighting Engineering Excellence
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Fire Fighting Solutions
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 leading-relaxed">
              VERICON delivers end-to-end fire protection systems for commercial, industrial, healthcare, and mission-critical facilities  from detection and suppression to commissioning and lifecycle maintenance, executed to international standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-colors text-sm">
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link to="/services/mechanical" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-md font-bold transition-colors text-sm">
                ← Back to Mechanical
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Zig-Zag Fire Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">

          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Our Fire Fighting Services</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-base md:text-lg px-2">
              From early detection to suppression and maintenance  every system we deliver is engineered for reliability, compliance, and maximum life-safety performance.
            </p>
            <div className="w-16 h-1 bg-brand-red mt-6 mx-auto"></div>
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {fireServices.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center gap-8 lg:gap-20 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="w-full md:w-1/2"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[16/10]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Number badge */}
                      <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-brand-red text-white font-bold text-lg flex items-center justify-center shadow-lg">
                        {String(item.id).padStart(2, '0')}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>

                  {/* Text Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="w-full md:w-1/2 flex flex-col justify-center"
                  >
                    {/* Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 shadow-sm">
                        <Flame className="text-brand-red" size={32} />
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Accent Line */}
                    <div className="w-12 h-1 bg-brand-red mb-5 ml-[72px]"></div>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed md:ml-[72px]">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Vericon */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">

          <div className="text-center mb-14 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-blue tracking-wide uppercase">Why Choose VERICON?</h2>
            <div className="w-12 h-1 bg-brand-red mt-3"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-brand-blue mb-4">{item.icon}</div>
                <h3 className="text-brand-dark font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-20 bg-[#001838]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Reliable Fire Safety System?
            </h2>
            <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
              Talk to our fire protection engineers today. We'll design, install, and maintain the right system for your facility  compliant, on time, and built to last.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-10 py-4 rounded-md font-bold transition-colors shadow-lg"
              >
                Request a Consultation <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-transparent border border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-md font-bold transition-colors"
              >
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
