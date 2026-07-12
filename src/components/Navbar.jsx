import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = scrolled
    ? {
      width: '100%',
      maxWidth: '100%',
      top: '0',
      borderRadius: '0px',
      borderWidth: '0px 0px 4px 0px',
      transform: 'translateX(-50%)',
      left: '50%'
    }
    : {
      width: '90%',
      maxWidth: '1280px',
      top: '16px',
      borderRadius: '16px',
      borderWidth: '4px',
      transform: 'translateX(-50%)',
      left: '50%'
    };

  return (
    <nav
      className={`fixed z-50 border-on-surface bg-surface shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col transition-all duration-300 navbar-transition ${scrolled ? 'px-md py-xs' : 'px-md py-sm'
        }`}
      style={navStyle}
    >
      {/* Top Navbar Row */}
      <div className="w-full flex justify-between items-center">
        {/* Column 1: Left Navigation Links & Hamburger */}
        <div className="flex-grow flex-1 flex items-center justify-start">
          {/* Hamburger button on mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-[6px] border-2 border-on-surface bg-surface neo-shadow-hover rounded-md hover:bg-primary-container shrink-0 text-[20px] font-bold select-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex gap-md items-center">
            <a
              href="#contest"
              className="text-on-surface font-body-md text-[16px] hover:text-primary transition-colors duration-200"
            >
              Contest
            </a>
            <a
              href="#create"
              className="text-on-surface font-body-md text-[16px] hover:text-primary transition-colors duration-200"
            >
              Create
            </a>
            <a
              href="#spaces"
              className="text-on-surface font-body-md text-[16px] hover:text-primary transition-colors duration-200"
            >
              Spaces
            </a>
            <a
              href="#art"
              className="text-on-surface font-body-md text-[16px] hover:text-primary transition-colors duration-200"
            >
              Art
            </a>
            <a
              href="#faq"
              className="text-on-surface font-body-md text-[16px] hover:text-primary transition-colors duration-200"
            >
              FAQ
            </a>
          </div>
        </div>

        {/* Column 2: Absolute Center Typography Logo */}
        <div className="flex-initial flex items-center justify-center">
          <a
            href="#"
            className="font-h1 text-[24px] md:text-[28px] lowercase text-on-surface tracking-wider leading-none hover:text-primary transition-colors duration-200"
          >
            just t00ns
          </a>
        </div>

        {/* Column 3: Right Icons */}
        <div className="flex-grow flex-1 flex items-center justify-end">
          {/* Profile/Secondary Icon */}
          <img
            src="./logo.png"
            alt="just t00ns logo"
            className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full object-cover border-4 border-on-surface cursor-pointer hover:scale-105 transition-transform duration-200"
          />
        </div>
      </div>

      {/* Mobile Dropdown Panel: Clean Neo-Brutalist Solid BG */}
      {isOpen && (
        <div className="md:hidden w-full flex flex-col gap-sm border-t-2 border-on-surface mt-xs pt-sm animate-fade-in bg-surface">
          <a
            href="#contest"
            onClick={() => setIsOpen(false)}
            className="text-on-surface font-body-md text-[18px] py-xs hover:text-primary transition-colors duration-200 block border-b border-gray-100"
          >
            Contest
          </a>
          <a
            href="#create"
            onClick={() => setIsOpen(false)}
            className="text-on-surface font-body-md text-[18px] py-xs hover:text-primary transition-colors duration-200 block border-b border-gray-100"
          >
            Create
          </a>
          <a
            href="#spaces"
            onClick={() => setIsOpen(false)}
            className="text-on-surface font-body-md text-[18px] py-xs hover:text-primary transition-colors duration-200 block border-b border-gray-100"
          >
            Spaces
          </a>
          <a
            href="#art"
            onClick={() => setIsOpen(false)}
            className="text-on-surface font-body-md text-[18px] py-xs hover:text-primary transition-colors duration-200 block border-b border-gray-100"
          >
            Art
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="text-on-surface font-body-md text-[18px] py-xs hover:text-primary transition-colors duration-200 block"
          >
            FAQ
          </a>
        </div>
      )}
    </nav>
  );
}
