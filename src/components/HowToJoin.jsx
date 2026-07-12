import React, { useState } from 'react';

export default function HowToJoin() {
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(
      "rough handmade clay, uneven clay, rough air-dry clay, visible fingerprints tool marks, handmade clay, matte finish, no gloss stop motion animation diorama, blue clay character gold grills, star nose, droopy asymmetric eyes stitch line, small black belly creature, tiny stubby arms and legs + [describe your scene here]"
    );
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section id="create" className="px-md py-lg max-w-7xl mx-auto grid md:grid-cols-2 gap-xl bg-puzzle-texture rounded-[24px] mt-xl">
      <div className="md:col-span-2 relative flex justify-between items-center w-full min-h-[140px] mt-xl mb-md">
        <img src="./teacher.png" className="deco-teacher" alt="Teacher toon" />
        <h2 className="font-h1 text-h1 text-center w-full mx-auto uppercase">
          HOW TO JOIN + CREATE
        </h2>
        <img src="./pc.png" className="deco-pc" alt="PC toon" />
      </div>

      {/* Left Card: Instructions */}
      <div
        className="p-md border-4 border-on-surface neo-shadow flex flex-col justify-between min-h-[300px] relative"
        style={{
          backgroundColor: '#FFC2DE',
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(180,60,110,0.06) 0px, rgba(180,60,110,0.06) 6px, transparent 6px, transparent 20px), linear-gradient(to right, rgba(0,0,0,0.02), rgba(255,255,255,0.02))',
          borderRadius: '12px'
        }}
      >
        {/* Hammered Corner Nails */}
        <div className="absolute top-[12px] left-[12px] w-[12px] h-[12px] rounded-full bg-[#555] border border-[#333] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_0px_rgba(255,255,255,0.4)] z-[3]"></div>
        <div className="absolute top-[12px] right-[12px] w-[12px] h-[12px] rounded-full bg-[#555] border border-[#333] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_0px_rgba(255,255,255,0.4)] z-[3]"></div>
        <div className="absolute bottom-[12px] left-[12px] w-[12px] h-[12px] rounded-full bg-[#555] border border-[#333] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_0px_rgba(255,255,255,0.4)] z-[3]"></div>
        <div className="absolute bottom-[12px] right-[12px] w-[12px] h-[12px] rounded-full bg-[#555] border border-[#333] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_0px_rgba(255,255,255,0.4)] z-[3]"></div>

        <div className="mb-md relative z-[2]">
          <h2 className="font-h2 text-h2 mb-sm">Instructions</h2>
          <ul className="list-disc pl-5 text-[18px] leading-[1.6] space-y-[10px] text-on-surface">
            <li>the t00ns art contest is now <strong>LIVE</strong> / 30 GTDs up for grabs</li>
            <li>2 entries per person</li>
            <li>post it on x with something about t00ns or in replies</li>
            <li>copy paste the link of your post/reply on ┃art-contest <strong>ONLY</strong></li>
            <li><strong>NO need to ping me</strong>, i will check everything</li>
            <li><strong>ONLY ai content</strong> is accepted, not handrawn, no clay IRL, nothing else than AI (<strong>GEMINI mandatory</strong>)</li>
            <li>always remove the watermark from gemini (you can use photopea, it's a free alternative to photoshop and it's online)</li>
            <li><strong>NO text</strong> or comic book style stuff</li>
            <li><strong>ONLY original</strong> artworks</li>
            <li>if videos, only use <strong>SEEDANCE</strong> (we can tell the difference) but focus on artworks (easier and free)</li>
            <li><strong>NO gooning</strong>, <strong>NO sex</strong>, <strong>NO poop or pee</strong>, keep it fun and degen though</li>
            <li>i don't care about "t00ns at the beach" or "t00ns at the gym" or "t00ns doing groceries"....it's not a children's book</li>
            <li><strong>NO need to ping me</strong>, I will check everything here</li>
            <li>just be t00ns about it</li>
          </ul>
        </div>
        <div className="flex justify-center w-full mt-md">
          <button className="bg-surface-container-lowest text-on-surface px-[36px] py-[10px] border-4 border-on-surface neo-shadow neo-shadow-hover neo-shadow-active font-h3 text-[20px] relative z-[2]">
            Join Discord
          </button>
        </div>
      </div>

      {/* Right Card: The Prompt & Workflow */}
      <div
        className="p-md border-4 border-on-surface neo-shadow flex flex-col justify-between min-h-[300px] relative"
        style={{
          backgroundColor: '#FFFDF2',
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(139,90,43,0.04) 0px, rgba(139,90,43,0.04) 6px, transparent 6px, transparent 20px), linear-gradient(to right, rgba(0,0,0,0.01), rgba(255,255,255,0.01))',
          borderRadius: '12px'
        }}
      >
        {/* Hammered Corner Nails */}
        <div className="absolute top-[12px] left-[12px] w-[12px] h-[12px] rounded-full bg-[#555] border border-[#333] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_0px_rgba(255,255,255,0.4)] z-[3]"></div>
        <div className="absolute top-[12px] right-[12px] w-[12px] h-[12px] rounded-full bg-[#555] border border-[#333] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_0px_rgba(255,255,255,0.4)] z-[3]"></div>
        <div className="absolute bottom-[12px] left-[12px] w-[12px] h-[12px] rounded-full bg-[#555] border border-[#333] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_0px_rgba(255,255,255,0.4)] z-[3]"></div>
        <div className="absolute bottom-[12px] right-[12px] w-[12px] h-[12px] rounded-full bg-[#555] border border-[#333] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_0px_rgba(255,255,255,0.4)] z-[3]"></div>

        <div className="mb-md relative z-[2]">
          <h2 className="font-h2 text-h2 mb-sm">The Prompt & Workflow</h2>
          <ul className="list-disc pl-5 text-[18px] leading-[1.6] space-y-[10px] text-on-surface mb-md">
            <li>check the pinned post on x, all instructions are there: <a href="https://x.com/just_t00ns/status/2073405385411891404" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-primary break-all">x.com/just_t00ns/status/2073405385411891404</a></li>
            <li>check the meme depot to understand what we like: <a href="https://memedepot.com/d/community-arts" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-primary break-all">memedepot.com/d/community-arts</a></li>
            <li>always upload the character sheet (visual from the pinned post) to <strong>GEMINI ONLY</strong> (not chatgpt, not grok, not midjourney....<strong>ONLY gemini</strong>)</li>
            <li>pay attention to the texture, character consistency (eyes, body proportions, colors) and claymation world and items</li>
          </ul>
          <p className="bg-surface-container p-sm border-2 border-on-surface font-body-md italic mb-md text-[16px] leading-[1.5] select-all">
            "rough handmade clay, uneven clay, rough air-dry clay, visible fingerprints tool marks, handmade clay, matte finish, no gloss stop motion animation diorama, blue clay character gold grills, star nose, droopy asymmetric eyes stitch line, small black belly creature, tiny stubby arms and legs + [describe your scene here]"
          </p>
        </div>
        <div className="flex justify-center w-full mt-md">
          <button
            onClick={handleCopyPrompt}
            className="bg-tertiary-fixed text-on-tertiary-fixed px-[36px] py-[10px] border-4 border-on-surface neo-shadow neo-shadow-hover neo-shadow-active font-h3 text-[20px] transition-all relative z-[2]"
          >
            {copied ? "Copied!" : "Copy Prompt"}
          </button>
        </div>
      </div>
    </section>
  );
}
