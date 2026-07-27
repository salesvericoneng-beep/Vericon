import React from 'react';
import { motion } from 'framer-motion';
import {
  Snowflake, Zap, Droplet, Check,
  Building2, FileText, Settings, Wrench, ClipboardCheck, Headset,
  Users, Cpu, Diamond, ShieldCheck, Clock, HeartPulse, DollarSign, Smile,
  HardHat, Calendar, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const coreServices = [
  {
    id: 'hvac',
    links: [
      { text: 'HVAC Solutions', path: '/services/hvac' },
      { text: 'Fire Fighting Solutions', path: '/services/fire' }
    ],
    title: 'MECHANICAL SOLUTIONS',
    icon: <Snowflake size={24} strokeWidth={2} />,
    color: 'brand-blue',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1000',
    description: 'We provide efficient HVAC systems for optimal comfort, air quality, and energy performance across all types of facilities.',
    features: [
      'HVAC Design', 'Chilled Water Systems',
      'Installation & Commissioning', 'Heat Recovery Systems',
      'Ventilation Solutions', 'Clean Room Solutions',
      'Air Conditioning Systems', 'Building Automation',
      'Ducting & Piping', 'Annual Maintenance'
    ]
  },
  {
    id: 'electrical',
    link: '/services/electrical',
    title: 'ELECTRICAL SOLUTIONS',
    icon: <Zap size={24} strokeWidth={2} />,
    color: 'brand-red',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=1000',
    description: 'Safe, reliable, and energy-efficient electrical systems engineered to power your operations seamlessly.',
    features: [
      'Electrical Design', 'Industrial Lighting',
      'LT & HT Panel Systems', 'Earthing & Lightning',
      'Power Distribution', 'DG Sets Integration',
      'Cabling & Trenching', 'Testing & Commissioning',
      'Cable Trays & Busducts', 'Annual Maintenance'
    ]
  },
  {
    id: 'phe',
    link: '/services/phe',
    title: 'PUBLIC HEALTH ENGINEERING (PHE)',
    icon: <Droplet size={24} strokeWidth={2} />,
    color: 'brand-blue',
    image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1000',
    description: 'Comprehensive Public Health Engineering solutions for safe, efficient, and sustainable water management.',
    features: [
      'Water Supply & Distribution', 'Sewage & Drainage Systems',
      'Water Treatment (WTP/STP)', 'Rainwater Harvesting',
      'Leak Detection Tech', 'Pumping & Storage',
      'Plumbing Design', 'Operation & AMC',
      'Water Conservation', 'Grey Water Recycling'
    ]
  }
];

const additionalServices = [
  { icon: <Building2 size={36} strokeWidth={1.5} />, title: 'MEP SERVICES', desc: 'Integrated Mechanical, Electrical & Plumbing solutions for modern infrastructure.', color: 'text-brand-blue' },
  { icon: <FileText size={36} strokeWidth={1.5} />, title: 'PROJECT MANAGEMENT', desc: 'End-to-end project planning, execution, monitoring & delivery with utmost transparency.', color: 'text-brand-red' },
  { icon: <Settings size={36} strokeWidth={1.5} />, title: 'CONSULTANCY', desc: 'Expert engineering consultancy for design optimization, feasibility studies & value engineering.', color: 'text-brand-blue' },
  { icon: <Wrench size={36} strokeWidth={1.5} />, title: 'INSTALLATION', desc: 'Professional installation by skilled technicians with strict adherence to safety and quality.', color: 'text-brand-red' },
  { icon: <ClipboardCheck size={36} strokeWidth={1.5} />, title: 'TESTING & COMMISSIONING', desc: 'Rigorous testing and commissioning to ensure systems operate at peak performance.', color: 'text-brand-blue' },
  { icon: <Headset size={36} strokeWidth={1.5} />, title: 'ANNUAL MAINTENANCE CONTRACTS (AMC)', desc: 'Comprehensive maintenance solutions to ensure reliability, efficiency, and long-term performance.', color: 'text-brand-red' },
];

const whyChoose = [
  { icon: <Users size={32} strokeWidth={1.5} />, label: 'Experienced\nEngineers' },
  { icon: <Cpu size={32} strokeWidth={1.5} />, label: 'Advanced\nTechnology' },
  { icon: <Diamond size={32} strokeWidth={1.5} />, label: 'Quality\nMaterials' },
  { icon: <ShieldCheck size={32} strokeWidth={1.5} />, label: 'Safety\nStandards' },
  { icon: <Clock size={32} strokeWidth={1.5} />, label: 'On-Time\nDelivery' },
  { icon: <Headset size={32} strokeWidth={1.5} />, label: '24x7\nSupport' },
  { icon: <DollarSign size={32} strokeWidth={1.5} />, label: 'Cost Effective\nSolutions' },
  { icon: <Smile size={32} strokeWidth={1.5} />, label: 'Customer\nSatisfaction' },
];

const stats = [
  { icon: <Building2 size={40} strokeWidth={1.5} className="text-brand-blue" />, num: '250+', label: 'Projects\nCompleted' },
  { icon: <Users size={40} strokeWidth={1.5} className="text-brand-blue" />, num: '150+', label: 'Happy\nClients' },
  { icon: <HardHat size={40} strokeWidth={1.5} className="text-brand-blue" />, num: '50+', label: 'Expert\nEngineers' },
  { icon: <Calendar size={40} strokeWidth={1.5} className="text-brand-red" />, num: '15+', label: 'Years of\nExperience' },
  { icon: <ShieldCheck size={40} strokeWidth={1.5} className="text-brand-blue" />, num: '98%', label: 'Client\nSatisfaction' },
];

export default function Services() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50/30 overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] bg-[#001838]">
        <div className="absolute inset-0">
          <img
            src="/Services-Hero.png"
            alt="Services Hero"
            className="w-full h-full object-cover opacity-70"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000"
            }}
          />
          {/* White Gradient Overlay for Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-[70%] lg:w-[50%]"></div>
        </div>

        {/* Curved Swoosh Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
          <svg className="relative block w-full h-[40px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 C300,0 900,0 1200,120 Z" className="fill-white"></path>
            <path d="M0,120 C300,10 900,10 1200,120 Z" className="fill-brand-blue"></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 h-full relative z-10 flex flex-col justify-center pb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
              <span className="text-brand-blue">OUR </span>
              <span className="text-brand-red">SERVICES</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              End-to-End Engineering<br />Solutions You Can Rely On
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              VERICON Engineering Services offers a comprehensive range of MEP, HVAC, Electrical, and Fire Fighting solutions designed to meet global standards with precision, quality, and commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR CORE SERVICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-brand-blue tracking-wide uppercase">OUR CORE SERVICES</h2>
            <div className="w-12 h-1 bg-brand-red mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Card Image */}
                <div className="h-64 relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />

                  {/* Floating Icon */}
                  <div className={`absolute -bottom-8 left-8 w-16 h-16 rounded-full bg-${service.color.replace('text-', '')} text-white flex items-center justify-center border-4 border-white shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 pt-12 flex flex-col grow">
                  <h3 className={`text-xl font-bold text-${service.color.replace('text-', '')} mb-4 uppercase`}>{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Grid of features */}
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3 mb-8 grow">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check size={14} className="text-gray-900 shrink-0 mt-1" strokeWidth={3} />
                        <span className="text-[11px] font-medium text-gray-700 leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-auto">
                    <Link 
                      to={service.id === 'hvac' ? '/services/mechanical' : service.link} 
                      className={`text-${service.color.replace('text-', '')} font-bold text-sm flex items-center gap-1 hover:opacity-80 transition-opacity`}
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADDITIONAL SERVICES */}
      <section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">

          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-brand-blue tracking-wide uppercase">ADDITIONAL SERVICES</h2>
            <div className="w-12 h-1 bg-brand-red mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-start gap-6 hover:shadow-md transition-shadow"
              >
                <div className={`w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center shrink-0 ${service.color} bg-white shadow-sm`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className={`font-bold mb-2 uppercase text-sm ${service.color}`}>{service.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <Link to="/contact" className={`text-${service.color.replace('text-', '')} font-bold text-xs flex items-center gap-1 hover:opacity-80`}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE VERICON SERVICES */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-[#0B1528] rounded-[2rem] p-8 md:p-12 shadow-2xl">

            <div className="text-center mb-12 flex flex-col items-center">
              <h2 className="text-xl font-bold text-white tracking-wide uppercase">WHY CHOOSE VERICON SERVICES?</h2>
              <div className="w-10 h-0.5 bg-brand-red mt-3"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-4">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 mb-4 text-white flex items-center justify-center border border-white/20 rounded-xl bg-white/5">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-white/90 whitespace-pre-line leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. STATS ROW */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                  <div className="shrink-0 bg-gray-50 p-3 rounded-full border border-gray-100">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-extrabold text-brand-blue leading-tight mb-1">{stat.num}</span>
                    <span className="text-xs font-semibold text-gray-700 uppercase whitespace-pre-line leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="relative w-full bg-brand-dark min-h-[300px] flex items-center">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/cta-bg-engineering.png"
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001838] via-[#001838]/90 to-[#001838]/40 md:to-transparent w-full"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 py-12 md:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Start Your<br className="hidden sm:block" /> Next Project?
            </h2>
            <p className="text-base text-blue-100/90 mb-8 leading-relaxed pr-4">
              Partner with VERICON Engineering Services for reliable, innovative, and end-to-end engineering solutions tailored to your needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2 text-sm">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="bg-transparent border border-white hover:bg-white hover:text-brand-blue text-white px-6 py-3 rounded-lg font-bold transition-colors text-sm">
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
