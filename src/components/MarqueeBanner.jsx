import React from 'react';

export default function MarqueeBanner() {
  const marqueeText = "JUST T00NS EVENT LIVE NOW • JUST T00NS EVENT LIVE NOW • JUST T00NS EVENT LIVE NOW • JUST T00NS EVENT LIVE NOW • ";

  return (
    <div className="w-full overflow-hidden bg-[#d85756] border-y-4 border-on-surface py-[12px] select-none flex">
      <div className="flex whitespace-nowrap min-w-full">
        <div className="animate-marquee flex justify-around min-w-full shrink-0">
          <span className="font-h3 text-[20px] md:text-[24px] uppercase text-on-surface tracking-wider leading-none">
            {marqueeText}
          </span>
        </div>
        <div className="animate-marquee flex justify-around min-w-full shrink-0" aria-hidden="true">
          <span className="font-h3 text-[20px] md:text-[24px] uppercase text-on-surface tracking-wider leading-none">
            {marqueeText}
          </span>
        </div>
      </div>
    </div>
  );
}
