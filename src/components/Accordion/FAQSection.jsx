import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const faqs = [
  {
    question: "WHAT IS WEBFLOW AND WHY IS IT THE BEST WEBSITE BUILDER?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "WHAT IS YOUR FAVORITE TEMPLATE FROM BRIX TEMPLATES?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus reprehenderit deleniti.",
  },
  {
    question: "HOW DO YOU CLONE A WEBFLOW TEMPLATE FROM THE SHOWCASE?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
      <h4 className="font-bold mb-5 uppercase text-[34.8px] leading-[24px] tracking-[3.36px] text-center">
        FAQS{" "}
      </h4>
      <div className="space-y-4 py-5 shadow-2xl max-w-6xl mx-auto md:py-10 ">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`transition-all duration-300 rounded-xl bg-white border-2 ${
                isOpen
                  ? "border-red-500 border-b-0  shadow-md"
                  : "border-transparent bg-[#f9f9f9]"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="font-semibold text-sm md:text-base text-black">
                  {faq.question}
                </span>
                {isOpen ? (
                  <FiChevronDown className="text-white w-8 h-8 rounded-full text-xl bg-[#FF3200]" />
                ) : (
                  <FiChevronRight className="text-red-500 w-8 h-8 rounded-full bg-white shadow text-xl" />
                )}
              </button>
              {isOpen && (
                <div className="px-6 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
