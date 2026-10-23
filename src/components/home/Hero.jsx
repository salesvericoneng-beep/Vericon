import React, { useState, useEffect } from 'react';
import { ArrowRight, Settings, HardHat, RefreshCw, Zap, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    image: '/Home -Hero.png',
    cardTitle: 'Project',
    cardSubtitle: 'Engineering',
    icon: HardHat,
    color: 'text-brand-blue',
    borderColor: 'border-brand-blue',
    shadowColor: 'rgba(0,87,184,0.4)',
    lineColor: 'bg-brand-blue'
  },
  {
    image: '/images/heroes/annual_maintenance_hero.jpeg',
    cardTitle: 'Annual',
    cardSubtitle: 'Maintenance',
    icon: Settings,
    color: 'text-brand-blue',
    borderColor: 'border-brand-blue',
    shadowColor: 'rgba(0,87,184,0.4)',
    lineColor: 'bg-brand-blue'
  },
  {
    image: '/images/heroes/revamp_retrofit_hero.jpeg',
    cardTitle: 'Revamp &',
    cardSubtitle: 'Retrofits',
    icon: RefreshCw,
    color: 'text-green-700',
    borderColor: 'border-green-700',
    shadowColor: 'rgba(21,128,61,0.4)',
    lineColor: 'bg-green-700'
  },
  {
    image: '/images/heroes/energy_optimization_hero.jpeg',
    cardTitle: 'Energy',
    cardSubtitle: 'Optimization',
    icon: Zap,
    color: 'text-green-700',
    borderColor: 'border-green-700',
    shadowColor: 'rgba(21,128,61,0.4)',
    lineColor: 'bg-green-700'
  }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Preload all slide images on mount to eliminate loading lag
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Continuous auto-slide timer (resets cleanly when user interacts manually)
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 4500); // 4.5 seconds per slide
    return () => clearInterval(timer);
  }, [isAutoPlay, currentImageIndex]);

  // Manual navigation handlers
  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handleSelectSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleAutoPlay = (e) => {
    e?.stopPropagation();
    setIsAutoPlay((prev) => !prev);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Image Container */}
      <div className="relative w-full h-auto lg:h-[85vh] bg-slate-900 select-none overflow-hidden">
        {/* Seamless Stacked Crossfade Slides (Zero White Screen Flash) */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentImageIndex;
            return (
              <div
                key={slide.image}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Vericon Engineering - ${slide.cardTitle} ${slide.cardSubtitle}`}
                  className={`w-full h-full lg:object-cover lg:object-center object-contain block transition-transform duration-[6000ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}
        </div>

        {/* Invisible Spacer Image for Mobile Height Stability */}
        <img
          src={heroSlides[0].image}
          alt="Spacer"
          className="w-full h-auto opacity-0 lg:hidden pointer-events-none"
        />

        {/* Soft Left Overlay for Text Readability */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-white/90 via-white/60 to-transparent z-10 pointer-events-none"></div>

        {/* Floating Side Arrow for Desktop (Quick Manual Nav) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="hidden xl:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/70 hover:bg-white text-gray-800 hover:text-brand-blue shadow-lg backdrop-blur-sm transition-all hover:scale-110 cursor-pointer"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Content Container */}
        <div className="absolute inset-0 z-20 container mx-auto px-4 sm:px-8 lg:px-20 xl:px-24 pt-[80px] lg:pt-[110px]">
          {/* Left Column - Content */}
          <div className="w-[65%] sm:w-[55%] lg:w-1/2 h-full flex flex-col justify-center pb-[5%] lg:pb-0">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="font-extrabold font-poppins leading-[1.1] tracking-tight mb-[3%] lg:mb-4"
            >
              <span className="block text-brand-blue mb-[1%] lg:mb-2 text-[clamp(14px,3.5vw,60px)]">ENGINEERING</span>
              <span className="block text-brand-red mb-[1%] lg:mb-2 text-[clamp(14px,3.5vw,60px)]">EXCELLENCE</span>
              <span className="block text-gray-900 mt-[1%] lg:mt-2 text-[clamp(11px,2.5vw,48px)]">BUILT ON TRUST</span>
              <span className="block text-gray-900 text-[clamp(11px,2.5vw,48px)]">DRIVEN BY INNOVATION</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-gray-700 max-w-xl mb-[4%] lg:mb-8 font-medium text-[clamp(8px,1.5vw,18px)] leading-[1.3]"
            >
              Integrated MEP Solutions – Engineered for Performance, <br /> Reliability and Sustainability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-[clamp(4px,1vw,16px)] mb-[4%] lg:mb-8"
            >
              <Link to="/services" className="bg-brand-blue text-white rounded font-semibold flex items-center justify-center transition-colors px-[clamp(8px,2vw,32px)] py-[clamp(4px,1vw,12px)] text-[clamp(7px,1.2vw,16px)] gap-[clamp(2px,0.5vw,8px)] shadow-md hover:bg-blue-700">
                Explore our Solutions <ArrowRight className="w-[clamp(8px,1.5vw,18px)] h-[clamp(8px,1.5vw,18px)]" />
              </Link>
              <Link to="/contact" className="bg-white text-gray-800 border border-gray-300 rounded font-semibold flex items-center justify-center transition-colors px-[clamp(8px,2vw,32px)] py-[clamp(4px,1vw,12px)] text-[clamp(7px,1.2vw,16px)] gap-[clamp(2px,0.5vw,8px)] shadow-sm hover:bg-gray-50">
                Contact Us <ArrowRight className="w-[clamp(8px,1.5vw,18px)] h-[clamp(8px,1.5vw,18px)]" />
              </Link>
            </motion.div>

            {/* Slide Controller Bar (Both Auto & Manual) */}
            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/90 backdrop-blur-md px-3.5 py-1.5 sm:py-2 rounded-full border border-gray-200/90 shadow-md w-fit mt-1 z-30">
              {/* Play / Pause Toggle for Auto-slide */}
              <button
                type="button"
                onClick={toggleAutoPlay}
                title={isAutoPlay ? 'Click to Pause Auto-Slide' : 'Click to Resume Auto-Slide'}
                aria-label={isAutoPlay ? 'Pause Auto-slide' : 'Play Auto-slide'}
                className="p-1 rounded-full text-brand-blue hover:bg-brand-blue/10 transition-colors cursor-pointer flex items-center justify-center"
              >
                {isAutoPlay ? (
                  <Pause size={15} className="fill-brand-blue" />
                ) : (
                  <Play size={15} className="fill-brand-blue" />
                )}
              </button>

              <span className="w-[1px] h-3.5 bg-gray-300"></span>

              {/* Manual Prev Arrow */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Slide"
                title="Previous Slide"
                className="p-1 rounded-full text-gray-700 hover:text-brand-blue hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Manual Clickable Dots / Indicators */}
              <div className="flex items-center gap-1.5">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectSlide(idx)}
                    title={`Slide ${idx + 1}: ${slide.cardTitle} ${slide.cardSubtitle}`}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentImageIndex 
                        ? 'w-7 bg-brand-blue shadow-sm' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Manual Next Arrow */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Slide"
                title="Next Slide"
                className="p-1 rounded-full text-gray-700 hover:text-brand-blue hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>

              <span className="w-[1px] h-3.5 bg-gray-300"></span>

              {/* Live Status Badge */}
              <span className="text-[11px] font-semibold tracking-wide select-none">
                {isAutoPlay ? (
                  <span className="text-emerald-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse"></span>
                    Auto
                  </span>
                ) : (
                  <span className="text-gray-500">Manual</span>
                )}
              </span>
            </div>
          </div>

          {/* Right Side - Interactive Stack of 4 Cards (Synced with Slideshow + Clickable Manual Nav) */}
          <div className="hidden lg:flex flex-col gap-4 absolute right-6 md:right-12 lg:right-20 xl:right-24 top-1/2 -translate-y-1/2 z-20">
            {heroSlides.map((slide, idx) => {
              const Icon = slide.icon;
              const isActive = idx === currentImageIndex;
              return (
                <motion.div
                  key={idx}
                  onClick={() => handleSelectSlide(idx)}
                  title={`Click to view ${slide.cardTitle} ${slide.cardSubtitle}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className={`bg-white/95 backdrop-blur-md rounded-xl p-5 border-2 flex items-center gap-5 w-64 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? `-translate-x-3 shadow-xl ${slide.borderColor} ring-2 ring-brand-blue/20 scale-[1.02]`
                      : 'border-white/80 hover:-translate-x-1 shadow-md hover:border-gray-200 opacity-90 hover:opacity-100'
                  }`}
                  style={isActive ? { boxShadow: `0 12px 30px -5px ${slide.shadowColor}` } : {}}
                >
                  <div className={`${slide.color} shrink-0`}>
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-bold ${slide.color} text-[17px] leading-tight`}>{slide.cardTitle}</span>
                    <span className="font-bold text-gray-800 text-[17px] leading-tight mb-2">{slide.cardSubtitle}</span>
                    <div className={`h-[2px] transition-all duration-300 ${isActive ? `w-12 ${slide.lineColor}` : 'w-8 bg-gray-200'}`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
