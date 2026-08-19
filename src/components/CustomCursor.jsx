import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

// Web Audio API Click Sound Synthesizer (Zero external dependencies, 100% instant & reliable)
function playClickSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Modern subtle crisp click sound
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.04);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3000, ctx.currentTime);

    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.045);

    setTimeout(() => {
      ctx.close();
    }, 100);
  } catch (err) {
    // Ignore audio autoplay policy restrictions if blocked
  }
}

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [visible, setVisible] = useState(false);

  // Mouse coords
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on non-touch devices
    const media = window.matchMedia('(pointer: fine)');
    setIsPointer(media.matches);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handleMouseDown = () => {
      setIsClicked(true);
      if (soundEnabled) {
        playClickSound();
      }
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    // Detect hoverable targets
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [soundEnabled, visible]);

  if (!isPointer) return null;

  return (
    <>
      {/* ── Custom Animated Cursor ── */}
      <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
        {/* Outer Follower Ring */}
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            width: isClicked ? 44 : isHovered ? 52 : 32,
            height: isClicked ? 44 : isHovered ? 52 : 32,
            borderColor: isHovered ? '#D80C20' : '#123EB7',
            backgroundColor: isHovered
              ? 'rgba(216, 12, 32, 0.08)'
              : 'rgba(18, 62, 183, 0.04)',
            scale: visible ? 1 : 0,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          className="fixed top-0 left-0 rounded-full border-2 border-solid shadow-[0_0_15px_rgba(18,62,183,0.3)] backdrop-blur-[0.5px]"
        />

        {/* Inner Pinpoint Dot */}
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: isClicked ? 1.6 : isHovered ? 1.4 : 1,
            backgroundColor: isHovered ? '#D80C20' : '#123EB7',
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.1 }}
          className="fixed top-0 left-0 w-2 h-2 rounded-full shadow-[0_0_8px_rgba(216,12,32,0.8)]"
        />
      </div>

      {/* ── Floating Sound Effect Toggle ── */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          onClick={() => setSoundEnabled((prev) => !prev)}
          title={soundEnabled ? 'Mute click sounds' : 'Enable click sounds'}
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md border transition-all duration-300 ${
            soundEnabled
              ? 'bg-[#050D1A]/90 text-white border-brand-blue/40 hover:border-brand-red shadow-brand-blue/20 hover:shadow-brand-red/30'
              : 'bg-gray-900/70 text-gray-400 border-gray-700 hover:text-white'
          }`}
        >
          {soundEnabled ? (
            <>
              <Volume2 size={14} className="text-brand-red animate-pulse" />
              <span className="hidden sm:inline text-[11px] tracking-wide">Sound ON</span>
            </>
          ) : (
            <>
              <VolumeX size={14} />
              <span className="hidden sm:inline text-[11px] tracking-wide">Sound OFF</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
