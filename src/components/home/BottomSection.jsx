import React, { useState, useEffect, useCallback, useRef } from 'react';
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
      className="h-full group relative text-left rounded-2xl overflow-hidden bg-white border border-[#E5DEC9] shadow-sm hover:shadow-[0_24px_48px_-14px_rgba(18,62,183,0.22)] hover:-translate-y-2 hover:border-[#123EB7]/45 transition-all duration-300 flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#123EB7]"
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
  const contentScrollRef = useRef(null);

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

  useEffect(() => {
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTop = 0;
    }
  }, [director?.id]);

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
          className="fixed inset-0 z-50 bg-[#050C1B]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5"
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
            className="relative w-full max-w-6xl h-[85vh] md:h-[580px] lg:h-[600px] max-h-[90vh] bg-[#FFFDF9] text-[#081530] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#E5DEC9]"
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

            {/* Scrollable Editorial Body — Same Card Dimensions for All 4 Directors */}
            <div
              ref={contentScrollRef}
              className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-ivory p-5 md:p-7 lg:p-8"
            >
              {/* Compact Top-Left Portrait Card — Full-Bleed Image with Name Strip Below */}
              <div className="relative z-10 bg-[#081224] text-white -mx-5 -mt-5 mb-4 md:float-left md:w-[335px] lg:w-[375px] md:-ml-7 md:-mt-7 md:mr-7 md:mb-4 lg:-ml-8 lg:-mt-8 lg:mr-8 lg:mb-4 md:rounded-br-2xl overflow-hidden md:border-r md:border-b border-[#C9A86A]/35">
                <div className="w-full aspect-[4/3.2] overflow-hidden">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="w-full px-4 py-3 text-center">
                  <h4
                    id="modal-director-name"
                    className="font-editorial font-bold text-white whitespace-nowrap text-[16px] sm:text-[20px] md:text-[15.5px] lg:text-[17px] leading-snug tracking-[0.01em]"
                  >
                    {director.name}
                    {director.credential && (
                      <>
                        ,{' '}
                        <span className="text-[#E5B973]">{director.credential}</span>
                      </>
                    )}
                  </h4>
                </div>
              </div>

              {/* Header & Bio Paragraphs — Flow Right of Image Box, Then Full-Width Below */}
              <div className="pb-3 mb-3.5 border-b border-[#EAE4D7] md:pr-10">
                <p className="font-display text-sm sm:text-base font-semibold text-[#D80C20]">
                  {director.role}{' '}
                  <span className="text-slate-300 mx-1.5">|</span>{' '}
                  <span className="text-[#123EB7]">{director.company}</span>
                </p>
                {director.educationLine && (
                  <p className="font-jakarta text-xs sm:text-[13px] font-medium text-slate-600 mt-1 leading-relaxed">
                    {director.educationLine}
                  </p>
                )}
              </div>

              <div className="font-jakarta text-[12.5px] sm:text-[13px] leading-[1.65] text-slate-700">
                {allParagraphs.map((para, idx) => (
                  <p key={idx} className="mb-3 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>

              <div className="clear-both" />
            </div>

            {/* Pinned Bottom Prev / Next Director Navigation */}
            <div className="shrink-0 px-5 py-3.5 md:px-7 lg:px-8 border-t border-[#EAE4D7] bg-[#FFFDF9] flex items-center justify-end gap-3">
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
            <span className="font-inter text-brand-blue font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              OUR LEADERSHIP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-display font-bold tracking-tight leading-[1.08] mb-4">
            <span className="text-[#123EB7]">Meet Our</span>{' '}
            <span className="font-editorial italic font-bold text-[#D80C20] text-[1.12em] tracking-normal">
              Directors
            </span>
          </h2>

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
