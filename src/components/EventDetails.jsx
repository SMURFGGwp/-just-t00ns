import React from 'react';

export default function EventDetails() {
  return (
    <section id="contest" className="px-md py-xl max-w-7xl mx-auto">
      <h2 className="font-h1 text-h1 text-center mt-xl mb-md uppercase">ACTIVE CONTEST</h2>
      <div
        className="text-on-surface p-lg border-4 border-on-surface neo-shadow relative mt-[100px] flex items-center min-h-[220px]"
        style={{
          backgroundColor: '#E4B373',
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(139,90,43,0.1) 0px, rgba(139,90,43,0.1) 6px, transparent 6px, transparent 20px), linear-gradient(to right, rgba(0,0,0,0.04), rgba(255,255,255,0.04))',
          borderRadius: '12px'
        }}
      >
        {/* Hammered Corner Nails */}
        <div className="absolute top-[12px] left-[12px] w-[12px] h-[12px] rounded-full bg-[#555] border border-[#333] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_0px_rgba(255,255,255,0.4)] z-[3]"></div>
        <div className="absolute top-[12px] right-[12px] w-[12px] h-[12px] rounded-full bg-[#555] border border-[#333] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_0px_rgba(255,255,255,0.4)] z-[3]"></div>
        <div className="absolute bottom-[12px] left-[12px] w-[12px] h-[12px] rounded-full bg-[#555] border border-[#333] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_0px_rgba(255,255,255,0.4)] z-[3]"></div>
        <div className="absolute bottom-[12px] right-[12px] w-[12px] h-[12px] rounded-full bg-[#555] border border-[#333] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_0px_rgba(255,255,255,0.4)] z-[3]"></div>

        <img src="./toon2.png" alt="Resting toon" className="resting-toon" />
        <div
          className="w-full text-center px-4 md:pl-[clamp(100px,12vw,160px)] md:pr-[100px]"
          style={{
            position: 'relative',
            zIndex: '2'
          }}
        >
          <p
            className="font-h2 text-center"
            style={{
              fontSize: 'clamp(1.4rem, 2.4vw, 2.2rem)',
              lineHeight: '1.4',
              margin: '0 auto',
              color: '#1a1c1b'
            }}
          >
            art contest is now live on discord.
            <br />
            follow the instructions on discord. 30 gtds and fcfs to win.
            <br />
            72 hours. just be t00ns about it.
          </p>
        </div>
      </div>
    </section>
  );
}
