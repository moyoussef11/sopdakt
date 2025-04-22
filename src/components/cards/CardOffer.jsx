import React from "react";
import { motion, useInView } from "framer-motion";

const CardOffer = ({ pic1, pic2, title, offer, desc }) => {
   const ref = React.useRef(null);
   const isInView = useInView(ref, {
     once: false,
     amount: 0.5,
   });
  return (
    <motion.div
      ref={ref}
      initial={{ x: 300, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="card shadow-2xl flex flex-col items-center justify-between rounded-[12px]"
    >
      <div className="head w-full bg-black rounded-t-[12px]">
        <h4 className="text-[33px] leading-[33.24px] tracking-[13px] uppercase text-white font-bold text-center p-7">
          {title}
        </h4>
      </div>
      <div className="info flex flex-col gap-4 rounded-[12px]">
        <span className="text-[28px] mt-5 block leading-[33.24px] tracking-[3px] uppercase font-light text-center">
          {desc}
        </span>
        <h6 className="text-[33px] tracking-[13px] leading-[33.24px] uppercase font-medium text-center">
          {offer}
        </h6>
        <div className="imgs relative flex items-center justify-center">
          <img
            src={pic1}
            alt="productImg"
            className="h-[173px]"
            loading="lazy"
          />
          <span className="text-[72px] -mb-10 leading-[33.24px] font-bold tracking-[0px] text-[#FF3200]">
            +
          </span>
          <img
            src={pic2}
            alt="productImg"
            className="h-[173px] -mb-16"
            loading="lazy"
          />
        </div>
      </div>
      <div className="actions my-14 rounded-[12px]">
        <button className="bg-[#ff3200] border-2 border-transparent hover:border-black text-white text-[16.8px] w-[224px] h-[52px] cursor-pointer hover:bg-white hover:text-black duration-300 font-bold leading-[20px] tracking-[0] uppercase py-2 px-4 rounded-[12px]">
          add to cart{" "}
        </button>
      </div>
    </motion.div>
  );
};

export default CardOffer;
