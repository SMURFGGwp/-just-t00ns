import React from 'react';

export default function Hero() {
  return (
    <header className="min-h-screen flex flex-col md:flex-row border-b-4 border-on-surface">
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
            <button className="bg-primary-container text-on-primary-container px-[40px] py-[14px] border-4 border-on-surface neo-shadow neo-shadow-hover neo-shadow-active font-h3 text-[26px]">
              Join Discord
            </button>
            <button className="bg-surface-container-lowest text-on-surface px-[40px] py-[14px] border-4 border-on-surface neo-shadow neo-shadow-hover neo-shadow-active font-h3 text-[26px]">
              Follow on X
            </button>
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
