import FAQSection from "../components/Accordion/FAQSection";
import MainSection from "../components/Tabs/MainSection";

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
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
];

const Faqs = () => {
  return (
    <>
      {" "}
      <MainSection breadcrumb={` faqs`} title={"faqs"} />
     
      <section id="accordion" className="py-5 md:py-14 px-5 md:px-24">
        <FAQSection faqs={faqs} />
      </section>
    </>
  );
};

export default Faqs;
