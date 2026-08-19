import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Projects', path: '/services' },
  { name: 'Services', path: '/projects' },
  { name: 'Contact Us', path: '/contact' },
];

const services = [
  { name: 'HVAC Solutions', path: '/services/hvac' },
  { name: 'Electrical Solutions', path: '/services/electrical' },
  { name: 'Fire Fighting Solutions', path: '/services/fire' },
  { name: 'Public Health Engineering', path: '/services/phe' },
  { name: 'Annual Maintenance Contract', path: '#' },
  { name: 'Revamp & Retrofit', path: '#' },
  { name: 'Energy Optimization', path: '#' },
];

const segments = [
  'Commercial', 'Industrial', 'Healthcare',
  'Hospitality', 'Pharmaceutical', 'Government', 'Residential',
];

const socials = [
  {
    label: 'Facebook',
    href: '#',
    bg: 'bg-[#1877F2]/15 hover:bg-[#1877F2] border-[#1877F2]/40',
    color: 'text-[#1877F2] hover:text-white',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    bg: 'bg-[#E4405F]/15 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border-[#E4405F]/40',
    color: 'text-[#E4405F] hover:text-white',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    bg: 'bg-[#0A66C2]/15 hover:bg-[#0A66C2] border-[#0A66C2]/40',
    color: 'text-[#0A66C2] hover:text-white',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    bg: 'bg-[#FF0000]/15 hover:bg-[#FF0000] border-[#FF0000]/40',
    color: 'text-[#FF0000] hover:text-white',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050D1A] text-white overflow-hidden">

      {/* Giant VERICON watermark */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-black uppercase whitespace-nowrap text-white/[0.03]"
          style={{ fontSize: 'clamp(60px,14vw,180px)', letterSpacing: '0.25em', fontFamily: 'Poppins, sans-serif' }}
        >
          VERICON
        </span>
      </div>

      {/* Subtle diagonal grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(18,62,183,0.055) 25%, transparent 25%), linear-gradient(225deg, rgba(18,62,183,0.055) 25%, transparent 25%)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top accent bar blue + red */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-[#123EB7]" />
        <div className="flex-1 bg-[#D80C20]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 max-w-[1400px] pt-16 pb-10">

        {/* Top row: logo + tagline + socials */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 pb-10 border-b border-white/10">
          <div className="flex flex-col items-start gap-3">
            <Link to="/" className="inline-block group">
              <div className="bg-white px-5 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <img src="/LOGO.png" alt="Vericon Engineering Services" className="h-12 md:h-14 object-contain" />
              </div>
            </Link>
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-4 bg-brand-red rounded-full shrink-0" />
              <p className="text-white text-sm md:text-base font-bold tracking-wide font-poppins">
                VERICON Engineering Private Limited
              </p>
            </div>
          </div>
          {/* Social icons */}
          <div className="flex items-center gap-3.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`w-12 h-12 rounded-2xl border ${s.bg} ${s.color} flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1.5`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 4-column links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
              <span className="text-brand-blue">QUICK</span> <span className="text-brand-red">LINKS</span>
            </h4>
            <div className="w-10 h-[2px] bg-brand-red mb-6" />
            <ul className="space-y-3.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="group flex items-center gap-2 text-gray-300 hover:text-white text-sm md:text-[15px] font-medium transition-colors duration-200">
                    <span className="w-0 group-hover:w-3 h-[2px] bg-brand-red transition-all duration-300 shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-base md:text-lg font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
              <span className="text-brand-blue">OUR</span> <span className="text-brand-red">SERVICES</span>
            </h4>
            <div className="w-10 h-[2px] bg-brand-red mb-6" />
            <ul className="space-y-3.5">
              {services.map((s) => (
                <li key={s.name}>
                  <Link to={s.path} className="group flex items-center gap-2 text-gray-300 hover:text-white text-sm md:text-[15px] font-medium transition-colors duration-200">
                    <span className="w-0 group-hover:w-3 h-[2px] bg-brand-red transition-all duration-300 shrink-0" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Segments */}
          <div>
            <h4 className="text-base md:text-lg font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
              <span className="text-brand-blue">KEY</span> <span className="text-brand-red">SEGMENTS</span>
            </h4>
            <div className="w-10 h-[2px] bg-brand-red mb-6" />
            <ul className="space-y-3.5">
              {segments.map((seg) => (
                <li key={seg} className="flex items-center gap-2.5 text-gray-300 text-sm md:text-[15px] font-medium">
                  <span className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
                  {seg}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base md:text-lg font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
              <span className="text-brand-blue">CONTACT</span> <span className="text-brand-red">US</span>
            </h4>
            <div className="w-10 h-[2px] bg-brand-red mb-6" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-xs md:text-[13px] font-medium leading-relaxed">
                  Plot No 13, Ground floor, Survey 64/2,<br />
                  (New) Software Units Layout, Awfis Ohris Tech Park,<br />
                  Madhapur, HITEC City, Hyderabad, Telangana 500081.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-red-400" />
                </div>
                <a href="tel:+919876543210" className="text-gray-300 text-sm md:text-[15px] font-medium hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <a href="mailto:info@vericon.in" className="text-gray-300 text-sm md:text-[15px] font-medium hover:text-white transition-colors">info@vericon.in</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
                  <Globe size={16} className="text-red-400" />
                </div>
                <a href="https://www.vericon.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm md:text-[15px] font-medium hover:text-white transition-colors">www.vericon.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide">
            © 2026 <span className="text-white font-semibold">VERICON Engineering Private Limited.</span> All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-xs sm:text-sm text-gray-400 font-medium">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            <Link to="#" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
