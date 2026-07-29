import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, MapPin, Phone, Mail, Globe, Clock, Send,
  Headset, Users, Handshake, ShieldCheck
} from 'lucide-react';

const contactInfo = [
  { 
    icon: <MapPin size={24} className="text-brand-red" strokeWidth={1.5} />, 
    title: 'ADDRESS', 
    details: [
      'Ground floor, Plot no 13, Survey 64/2,', 
      '(New) Software Units Layout, Awfis Ohris Tech Park,', 
      'Madhapur, HITEC City, Hyderabad, Telangana 500081'
    ]
  },
  { 
    icon: <Phone size={24} className="text-brand-red" strokeWidth={1.5} />, 
    title: 'PHONE', 
    details: ['+91 98765 43210', '+91 40 1234 5678']
  },
  { 
    icon: <Mail size={24} className="text-brand-red" strokeWidth={1.5} />, 
    title: 'EMAIL', 
    details: ['info@vericon.in', 'sales@vericon.in']
  },
  { 
    icon: <Globe size={24} className="text-brand-red" strokeWidth={1.5} />, 
    title: 'WEBSITE', 
    details: ['www.vericon.in']
  },
  { 
    icon: <Clock size={24} className="text-brand-red" strokeWidth={1.5} />, 
    title: 'WORKING HOURS', 
    details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed']
  }
];

const features = [
  { icon: <Headset size={40} strokeWidth={1.5} />, title: 'Quick Response', desc: 'We respond to all inquiries within 24 hours.' },
  { icon: <Users size={40} strokeWidth={1.5} />, title: 'Expert Team', desc: 'Our experts are ready to understand your needs.' },
  { icon: <Handshake size={40} strokeWidth={1.5} />, title: 'Tailored Solutions', desc: 'We provide customized solutions that fit your business.' },
  { icon: <ShieldCheck size={40} strokeWidth={1.5} />, title: 'Trusted Partner', desc: 'Committed to quality, safety and long-term relationships.' }
];

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[400px] flex flex-col justify-center bg-gray-100">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000" 
            alt="Industrial Refinery at Sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-[60%]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-4">CONTACT US</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 leading-tight">
              We're Here to Help You Build Safer, Smarter & Stronger Solutions.
            </h2>
            <p className="text-gray-700 font-medium leading-relaxed">
              Have a project in mind or need more information about our services? Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content (Split Layout) */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-800 font-medium mb-12">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-brand-red">Contact Us</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Side: Get in Touch */}
            <div className="w-full lg:w-5/12">
              <h2 className="text-xl font-bold text-brand-dark uppercase tracking-wide mb-2">GET IN TOUCH</h2>
              <div className="w-10 h-0.5 bg-brand-red mb-6"></div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                We are always ready to assist you. Feel free to contact us through any of the following channels.
              </p>

              <div className="flex flex-col gap-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] bg-white hover:border-brand-red/20 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-brand-blue font-bold text-sm mb-1 uppercase tracking-wide">{info.title}</h3>
                      {info.details.map((line, i) => (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-gray-50/50 rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-brand-blue uppercase tracking-wide mb-2">SEND US A MESSAGE</h2>
                <div className="w-10 h-0.5 bg-brand-red mb-6"></div>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Fill in the form below and our team will get back to you promptly.
                </p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-800">Full Name <span className="text-brand-red">*</span></label>
                      <input 
                        type="text" 
                        placeholder="Enter your full name" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-800">Email Address <span className="text-brand-red">*</span></label>
                      <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-800">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-800">Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your company name" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-800">Subject <span className="text-brand-red">*</span></label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors text-sm appearance-none bg-white" required>
                        <option value="" disabled selected hidden>Select a subject</option>
                        <option value="hvac">HVAC Solutions</option>
                        <option value="electrical">Electrical Solutions</option>
                        <option value="fire">Fire Fighting Solutions</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-800">Message <span className="text-brand-red">*</span></label>
                    <textarea 
                      rows={5}
                      placeholder="Type your message here..." 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors text-sm resize-none"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="bg-brand-red hover:bg-red-700 text-white px-8 py-3.5 rounded-md font-bold transition-colors text-sm flex items-center gap-2 uppercase tracking-wide"
                  >
                    SEND MESSAGE <Send size={16} />
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Bottom Features */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-gray-50/50 rounded-3xl p-10 md:p-14 border border-gray-100 text-center">
            
            <h2 className="text-xl font-bold text-brand-blue uppercase tracking-wide mb-3">WE'D LOVE TO HEAR FROM YOU</h2>
            <div className="w-10 h-0.5 bg-brand-red mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 divide-y md:divide-y-0 md:divide-x divide-gray-200/60">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center pt-6 md:pt-0 px-4">
                  <div className="text-brand-red mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-brand-blue font-bold text-sm mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed max-w-[200px]">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
