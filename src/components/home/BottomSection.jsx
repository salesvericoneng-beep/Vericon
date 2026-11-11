import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Award,
  MapPin,
  Briefcase,
  Building2,
  ArrowUpRight,
  BookOpen,
  X,
  CheckCircle2,
  Compass,
  Sparkles,
} from 'lucide-react';
import { directors } from '../../data/directors';

function DirectorGalleryCard({ director, isActive, index, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(director)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      aria-pressed={isActive}
      className={`group relative text-left rounded-2xl overflow-hidden transition-all duration-400 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
        isActive
          ? 'bg-[#081530] text-white shadow-[0_22px_50px_-12px_rgba(8,21,48,0.45)] -translate-y-1.5 ring-2 ring-[#081530]'
          : 'bg-white text-[#081530] shadow-sm hover:shadow-xl hover:-translate-y-1 border border-slate-200/90 hover:border-brand-blue/40'
      }`}
    >
      {/* Top Architectural Bar */}
      <div
        className={`h-1.5 w-full transition-colors duration-300 ${
          isActive
            ? 'bg-gradient-to-r from-[#D80C20] via-[#FF4D5E] to-[#123EB7]'
            : 'bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-[#123EB7] group-hover:to-[#D80C20]'
        }`}
      />

      {/* Portrait Frame */}
      <div className="relative aspect-[4/4.4] w-full overflow-hidden bg-slate-100">
        <img
          src={director.image}
          alt={`${director.name} — ${director.role}`}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle Bottom Vignette */}
        <div
          className={`absolute inset-x-0 bottom-0 h-2/5 pointer-events-none transition-opacity duration-300 ${
            isActive
              ? 'bg-gradient-to-t from-[#081530] via-[#081530]/40 to-transparent opacity-95'
              : 'bg-gradient-to-t from-[#081530]/75 via-[#081530]/15 to-transparent opacity-70 group-hover:opacity-90'
          }`}
        />

        {/* Top-Left Architectural Index Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span
            className={`px-2.5 py-1 rounded-md text-[10px] font-tech font-semibold tracking-[0.16em] uppercase backdrop-blur-md border ${
              isActive
                ? 'bg-[#081530]/85 text-white border-white/20'
                : 'bg-white/90 text-[#081530] border-slate-200/80'
            }`}
          >
            {director.code}
          </span>
        </div>

        {/* Top-Right Profile Availability Pill */}
        {director.hasFullProfile && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-tech font-medium tracking-wider uppercase bg-[#D80C20] text-white shadow-md">
              <Sparkles size={10} />
              Dossier
            </span>
          </div>
        )}

        {/* CAD Corner Crosshairs on Active Card */}
        {isActive && (
          <>
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#FF4D5E]/80 pointer-events-none" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#FF4D5E]/80 pointer-events-none" />
          </>
        )}
      </div>

      {/* Card Typographic Footer */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-3">
        <div>
          <p
            className={`font-display text-[11px] font-semibold uppercase tracking-[0.16em] mb-1 ${
              isActive
                ? 'text-[#FF6B79]'
                : director.hasFullProfile
                ? 'text-brand-red'
                : 'text-brand-blue'
            }`}
          >
            {director.role}
          </p>
          <h4
            className={`font-editorial font-bold text-lg sm:text-xl leading-snug tracking-wide ${
              isActive ? 'text-white' : 'text-[#081530]'
            }`}
          >
            {director.name}
          </h4>
          {director.educationSummary && (
            <p
              className={`font-jakarta text-[11.5px] mt-1.5 line-clamp-1 ${
                isActive ? 'text-blue-200/90' : 'text-slate-500'
              }`}
            >
              {director.educationSummary}
            </p>
          )}
        </div>

        <div
          className={`pt-2.5 border-t flex items-center justify-between text-[11px] font-tech uppercase tracking-[0.14em] ${
            isActive
              ? 'border-white/15 text-blue-200'
              : 'border-slate-100 text-slate-500 group-hover:text-brand-blue'
          }`}
        >
          <span>{isActive ? 'Active Dossier' : 'View Dossier'}</span>
          <ArrowUpRight
            size={14}
            className={`transition-transform duration-300 ${
              isActive ? 'text-[#FF6B79] rotate-45' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
            }`}
          />
        </div>
      </div>
    </motion.button>
  );
}

function DirectorDossierStage({
  director,
  activeChapter,
  onSelectChapter,
  onOpenModal,
}) {
  const allParagraphs = director.chapters
    ? director.chapters.flatMap((c) => c.paragraphs)
    : [];

  const visibleParagraphs =
    activeChapter === 'all'
      ? allParagraphs
      : director.chapters?.find((c) => c.id === activeChapter)?.paragraphs || [];

  return (
    <motion.div
      id="director-dossier"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mt-6 lg:mt-8"
    >
      {/* Subtle Connector Stem on Desktop */}
      <div className="hidden lg:flex justify-center">
        <div className="w-px h-6 bg-gradient-to-b from-[#081530] to-[#123EB7]" />
      </div>

      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#071124] via-[#0B1B3B] to-[#081329] text-white shadow-[0_30px_70px_-15px_rgba(7,17,36,0.5)] border border-white/10">
        {/* Faint Blueprint Overlay */}
        <div
          className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #93C5FD 1px, transparent 1px),
              linear-gradient(to bottom, #93C5FD 1px, transparent 1px)
            `,
            backgroundSize: '42px 42px',
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#123EB7]/25 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-[#D80C20]/20 rounded-full blur-[110px] pointer-events-none" />

        {/* Architectural Monogram Watermark */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute -top-6 right-8 font-editorial italic font-bold text-[220px] leading-none text-white/[0.028] select-none pointer-events-none"
        >
          {director.monogram}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={director.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {director.hasFullProfile ? (
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* LEFT RAIL: Executive Identity & Credentials */}
                <div className="lg:col-span-4 bg-white/[0.03] border-b lg:border-b-0 lg:border-r border-white/10 p-6 sm:p-8 flex flex-col justify-between gap-6">
                  <div>
                    {/* Sealed Monogram Crest & Index */}
                    <div className="flex items-center justify-between gap-3 pb-6 border-b border-white/10">
                      <div className="flex items-center gap-3.5">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#123EB7]/40 to-[#081530] border border-white/20 flex items-center justify-center shadow-inner relative">
                          <span className="font-editorial italic font-bold text-2xl text-white tracking-wider">
                            {director.monogram}
                          </span>
                          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#D80C20] border-2 border-[#081530]" />
                        </div>
                        <div>
                          <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#FF6B79] block">
                            {director.code}
                          </span>
                          <span className="font-display text-xs font-semibold text-blue-100/90">
                            Executive Board Member
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Key Stat Boxes */}
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-3.5">
                        <div className="flex items-center gap-1.5 text-blue-300 text-[10px] font-tech uppercase tracking-[0.14em] mb-1">
                          <Briefcase size={12} />
                          <span>Tenure</span>
                        </div>
                        <div className="font-editorial font-bold text-2xl sm:text-[26px] text-white leading-tight">
                          {director.experience}
                        </div>
                        <div className="font-jakarta text-[11px] text-slate-300 mt-0.5 leading-snug">
                          {director.experienceSubtitle}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-3.5">
                        <div className="flex items-center gap-1.5 text-[#FF6B79] text-[10px] font-tech uppercase tracking-[0.14em] mb-1">
                          <MapPin size={12} />
                          <span>Footprint</span>
                        </div>
                        <div className="font-editorial font-bold text-2xl sm:text-[26px] text-white leading-tight">
                          {director.region}
                        </div>
                        <div className="font-jakarta text-[11px] text-slate-300 mt-0.5 leading-snug">
                          {director.regionSubtitle}
                        </div>
                      </div>
                    </div>

                    {/* Academic Pedigree */}
                    <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#123EB7]/20 to-white/[0.02] border border-blue-400/20 p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-blue-300 text-[10px] font-tech uppercase tracking-[0.18em] mb-3">
                        <GraduationCap size={14} className="text-[#FF6B79]" />
                        <span>Academic Qualifications</span>
                      </div>
                      <ul className="space-y-2">
                        {director.education.map((deg) => (
                          <li
                            key={deg}
                            className="font-display text-sm font-semibold text-white flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B79] mt-2 shrink-0" />
                            <span>{deg}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="font-jakarta text-xs text-blue-200/80 mt-3 pt-3 border-t border-white/10 leading-relaxed">
                        {director.almaMater}
                      </p>
                    </div>
                  </div>

                  {/* Associations & Market Segments */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-blue-300 text-[10px] font-tech uppercase tracking-[0.18em] mb-2.5">
                        <Award size={13} className="text-[#FF6B79]" />
                        <span>Active Industry Memberships</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {director.memberships.map((org) => (
                          <span
                            key={org}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#D80C20]/15 border border-[#D80C20]/40 font-tech text-xs font-semibold tracking-wider text-white"
                          >
                            <CheckCircle2 size={12} className="text-[#FF6B79]" />
                            {org} Member
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-blue-300 text-[10px] font-tech uppercase tracking-[0.18em] mb-2">
                        <Building2 size={13} className="text-blue-400" />
                        <span>Engaged Industry Segments</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {director.segments.map((segment) => (
                          <span
                            key={segment}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 font-jakarta text-xs text-slate-200"
                          >
                            {segment}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT CANVAS: Editorial Nameplate, Quote, Narrative & Modal Trigger */}
                <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Top Action Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 font-tech text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-blue-200">
                        <Compass size={12} className="text-[#FF6B79]" />
                        Verified Executive Dossier
                      </span>

                      <button
                        type="button"
                        onClick={onOpenModal}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#081530] hover:bg-blue-50 font-display text-xs font-bold tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer"
                      >
                        <BookOpen size={14} className="text-[#D80C20]" />
                        <span>Read Complete Profile</span>
                      </button>
                    </div>

                    {/* Hero Executive Typography */}
                    <h3 className="font-editorial font-bold text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] tracking-[0.02em] text-white">
                      {director.name}
                    </h3>
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-display text-sm sm:text-base">
                      <span className="font-semibold text-[#FF6B79]">
                        {director.role}
                      </span>
                      <span className="text-white/30">|</span>
                      <span className="text-blue-100/90 font-medium">
                        {director.company}
                      </span>
                    </div>

                    {/* Signature Pull Quote */}
                    <blockquote className="my-6 pl-4 sm:pl-5 border-l-2 border-[#D80C20] bg-white/[0.02] py-2.5 pr-4 rounded-r-xl">
                      <p className="font-editorial italic font-medium text-xl sm:text-[23px] leading-snug text-blue-50/95">
                        “{director.quote}”
                      </p>
                    </blockquote>

                    {/* Interactive Chapter Switcher */}
                    <div className="flex flex-wrap items-center gap-2 mb-5 pb-4 border-b border-white/10">
                      {director.chapters.map((chapter) => {
                        const selected = activeChapter === chapter.id;
                        return (
                          <button
                            key={chapter.id}
                            type="button"
                            onClick={() => onSelectChapter(chapter.id)}
                            className={`px-3.5 py-2 rounded-xl font-tech text-[11px] tracking-wider uppercase transition-all cursor-pointer ${
                              selected
                                ? 'bg-[#D80C20] text-white shadow-md shadow-[#D80C20]/25 font-semibold'
                                : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] hover:text-white border border-white/10'
                            }`}
                          >
                            {chapter.shortLabel}
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => onSelectChapter('all')}
                        className={`px-3.5 py-2 rounded-xl font-tech text-[11px] tracking-wider uppercase transition-all cursor-pointer ${
                          activeChapter === 'all'
                            ? 'bg-white text-[#081530] font-semibold shadow-md'
                            : 'bg-white/[0.05] text-blue-200 hover:bg-white/[0.1] border border-blue-400/25'
                        }`}
                      >
                        View All
                      </button>
                    </div>

                    {/* Active Biography Paragraphs */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeChapter}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.22 }}
                        className="space-y-4 font-jakarta text-[15px] leading-[1.82] text-slate-200/95"
                      >
                        {visibleParagraphs.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Core Competencies Footer */}
                  <div className="mt-8 pt-5 border-t border-white/10">
                    <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-blue-300/80 block mb-2.5">
                      Core Expertise & Leadership Focus
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {director.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 font-jakarta text-xs font-medium text-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Graceful Executive Card for Directors awaiting detailed dossier */
              <div className="p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/20 shrink-0 shadow-lg">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#FF6B79] block mb-1">
                      {director.code} · {director.role}
                    </span>
                    <h3 className="font-editorial font-bold text-3xl sm:text-4xl text-white tracking-wide">
                      {director.name}
                    </h3>
                    <p className="font-display text-sm text-blue-200 mt-1">
                      {director.company}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/[0.05] border border-white/10 px-6 py-4 text-center md:text-right max-w-sm">
                  <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-blue-300 block mb-1">
                    Executive Leadership Board
                  </span>
                  <p className="font-jakarta text-sm text-slate-200 leading-relaxed">
                    Detailed executive profile and credentials dossier will be published here shortly.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
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
          className="fixed inset-0 z-50 bg-[#050D1D]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
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
          className="relative w-full max-w-5xl max-h-[90vh] bg-[#FAF9F5] text-[#081530] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/20"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close executive dossier"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-[#D80C20] text-[#081530] hover:text-white shadow-md border border-slate-200 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Left Midnight Column inside Modal */}
          <div className="lg:w-[36%] bg-[#081530] text-white p-6 sm:p-8 flex flex-col justify-between shrink-0 overflow-y-auto">
            <div>
              <div className="aspect-[4/4.3] w-full max-w-[260px] mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-white/15 mb-6 shadow-xl">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#FF6B79] block mb-1">
                {director.code} · {director.experience} Experience
              </span>
              <h4
                id="modal-director-name"
                className="font-editorial font-bold text-2xl sm:text-3xl text-white leading-tight"
              >
                {director.name}
              </h4>
              <p className="font-display text-xs sm:text-sm text-blue-200 mt-1.5">
                {director.role} | {director.company}
              </p>

              <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                <div className="font-tech text-[10px] uppercase tracking-[0.18em] text-blue-300">
                  Education & Alma Mater
                </div>
                {director.education.map((deg) => (
                  <p key={deg} className="font-jakarta text-xs font-medium text-white">
                    {deg}
                  </p>
                ))}
                <p className="font-jakarta text-xs text-slate-300 leading-relaxed">
                  {director.almaMater}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
              {director.memberships.map((org) => (
                <span
                  key={org}
                  className="px-3 py-1 rounded-lg bg-[#D80C20]/20 border border-[#D80C20]/40 font-tech text-[11px] font-semibold text-white"
                >
                  {org} Member
                </span>
              ))}
            </div>
          </div>

          {/* Right Alabaster Scrollable Editorial Reader */}
          <div className="flex-1 p-6 sm:p-10 lg:p-12 overflow-y-auto">
            <div className="flex items-center gap-2 font-tech text-[11px] uppercase tracking-[0.22em] text-brand-red mb-3">
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
                      ? 'first-letter:font-editorial first-letter:font-bold first-letter:text-5xl first-letter:text-[#D80C20] first-letter:float-left first-letter:mr-3 first-letter:leading-[0.82]'
                      : ''
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="font-tech text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-3">
                Areas of Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {director.expertise.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 font-jakarta text-xs font-medium text-[#081530]"
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

  const selectedDirector =
    directors.find((d) => d.id === selectedId) || directors[0];

  const handleSelectDirector = (director) => {
    setSelectedId(director.id);
    setActiveChapter('vision');
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      document
        .getElementById('director-dossier')
        ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF9F5] relative overflow-hidden">
      {/* Subtle Architectural Coordinates Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #081530 1px, transparent 1px),
            linear-gradient(to bottom, #081530 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-[1380px] relative z-10">
        {/* Top Architectural Metadata Hairline */}
        <div className="hidden sm:flex items-center justify-between border-b border-slate-300/70 pb-3 mb-10 font-tech text-[11px] uppercase tracking-[0.22em] text-slate-500">
          <span>VERICON ENGINEERING // BOARD OF DIRECTORS</span>
          <span>HYDERABAD · TELANGANA · ANDHRA PRADESH</span>
        </div>

        {/* Section Masthead */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#D80C20]" />
            <span className="font-tech text-brand-blue font-semibold uppercase tracking-[0.22em] text-[11px]">
              OUR LEADERSHIP
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-[54px] font-display font-bold text-[#081530] tracking-tight leading-[1.08] mb-5"
          >
            Meet Our{' '}
            <span className="font-editorial italic font-bold text-[#D80C20] text-[1.14em] tracking-normal">
              Directors
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="font-jakarta text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Visionary engineers and strategic business leaders steering VERICON Engineering&apos;s turnkey MEP excellence across commercial, industrial, and institutional infrastructure.
          </motion.p>

          {/* Dual-Tone Architectural Divider */}
          <div className="w-20 h-1 mx-auto mt-7 flex rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-[#D80C20]" />
            <div className="w-1/2 h-full bg-[#123EB7]" />
          </div>
        </div>

        {/* 4-Card Interactive Portrait Exhibition */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {directors.map((director, index) => (
            <DirectorGalleryCard
              key={director.id}
              director={director}
              index={index}
              isActive={director.id === selectedId}
              onSelect={handleSelectDirector}
            />
          ))}
        </div>

        {/* Connected Active Executive Dossier Stage */}
        <DirectorDossierStage
          director={selectedDirector}
          activeChapter={activeChapter}
          onSelectChapter={setActiveChapter}
          onOpenModal={() => setIsModalOpen(true)}
        />
      </div>

      {/* Full-Screen Editorial Bio Modal */}
      <DirectorProfileModal
        director={selectedDirector}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
