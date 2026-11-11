import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { directors } from '../../data/directors';

function DirectorCard({ director, index, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative text-left rounded-2xl overflow-hidden bg-white border border-[#E5DEC9] shadow-sm hover:shadow-[0_24px_48px_-14px_rgba(18,62,183,0.22)] hover:-translate-y-2 hover:border-[#123EB7]/45 transition-all duration-300 flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#123EB7]"
    >
      {/* Member Portrait Frame */}
      <div className="relative aspect-[3/3.6] w-full overflow-hidden bg-slate-100">
        <img
          src={director.image}
          alt={`${director.name}${director.credential ? `, ${director.credential}` : ''}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Simple Hover Gradient & View Profile Pill */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081224]/80 via-[#081224]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#123EB7] font-display text-xs font-bold tracking-wide shadow-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <span>View Profile</span>
            <ArrowUpRight size={14} className="text-[#D80C20]" />
          </span>
        </div>
      </div>

      {/* Card Footer — Name Only in Black */}
      <div className="px-4 py-5 flex-1 flex items-center justify-center text-center bg-[#FFFDF9]">
        <h3 className="font-editorial font-bold text-[16px] sm:text-[17px] lg:text-[14px] xl:text-[17px] text-black tracking-wide leading-snug">
          {director.name}
        </h3>
      </div>
    </motion.button>
  );
}

function DirectorProfileModal({ director, isOpen, onClose, onStep }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onStep]);

  const allParagraphs = director?.chapters
    ? director.chapters.flatMap((c) => c.paragraphs)
    : [];

  return (
    <AnimatePresence>
      {isOpen && director && (
        <motion.div
          key="director-profile-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#050C1B]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-director-name"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl lg:min-h-[600px] max-h-[92vh] bg-[#FFFDF9] text-[#081530] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-[#E5DEC9]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close profile modal"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white hover:bg-[#D80C20] text-[#081530] hover:text-white shadow-md border border-slate-200 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={17} />
            </button>

            {/* Left Obsidian Portrait Column — Photo & Name Only */}
            <div className="lg:w-[40%] bg-[#081224] text-white px-5 py-6 sm:px-6 sm:py-8 lg:py-12 flex flex-col items-center justify-center text-center shrink-0">
              <div className="rounded-t-[110px] rounded-b-2xl overflow-hidden border border-[#C9A86A]/40 max-w-[220px] sm:max-w-[260px] lg:max-w-[295px] w-full aspect-[4/4.35] mb-5 lg:mb-6 shadow-xl">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h4
                id="modal-director-name"
                className="font-editorial font-bold text-white whitespace-nowrap text-[15.5px] sm:text-[20px] lg:text-[17px] xl:text-[20px] leading-snug tracking-[0.01em]"
              >
                {director.name}
                {director.credential ? `, ${director.credential}` : ''}
              </h4>
            </div>

            {/* Right Ivory Editorial Reader — Simple Role, Education & Bio */}
            <div className="flex-1 p-6 sm:p-9 lg:p-10 overflow-y-auto flex flex-col justify-between">
              <div>
                <div className="pb-4 mb-6 border-b border-[#EAE4D7] pr-8">
                  <p className="font-display text-sm sm:text-base font-semibold text-[#D80C20]">
                    {director.role}{' '}
                    <span className="text-slate-300 mx-1.5">|</span>{' '}
                    <span className="text-[#123EB7]">{director.company}</span>
                  </p>
                  {director.educationLine && (
                    <p className="font-jakarta text-xs sm:text-[13.5px] font-medium text-slate-600 mt-1.5 leading-relaxed">
                      {director.educationLine}
                    </p>
                  )}
                </div>

                <div className="space-y-4 font-jakarta text-[14.5px] sm:text-[15px] leading-[1.82] text-slate-700">
                  {allParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Modal Prev / Next Director Navigation */}
              <div className="mt-8 pt-5 border-t border-[#EAE4D7] flex items-center justify-end gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onStep(-1)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F4F1EA] hover:bg-[#123EB7] text-[#123EB7] hover:text-white border border-[#E4DEC9] font-display text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={14} />
                    <span>Prev</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onStep(1)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F4F1EA] hover:bg-[#D80C20] text-[#D80C20] hover:text-white border border-[#E4DEC9] font-display text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function BottomSection() {
  const [modalIndex, setModalIndex] = useState(null);

  const selectedDirector =
    modalIndex !== null ? directors[modalIndex] : null;

  const handleClose = useCallback(() => {
    setModalIndex(null);
  }, []);

  const handleStep = useCallback((delta) => {
    setModalIndex((prev) => {
      if (prev === null) return 0;
      return (prev + delta + directors.length) % directors.length;
    });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#F4F1EA] relative overflow-hidden">
      {/* Subtle Organic Radial Accents */}
      <div className="absolute -top-36 -left-36 w-[440px] h-[440px] rounded-full bg-[#C9A86A]/10 blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-36 -right-36 w-[480px] h-[480px] rounded-full bg-[#123EB7]/8 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-[1260px] relative z-10">
        {/* Editorial Masthead Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5DEC9] shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D80C20]" />
            <span className="font-tech text-[#123EB7] font-semibold uppercase tracking-[0.22em] text-[10.5px]">
              OUR LEADERSHIP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-display font-bold tracking-tight leading-[1.08] mb-4">
            <span className="text-[#123EB7]">Meet Our</span>{' '}
            <span className="font-editorial italic font-bold text-[#D80C20] text-[1.12em] tracking-normal">
              Directors
            </span>
          </h2>

          <p className="font-jakarta text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            Click on any Founder &amp; Director portrait below to explore their complete engineering credentials and leadership profile.
          </p>

          <div className="w-20 h-1 mx-auto mt-6 flex rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-[#D80C20]" />
            <div className="w-1/2 h-full bg-[#123EB7]" />
          </div>
        </div>

        {/* 4-Column Simple Portrait Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {directors.map((director, index) => (
            <DirectorCard
              key={director.id}
              director={director}
              index={index}
              onOpen={() => setModalIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Click-Triggered Executive Profile Modal */}
      <DirectorProfileModal
        director={selectedDirector}
        isOpen={modalIndex !== null}
        onClose={handleClose}
        onStep={handleStep}
      />
    </section>
  );
}
