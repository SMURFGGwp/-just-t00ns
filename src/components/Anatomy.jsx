import React, { useState } from 'react';

export default function Anatomy() {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const details = {
    eyes: {
      title: "DASHING EYES",
      desc: "Asymmetrical droopy stop-motion eyes filled with character.",
      img: "./eyes.jpeg"
    },
    teeth: {
      title: "GOLD GRILLZ",
      desc: "Shiny gold grills for that high-contrast degen flash.",
      img: "./teeth.jpeg"
    },
    necklace: {
      title: "LIT NECKLACE",
      desc: "Premium thick cord chain supporting the heavy clay pendant.",
      img: "./necklace.jpeg"
    },
    charm: {
      title: "BELLY CHARM",
      desc: "Signature star charm embedded deep into the belly clay.",
      img: "./charm.jpeg"
    },
    hand: {
      title: "HEAVY FISTS",
      desc: "Massive claymation fists sculpted for catching all the magic jpegs.",
      img: "./hand.jpeg"
    },
    texture: {
      title: "CLAY TEXTURE",
      desc: "Visible fingerprints and tool marks from physical sculpting.",
      img: "./clay_texture.jpeg"
    }
  };

  return (
    <section className="px-md py-xl bg-puzzle-texture overflow-hidden relative border-t-4 border-on-surface">
      <h2 className="font-h1 text-h1 text-center mb-xs uppercase">ANATOMY OF A T00N</h2>
      <p className="text-center text-on-surface-variant mb-xl font-body-md lowercase">
        hover over a badge to inspect details.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-lg items-center">

        {/* Left Column: Details for eyes, necklace, hand (Desktop Only) */}
        <div className="hidden md:flex md:col-span-1 relative z-40 min-h-[270px] items-center justify-center">
          {['eyes', 'necklace', 'hand'].map((key) => {
            const item = details[key];
            return (
              <div
                key={key}
                className={`absolute inset-x-0 top-0 h-auto p-md border-4 border-on-surface bg-surface neo-shadow rounded-[12px] flex flex-col justify-between transition-all duration-200 ${
                  activeHotspot === key ? 'opacity-100 scale-100 z-[100]' : 'opacity-0 scale-95 z-10 pointer-events-none'
                }`}
              >
                <div>
                  <h3 className="font-h3 text-h3 mb-xs text-primary">{item.title}</h3>
                  <p className="text-[14px] leading-tight mb-sm text-on-surface-variant">{item.desc}</p>
                </div>
                <img src={item.img} alt={item.title} className="w-full h-auto object-cover border-2 border-on-surface rounded-md" />
              </div>
            );
          })}
        </div>

        {/* Center Column: Main character image with relative wrapper */}
        <div className="md:col-span-2 flex justify-center items-center w-full">
          <div className="relative inline-block max-w-[480px] w-full select-none border-4 border-on-surface rounded-[12px] p-sm bg-surface">
            <img
              src="./ano.png"
              alt="Anatomy of a Toon"
              className="w-full h-auto object-contain mx-auto block"
            />

            {/* Hotspots with centered circular number badges */}
            {/* 1. Eyes */}
            <div
              className="absolute flex items-center justify-center cursor-pointer"
              style={{ top: '15%', left: '35%', width: '30%', height: '15%', zIndex: 30 }}
              onMouseEnter={() => setActiveHotspot('eyes')}
              onMouseLeave={() => setActiveHotspot(null)}
              onClick={() => setActiveHotspot(activeHotspot === 'eyes' ? null : 'eyes')}
            >
              <div className={`w-[30px] h-[30px] rounded-full border-2 border-on-surface flex items-center justify-center font-h3 font-bold text-[14px] transition-colors duration-150 ${activeHotspot === 'eyes' ? 'bg-primary text-white border-primary' : 'bg-black text-white'
                }`}>
                1
              </div>
            </div>

            {/* 2. Teeth */}
            <div
              className="absolute flex items-center justify-center cursor-pointer"
              style={{ top: '35%', left: '55%', width: '15%', height: '15%', zIndex: 30 }}
              onMouseEnter={() => setActiveHotspot('teeth')}
              onMouseLeave={() => setActiveHotspot(null)}
              onClick={() => setActiveHotspot(activeHotspot === 'teeth' ? null : 'teeth')}
            >
              <div className={`w-[30px] h-[30px] rounded-full border-2 border-on-surface flex items-center justify-center font-h3 font-bold text-[14px] transition-colors duration-150 ${activeHotspot === 'teeth' ? 'bg-primary text-white border-primary' : 'bg-black text-white'
                }`}>
                2
              </div>
            </div>

            {/* 3. Necklace */}
            <div
              className="absolute flex items-center justify-center cursor-pointer"
              style={{ top: '50%', left: '30%', width: '10%', height: '10%', zIndex: 30 }}
              onMouseEnter={() => setActiveHotspot('necklace')}
              onMouseLeave={() => setActiveHotspot(null)}
              onClick={() => setActiveHotspot(activeHotspot === 'necklace' ? null : 'necklace')}
            >
              <div className={`w-[30px] h-[30px] rounded-full border-2 border-on-surface flex items-center justify-center font-h3 font-bold text-[14px] transition-colors duration-150 ${activeHotspot === 'necklace' ? 'bg-primary text-white border-primary' : 'bg-black text-white'
                }`}>
                3
              </div>
            </div>

            {/* 4. Charm */}
            <div
              className="absolute flex items-center justify-center cursor-pointer"
              style={{ top: '63.5%', left: '51%', width: '10%', height: '10%', zIndex: 30 }}
              onMouseEnter={() => setActiveHotspot('charm')}
              onMouseLeave={() => setActiveHotspot(null)}
              onClick={() => setActiveHotspot(activeHotspot === 'charm' ? null : 'charm')}
            >
              <div className={`w-[30px] h-[30px] rounded-full border-2 border-on-surface flex items-center justify-center font-h3 font-bold text-[14px] transition-colors duration-150 ${activeHotspot === 'charm' ? 'bg-primary text-white border-primary' : 'bg-black text-white'
                }`}>
                4
              </div>
            </div>

            {/* 5. Hand */}
            <div
              className="absolute flex items-center justify-center cursor-pointer"
              style={{ top: '75%', left: '6%', width: '20%', height: '20%', zIndex: 30 }}
              onMouseEnter={() => setActiveHotspot('hand')}
              onMouseLeave={() => setActiveHotspot(null)}
              onClick={() => setActiveHotspot(activeHotspot === 'hand' ? null : 'hand')}
            >
              <div className={`w-[30px] h-[30px] rounded-full border-2 border-on-surface flex items-center justify-center font-h3 font-bold text-[14px] transition-colors duration-150 ${activeHotspot === 'hand' ? 'bg-primary text-white border-primary' : 'bg-black text-white'
                }`}>
                5
              </div>
            </div>

            {/* 6. Texture */}
            <div
              className="absolute flex items-center justify-center cursor-pointer"
              style={{ top: '60%', left: '75%', width: '15%', height: '15%', zIndex: 30 }}
              onMouseEnter={() => setActiveHotspot('texture')}
              onMouseLeave={() => setActiveHotspot(null)}
              onClick={() => setActiveHotspot(activeHotspot === 'texture' ? null : 'texture')}
            >
              <div className={`w-[30px] h-[30px] rounded-full border-2 border-on-surface flex items-center justify-center font-h3 font-bold text-[14px] transition-colors duration-150 ${activeHotspot === 'texture' ? 'bg-primary text-white border-primary' : 'bg-black text-white'
                }`}>
                6
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Details for teeth, charm, texture (Desktop Only) */}
        <div className="hidden md:flex md:col-span-1 relative z-40 min-h-[270px] items-center justify-center">
          {['teeth', 'charm', 'texture'].map((key) => {
            const item = details[key];
            return (
              <div
                key={key}
                className={`absolute inset-x-0 top-0 h-auto p-md border-4 border-on-surface bg-surface neo-shadow rounded-[12px] flex flex-col justify-between transition-all duration-200 ${
                  activeHotspot === key ? 'opacity-100 scale-100 z-[100]' : 'opacity-0 scale-95 z-10 pointer-events-none'
                }`}
              >
                <div>
                  <h3 className="font-h3 text-h3 mb-xs text-primary">{item.title}</h3>
                  <p className="text-[14px] leading-tight mb-sm text-on-surface-variant">{item.desc}</p>
                </div>
                <img src={item.img} alt={item.title} className="w-full h-auto object-cover border-2 border-on-surface rounded-md" />
              </div>
            );
          })}
        </div>

      </div>

      {/* Mobile Bottom Container - Displays active or sequentially selected details */}
      <div className="md:hidden w-full px-6 pb-12 mt-lg flex flex-col items-center">
        <div className="w-full p-md border-4 border-black bg-surface neo-shadow rounded-[12px] flex flex-col gap-sm h-auto">
          {/* Badge Switcher Row */}
          <div className="flex justify-around items-center border-b-2 border-black pb-sm mb-sm">
            {[1, 2, 3, 4, 5, 6].map((num) => {
              const keys = ['eyes', 'teeth', 'necklace', 'charm', 'hand', 'texture'];
              const key = keys[num - 1];
              const isCurrent = (activeHotspot || 'eyes') === key;
              return (
                <button
                  key={num}
                  onClick={() => setActiveHotspot(key)}
                  className={`w-[36px] h-[36px] rounded-full border-2 border-black font-h3 font-bold text-[14px] transition-colors ${
                    isCurrent ? 'bg-primary text-white border-primary' : 'bg-surface text-on-surface'
                  }`}
                >
                  {num}
                </button>
              );
            })}
          </div>

          {/* Details Content */}
          {(() => {
            const currentKey = activeHotspot || 'eyes';
            const currentDetail = details[currentKey];
            return (
              <>
                <div className="flex items-center gap-sm">
                  <h3 className="font-h3 text-h3 text-primary uppercase">{currentDetail.title}</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant lowercase leading-relaxed">
                  {currentDetail.desc}
                </p>
                <img 
                  src={currentDetail.img} 
                  alt={currentDetail.title} 
                  className="w-full h-auto object-contain border-2 border-black rounded-md" 
                />
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
