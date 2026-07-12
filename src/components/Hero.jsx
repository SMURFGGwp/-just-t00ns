import React from 'react';

export default function Hero() {
  return (
    <header className="min-h-screen flex flex-col md:flex-row border-b-4 border-on-surface relative">
      {/* Floating Contest Starburst Badge */}
      <a
        href="#contest"
        className="absolute top-28 right-4 md:top-32 md:right-24 z-30 transition-transform duration-200 hover:scale-110 hover:rotate-3 flex items-center justify-center cursor-pointer select-none"
      >
        <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
          <svg 
            viewBox="0 0 100 100" 
            className="absolute inset-0 w-full h-full drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            <polygon
              points="50,2 62,17 80,10 82,30 98,34 89,50 98,66 82,70 80,90 62,83 50,98 38,83 20,90 18,70 2,66 11,50 2,34 18,30 20,10 38,17"
              fill="#d85756"
              stroke="black"
              strokeWidth="3.5"
              strokeLinejoin="miter"
            />
          </svg>
          <span 
            className="absolute text-black font-h3 font-extrabold text-[13px] md:text-[18px] text-center uppercase tracking-wider leading-tight -rotate-12 select-none pointer-events-none"
            style={{ textShadow: '1px 1px 0px rgba(255, 255, 255, 0.4)' }}
          >
            CONTEST
            <br />
            LIVE!
          </span>
        </div>
      </a>

      <div className="md:w-[40%] bg-primary-container relative min-h-[50vh] md:min-h-screen flex items-end overflow-hidden">
        <img
          src="./fgdfg.png"
          className="w-full h-auto object-contain object-bottom"
          alt="A whimsical blue clay-like character standing firmly at the bottom of a sky blue background"
        />
      </div>
      <div className="md:w-[60%] bg-puzzle-texture flex flex-col justify-between px-lg pt-[12rem] md:pt-[16rem] pb-xl items-start overflow-y-auto h-full">
        {/* Text Block Group */}
        <div className="flex flex-col gap-[1.5rem] items-start w-full">
          <div className="bg-secondary-container text-on-secondary-container px-[24px] py-[12px] border-4 border-on-surface neo-shadow font-label-bold text-[20px] uppercase animate-drop-badge">
            MINTING SOON
          </div>
          <h1
            className="font-h1 text-on-surface animate-drop-heading"
            style={{ fontSize: 'clamp(3.5rem, 6vw, 6.5rem)', lineHeight: '1' }}
          >
            just t00ns
          </h1>
          <p className="font-h2 text-h2 text-on-surface-variant animate-drop-subtext">internet magic jpegs</p>
          <div className="flex flex-wrap gap-md animate-drop-buttons">
            <a 
              href="https://discord.com/invite/EKXVpsbQs8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-primary-container text-on-primary-container px-[40px] py-[14px] border-4 border-on-surface neo-shadow neo-shadow-hover neo-shadow-active font-h3 text-[26px]">
                Join Discord
              </button>
            </a>
            <a 
              href="https://x.com/just_t00ns" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-surface-container-lowest text-on-surface px-[40px] py-[14px] border-4 border-on-surface neo-shadow neo-shadow-hover neo-shadow-active font-h3 text-[26px]">
                Follow on X
              </button>
            </a>
          </div>
        </div>

        {/* Stretched 2x2 Showcase Image Grid */}
        <div className="hero-showcase-grid gap-md animate-drop-grid mt-[6rem] md:mt-[8rem]">
          {[
            './hero-art1.jpeg',
            './hero-art2.jpeg',
            './hero-art3.jpeg',
            './hero-art4.jpeg',
          ].map((src, idx) => (
            <div
              key={idx}
              className="border-4 border-on-surface neo-shadow overflow-hidden bg-surface-container w-full h-full"
            >
              <img
                src={src}
                alt={`Hero Art ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
