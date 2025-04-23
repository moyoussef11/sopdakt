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
      className={`border border-[#909090] h-[240px] p-6 w-[240px] mx-auto rounded-full flex flex-col space-y-4 items-center justify-center ${className}`}
    >
      <img className="h-[60px] w-[60px]" src={pic} alt={desc} loading="lazy" />
      <span className="text-[32px] leading-[30px] tracking-[4%] font-bold">
        {nums}
      </span>
      <p className="leading-[24px] text-center font-normal">{desc} </p>
    </motion.div>
  );
};

export default CardService;
