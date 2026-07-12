import React from 'react';
import { communityLinks } from './links';

export default function CommunityArts() {
  // Take first 200 links and split evenly
  const links = communityLinks.slice(0, 200);
  const row1 = links.slice(0, 100);
  const row2 = links.slice(100, 200);

  // Duplicate for seamless infinite marquee scroll
  const row1Duplicated = [...row1, ...row1];
  const row2Duplicated = [...row2, ...row2];

  return (
    <section id="art" className="px-md py-xl bg-on-surface text-surface overflow-hidden">
      <h2 className="font-h1 text-h1 text-center mb-xs uppercase">COMMUNITY ARTS</h2>
      <p className="text-center text-surface/80 mb-xl font-body-md lowercase">
        fueled by pure t00ns energy. explore the full archive on <a href="https://memedepot.com/d/community-arts" target="_blank" rel="noopener noreferrer" className="underline font-bold text-primary hover:underline decoration-primary transition-colors">meme depot</a>.
      </p>
      
      <div className="flex flex-col gap-md max-w-7xl mx-auto w-full overflow-hidden">
        
        {/* Row 1: Moving Left */}
        <div className="flex overflow-hidden select-none relative w-full">
          <div className="flex gap-md w-max animate-marquee-left shrink-0">
            {row1Duplicated.map((link, idx) => (
              <div 
                key={`row1-${idx}`} 
                className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] shrink-0 border-4 border-surface neo-shadow rounded-[12px] overflow-hidden bg-surface-container-high"
              >
                <img 
                  src={link} 
                  alt={`Community Art row1-${idx}`} 
                  className="w-full h-full object-cover aspect-square block"
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="flex overflow-hidden select-none relative w-full">
          <div className="flex gap-md w-max animate-marquee-right shrink-0">
            {row2Duplicated.map((link, idx) => (
              <div 
                key={`row2-${idx}`} 
                className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] shrink-0 border-4 border-surface neo-shadow rounded-[12px] overflow-hidden bg-surface-container-high"
              >
                <img 
                  src={link} 
                  alt={`Community Art row2-${idx}`} 
                  className="w-full h-full object-cover aspect-square block"
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
