import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, Droplets, CloudRain, CircleDashed, BellRing, Flame, FlaskConical, Activity, ClipboardCheck,
  Droplet, Waves, Cloud, ShieldAlert, CloudFog, 
  Users, ShieldCheck, ClipboardList, Clock, Headset
} from 'lucide-react';

const fireServices = [
  { icon: <Droplets size={32} strokeWidth={1.5} />, title: 'Fire Hydrant Systems', desc: 'Complete installation of wet, dry, and landing valve systems for rapid fire response.' },
  { icon: <CloudRain size={32} strokeWidth={1.5} />, title: 'Sprinkler Systems', desc: 'Automatic sprinkler systems designed to detect and suppress fire effectively.' },
  { icon: <CircleDashed size={32} strokeWidth={1.5} />, title: 'Hose Reel Systems', desc: 'Manual hose reel systems for immediate use in the event of fire emergencies.' },
  { icon: <BellRing size={32} strokeWidth={1.5} />, title: 'Fire Alarm Systems', desc: 'Advanced fire detection and alarm systems for early warning and safety.' },
  { icon: <Flame size={32} strokeWidth={1.5} />, title: 'Fire Extinguisher Systems', desc: 'Supply and installation of portable and wheeled fire extinguishers for all applications.' },
  { icon: <FlaskConical size={32} strokeWidth={1.5} />, title: 'Gas Suppression Systems', desc: 'Clean agent systems for critical areas to suppress fire without causing damage.' },
  { icon: <Activity size={32} strokeWidth={1.5} />, title: 'Fire Pump Systems', desc: 'Reliable fire pumps ensuring constant water pressure for fire protection systems.' },
  { icon: <ClipboardCheck size={32} strokeWidth={1.5} />, title: 'Testing & Commissioning', desc: 'Complete testing and commissioning to ensure system reliability and compliance.' }
];

const systems = [
  { icon: <Droplet size={40} strokeWidth={1.5} />, title: 'Wet Riser\nSystems' },
  { icon: <Droplet size={40} strokeWidth={1.5} className="opacity-50" />, title: 'Dry Riser\nSystems' },
  { icon: <Waves size={40} strokeWidth={1.5} />, title: 'Deluge\nSystems' },
  { icon: <Cloud size={40} strokeWidth={1.5} />, title: 'Foam\nSystems' },
  { icon: <ShieldAlert size={40} strokeWidth={1.5} />, title: 'Pre-Action\nSystems' },
  { icon: <CloudFog size={40} strokeWidth={1.5} />, title: 'CO2\nSystems' },
  { icon: <CloudRain size={40} strokeWidth={1.5} />, title: 'Water Mist\nSystems' }
];

const whyChoose = [
  { icon: <Users size={36} strokeWidth={1.5} />, title: 'Experienced Engineers', desc: 'Skilled team with extensive experience in fire protection systems.' },
  { icon: <ShieldCheck size={36} strokeWidth={1.5} />, title: 'Quality Assurance', desc: 'Use of certified materials and strict quality control at every stage.' },
  { icon: <ClipboardList size={36} strokeWidth={1.5} />, title: 'Compliance Focused', desc: 'All systems comply with national & international fire safety standards.' },
  { icon: <Clock size={36} strokeWidth={1.5} />, title: 'On-Time Delivery', desc: 'Timely execution and commitment to project deadlines.' },
  { icon: <Headset size={36} strokeWidth={1.5} />, title: 'AMC & Support', desc: 'Comprehensive annual maintenance and 24/7 technical support.' }
];

export default function FireFightingSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] bg-brand-dark flex flex-col justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2000" 
            alt="Fire Fighting Systems" 
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
            <span className="text-white font-medium">Fire Fighting Solutions</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase leading-tight">Fire Fighting<br/>Solutions</h1>
            <p className="text-lg md:text-xl text-brand-red mb-10 leading-relaxed font-bold tracking-wide">
              Protecting Lives. Protecting Assets.
            </p>
            <p className="text-gray-300 mb-10 leading-relaxed">
              We deliver end-to-end fire fighting solutions that ensure safety, compliance and peace of mind. Our systems are designed, installed and maintained to meet international standards and statutory requirements.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold transition-colors">
              Get a Quote <ArrowRight size={20} />
            </Link>
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
                <span className="text-brand-red font-bold text-sm tracking-wide uppercase">ABOUT FIRE FIGHTING SOLUTIONS</span>
                <div className="w-12 h-1 bg-brand-blue mt-2"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight text-brand-blue">
                Engineering Safety.<br />Building Confidence.
              </h2>
              <div className="text-gray-700 text-base leading-relaxed space-y-6">
                <p>
                  At VERICON Engineering Services, we provide reliable and efficient fire protection systems for all types of buildings and industrial facilities. Our solutions help detect, control and combat fire hazards quickly, minimizing risk and damage.
                </p>
                <p>
                  From consultation and design to installation, testing and maintenance, we deliver comprehensive fire safety systems tailored to your needs.
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
                  src="https://images.unsplash.com/photo-1549488344-c71c4c92e92c?q=80&w=1000" 
                  alt="Fire Hose Reel and Pipes" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Fire Fighting Services */}
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
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
              >
                <div className="text-brand-red mb-6">
                  {service.icon}
                </div>
                <h3 className="text-brand-blue font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Fire Protection Systems We Work With */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">FIRE PROTECTION SYSTEMS WE WORK WITH</h2>
            <div className="w-10 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {systems.map((system, idx) => (
              <div key={idx} className="flex flex-col items-center text-center max-w-[120px]">
                <div className="text-brand-red mb-4">
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

      {/* 5. Why Choose Vericon for Fire Fighting */}
      <section className="py-20 bg-gray-50/50 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">WHY CHOOSE VERICON?</h2>
            <div className="w-10 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-brand-red mb-6">
                  {item.icon}
                </div>
                <h3 className="text-brand-dark font-bold text-sm mb-3">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed px-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CTA Bar with Firefighter Background */}
      <section className="relative bg-[#001838] py-16 overflow-hidden">
        {/* Background Image on Right Side */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-40 md:opacity-100">
          <img 
            src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1000" 
            alt="Firefighter" 
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001838] via-[#001838]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Need Reliable Fire Fighting Solutions?</h2>
            <p className="text-blue-100/90 text-sm md:text-base">Let's build a safer environment together.</p>
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
