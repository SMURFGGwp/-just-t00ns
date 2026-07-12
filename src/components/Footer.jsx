import React from 'react';

export default function Footer() {
  const neoTextShadow = {
    color: '#fff',
    textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 4px 4px 0px #000'
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Gallery', href: '#art' },
    { label: 'Create', href: '#contest' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Terms', href: '#' },
    { label: 'Founder', href: '#team' }
  ];

  // Spacing variables to shift left/right positions. Modify these values to adjust horizontal padding!
  const spacingStyles = {
    paddingLeft: '12px',  // ADJUST THIS value to move links closer/further from the left edge of the screen
    paddingRight: '12px'  // ADJUST THIS value to move socials closer/further from the right edge of the screen
  };

  return (
    <footer
      className="w-full relative bg-cover bg-no-repeat mt-xl flex flex-col justify-between p-lg md:p-xl border-t-4 border-black"
      style={{
        backgroundImage: "url('/footerr.jpeg')",
        backgroundPosition: 'center bottom',
        minHeight: '460px'
      }}
    >
      {/* Top Content Bar */}
      <div
        className="w-full flex flex-col md:flex-row justify-between items-center gap-md z-20 pt-xs md:pt-sm"
        style={{
          paddingLeft: spacingStyles.paddingLeft,   /* Pushes links to the left edge */
          paddingRight: spacingStyles.paddingRight, /* Pushes socials to the right edge */
        }}
      >

        {/* Left Side: 2x3 Navigation Links Grid */}
        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[15px] justify-items-start">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-h3 text-h3 hover:scale-105 transition-transform"
              style={neoTextShadow}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Side: Title Logo and Social Media Links */}
        <div className="flex flex-col items-center md:items-end gap-sm">
          <h2
            className="font-h1 text-h1 text-[36px] tracking-wide"
            style={neoTextShadow}
          >
            JUST T00NS
          </h2>

          <div className="flex items-center gap-sm">
            <a
              href="https://x.com/just_t00ns"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[44px] h-[44px] rounded-full border-2 border-black bg-surface flex items-center justify-center neo-shadow neo-shadow-hover neo-shadow-active text-black hover:bg-primary-container shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px]">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/just-t00ns"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[44px] h-[44px] rounded-full border-2 border-black bg-surface flex items-center justify-center neo-shadow neo-shadow-hover neo-shadow-active text-black hover:bg-primary-container shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor" className="w-[22px] h-[22px]">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.43-5c.86-.63,1.7-1.29,2.5-2a75.46,75.46,0,0,0,72.77,0c.8.69,1.64,1.35,2.5,2a68.43,68.43,0,0,1-10.43,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129.07,47,122.9,24.16,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
              </svg>
            </a>
            <a
              href="https://memedepot.com/d/community-arts"
              target="_blank"
              rel="noopener noreferrer"
              className="px-md h-[44px] border-2 border-black bg-surface rounded-full flex items-center justify-center neo-shadow neo-shadow-hover neo-shadow-active text-black text-[13px] font-h3 hover:bg-primary-container shrink-0 transition-transform hover:scale-105"
            >
              MEME DEPOT
            </a>
          </div>
        </div>

      </div>

      {/* Middle/Bottom Buffer to ensure characters in center-bottom aren't covered */}
      <div className="flex-grow min-h-[160px]" />

      {/* Bottom Copyright Bar */}
      <div
        className="w-full flex flex-col sm:flex-row justify-between items-center gap-xs z-20 pb-xs md:pb-sm"
        style={{
          paddingLeft: spacingStyles.paddingLeft,   /* Pushes copyright left */
          paddingRight: spacingStyles.paddingRight, /* Pushes copyright right */
        }}
      >
        <p
          className="font-h3 text-[22px] md:text-[24px]"
          style={neoTextShadow}
        >
          © 2026 just t00ns
        </p>
      </div>

      {/* Subtle overlay gradient to ensure text readability on the edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/35 pointer-events-none z-10" />
    </footer>
  );
}
