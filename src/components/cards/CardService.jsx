import React from "react";
import { motion, useInView } from "framer-motion";

const CardService = ({ pic, className, nums, desc }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ x: -300, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`border border-[#909090] w-[100px] h-[100px] p-1 sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:h-[220px] sm:p-6 lg:w-[220px] mx-auto rounded-full flex flex-col lg:space-y-4 items-center justify-center ${className}`}
    >
      <img className="w-5 h-5 sm:w-10 sm:h-10 lg:h-[60px] lg:w-[60px]" src={pic} alt={desc} loading="lazy" />
      <span className="text-[14px] sm:text-[18px] md:text-[23px] lg:text-[32px] sm:leading-[30px] tracking-[4%] font-bold">
        {nums}
      </span>
      <p className="sm:leading-[24px] text-[10px] sm:text-sm text-center font-normal">{desc} </p>
    </motion.div>
  );
};

export default CardService;
