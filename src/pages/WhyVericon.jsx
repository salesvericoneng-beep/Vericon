import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, Lightbulb, Leaf, 
  Users, Cog, Handshake, Clock, CircleDollarSign, Headset,
  Building2, HardHat, CalendarDays, ThumbsUp, CheckCircle2, ArrowRight
} from 'lucide-react';

const commitments = [
  { icon: <ShieldCheck size={40} strokeWidth={1.5} />, title: 'SAFETY FIRST', desc: 'We prioritize safety in every project and ensure compliance with global standards.', color: 'text-brand-blue' },
  { icon: <Award size={40} strokeWidth={1.5} />, title: 'QUALITY ASSURED', desc: 'Our processes and quality controls ensure reliable and long-lasting performance.', color: 'text-brand-red' },
  { icon: <Lightbulb size={40} strokeWidth={1.5} />, title: 'INNOVATION DRIVEN', desc: 'We adopt advanced technology and innovative solutions to solve complex challenges.', color: 'text-brand-blue' },
  { icon: <Leaf size={40} strokeWidth={1.5} />, title: 'SUSTAINABLE SOLUTIONS', desc: 'We deliver energy-efficient and eco-friendly solutions for a better tomorrow.', color: 'text-brand-red' }
];

const whyChooseUs = [
  { icon: <Users size={36} strokeWidth={1.5} />, title: 'EXPERIENCED TEAM', desc: 'Skilled and dedicated professionals with vast industry experience.', color: 'text-brand-blue' },
  { icon: <Cog size={36} strokeWidth={1.5} />, title: 'END-TO-END SOLUTIONS', desc: 'From design to commissioning, we handle every aspect of your project.', color: 'text-brand-red' },
  { icon: <Handshake size={36} strokeWidth={1.5} />, title: 'CLIENT FOCUSED', desc: 'We understand your needs and deliver customized solutions that add maximum value.', color: 'text-brand-blue' },
  { icon: <Clock size={36} strokeWidth={1.5} />, title: 'ON-TIME DELIVERY', desc: 'We are committed to timely execution and delivery without compromising quality.', color: 'text-brand-red' },
  { icon: <CircleDollarSign size={36} strokeWidth={1.5} />, title: 'COST EFFECTIVE', desc: 'Optimized solutions that ensure efficiency and the best return on your investment.', color: 'text-brand-blue' },
  { icon: <Headset size={36} strokeWidth={1.5} />, title: 'AFTER SALES SUPPORT', desc: 'Reliable support and maintenance services even after project completion.', color: 'text-brand-red' }
];

const stats = [
  { icon: <Building2 size={40} strokeWidth={1.5} />, count: '250+', label: 'Projects\nCompleted', color: 'text-brand-blue' },
  { icon: <Users size={40} strokeWidth={1.5} />, count: '150+', label: 'Happy\nClients', color: 'text-brand-red' },
  { icon: <HardHat size={40} strokeWidth={1.5} />, count: '50+', label: 'Expert\nEngineers', color: 'text-brand-blue' },
  { icon: <CalendarDays size={40} strokeWidth={1.5} />, count: '15+', label: 'Years of\nExperience', color: 'text-brand-red' },
  { icon: <ThumbsUp size={40} strokeWidth={1.5} />, count: '98%', label: 'Client\nSatisfaction', color: 'text-brand-blue' }
];

const differentiators = [
  'Proven track record across diverse industries',
  'Strong focus on safety and compliance',
  'Use of advanced tools and technologies',
  'Transparent communication and ethical practices',
  'Long-term relationships built on trust and reliability'
];

export default function WhyVericon() {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[500px] bg-brand-dark flex flex-col justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541888081622-1815121e4277?q=80&w=2000" 
            alt="Engineers at industrial site" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-[65%]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-4">
              WHY <span className="text-brand-red">VERICON?</span>
            </h1>
            <div className="w-16 h-1 bg-brand-red mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-8 leading-tight">
              Engineering Excellence.<br/>Delivering Lasting Value.
            </h2>
            <p className="text-gray-800 font-medium leading-relaxed mb-4">
              At VERICON Engineering Services, we combine expertise, innovation and commitment to deliver engineering solutions that make a real difference. Our focus is simple – to deliver reliable systems, build lasting relationships and create value for every client.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Commitment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Image */}
            <div className="w-full lg:w-1/3 shrink-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[2rem] overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000" 
                  alt="Teamwork Hands" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue uppercase tracking-wide">OUR COMMITMENT</h2>
                <div className="w-12 h-0.5 bg-brand-red mt-2 mb-6"></div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  We are committed to safety, quality, innovation and sustainability in everything we do. Our goal is to exceed expectations and deliver solutions that are efficient, future-ready and built to last.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
                {commitments.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className={`${item.color} mb-4 group-hover:-translate-y-1 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-brand-blue font-bold text-sm mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Clients Choose Us */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">WHY CLIENTS CHOOSE US</h2>
            <div className="w-10 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {whyChooseUs.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center pt-6 md:pt-0 px-2 group"
                >
                  <div className={`${item.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-brand-blue font-bold text-[13px] mb-3 leading-snug h-10 flex items-center justify-center uppercase">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Strength in Numbers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-xl font-bold text-brand-blue tracking-wide uppercase">OUR STRENGTH IN NUMBERS</h2>
            <div className="w-10 h-0.5 bg-brand-red mt-3"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex items-center gap-4 ${idx !== stats.length - 1 ? 'lg:border-r border-gray-100 lg:pr-12' : ''}`}
              >
                <div className={`${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-brand-dark leading-none mb-1">{stat.count}</span>
                  <span className="text-sm font-semibold text-gray-600 whitespace-pre-line leading-tight">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. What Sets Us Apart */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            
            {/* Left Side: What Sets Us Apart */}
            <div className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-brand-blue tracking-wide uppercase mb-8">WHAT SETS US APART</h2>
              <ul className="space-y-6">
                {differentiators.map((diff, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 size={24} className="text-brand-red shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{diff}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Side: Vision/Mission Split */}
            <div className="w-full lg:w-1/2 flex flex-col sm:flex-row">
              {/* Image half */}
              <div className="w-full sm:w-1/2 h-64 sm:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1579444741963-5ae219cafe27?q=80&w=1000" 
                  alt="Target" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Blue Box half */}
              <div className="w-full sm:w-1/2 bg-[#001838] p-10 flex flex-col justify-center">
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-blue-100/80 text-sm leading-relaxed">
                    To be a trusted leader in engineering solutions, known for our people, our performance and our values.
                  </p>
                </div>
                <div className="w-8 h-0.5 bg-brand-red/50 mb-10"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-blue-100/80 text-sm leading-relaxed">
                    To deliver innovative, safe and sustainable engineering solutions that empower our clients to achieve excellence.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Footer CTA */}
      <section className="bg-[#001838] py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="flex items-center gap-6 max-w-2xl">
              <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0">
                <HardHat size={32} className="text-white" strokeWidth={1.5} />
              </div>
              <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
                Partner with VERICON and experience engineering solutions that are reliable, efficient and future-ready.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0 mt-6 lg:mt-0">
              <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold transition-colors flex items-center gap-2 text-sm">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold transition-colors text-sm flex items-center gap-2">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
