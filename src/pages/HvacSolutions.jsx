import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, Snowflake, Wind, Thermometer,
  Activity, Settings, Layers, Factory, FlaskConical, BarChart2, Gauge
} from 'lucide-react';
import WhyChooseVericon from '../components/WhyChooseVericon';

const hvacExpertise = [
  {
    id: 1,
    title: 'Central Air Conditioning Systems',
    icon: <Snowflake className="text-brand-blue" size={36} />,
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200',
    description:
      'VERICON designs and installs centralized air conditioning systems that deliver uniform, efficient cooling across large commercial, institutional, and industrial buildings. Our central systems use chiller plants, cooling towers, and air handling units to maintain precise temperature control throughout the facility. Each system is engineered with energy efficiency in mind, incorporating variable speed drives, intelligent controls, and heat recovery to minimize operational costs. We handle everything from hydraulic calculations and equipment selection to full installation, commissioning, and operator training  ensuring a seamless handover and long-term reliability.',
  },
  {
    id: 2,
    title: 'Chilled Water Piping Networks',
    icon: <Activity className="text-brand-blue" size={36} />,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    description:
      'Our team specializes in the design and installation of chilled water distribution piping networks that connect chillers to air handling units and fan coil units across multi-floor or multi-zone buildings. We use pre-insulated GI, copper, and carbon steel piping systems fabricated and installed to ASHRAE, BS, and ASME standards. Proper pipe sizing, balancing valve placement, and expansion allowances are calculated to ensure optimal flow, prevent thermal loss, and avoid water hammer effects. Our piping networks are pressure-tested, flushed, and chemically treated before being commissioned, guaranteeing leak-free operation and long service life.',
  },
  {
    id: 3,
    title: 'Air Handling Units (AHU)',
    icon: <Wind className="text-brand-blue" size={36} />,
    image: 'https://images.unsplash.com/photo-1621259599507-6a7f0e34ed6a?q=80&w=1200',
    description:
      'Air Handling Units are the core of any central HVAC system, responsible for conditioning and distributing treated air throughout a building. VERICON supplies, installs, and commissions a wide range of AHUs  from standard rooftop units to custom-built, double-skin modular units for critical environments. Each AHU is configured with the right combination of cooling/heating coils, filters, fans, dampers, and humidifiers based on the space requirements and indoor air quality targets. Our engineers also integrate AHUs with Building Management Systems (BMS) for centralized monitoring, scheduling, and fault detection, maximizing uptime and energy savings.',
  },
  {
    id: 4,
    title: 'Fresh Air & Exhaust Systems',
    icon: <Wind className="text-brand-blue" size={36} />,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200',
    description:
      'Adequate fresh air supply and controlled exhaust are critical for maintaining healthy indoor air quality, especially in densely occupied commercial spaces, hospitals, and manufacturing plants. VERICON designs mechanical ventilation systems that comply with ASHRAE 62.1, NBC, and international codes, providing the required outdoor air changes per hour for each zone. Our systems include energy recovery ventilators (ERVs) and heat recovery wheels to pre-condition incoming fresh air using the exhaust air stream, significantly reducing the cooling or heating load. From kitchen exhaust hoods and toilet extract fans to complex pressurization systems for stairwells and lobbies, we cover the full spectrum of ventilation engineering.',
  },
  {
    id: 5,
    title: 'Precision Air Conditioning',
    icon: <Thermometer className="text-brand-blue" size={36} />,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200',
    description:
      'Precision air conditioning systems are engineered for environments where maintaining exact temperature and humidity levels is mission-critical  such as data centers, server rooms, battery rooms, telecom facilities, and medical equipment areas. VERICON designs and installs Computer Room Air Conditioners (CRAC units), in-row cooling systems, and under-floor air distribution systems that deliver precise control within ±0.5°C and ±3% RH tolerances. Our designs also account for redundancy (N+1 configurations), hot aisle/cold aisle containment, and 24×7 alarm monitoring to prevent equipment failure due to thermal conditions. We ensure your critical assets are protected around the clock.',
  },
  {
    id: 6,
    title: 'VRF / VRV Systems',
    icon: <Settings className="text-brand-blue" size={36} />,
    image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=1200',
    description:
      'Variable Refrigerant Flow (VRF) and Variable Refrigerant Volume (VRV) systems offer the most flexible and energy-efficient solution for medium to large commercial buildings with multiple zones or mixed-use occupancies. VERICON is experienced in designing and installing multi-brand VRF/VRV systems from leading manufacturers, including heat pump and heat recovery configurations that allow simultaneous heating and cooling in different zones. We perform detailed refrigerant pipe sizing, load calculations, and system layout to maximize efficiency ratings (COP/EER). Our team also provides full BMS integration, controller programming, and post-commissioning fine-tuning to ensure every indoor unit delivers the specified comfort level.',
  },
  {
    id: 7,
    title: 'Industrial Ventilation',
    icon: <Factory className="text-brand-blue" size={36} />,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200',
    description:
      'Industrial environments generate heat, fumes, dust, and hazardous airborne contaminants that must be effectively controlled to protect workers and equipment. VERICON designs industrial ventilation systems that include general dilution ventilation, local exhaust ventilation (LEV), source capture hoods, and high-volume low-speed (HVLS) fan solutions for large manufacturing halls and warehouses. Our engineers conduct detailed airflow and contaminant dispersion studies to determine the correct number of air changes and exhaust points required to meet OSHA, ACGIH, and NBC standards. All ductwork, exhaust fans, and scrubber systems are selected for compatibility with the specific industrial process, ensuring safe and compliant operation.',
  },
  {
    id: 8,
    title: 'Clean Room HVAC',
    icon: <FlaskConical className="text-brand-blue" size={36} />,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200',
    description:
      'Clean room HVAC systems are among the most technically demanding applications in the HVAC industry, requiring stringent control of air cleanliness, temperature, humidity, and pressure differentials to comply with ISO 14644, GMP, and other pharmaceutical or semiconductor standards. VERICON designs and installs clean room HVAC systems including HEPA-filtered ceiling supply grilles, fan filter units (FFUs), dedicated AHUs with high-efficiency filters, and pressurization cascades between rooms of different classification. Our team coordinates with civil and interior contractors to plan for ceiling void depths, return air plenums, and airtight construction requirements. We also perform particle counting, airflow visualization studies, and microbiological testing during validation to certify room classification.',
  },
  {
    id: 9,
    title: 'Testing & Balancing',
    icon: <BarChart2 className="text-brand-blue" size={36} />,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200',
    description:
      'Testing, Adjusting & Balancing (TAB) is a critical commissioning phase that ensures every HVAC system operates according to its design specifications after installation. VERICON\'s certified TAB technicians measure and adjust airflow at every supply and return air outlet, balance water flows in chilled and condenser water circuits, and verify that fan and pump performance matches the design curves. All measurements are documented in detailed TAB reports prepared in accordance with AABC, NEBB, or SMACNA standards. Proper balancing eliminates hot/cold spots, reduces energy consumption, extends equipment life, and is often a contractual or regulatory requirement for building handover, especially in healthcare and pharmaceutical facilities.',
  },
  {
    id: 10,
    title: 'Energy Optimization',
    icon: <Gauge className="text-brand-blue" size={36} />,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200',
    description:
      'Energy optimization is embedded into every stage of VERICON\'s HVAC engineering process  from preliminary design through operational handover. We conduct energy audits and simulation studies using software tools to model building loads and evaluate alternative system configurations before finalizing the design. Our strategies include the selection of high-efficiency chillers, variable speed drives on all major pumps and fans, demand-controlled ventilation based on CO₂ sensing, automated scheduling of HVAC equipment, and integration of solar or waste heat recovery. For existing buildings, our retrofit services identify underperforming equipment and implement upgrades that deliver measurable reductions in energy bills, typically achieving 20–40% savings with a clear return on investment timeline.',
  },
];

export default function HvacSolutions() {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[520px] md:h-[600px] bg-brand-dark flex flex-col justify-center py-24 md:py-0">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621259599507-6a7f0e34ed6a?q=80&w=2000"
            alt="HVAC Engineering"
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
            <span className="text-white font-medium">HVAC Solutions</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 text-blue-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Snowflake size={14} />
              HVAC Engineering Excellence
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              HVAC Solutions
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 leading-relaxed">
              VERICON delivers comprehensive HVAC solutions for commercial, industrial, healthcare, pharmaceutical, hospitality and mission-critical facilities. From engineering design to installation, testing, commissioning and lifecycle maintenance  executed to international standards.
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

      {/* 3. Expertise  Zig-Zag Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">

          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Our HVAC Expertise</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-base md:text-lg px-2">
              Each area of our HVAC practice is backed by certified engineers, proven methodologies, and a commitment to delivering systems that perform reliably for the long term.
            </p>
            <div className="w-16 h-1 bg-brand-blue mt-6 mx-auto"></div>
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {hvacExpertise.map((item, index) => {
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
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[16/10] md:aspect-[16/10]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Number badge */}
                      <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-brand-blue text-white font-bold text-lg flex items-center justify-center shadow-lg">
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
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 shadow-sm">
                        {item.icon}
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
      <WhyChooseVericon />

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
              Ready to Elevate Your HVAC Systems?
            </h2>
            <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
              Talk to our HVAC engineers today. We'll design, install, and maintain the perfect system for your facility  on time, on budget, and to international standards.
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
