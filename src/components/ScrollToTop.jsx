import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-[50px] h-[50px] bg-secondary-container text-on-surface border-4 border-black rounded-full flex items-center justify-center neo-shadow neo-shadow-hover neo-shadow-active text-[28px] font-bold select-none cursor-pointer transition-transform hover:scale-105"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
