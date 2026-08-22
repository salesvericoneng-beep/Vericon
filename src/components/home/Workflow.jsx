import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, Search, PenTool, Settings, ClipboardCheck, Handshake, Headset,
  CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, 
  Layers, Cpu, FileCheck2, Activity, Play, Pause, ChevronRight, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    number: '01',
    phase: 'Phase 1 · Discovery',
    title: 'Consultation',
    shortDesc: 'Scope alignment, requirement discovery, and feasibility goals.',
    fullDesc: 'We initiate every project with comprehensive stakeholder meetings to assess architectural constraints, technical scope, budget parameters, and sustainability goals to formulate a tailored MEP strategy.',
    deliverables: [
      'Comprehensive Requirement & Scope Matrix',
      'Preliminary Budget & Feasibility Brief',
      'Project Timeline & Milestones Roadmap',
      'Initial Resource & Engineering Team Plan'
    ],
    standards: ['IS / NBC Compliant', 'Feasibility Brief', 'Value Optimization'],
    team: 'Lead MEP Consultants & Project Directors',
    highlight: 'Tailored strategy aligned with your architectural vision',
    color: '#D80C20',
    icon: Users,
  },
  {
    number: '02',
    phase: 'Phase 2 · On-Site Audit',
    title: 'Survey & Assessment',
    shortDesc: 'On-site technical evaluation, load analysis, and site study.',
    fullDesc: 'Our senior engineering team conducts rigorous on-site surveys, evaluating structural capacities, spatial routing, existing electrical loads, and potential engineering risks to eliminate bottlenecks before drafting.',
    deliverables: [
      'Topographical & Structural Site Audit',
      'Electrical Load & HVAC Thermal Analysis',
      'Risk Assessment & Mitigation Protocol',
      'Field Measurement & Constraint Mapping'
    ],
    standards: ['Field Verification', 'Thermal Load Audit', 'Risk Matrix'],
    team: 'Senior Site Surveyors & MEP Auditors',
    highlight: 'Zero-surprise site data verification',
    color: '#123EB7',
    icon: Search,
  },
  {
    number: '03',
    phase: 'Phase 3 · Engineering',
    title: 'Design & Planning',
    shortDesc: 'Precision 2D/3D CAD & BIM drawings, BOQ, and compliance specs.',
    fullDesc: 'Utilizing state-of-the-art BIM modeling and CAD drafting, we craft clash-detected engineering layouts, comprehensive Bill of Quantities (BOQ), equipment specifications, and statutory-ready blueprints.',
    deliverables: [
      'Clash-Free 3D BIM & Detailed CAD Schematics',
      'Itemized BOQ & Material Specifications',
      'Energy Efficiency & Life-Cycle Modeling',
      'Statutory & Local Authority Approvals'
    ],
    standards: ['IS / NBC Standards', 'ASHRAE Guidelines', 'BIM Level 2'],
    team: 'Design Engineers & BIM Specialists',
    highlight: 'Clash-detected, value-engineered blueprints',
    color: '#D80C20',
    icon: PenTool,
  },
  {
    number: '04',
    phase: 'Phase 4 · Implementation',
    title: 'Execution',
    shortDesc: 'Turnkey installation by certified engineers with strict QA/QC.',
    fullDesc: 'Our certified engineers and technicians execute installations on-site with disciplined project governance, adhering to strict safety protocols, daily progress milestones, and precision workmanship.',
    deliverables: [
      'Turnkey Mechanical, Electrical & PHE Setup',
      'Strict Safety (EHS) & Zero-Incident Protocol',
      'Daily Progress Tracking & Quality Audits',
      'Material Testing & On-Site Verification'
    ],
    standards: ['OSHA Compliant', 'ISO 9001 QA', 'Daily Tracking'],
    team: 'Project Managers & Certified Site Engineers',
    highlight: 'Flawless on-site craftsmanship & safety compliance',
    color: '#123EB7',
    icon: Settings,
  },
  {
    number: '05',
    phase: 'Phase 5 · Quality Assurance',
    title: 'Testing & Commissioning',
    shortDesc: 'Multi-stage stress testing, airflow balancing, and safety validation.',
    fullDesc: 'Before handover, every single system undergoes rigorous pressure tests, calibration, airflow and hydronic balancing, electrical load testing, and emergency fail-safe simulations to ensure peak efficiency.',
    deliverables: [
      'Multi-Stage System Stress & Load Testing',
      'Airflow, Hydronic & Pressure Balancing',
      'Thermal Imaging & Electrical Load Audits',
      'Formal Commissioning Certification'
    ],
    standards: ['NEBB Standards', 'FAT / SAT Tests', '100% Load Validated'],
    team: 'Commissioning Engineers & QA Officers',
    highlight: 'Rigorous 100% load & stress verification',
    color: '#D80C20',
    icon: ClipboardCheck,
  },
  {
    number: '06',
    phase: 'Phase 6 · Handover',
    title: 'Handover',
    shortDesc: 'As-built drawings, O&M manuals, client training, and sign-off.',
    fullDesc: 'We provide complete as-built documentation, operational manuals, warranty certifications, and conduct comprehensive training sessions for your facility management team prior to formal sign-off.',
    deliverables: [
      'Final As-Built CAD & BIM Blueprints',
      'Operations & Maintenance (O&M) Manuals',
      'Facility Staff Hands-on Operational Training',
      'Statutory Clearances & Warranty Handover'
    ],
    standards: ['O&M Handover', 'Staff Certified', 'Statutory Sign-Off'],
    team: 'Project Directors & Training Leads',
    highlight: 'Seamless operational transition with full documentation',
    color: '#123EB7',
    icon: Handshake,
  },
  {
    number: '07',
    phase: 'Phase 7 · Lifecycle Care',
    title: 'AMC & Support',
    shortDesc: '24/7 dedicated support, preventive maintenance, and health audits.',
    fullDesc: 'Our relationship continues with Annual Maintenance Contracts (AMC), predictive servicing, scheduled thermal scans, emergency breakdown response, and continuous system optimization.',
    deliverables: [
      '24/7 Priority Emergency Support',
      'Scheduled Preventive Maintenance Visits',
      'Quarterly Performance & Health Audits',
      'Rapid Spare Parts & Technical Assistance'
    ],
    standards: ['24/7 SLA Guarantee', 'Predictive Scans', 'Max Uptime'],
    team: 'Lifecycle Support Engineers & Helpdesk',
    highlight: 'Guaranteed system longevity & 24/7 reliability',
    color: '#D80C20',
    icon: Headset,
  },
];

export default function Workflow() {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef(null);

  const nextStep = () => {
    setActive((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActive((prev) => (prev - 1 + steps.length) % steps.length);
  };

  // Auto-play feature (pauses on hover)
  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      autoPlayRef.current = setInterval(() => {
        nextStep();
      }, 5500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, isHovered, active]);

  const current = steps[active];
  const IconComponent = current.icon;

  return (
    <section 
      className="py-20 md:py-28 bg-white relative overflow-hidden text-brand-dark"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Background Engineering Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #003B8F 1px, transparent 1px),
            linear-gradient(to bottom, #003B8F 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Soft Ambient Depth Lights */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-red-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 shadow-xs mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-brand-blue font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              OUR PROJECT WORKFLOW
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-blue font-poppins tracking-tight leading-tight mb-4"
          >
            A Process Built on{' '}
            <span className="text-brand-red">
              Precision
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl text-sm sm:text-base leading-relaxed"
          >
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* UNIFIED INTERACTIVE WORKFLOW STAGE (Sidebar Timeline + Deep-Dive Console) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Vertical Interactive Process Timeline (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-gray-50/80 border border-gray-200/80 rounded-3xl p-4 sm:p-5 shadow-sm">
            <div>
              <div className="flex items-center justify-between px-3 py-2 mb-3 border-b border-gray-200/80">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500">
                  Project Lifecycle
                </span>
                <span className="text-xs font-semibold text-brand-red bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                  Step {active + 1} of {steps.length}
                </span>
              </div>

              {/* Steps Vertical List */}
              <div className="space-y-1.5">
                {steps.map((step, idx) => {
                  const StepIcon = step.icon;
                  const isActive = active === idx;
                  const isPast = active > idx;

                  return (
                    <button
                      key={idx}
                      onClick={() => setActive(idx)}
                      className={`w-full text-left flex items-center gap-3.5 p-3 rounded-2xl transition-all duration-300 cursor-pointer outline-none group relative overflow-hidden
                        ${isActive 
                          ? 'bg-white border border-blue-200 shadow-md shadow-blue-900/5' 
                          : 'hover:bg-white/80 border border-transparent text-gray-600 hover:text-gray-900'
                        }`}
                    >
                      {/* Active Indicator Bar on Left */}
                      {isActive && (
                        <motion.div 
                          layoutId="activePill"
                          className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-brand-red to-rose-500 rounded-r-full" 
                        />
                      )}

                      {/* Step Number & Icon */}
                      <div 
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-mono text-xs font-bold transition-all duration-300
                          ${isActive 
                            ? 'bg-gradient-to-tr from-brand-red to-rose-500 text-white shadow-sm' 
                            : isPast
                            ? 'bg-[#123EB7] text-white shadow-xs'
                            : 'bg-gray-200/70 text-gray-600 border border-gray-300/60 group-hover:bg-gray-200 group-hover:text-gray-900'
                          }`}
                      >
                        {isPast ? (
                          <Check size={14} strokeWidth={3} className="text-white" />
                        ) : (
                          <span>{step.number}</span>
                        )}
                      </div>

                      {/* Step Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 
                            className={`text-xs sm:text-sm font-bold font-poppins truncate transition-colors
                              ${isActive ? 'text-brand-blue' : 'text-gray-700 group-hover:text-brand-blue'}`}
                          >
                            {step.title}
                          </h4>
                        </div>
                        <p className={`text-[11px] truncate transition-colors ${isActive ? 'text-brand-red font-medium' : 'text-gray-400'}`}>
                          {step.phase}
                        </p>
                      </div>

                      <ChevronRight 
                        size={15} 
                        className={`shrink-0 transition-transform duration-300 ${
                          isActive ? 'text-brand-red translate-x-0.5' : 'text-gray-300 opacity-0 group-hover:opacity-100'
                        }`} 
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Progress Tracker & Autoplay Control */}
            <div className="mt-4 pt-4 border-t border-gray-200/80 flex items-center justify-between gap-3 px-2">
              <div className="flex-1">
                <div className="flex justify-between text-[11px] font-mono text-gray-500 mb-1.5">
                  <span>Progress</span>
                  <span className="font-semibold text-brand-blue">{Math.round(((active + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200/80 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-blue to-brand-red transition-all duration-500"
                    style={{ width: `${((active + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Autoplay toggle */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 hover:text-brand-blue transition-all text-xs flex items-center gap-1.5 shrink-0 shadow-2xs"
                title={isAutoPlaying ? 'Pause automatic step cycle' : 'Start automatic step cycle'}
              >
                {isAutoPlaying ? (
                  <Pause size={13} className="text-amber-500" />
                ) : (
                  <Play size={13} className="text-emerald-600" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Active Stage Engineering Console (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-blue-900/5 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Background Step Watermark */}
                <div className="absolute right-4 -bottom-10 text-[140px] sm:text-[180px] lg:text-[220px] font-black text-gray-100/90 select-none pointer-events-none font-mono leading-none">
                  {current.number}
                </div>

                {/* Top Dynamic Accent Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-90"
                />

                <div className="relative z-10">
                  {/* Phase & Team Badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="px-3 py-1 rounded-lg bg-red-50 border border-red-200/80 text-brand-red font-mono text-xs font-semibold uppercase tracking-wider">
                      {current.phase}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200/80 text-brand-blue font-mono text-xs font-medium">
                      Team: {current.team}
                    </span>
                  </div>

                  {/* Step Title with Icon */}
                  <div className="flex items-center gap-4 mb-5">
                    <div 
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${current.color} 0%, #003B8F 100%)`,
                      }}
                    >
                      <IconComponent size={26} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-poppins text-brand-blue tracking-tight">
                        {current.number}. {current.title}
                      </h3>
                      <p className="text-brand-red text-xs sm:text-sm font-medium mt-1">
                        {current.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Full Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {current.fullDesc}
                  </p>

                  {/* Key Deliverables Matrix */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                      <FileCheck2 size={14} className="text-brand-red" />
                      Key Engineering Deliverables & Milestones:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {current.deliverables.map((item, dIdx) => (
                        <div 
                          key={dIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50/90 border border-gray-200/70 hover:bg-blue-50/40 hover:border-blue-200 transition-all shadow-2xs"
                        >
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-[13px] text-gray-800 font-medium leading-tight">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer: Standards & Prev/Next Action Buttons */}
                <div className="pt-5 border-t border-gray-100 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 relative z-10">
                  
                  {/* Compliance Tags */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono text-gray-500 mr-0.5 flex items-center gap-1.5 shrink-0">
                      <ShieldCheck size={14} className="text-brand-blue" />
                      Standards:
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {current.standards.map((std, sIdx) => (
                        <span 
                          key={sIdx}
                          className="whitespace-nowrap px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200/80 text-brand-blue text-[11px] font-medium"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Prev / Next Navigation Controls */}
                  <div className="flex items-center gap-2 shrink-0 ml-auto md:ml-0">
                    <button
                      onClick={prevStep}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition-all border border-gray-200 active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      <ArrowLeft size={13} />
                      <span>Previous</span>
                    </button>

                    <button
                      onClick={nextStep}
                      className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-brand-red to-rose-600 hover:from-red-600 hover:to-rose-700 text-white text-xs font-semibold transition-all shadow-md shadow-red-500/20 active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      <span>Next Phase</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Indicator Dots */}
        <div className="flex gap-2 mt-8 justify-center items-center">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Jump to step ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                active === i 
                  ? 'w-10 bg-gradient-to-r from-brand-red to-rose-500 shadow-sm' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
