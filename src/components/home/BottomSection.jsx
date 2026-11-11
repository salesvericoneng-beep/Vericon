import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Award,
  MapPin,
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  UserCheck,
} from 'lucide-react';
import { directors } from '../../data/directors';

function TwoToneDirectorName({ name, credential = null, darkSurface = false }) {
  const words = name.trim().split(/\s+/);
  const surname = words.length > 1 ? words.pop() : '';
  const lead = words.join(' ');

  const leadColor = darkSurface ? 'text-[#7DD3FC]' : 'text-[#123EB7]';
  const surnameColor = darkSurface ? 'text-[#FF6B79]' : 'text-[#D80C20]';
  const credColor = darkSurface ? 'text-[#E5B973]' : 'text-[#9A6B16]';

  return (
    <>
      <span className={leadColor}>{lead}</span>
      {surname && (
        <>
          {' '}
          <span className={surnameColor}>{surname}</span>
        </>
      )}
      {credential && (
        <span
          className={`whitespace-nowrap ${credColor} text-[0.62em] font-tech tracking-wider ml-1.5 align-middle`}
        >
          , {credential}
        </span>
      )}
    </>
  );
}

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
        <h3 className="font-cinzel font-bold text-[15px] sm:text-base text-black tracking-wide leading-snug">
          {director.name}
        </h3>
      </div>
    </motion.button>
  );
}

function DirectorProfileModal({ director, activeIndex, totalCount, isOpen, onClose, onStep }) {
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
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#FFFDF9] text-[#081530] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-[#E5DEC9]"
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

            {/* Left Obsidian Portrait Column */}
            <div className="lg:w-[37%] bg-[#081224] text-white p-6 sm:p-7 flex flex-col justify-between shrink-0 overflow-y-auto">
              <div>
                <div className="rounded-t-[90px] rounded-b-2xl overflow-hidden border border-[#C9A86A]/40 max-w-[230px] mx-auto lg:max-w-none aspect-[4/4.35] mb-5 shadow-xl">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <span className="font-tech text-[10px] uppercase tracking-[0.22em] text-[#E5B973] block mb-1">
                  {director.code} · {director.experience} Experience
                </span>

                <h4
                  id="modal-director-name"
                  className="font-cinzel font-bold text-xl sm:text-2xl leading-snug tracking-wide"
                >
                  <TwoToneDirectorName
                    name={director.name}
                    credential={director.credential}
                    darkSurface
                  />
                </h4>

                <p className="font-display text-xs sm:text-[13px] text-blue-200/90 mt-1">
                  {director.role} | {director.company}
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                  <div className="font-tech text-[10px] uppercase tracking-[0.18em] text-[#E5B973] flex items-center gap-1.5">
                    <GraduationCap size={13} />
                    <span>{director.pedigreeLabel}</span>
                  </div>
                  {director.education.map((deg) => (
                    <p
                      key={deg}
                      className="font-jakarta text-xs font-medium text-white"
                    >
                      {deg}
                    </p>
                  ))}
                  {director.pedigreeNote && (
                    <p className="font-jakarta text-[11.5px] text-slate-300 leading-relaxed pt-1">
                      {director.pedigreeNote}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center gap-1.5 text-xs font-jakarta text-slate-200">
                  <MapPin size={13} className="text-[#D80C20] shrink-0" />
                  <span>{director.regionSubtitle}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {director.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.06] border border-[#C9A86A]/40 font-tech text-[10px] font-medium text-[#F3D8A4]"
                    >
                      <Award size={10} />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Ivory Editorial Reader */}
            <div className="flex-1 p-6 sm:p-9 lg:p-10 overflow-y-auto flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-tech text-[10.5px] uppercase tracking-[0.22em] text-[#D80C20] mb-2.5 pr-8">
                  <UserCheck size={13} />
                  <span>EXECUTIVE PROFILE</span>
                  <span className="text-slate-300">/</span>
                  <span className="text-slate-500">{director.segments.join(' · ')}</span>
                </div>

                <h3 className="font-editorial font-bold text-2xl sm:text-3xl text-[#123EB7] leading-tight mb-4">
                  Leadership, Technical Vision &amp; Engineering Excellence
                </h3>

                <blockquote className="mb-6 pl-4 border-l-2 border-[#D80C20]">
                  <p className="font-editorial italic text-lg sm:text-xl text-[#10254D] leading-snug">
                    “{director.quote}”
                  </p>
                </blockquote>

                <div className="space-y-4 font-jakarta text-[14.5px] sm:text-[15px] leading-[1.82] text-slate-700">
                  {allParagraphs.map((para, idx) => (
                    <p
                      key={idx}
                      className={
                        idx === 0
                          ? 'first-letter:font-cinzel first-letter:font-bold first-letter:text-4xl first-letter:text-[#D80C20] first-letter:float-left first-letter:mr-2.5 first-letter:leading-[0.84]'
                          : ''
                      }
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-7 pt-5 border-t border-[#EAE4D7]">
                  <p className="font-tech text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2.5">
                    Areas of Expertise
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {director.expertise.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E4DEC9] font-jakarta text-xs font-medium text-[#081530]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Prev / Next Director Navigation */}
              <div className="mt-7 pt-4 border-t border-[#EAE4D7] flex items-center justify-between gap-3">
                <span className="font-tech text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Director {String(activeIndex + 1).padStart(2, '0')} of{' '}
                  {String(totalCount).padStart(2, '0')}
                </span>
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
        activeIndex={modalIndex ?? 0}
        totalCount={directors.length}
        isOpen={modalIndex !== null}
        onClose={handleClose}
        onStep={handleStep}
      />
    </section>
  );
}
