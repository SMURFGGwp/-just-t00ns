import React from 'react';

export default function SpacesAndAMAs() {
  return (
    <section id="spaces" className="px-md py-xl max-w-7xl mx-auto grid md:grid-cols-2 gap-lg bg-puzzle-texture rounded-[24px] mt-xl">
      <h2 className="font-h1 text-h1 text-center mt-xl mb-md uppercase md:col-span-2">SPACES + AMAS</h2>
      
      {/* Left Card: Upcoming Spaces */}
      <div className="bg-primary-container p-lg border-4 border-on-surface neo-shadow flex flex-col justify-between">
        <h3 className="font-h2 text-h2 mb-md">Upcomingsss...</h3>
        <div className="flex-grow flex items-center justify-center py-md">
          <div className="bg-surface p-lg border-2 border-on-surface text-center flex flex-col gap-sm w-full">
            <h4 className="font-h3 text-h3 text-[22px] text-on-surface">Stay t00ned! 🔔</h4>
            <p className="font-body-md text-on-surface-variant text-[16px] lowercase">
              Turn on notifications on our <a href="https://x.com/just_t00ns" target="_blank" rel="noopener noreferrer" className="underline font-bold text-primary hover:underline transition-colors">X page</a> so you don't miss the next one.
            </p>
          </div>
        </div>
      </div>

      {/* Right Card: Past AMAs */}
      <div className="bg-surface-container-lowest p-lg border-4 border-on-surface neo-shadow flex flex-col justify-between">
        <div>
          <h3 className="font-h2 text-h2 mb-md">Past SPACES + AMAs</h3>
          <ul className="space-y-sm">
            <li className="flex items-center gap-sm">
              <span className="material-symbols-outlined shrink-0 text-on-surface">play_circle</span>
              <a 
                href="https://x.com/i/broadcasts/1DxLddgQbAwxm?s=20" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-body-lg text-body-lg underline hover:text-primary transition-colors lowercase"
              >
                utility and nfts (July 10)
              </a>
            </li>
            <li className="flex items-center gap-sm">
              <span className="material-symbols-outlined shrink-0 text-on-surface">play_circle</span>
              <a 
                href="https://x.com/i/spaces/1nKOLLOdEkvGR?s=20" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-body-lg text-body-lg underline hover:text-primary transition-colors lowercase"
              >
                Just t00ns x Legacy Web3 (June 29)
              </a>
            </li>
            <li className="flex items-center gap-sm">
              <span className="material-symbols-outlined shrink-0 text-on-surface">play_circle</span>
              <a 
                href="https://x.com/i/spaces/1PKqrrkayREGb?s=20" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-body-lg text-body-lg underline hover:text-primary transition-colors lowercase"
              >
                just t00ns x ZAX Space (June 24)
              </a>
            </li>
            <li className="flex items-center gap-sm">
              <span className="material-symbols-outlined shrink-0 text-on-surface">play_circle</span>
              <a 
                href="https://x.com/i/spaces/1YGNrrpXRpbGw?s=20" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-body-lg text-body-lg underline hover:text-primary transition-colors lowercase"
              >
                t00ns x AlphaGEMs (June 23)
              </a>
            </li>
            <li className="flex items-center gap-sm">
              <span className="material-symbols-outlined shrink-0 text-on-surface">play_circle</span>
              <a 
                href="https://x.com/i/broadcasts/1dKrPPyVRkwJX?s=20" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-body-lg text-body-lg underline hover:text-primary transition-colors lowercase"
              >
                t00ns team reveal (June 18)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
