import React from 'react';

export default function Team() {
  const members = [
    {
      name: "IDRA",
      role: "The Artist Behind",
      image: "/idra.jpeg",
      link: "https://x.com/idra_______"
    },
    {
      name: "Olli Maki",
      role: "Founder",
      image: "/Ollie.jpeg",
      link: "https://x.com/Olli_Maktas"
    }
  ];

  return (
    <section id="team" className="px-md py-xl bg-surface-container overflow-hidden">
      <h2 className="font-h1 text-h1 text-center mb-xl uppercase">BEHIND THE T00NS</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-lg justify-center items-stretch w-full px-xs">
        {members.map((member) => (
          <div
            key={member.name}
            className="bg-surface p-lg border-4 border-on-surface neo-shadow neo-shadow-hover rounded-[12px] flex flex-col sm:flex-row items-center gap-md transition-all duration-200"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover border-4 border-on-surface shrink-0"
            />

            <div className="flex flex-col text-center sm:text-left w-full justify-between h-full py-xs">
              <div>
                <h3 className="font-h2 text-h2 mb-xs text-on-surface hover:text-primary transition-colors">
                  <a href={member.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {member.name}
                  </a>
                </h3>
                <p className="font-body-md text-on-surface-variant text-[14px] lowercase leading-none">
                  {member.role}
                </p>
              </div>

              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-md self-center sm:self-start bg-secondary-fixed text-on-secondary-fixed px-md py-xs border-2 border-on-surface neo-shadow neo-shadow-hover neo-shadow-active font-h3 text-[16px] transition-all inline-block w-max"
              >
                Follow
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
