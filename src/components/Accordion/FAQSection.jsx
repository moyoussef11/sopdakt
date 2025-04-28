import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <span className="font-semibold text-[9px] sm:text-[10px] sm:text-base text-black">
                  {faq.question}
                </span>
                {isOpen ? (
                  <FiChevronDown className="text-white  cursor-pointer rounded-full text-xl bg-[#FF3200]" />
                ) : (
                  <FiChevronRight className="text-red-500  cursor-pointer rounded-full bg-white shadow text-xl" />
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
