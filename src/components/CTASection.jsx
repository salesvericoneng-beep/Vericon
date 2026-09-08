import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection({ 
  title = "Ready to start your project?", 
  description = "Get in touch with us to discuss your requirements.", 
  bgImage = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000",
  bgImageAlt = "CTA Background" 
}) {
  return (
    <section className="relative bg-[#001838] py-16 overflow-hidden">
      {/* Background Image on Right Side */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-40 md:opacity-100">
        <img 
          src={bgImage} 
          alt={bgImageAlt} 
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001838] via-[#001838]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
          <p className="text-blue-100/90 text-sm md:text-base">{description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-colors flex items-center justify-center gap-2 text-sm w-full sm:w-auto">
            Get a Quote <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="bg-white hover:bg-gray-100 text-brand-blue px-6 py-3 rounded-md font-bold transition-colors text-sm flex items-center justify-center gap-2 w-full sm:w-auto">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
