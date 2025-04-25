import React, { useState } from "react";
import pro1 from "../assets/product1.png";
import pro2 from "../assets/product2.png";
import pro3 from "../assets/product3.png";
import pro from "../assets/pro.png";
import down from "../assets/down.png";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import CardOffer from "../components/cards/CardOffer";
import ProductDetailsTabs from "../components/Tabs/ProductDetailsTabs";
import FAQSection from "../components/Accordion/FAQSection";
import product1 from "../assets/product-6.jpg.png";
import CardProductLike from "../components/cards/CardProductLike";
import SizeChart from "../components/Tabs/Size";
import { motion, useInView } from "framer-motion";
import SizeRecommendation from "../components/Tabs/SizeRecommendation";

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

const Product = () => {
  const [mainImage, setMainImage] = useState(pro1);
  const [openSize, setOpenSize] = useState(false);
  const [openSizeRec, setOpenSizeRec] = useState(false);
  console.log(openSizeRec);

  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.05,
  });
  return (
    <>
      <div className="w-full text-center py-5 md:py-10">
        <span className="text-[16.8px] uppercase text-[#716F6F] text-center">
          {" "}
          home &gt; categories &gt;{" "}
          <span className="font-medium text-black">jackets&coats</span>{" "}
        </span>
      </div>
      <div className="hero overflow-hidden px-5 md:px-24 py-5 md:py-10 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full py-10 md:w-1/2 flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="imgs md:flex grid grid-cols-2 md:flex-wrap items-center justify-center md:flex-col gap-2 md:gap-5">
            <img
              src={pro1}
              alt="productImg"
              onClick={() => setMainImage(pro1)}
              className={` md:w-[170px] rounded-[13px] cursor-pointer ${
                mainImage === pro1
                  ? "border border-[#FF3200]"
                  : "border border-transparent hover:border-[#FF3200]"
              }`}
              loading="lazy"
            />
            <img
              src={pro2}
              alt="productImg"
              onClick={() => setMainImage(pro2)}
              className={` md:w-[170px] rounded-[13px] cursor-pointer ${
                mainImage === pro2
                  ? "border border-[#FF3200]"
                  : "border border-transparent hover:border-[#FF3200]"
              }`}
              loading="lazy"
            />
            <img
              src={pro3}
              alt="productImg"
              onClick={() => setMainImage(pro3)}
              className={` md:w-[170px] rounded-[13px] cursor-pointer ${
                mainImage === pro3
                  ? "border border-[#FF3200]"
                  : "border border-transparent hover:border-[#FF3200]"
              }`}
              loading="lazy"
            />
          </div>
          <div className="img">
            <img
              src={mainImage}
              alt="productImg"
              className="rounded-[13px] md:h-[620px] w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <motion.div
          ref={ref}
          initial={{ x: 300, opacity: 0 }}
          animate={{
            x: isInView || window.innerWidth < 768 ? 0 : 360,
            opacity: isInView || window.innerWidth < 768 ? 1 : 0,
          }}
          
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full  md:w-1/2"
        >
          <div className="head border-b-2 border-[#D9D9D9] pb-5">
            <h4 className="font-bold text-[20px] md:text-[45px] md:leading-[33.24px] uppercase tracking-[0] ">
              Oversized Shirt Jacket
            </h4>
            <div className="flex items-center justify-between flex-wrap gap-2 my-5">
              <div className="stars flex items-center flex-wrap gap-1 my-5">
                <FaStar className="text-[#FFA500] text-[25px]" />
                <FaStar className="text-[#FFA500] text-[25px]" />
                <FaStar className="text-[#FFA500] text-[25px]" />
                <FaStar className="text-[#FFA500] text-[25px]" />
                <FaStar className="text-[#FFA500] text-[25px]" />
              </div>
              <p className="font-semibold text-[14px] leading-[22px] underline cursor-pointer">
                ADD TO COMPARE
              </p>
            </div>
            <span className="text-[51px] font-bold leading-[33.24px] text-[#FF3200] tracking-[0]">
              260EGP
            </span>
          </div>
          <div className="colors border-b-2 border-[#D9D9D9] pb-5">
            <h5 className="text-[18px] leading-[33.24px] text-[#D9D9D9] tracking-[0] my-3">
              SELECT COLOR
            </h5>
            <div className="flex items-center gap-2 my-3">
              <span className="w-[40px] h-[40px] bg-[#32573A] rounded-full cursor-pointer border-2 p-3 border-[#FF3200]"></span>
              <span className="w-[40px] h-[40px] bg-[#574632] rounded-full cursor-pointer border-2 border-transparent p-3 hover:border-[#FF3200]"></span>
            </div>
          </div>
          <div className="sizes border-b-2 border-[#D9D9D9] pb-5">
            <h5 className="text-[18px] leading-[33.24px] text-[#D9D9D9] tracking-[0] my-3">
              CHOOSE SIZE{" "}
            </h5>
            <div className="flex items-center justify-between flex-wrap gap-2 my-3">
              <div className="flex items-center justify-center flex-wrap gap-2 my-3">
                <span className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-[9px] cursor-pointer border-2 p-3 border-[#FF3200] flex items-center justify-center text-[#FF3200] font-bold text-[12px] leading-[33.24px] tracking-[0]">
                  XS
                </span>{" "}
                <span className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-[9px] cursor-pointer border-2 border-transparent p-3 hover:border-[#FF3200] flex items-center justify-center hover:text-[#FF3200] font-bold text-[12px] leading-[33.24px] tracking-[0]">
                  S{" "}
                </span>
                <span className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-[9px] cursor-pointer border-2 border-transparent p-3 hover:border-[#FF3200] flex items-center justify-center hover:text-[#FF3200] font-bold text-[12px] leading-[33.24px] tracking-[0]">
                  M{" "}
                </span>
                <span className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-[9px] cursor-pointer border-2 border-transparent p-3 hover:border-[#FF3200] flex items-center justify-center hover:text-[#FF3200] font-bold text-[12px] leading-[33.24px] tracking-[0]">
                  L{" "}
                </span>
                <span className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-[9px] cursor-pointer border-2 border-transparent p-3 hover:border-[#FF3200] flex items-center justify-center hover:text-[#FF3200] font-bold text-[12px] leading-[33.24px] tracking-[0]">
                  XL{" "}
                </span>
                <span className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-[9px] cursor-pointer border-2 border-transparent p-3 hover:border-[#FF3200] flex items-center justify-center hover:text-[#FF3200] font-bold text-[12px] leading-[33.24px] tracking-[0]">
                  XXL{" "}
                </span>
                <span
                  onClick={() => setOpenSizeRec(true)}
                  className="bg-[#F5F5F5] capitalize rounded-[9px] cursor-pointer border-2 border-transparent p-1 hover:border-[#FF3200] hover:text-[#FF3200] font-bold text-[12px] leading-[33.24px] tracking-[0]"
                >
                  Size Recomnadtion{" "}
                </span>
              </div>
              <p
                onClick={() => setOpenSize(true)}
                className="font-semibold text-[14px] leading-[22px] underline cursor-pointer"
              >
                SIZE GUIDE{" "}
              </p>{" "}
            </div>
          </div>
          <div className="actions flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center flex-wrap gap-2 my-3">
              <div className="border border-[#DDDBDC] flex items-center justify-between gap-2 my-3 py-2 px-4 rounded-[9px]">
                <span className="cursor-pointer text-xl">-</span>
                <span>0</span>
                <span className="cursor-pointer text-xl">+</span>
              </div>
              <button className="bg-[#ff3200] border-2 border-transparent hover:border-black text-white text-[16.8px] w-[224px] h-[52px] cursor-pointer hover:bg-white hover:text-black duration-300 font-bold leading-[20px] tracking-[0] uppercase py-2 px-4 rounded-[12px]">
                add to cart{" "}
              </button>
            </div>
            <CiHeart className="text-[30px] cursor-pointer" />
          </div>
          <div className="note text-[20px] flex flex-col gap-2 my-3 w-full shadow-2xl p-4 rounded-2xl">
            <h4 className="font-bold  leading-[100%] uppercase text-[#FF3200]">
              Note:
            </h4>
            <p className="uppercase font-medium my-2">
              {" "}
              every one can buy 2 only
            </p>
          </div>
        </motion.div>
      </div>
      <section id="offers" className="md:py-14 overflow-hidden">
        <h4 className="font-bold uppercase text-[34.8px] sm:leading-[24px] tracking-[3.36px] text-center">
          special bundle offers{" "}
        </h4>
        <div className="cards my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-24">
          <CardOffer
            title={"EID OFFER!"}
            desc={"GET THIS BUNDLE NOW"}
            offer={"BUY 1 GET 1"}
            pic1={pro}
            pic2={pro}
          />
          <CardOffer
            title={"EID OFFER!"}
            desc={"GET THIS BUNDLE NOW"}
            offer={"BUY 1 GET 1"}
            pic1={pro}
            pic2={pro}
          />
          <CardOffer
            title={"EID OFFER!"}
            desc={"GET THIS BUNDLE NOW"}
            offer={"BUY 1 GET 1"}
            pic1={pro}
            pic2={pro}
          />
        </div>
        <div className="flex items-center justify-end cursor-pointer gap-2 my-5 px-5 md:px-24">
          <p className="font-semibold text-[14px] leading-[22px] underline cursor-pointer">
            ADD TO COMPARE
          </p>
          <img
            src={down}
            className="h-10 cursor-pointer"
            alt="down"
            loading="lazy"
          />
        </div>
      </section>
      <section id="tabs" className="py-5 md:py-14 px-5 md:px-24">
        <ProductDetailsTabs />
      </section>
      <section id="accordion" className="py-5 md:py-14 px-5 md:px-24">
        <FAQSection faqs={faqs.slice(0, 3)} />
      </section>
      <section id="offers" className="py-14 bg-[#D9D9D9] overflow-hidden">
        <h4 className="font-bold uppercase text-[34.8px] md:leading-[24px] tracking-[3.36px] text-center">
          YOU MIGHT ALSO LIKE{" "}
        </h4>
        <div className="cards py-10 px-5 flex items-center justify-center gap-5 md:gap-10 flex-wrap">
          <CardProductLike
            path={"/"}
            pic={product1}
            name={"Hyperadapt Shield Lite"}
            price={200}
            category={"category"}
          />
          <CardProductLike
            path={"/"}
            pic={product1}
            name={"Hyperadapt Shield Lite"}
            price={200}
            category={"category"}
          />
          <CardProductLike
            path={"/"}
            pic={product1}
            name={"Hyperadapt Shield Lite"}
            price={200}
            category={"category"}
          />
          <CardProductLike
            path={"/"}
            pic={product1}
            name={"Hyperadapt Shield Lite"}
            price={200}
            category={"category"}
          />
        </div>
      </section>
      <SizeChart openSize={openSize} setOpenSize={setOpenSize} />
      <SizeRecommendation
        openSizeRec={openSizeRec}
        setOpenSizeRec={setOpenSizeRec}
      />
    </>
  );
};

export default Product;
