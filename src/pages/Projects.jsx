import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Wrench,
  RefreshCw,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  TrendingDown,
  PhoneCall,
  Sparkles,
  Activity,
  Gauge,
  Sliders,
  Flame,
  SearchCheck,
  Cpu
} from 'lucide-react';

const specializedServices = [
  {
    number: '01',
    id: 'annual-maintenance',
    title: 'Annual Maintenance Contract (AMC)',
    subtitle: 'Comprehensive Lifecycle Care & Operational Reliability',
    badge: 'PREVENTIVE & PREDICTIVE CARE',
    badgeColor: 'bg-brand-blue/10 text-brand-blue border-brand-blue/30',
    accentColor: '#123EB7',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200',
    description: [
      'VERICON delivers comprehensive Annual Maintenance Contracts (AMC) engineered to maximize equipment uptime, extend operational lifespan, and ensure strict safety compliance across critical facility systems.',
      'Our certified technical teams provide planned preventive maintenance, real-time diagnostic checks, emergency breakdown resolution, and performance tuning for HVAC, electrical, fire protection, and plumbing infrastructure.',
      'We adhere to stringent SLA benchmarks with 24/7 on-call rapid response teams to minimize operational interruptions.',
      'Detailed inspection logs, thermal imaging audits, and digital health reports provide complete transparency and predictive fault detection.',
      'Partnering with VERICON guarantees peace of mind, regulated operating costs, and uninterrupted business continuity for commercial, industrial, and institutional facilities.'
    ],
    highlights: [
      '24/7 Emergency Breakdown Support',
      'Scheduled Preventive Health Audits',
      'Original OEM Spares & Consumables',
      'Digital Logging & SLA Compliance'
    ]
  },
  {
    number: '02',
    id: 'revamp-retrofits',
    title: 'Revamp & Retrofits',
    subtitle: 'Modernizing Aging Systems with Smart Engineering',
    badge: 'INFRASTRUCTURE UPGRADE',
    badgeColor: 'bg-brand-red/10 text-brand-red border-brand-red/30',
    accentColor: '#D80C20',
    icon: RefreshCw,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200',
    description: [
      'Our Revamp & Retrofit engineering solutions breathe new life into existing, outdated, or underperforming MEP and HVAC infrastructure without requiring complete facility shutdowns.',
      'We evaluate system bottlenecks, thermal efficiency, aging ductwork, worn chiller loops, and obsolete electrical switchgear to engineer phased modernization plans.',
      'By integrating smart variable frequency drives, eco-friendly refrigerants, modern filtration, and intelligent control interfaces, we substantially improve output while preserving existing structural integrity.',
      'Our agile execution methodology minimizes tenant disruption and ensures rapid turnaround times from initial audit to final commissioning.',
      'The result is modern, compliant, and highly reliable infrastructure that meets today’s stringent safety codes and occupancy demands.'
    ],
    highlights: [
      'Zero-Downtime Phased Execution',
      'Equipment Modernization & Capacity Upgrades',
      'CFC/HCFC to Green Gas Conversion',
      'Code Compliance & Life-Safety Retrofits'
    ]
  },
  {
    number: '03',
    id: 'energy-optimization',
    title: 'Energy Optimization',
    subtitle: 'Sustainable Efficiency & Reduced Carbon Footprint',
    badge: 'GREEN ENGINEERING & SAVINGS',
    badgeColor: 'bg-emerald-600/10 text-emerald-600 border-emerald-600/30',
    accentColor: '#059669',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200',
    description: [
      'VERICON’s Energy Optimization services empower building owners and facility operators to drastically curtail utility expenses while accelerating their green building sustainability targets.',
      'We execute deep-dive energy audits, load profiling, harmonic distortion analysis, and thermodynamic modeling to uncover hidden energy waste across central plant and distribution networks.',
      'Through smart Building Management System (BMS) calibrations, automated demand-controlled ventilation, heat recovery wheels, and precision power factor corrections, we maximize kilowatt-per-ton cooling efficiency.',
      'Our data-driven optimizations typically yield 15% to 35% reductions in lifecycle energy consumption with measurable return on investment.',
      'We help clients achieve IGBC, LEED, and GRIHA green building certifications while safeguarding environmental resources for future generations.'
    ],
    highlights: [
      'Comprehensive ASHRAE Energy Audits',
      'Smart BMS & IoT Demand Control',
      '15% to 35% Reduction in Energy Bills',
      'LEED, IGBC & GRIHA Certification Support'
    ]
  }
];

const diagnosticServices = [
  {
    id: 'vibration-analysis',
    title: 'Vibration Analysis',
    badge: 'PREDICTIVE DIAGNOSTICS',
    accentColor: '#123EB7',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000',
  },
  {
    id: 'equipment-performance-test',
    title: 'Equipment Performance Test',
    badge: 'BENCHMARKING',
    accentColor: '#4F46E5',
    icon: Gauge,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1000',
  },
  {
    id: 'auto-sequence-asp-panel',
    title: 'Auto Sequence Solution (ASP Panel)',
    badge: 'AUTOMATION',
    accentColor: '#D97706',
    icon: Sliders,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000',
  },
  {
    id: 'electrical-thermography',
    title: 'Electrical Thermography',
    badge: 'THERMAL SCANNING',
    accentColor: '#D80C20',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=1000',
  },
  {
    id: 'cylinder-hp-testing',
    title: 'Cylinder HP Testing & Re-filling',
    badge: 'PESO / CCOE TESTING',
    accentColor: '#059669',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1000',
  }
];

export default function Projects() {
  return (
    <div className="pt-20 min-h-screen bg-[#F8FAFC] overflow-hidden">

      {/* ── 1. BEAST HEROIC SECTION ── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] bg-[#050D1A] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?q=80&w=2000"
            alt="Engineering Services Hero"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050D1A] via-[#050D1A]/90 to-[#050D1A]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-transparent" />
        </div>

        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-brand-red/15 blur-3xl pointer-events-none" />

        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#123EB7 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
          }}
        />

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 py-16 lg:py-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                ENGINEERING EXCELLENCE &amp; LIFECYCLE SOLUTIONS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 font-poppins leading-[1.1]"
            >
              SPECIALIZED <span className="text-brand-red">SERVICES</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-200/90 mb-6 leading-snug"
            >
              Sustaining Efficiency, Enhancing Life Cycles &amp; Maximizing Performance.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-10 font-normal"
            >
              From proactive 24/7 annual maintenance to turnkey modernization retrofits and cutting-edge energy audits, VERICON delivers end-to-end technical mastery engineered for long-term reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2.5 text-sm shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-0.5"
              >
                Request a Service Quote <ArrowRight size={16} />
              </Link>
              <a
                href="#services-list"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 text-sm backdrop-blur-md hover:-translate-y-0.5"
              >
                Explore Specialized Solutions
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" className="fill-[#F8FAFC]" />
          </svg>
        </div>
      </section>

      {/* ── 2. QUICK STATS STRIP ── */}
      <section className="py-6 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Clock, label: '24/7 Rapid Response', desc: 'Guaranteed SLA uptime' },
              { icon: ShieldCheck, label: '100% Code Compliance', desc: 'NBC & ASHRAE standards' },
              { icon: TrendingDown, label: 'Up to 35% Savings', desc: 'On utility power bills' },
              { icon: Award, label: 'Certified Specialists', desc: 'Decades of MEP mastery' }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 leading-tight">{stat.label}</h4>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">{stat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. CORE SPECIALIZED SERVICES ── */}
      <section id="services-list" className="py-16 lg:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-brand-blue font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
              OUR SPECIALIZED CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-brand-blue tracking-tight leading-tight">
              Engineered for <span className="text-brand-red">Longevity &amp; Precision</span>
            </h2>
            <div className="w-16 h-1 mx-auto flex mt-5">
              <div className="w-1/2 h-full bg-brand-blue" />
              <div className="w-1/2 h-full bg-brand-red" />
            </div>
          </div>

          <div className="flex flex-col gap-16 lg:gap-24 mb-24">
            {specializedServices.map((service, index) => {
              const isEven = index % 2 === 1;
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? 'lg:flex-row-reverse' : ''}`}>

                    <div className={`lg:col-span-5 relative min-h-[340px] lg:min-h-full overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:hidden" />

                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                        <span className="font-extrabold text-sm tracking-wider" style={{ color: service.accentColor }}>
                          {service.number}
                        </span>
                        <span className="w-1 h-3 rounded-full bg-gray-300" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
                          VERICON
                        </span>
                      </div>
                    </div>

                    <div className={`lg:col-span-7 p-8 md:p-12 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <span className={`inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${service.badgeColor}`}>
                            {service.badge}
                          </span>
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                            style={{ backgroundColor: service.accentColor }}
                          >
                            <Icon size={22} strokeWidth={2} />
                          </div>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-blue font-poppins mb-2">
                          {service.title}
                        </h3>
                        <p className="text-brand-red font-semibold text-sm mb-6">
                          {service.subtitle}
                        </p>

                        <div className="space-y-3 mb-8">
                          {service.description.map((para, pi) => (
                            <p key={pi} className="text-gray-600 text-sm leading-relaxed font-normal">
                              {para}
                            </p>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-6 border-t border-gray-100">
                          {service.highlights.map((h, hi) => (
                            <div key={hi} className="flex items-center gap-2.5">
                              <CheckCircle2 size={16} className="text-brand-red shrink-0" strokeWidth={2.5} />
                              <span className="text-xs font-semibold text-gray-800">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 pt-4">
                        <Link
                          to="/contact"
                          className="text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                          style={{ backgroundColor: service.accentColor }}
                        >
                          Book Service Consultation <ArrowRight size={14} />
                        </Link>
                        <Link
                          to="/contact"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
                        >
                          Request Technical Audit
                        </Link>
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
                SPECIALIZED AUDITS &amp; DIAGNOSTICS
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-poppins text-brand-blue tracking-tight leading-tight">
                Advanced Testing &amp; <span className="text-brand-red">Precision Diagnostics</span>
              </h2>
              <div className="w-16 h-1 mx-auto flex mt-5">
                <div className="w-1/2 h-full bg-brand-red" />
                <div className="w-1/2 h-full bg-brand-blue" />
              </div>
              <p className="text-gray-600 text-sm md:text-base mt-4 max-w-2xl mx-auto">
                Specialized state-of-the-art diagnostic testing, statutory certifications, and smart sequence automation to guarantee zero equipment downtime.
              </p>
            </div>

            {/* Diagnostics Grid: Image + Name Only */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {diagnosticServices.map((item, idx) => {
                const DiagIcon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
                  >
                    {/* Image Header */}
                    <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* Badge */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow text-gray-900">
                          {item.badge}
                        </span>
                      </div>

                      {/* Icon */}
                      <div
                        className="absolute bottom-3.5 right-3.5 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110"
                        style={{ backgroundColor: item.accentColor }}
                      >
                        <DiagIcon size={20} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content: Title & Enquire Action Only */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-lg font-bold text-brand-blue font-poppins mb-3 leading-snug group-hover:text-brand-red transition-colors">
                          {item.title}
                        </h3>
                        <div className="w-8 h-[2px] bg-brand-red mb-4" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. BOTTOM HEROIC CTA ── */}
      <section className="relative bg-[#050D1A] py-20 overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/cta-bg-engineering.png"
            alt="Engineering CTA"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050D1A] via-[#050D1A]/95 to-[#050D1A]/80" />

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} /> Ready to Optimize Your Facility?
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-poppins mb-6 leading-tight">
            Let’s Build a Customized <br /><span className="text-brand-red">Engineering &amp; Audit Plan</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
            Connect with our lead MEP engineers today for a dedicated on-site technical inspection, performance assessment, and transparent service proposal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-xl shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-1"
            >
              <PhoneCall size={16} /> Contact Our Engineers
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm backdrop-blur-md transition-all duration-300"
            >
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

