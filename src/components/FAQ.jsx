import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What are just t00ns?",
      answer: "Internet magic jpegs.",
      bgColor: "bg-secondary-fixed"
    },
    {
      question: "Why AI?",
      answer: "Why email?",
      bgColor: "bg-surface-container-lowest"
    },
    {
      question: "What are the mint details and supply?",
      answer: "TBA, TBA, TBA.",
      bgColor: "bg-tertiary-fixed"
    },
    {
      question: "I am a smoll account, do I have any chance to win the contest?",
      answer: "Yes, absolutely! If your art is good, you're fine",
      bgColor: "bg-primary-container"
    },
    {
      question: "Is this the official site?",
      answer: "No, just a fan made one.",
      bgColor: "bg-secondary-container"
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-md py-xl max-w-3xl mx-auto">
      <h2 className="font-h1 text-h1 text-center mb-xl">FAQ</h2>
      <div className="space-y-md">
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={`accordion-item border-4 border-on-surface neo-shadow cursor-pointer p-md transition-all duration-300 ${openIndex === index ? 'active' : ''
              } ${item.bgColor}`}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-h3 text-h3">{item.question}</h4>
              <span
                className="material-symbols-outlined text-3xl transition-transform duration-300"
                style={{
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              >
                expand_more
              </span>
            </div>
            <div className="accordion-content">
              <p className="font-body-md text-body-md mt-sm">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
