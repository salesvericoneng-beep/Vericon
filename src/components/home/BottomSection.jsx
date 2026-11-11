import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Award,
  MapPin,
  BookOpen,
  X,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { directors } from '../../data/directors';

const SLIDE_DURATION_MS = 10000;

function BoardDockCard({ director, isActive, progressPct, isAutoPlay, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(director)}
      aria-pressed={isActive}
      className={`group relative text-left rounded-2xl p-3 sm:p-4 overflow-hidden transition-all duration-300 flex items-center gap-3.5 border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#123EB7] ${
        isActive
          ? 'bg-[#081224] text-white border-[#081224] shadow-[0_18px_38px_-12px_rgba(8,18,36,0.45)] -translate-y-0.5'
          : 'bg-white/95 hover:bg-white text-[#081530] border-[#E5DEC9] hover:border-[#123EB7]/40 hover:shadow-md'
      }`}
    >
      {/* Active Crimson Indicator Accent */}
      <span
        className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-colors duration-300 ${
          isActive ? 'bg-[#D80C20]' : 'bg-transparent group-hover:bg-[#123EB7]/50'
        }`}
      />

      {/* Director Portrait Thumbnail */}
      <div
        className={`w-12 h-14 sm:w-14 sm:h-16 rounded-xl overflow-hidden shrink-0 border transition-all duration-300 ${
          isActive
            ? 'border-[#C9A86A]/60 shadow-md'
            : 'border-slate-200 group-hover:border-[#123EB7]/40'
        }`}
      >
        <img
          src={director.image}
          alt={director.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Director Metadata */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-1.5 mb-0.5">
          <span
            className={`font-tech text-[10px] tracking-[0.16em] uppercase ${
              isActive ? 'text-[#E5B973]' : 'text-[#D80C20]'
            }`}
          >
            {director.code}
          </span>
          {director.hasFullProfile && (
            <span
              className={`inline-flex items-center gap-0.5 text-[9px] font-tech uppercase tracking-wider px-1.5 py-0.5 rounded ${
                isActive
                  ? 'bg-[#D80C20] text-white'
                  : 'bg-[#FAF5EB] text-[#9A7432] border border-[#E5DEC9]'
              }`}
            >
              <Sparkles size={8} />
              Bio
            </span>
          )}
        </div>

        <h4
          className={`font-cinzel font-bold text-xs sm:text-[13.5px] leading-snug truncate ${
            isActive ? 'text-white' : 'text-[#081530]'
          }`}
        >
          {director.name}
        </h4>

        <p
          className={`font-jakarta text-[11px] truncate mt-0.5 ${
            isActive ? 'text-blue-200/85' : 'text-slate-500'
          }`}
        >
          {director.role}
        </p>
      </div>

      <ArrowUpRight
        size={15}
        className={`hidden sm:block shrink-0 transition-transform duration-300 ${
          isActive
            ? 'text-[#E5B973] rotate-45'
            : 'text-slate-400 group-hover:text-[#123EB7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
        }`}
      />

      {/* 10-Second Auto-Slide Progress Bar on Active Card */}
      {isActive && isAutoPlay && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10"
        >
          <span
            className="block h-full bg-gradient-to-r from-[#D80C20] to-[#E5B973] transition-[width] duration-100 ease-linear"
            style={{ width: `${progressPct}%` }}
          />
        </span>
      )}
    </button>
  );
}

function DirectorProfileModal({ director, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const allParagraphs = director?.chapters
    ? director.chapters.flatMap((c) => c.paragraphs)
    : [];

  return (
    <AnimatePresence>
      {isOpen && director && director.hasFullProfile && (
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
              aria-label="Close executive dossier"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white hover:bg-[#D80C20] text-[#081530] hover:text-white shadow-md border border-slate-200 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Left Obsidian Portrait Column */}
            <div className="lg:w-[37%] bg-[#081224] text-white p-6 sm:p-8 flex flex-col justify-between shrink-0 overflow-y-auto">
              <div>
                <div className="rounded-t-[90px] rounded-b-2xl overflow-hidden border border-[#C9A86A]/40 max-w-[260px] mx-auto lg:max-w-none aspect-[4/4.4] mb-6 shadow-xl">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <span className="font-tech text-[10px] uppercase tracking-[0.22em] text-[#E5B973] block mb-1.5">
                  {director.code} · {director.experience} Experience
                </span>
                <h4
                  id="modal-director-name"
                  className="font-cinzel font-bold text-2xl sm:text-[26px] text-white leading-snug tracking-wide"
                >
                  {director.name}
                </h4>
                <p className="font-display text-xs sm:text-sm text-blue-200/90 mt-1.5">
                  {director.role} | {director.company}
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                  <div className="font-tech text-[10px] uppercase tracking-[0.18em] text-[#E5B973]">
                    Education &amp; Alma Mater
                  </div>
                  {director.education.map((deg) => (
                    <p
                      key={deg}
                      className="font-jakarta text-xs font-medium text-white"
                    >
                      {deg}
                    </p>
                  ))}
                  <p className="font-jakarta text-xs text-slate-300 leading-relaxed pt-1">
                    {director.almaMater}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                {director.memberships.map((org) => (
                  <span
                    key={org}
                    className="px-3 py-1 rounded-full bg-white/[0.06] border border-[#C9A86A]/40 font-tech text-[11px] font-medium text-[#F3D8A4]"
                  >
                    {org} Member
                  </span>
                ))}
              </div>
            </div>

            {/* Right Ivory Editorial Reader */}
            <div className="flex-1 p-6 sm:p-10 lg:p-12 overflow-y-auto">
              <div className="flex items-center gap-2 font-tech text-[11px] uppercase tracking-[0.22em] text-[#D80C20] mb-3">
                <span>EXECUTIVE BIOGRAPHY</span>
                <span className="text-slate-300">/</span>
                <span className="text-slate-500">{director.regionSubtitle}</span>
              </div>

              <h3 className="font-editorial font-bold text-3xl sm:text-4xl text-[#081530] leading-tight mb-5">
                Leadership, Commercial Strategy &amp; Engineering Excellence
              </h3>

              <blockquote className="mb-7 pl-4 border-l-2 border-[#D80C20]">
                <p className="font-editorial italic text-xl sm:text-2xl text-[#123EB7] leading-snug">
                  “{director.quote}”
                </p>
              </blockquote>

              <div className="space-y-5 font-jakarta text-[15.5px] leading-[1.85] text-slate-700">
                {allParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? 'first-letter:font-cinzel first-letter:font-bold first-letter:text-5xl first-letter:text-[#D80C20] first-letter:float-left first-letter:mr-3 first-letter:leading-[0.82]'
                        : ''
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#EAE4D7]">
                <p className="font-tech text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-3">
                  Areas of Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {director.expertise.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full bg-[#F4F1EA] border border-[#E4DEC9] font-jakarta text-xs font-medium text-[#081530]"
                    >
                      {item}
                    </span>
                  ))}
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
  const [selectedId, setSelectedId] = useState(directors[0].id);
  const [activeChapter, setActiveChapter] = useState('vision');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);

  const selectedIndex = directors.findIndex((d) => d.id === selectedId);
  const selectedDirector =
    selectedIndex >= 0 ? directors[selectedIndex] : directors[0];

  const handleSelectDirector = (director) => {
    setSelectedId(director.id);
    setActiveChapter('vision');
    setElapsedMs(0);
  };

  const handleStep = (delta) => {
    const currentIdx = selectedIndex >= 0 ? selectedIndex : 0;
    const nextIdx = (currentIdx + delta + directors.length) % directors.length;
    handleSelectDirector(directors[nextIdx]);
  };

  const handleSelectChapter = (chapterId) => {
    setActiveChapter(chapterId);
    setElapsedMs(0);
  };

  useEffect(() => {
    if (!isAutoPlay || isHovered || isModalOpen) return undefined;

    const tick = 100;
    const timer = setInterval(() => {
      setElapsedMs((prev) => prev + tick);
    }, tick);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, isModalOpen]);

  useEffect(() => {
    if (elapsedMs < SLIDE_DURATION_MS) return;
    setSelectedId((currId) => {
      const idx = directors.findIndex((d) => d.id === currId);
      const next = directors[(idx + 1) % directors.length];
      return next.id;
    });
    setActiveChapter('vision');
    setElapsedMs(0);
  }, [elapsedMs]);

  const progressPct = Math.min(100, (elapsedMs / SLIDE_DURATION_MS) * 100);
  const remainingSec = Math.max(
    1,
    Math.ceil((SLIDE_DURATION_MS - elapsedMs) / 1000)
  );

  const allParagraphs = selectedDirector.chapters
    ? selectedDirector.chapters.flatMap((c) => c.paragraphs)
    : [];

  const visibleParagraphs =
    activeChapter === 'all'
      ? allParagraphs
      : selectedDirector.chapters?.find((c) => c.id === activeChapter)
          ?.paragraphs || [];

  return (
    <section className="py-20 md:py-28 bg-[#F4F1EA] relative overflow-hidden">
      {/* Subtle Organic Radial Accents (Distinct from Grid Sections) */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#C9A86A]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full bg-[#123EB7]/8 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-[1360px] relative z-10">
        {/* Editorial Masthead Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#DED6C4]">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-[#D80C20]" />
              <span className="font-tech text-[#123EB7] font-semibold uppercase tracking-[0.24em] text-[11px]">
                OUR LEADERSHIP
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-[56px] font-display font-bold text-[#081530] tracking-tight leading-[1.04]">
              Meet Our{' '}
              <span className="font-editorial italic font-bold text-[#D80C20] text-[1.14em] tracking-normal">
                Directors
              </span>
            </h2>
          </div>

          <p className="font-jakarta text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-md md:text-right">
            Leadership combining deep mechanical &amp; MEP engineering discipline with market vision across Telangana &amp; Andhra Pradesh.
          </p>
        </div>

        {/* MONUMENTAL TWO-PAGE MAGAZINE SPREAD */}
        <div
          id="director-dossier"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="rounded-[2rem] overflow-hidden bg-[#FFFDF9] border border-[#E4DEC9] shadow-[0_32px_80px_-22px_rgba(8,21,48,0.22)]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDirector.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 lg:grid-cols-12"
            >
              {/* LEFT WING: OBSIDIAN SCULPTED PORTRAIT ARCH + CREDENTIALS */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#081224] via-[#0B1933] to-[#071020] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
                {/* Ambient warm spotlight inside dark portrait wing */}
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#C9A86A]/15 blur-[90px] pointer-events-none" />
                <div className="absolute -bottom-24 -right-20 w-72 h-72 rounded-full bg-[#D80C20]/15 blur-[100px] pointer-events-none" />

                {/* Top Wing Index Bar */}
                <div className="relative z-10 flex items-center justify-between gap-2 mb-6">
                  <span className="font-tech text-[11px] uppercase tracking-[0.24em] text-[#E5B973]">
                    {selectedDirector.code}
                  </span>
                  <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-slate-300/80 border border-white/15 px-2.5 py-1 rounded-full">
                    Executive Board
                  </span>
                </div>

                {/* PROMINENT SCULPTED ARCH PORTRAIT */}
                <div className="relative z-10 mx-auto w-full max-w-[340px] lg:max-w-none">
                  {/* Subtle Gold Offset Arch Frame */}
                  <div className="relative p-2 rounded-t-[130px] rounded-b-2xl border border-[#C9A86A]/35 bg-white/[0.02]">
                    <div className="relative aspect-[3/3.65] rounded-t-[122px] rounded-b-xl overflow-hidden bg-slate-900 shadow-2xl">
                      <img
                        src={selectedDirector.image}
                        alt={`${selectedDirector.name} — ${selectedDirector.role}`}
                        className="w-full h-full object-cover object-top"
                      />

                      {/* Clean Bottom-Only Gradient for Caption Contrast (never covers face) */}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#060E1D] via-[#060E1D]/65 to-transparent pointer-events-none" />

                      {/* Overlaid Editorial Number & Tenure Tag */}
                      <div className="absolute bottom-3.5 inset-x-4 flex items-end justify-between gap-2">
                        <div>
                          <span className="font-editorial italic text-4xl font-bold text-white/90 leading-none block">
                            {selectedDirector.number}
                          </span>
                        </div>
                        {selectedDirector.hasFullProfile && (
                          <span className="px-3 py-1 rounded-full bg-[#D80C20] text-white font-tech text-[10px] font-semibold uppercase tracking-[0.16em] shadow-lg">
                            {selectedDirector.experience} Exp
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hairline Academic & Affiliation Ledger Below Photo */}
                {selectedDirector.hasFullProfile ? (
                  <div className="relative z-10 mt-7 pt-6 border-t border-white/12 space-y-5">
                    <div>
                      <div className="flex items-center gap-2 font-tech text-[10px] uppercase tracking-[0.2em] text-[#E5B973] mb-2.5">
                        <GraduationCap size={14} />
                        <span>Academic Pedigree</span>
                      </div>
                      <ul className="space-y-1.5">
                        {selectedDirector.education.map((deg) => (
                          <li
                            key={deg}
                            className="font-jakarta text-[13px] font-medium text-white flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D80C20] mt-1.5 shrink-0" />
                            <span>{deg}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="font-jakarta text-xs text-blue-200/80 mt-2 pl-3.5 leading-relaxed">
                        {selectedDirector.almaMater}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 text-xs font-jakarta text-slate-200">
                        <MapPin size={14} className="text-[#D80C20] shrink-0" />
                        <span>{selectedDirector.regionSubtitle}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {selectedDirector.memberships.map((org) => (
                          <span
                            key={org}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-[#C9A86A]/45 bg-[#C9A86A]/10 font-tech text-[10px] font-semibold tracking-wider text-[#F5DDB0]"
                          >
                            <Award size={11} />
                            {org}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 mt-7 pt-5 border-t border-white/12 text-center">
                    <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#E5B973]">
                      {selectedDirector.role} · {selectedDirector.company}
                    </span>
                  </div>
                )}
              </div>

              {/* RIGHT WING: WARM IVORY MAGAZINE MANUSCRIPT SPREAD */}
              <div className="lg:col-span-7 bg-[#FFFDF9] text-[#081530] p-7 sm:p-10 lg:p-12 flex flex-col justify-between relative">
                {/* Watermark Monogram */}
                <span
                  aria-hidden="true"
                  className="hidden sm:block absolute top-4 right-8 font-editorial italic font-bold text-[150px] leading-none text-[#081530]/[0.03] select-none pointer-events-none"
                >
                  {selectedDirector.monogram}
                </span>

                {selectedDirector.hasFullProfile ? (
                  <>
                    <div className="relative z-10">
                      {/* Top Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-[2px] bg-[#D80C20]" />
                          <span className="font-tech text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D80C20]">
                            {selectedDirector.role}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setIsModalOpen(true)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#081224] hover:bg-[#123EB7] text-white font-display text-xs font-semibold tracking-wide transition-colors shadow-sm cursor-pointer"
                        >
                          <BookOpen size={13} />
                          <span>Full Profile View</span>
                        </button>
                      </div>

                      {/* Chiselled Monumental Display Name */}
                      <h3 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#081530] tracking-[0.04em] leading-[1.12]">
                        {selectedDirector.name}
                      </h3>

                      <p className="font-display text-sm sm:text-[15px] font-medium text-slate-600 mt-2">
                        {selectedDirector.company}
                        <span className="mx-2 text-[#C9A86A]">•</span>
                        <span className="text-[#123EB7] font-semibold">
                          {selectedDirector.segments.join(' · ')}
                        </span>
                      </p>

                      {/* Editorial Pull Quote with Top/Bottom Hairlines */}
                      <blockquote className="my-6 py-5 border-y border-[#EAE4D7] flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="font-editorial font-bold text-5xl leading-[0.8] text-[#D80C20] select-none pt-1"
                        >
                          “
                        </span>
                        <p className="font-editorial italic font-semibold text-xl sm:text-[23px] leading-[1.38] text-[#10254D]">
                          {selectedDirector.quote}”
                        </p>
                      </blockquote>

                      {/* Editorial Underline Chapter Navigation */}
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[#EAE4D7] mb-6">
                        {selectedDirector.chapters.map((chapter) => {
                          const selected = activeChapter === chapter.id;
                          return (
                            <button
                              key={chapter.id}
                              type="button"
                              onClick={() => handleSelectChapter(chapter.id)}
                              className={`pb-3 -mb-px font-display text-xs sm:text-[13px] tracking-wide transition-all cursor-pointer border-b-2 ${
                                selected
                                  ? 'border-[#D80C20] text-[#081530] font-bold'
                                  : 'border-transparent text-slate-500 hover:text-[#081530] font-medium'
                              }`}
                            >
                              {chapter.shortLabel}
                            </button>
                          );
                        })}
                        <button
                          type="button"
                          onClick={() => handleSelectChapter('all')}
                          className={`pb-3 -mb-px font-tech text-[11px] uppercase tracking-wider transition-all cursor-pointer border-b-2 ${
                            activeChapter === 'all'
                              ? 'border-[#123EB7] text-[#123EB7] font-semibold'
                              : 'border-transparent text-slate-500 hover:text-[#123EB7]'
                          }`}
                        >
                          Complete Bio
                        </button>
                      </div>

                      {/* Clean Prose Body */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeChapter}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4 font-jakarta text-[15px] sm:text-[15.5px] leading-[1.85] text-slate-700"
                        >
                          {visibleParagraphs.map((paragraph, idx) => (
                            <p
                              key={idx}
                              className={
                                idx === 0
                                  ? 'first-letter:font-cinzel first-letter:font-bold first-letter:text-4xl first-letter:text-[#D80C20] first-letter:float-left first-letter:mr-2.5 first-letter:leading-[0.86]'
                                  : ''
                              }
                            >
                              {paragraph}
                            </p>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Expertise Footer */}
                    <div className="relative z-10 mt-8 pt-6 border-t border-[#EAE4D7]">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <span className="font-tech text-[10px] uppercase tracking-[0.22em] text-slate-500">
                          Core Expertise &amp; Industry Scope
                        </span>
                        <span className="inline-flex items-center gap-1 font-tech text-[10px] uppercase tracking-wider text-emerald-700">
                          <CheckCircle2 size={12} />
                          Verified Executive Dossier
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedDirector.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-[#F4F1EA] border border-[#E4DEC9] font-jakarta text-xs font-medium text-[#081530]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Dignified Editorial Placeholder when selecting other directors */
                  <div className="relative z-10 flex-1 flex flex-col justify-center py-8">
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="w-7 h-[2px] bg-[#123EB7]" />
                      <span className="font-tech text-[11px] font-semibold uppercase tracking-[0.22em] text-[#123EB7]">
                        {selectedDirector.code} · {selectedDirector.role}
                      </span>
                    </div>

                    <h3 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#081530] tracking-[0.04em] leading-tight">
                      {selectedDirector.name}
                    </h3>

                    <p className="font-display text-base text-slate-600 mt-2.5">
                      {selectedDirector.company}
                    </p>

                    <div className="mt-8 p-6 rounded-2xl bg-[#F4F1EA] border border-[#E4DEC9]">
                      <p className="font-editorial italic text-xl text-[#081530] mb-2">
                        Executive Dossier Coming Soon
                      </p>
                      <p className="font-jakarta text-sm text-slate-600 leading-relaxed">
                        Detailed credentials, engineering background, and leadership biography for{' '}
                        <span className="font-semibold text-[#081530]">
                          {selectedDirector.name}
                        </span>{' '}
                        are being curated for this executive showcase.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOARD OF DIRECTORS INTERACTIVE SELECTOR DOCK */}
        <div className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3 px-1">
            <span className="font-tech text-[10.5px] uppercase tracking-[0.22em] text-slate-500">
              Board of Directors · Select Member
            </span>

            {/* Auto-Slide 10s + Step Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleStep(-1)}
                aria-label="Previous director"
                className="w-8 h-8 rounded-full bg-white hover:bg-[#081224] text-[#081530] hover:text-white border border-[#E5DEC9] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
              >
                <ChevronLeft size={15} />
              </button>

              <button
                type="button"
                onClick={() => setIsAutoPlay((prev) => !prev)}
                aria-pressed={isAutoPlay}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border font-tech text-[10.5px] uppercase tracking-[0.14em] transition-all cursor-pointer ${
                  isAutoPlay
                    ? 'bg-[#081224] text-white border-[#081224] shadow-xs'
                    : 'bg-white text-slate-600 border-[#E5DEC9] hover:text-[#081530]'
                }`}
              >
                {isAutoPlay ? (
                  <>
                    <Pause size={11} className="text-[#E5B973]" />
                    <span>
                      {isHovered || isModalOpen
                        ? 'Paused · 10s'
                        : `Auto · ${String(remainingSec).padStart(2, '0')}s`}
                    </span>
                  </>
                ) : (
                  <>
                    <Play size={11} className="text-[#D80C20]" />
                    <span>Auto Slide Off</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => handleStep(1)}
                aria-label="Next director"
                className="w-8 h-8 rounded-full bg-white hover:bg-[#081224] text-[#081530] hover:text-white border border-[#E5DEC9] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {directors.map((director) => (
              <BoardDockCard
                key={director.id}
                director={director}
                isActive={director.id === selectedId}
                progressPct={progressPct}
                isAutoPlay={isAutoPlay}
                onSelect={handleSelectDirector}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Reading Modal */}
      <DirectorProfileModal
        director={selectedDirector}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
