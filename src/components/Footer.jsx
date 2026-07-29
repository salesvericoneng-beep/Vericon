import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B121F] text-white pt-16 pb-6 text-sm">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="col-span-2 lg:col-span-1 pr-6 lg:border-r border-gray-700/50">
            <Link 
              to="/" 
              className="inline-flex items-center h-12 mb-6 hover:opacity-90 transition-opacity bg-white px-2 py-1 rounded"
            >
              <img src="/LOGO.png" alt="Vericon Engineering Services" className="h-full object-contain" />
            </Link>
            
            <p className="text-gray-400 leading-relaxed mb-8 text-xs font-medium pr-4">
              Vericon Engineering Services is a trusted partner in MEP, HVAC, Electrical and Fire Fighting solutions. We deliver excellence in every project we undertake.
            </p>
            
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 lg:px-8 lg:border-r border-gray-700/50">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">QUICK LINKS</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Solutions', path: '/services' },
                { name: 'Why Vericon', path: '/why-vericon' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-xs font-medium">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="col-span-1 lg:px-8 lg:border-r border-gray-700/50">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">OUR SERVICES</h4>
            <ul className="space-y-3">
              {[
                'HVAC Solutions',
                'Electrical Solutions',
                'Fire Fighting Solutions',
                'MEP Services',
                'Annual Maintenance',
                'Project Management',
                'Consultancy'
              ].map((service) => (
                <li key={service}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div className="col-span-1 lg:px-8 lg:border-r border-gray-700/50">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Segments</h4>
            <ul className="space-y-3">
              {[
                'Commercial',
                'Industrial',
                'Healthcare',
                'Hospitality',
                'Pharmaceutical',
                'Government',
                'Residential'
              ].map((ind) => (
                <li key={ind}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors text-xs font-medium">{ind}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="col-span-2 sm:col-span-1 lg:pl-8">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">CONTACT US</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-xs font-medium leading-relaxed">
                  Ground floor, Plot no 13, Survey 64/2,<br/>
                  (New) Software Units Layout, Awfis Ohris Tech Park,<br/>
                  Madhapur, HITEC City, Hyderabad, Telangana 500081
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gray-400 shrink-0" />
                <span className="text-gray-400 text-xs font-medium">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gray-400 shrink-0" />
                <span className="text-gray-400 text-xs font-medium">info@vericon.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={16} className="text-gray-400 shrink-0" />
                <span className="text-gray-400 text-xs font-medium">www.vericon.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-gray-500 font-medium">
            © 2024 Vericon Engineering Services. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-gray-500 font-medium">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
