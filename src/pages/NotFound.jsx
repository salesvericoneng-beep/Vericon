import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wrench } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] bg-[#F7F9FC] flex items-center justify-center px-6 pt-32 pb-20">
      <SEO
        title="Page Not Found | VERICON Engineering Private Limited"
        description="The requested page could not be found. Explore VERICON Engineering MEP solutions across Hyderabad, Telangana & Andhra Pradesh."
        noindex
      />

      <div className="max-w-lg w-full bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center shadow-sm">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D80C20] mb-2">
          Error 404
        </p>
        <h1 className="text-3xl font-bold font-poppins text-[#123EB7] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed mb-7">
          The page you are looking for may have moved or does not exist. Explore our turnkey MEP engineering services or return home.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#123EB7] hover:bg-blue-800 text-white text-sm font-semibold transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F4F1EA] hover:bg-[#D80C20] text-[#081530] hover:text-white text-sm font-semibold transition-colors"
          >
            <Wrench size={16} />
            <span>Our Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
