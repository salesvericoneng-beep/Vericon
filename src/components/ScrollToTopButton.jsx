import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-[9998]">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center p-3 rounded-full bg-brand-blue text-white shadow-lg hover:bg-brand-red hover:shadow-xl transition-all duration-300 animate-fade-in-up"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>
      )}
    </>
  );
}
