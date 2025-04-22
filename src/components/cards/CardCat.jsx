import React from "react";
import { motion, useInView } from "framer-motion";

const CardCat = ({ pic, name }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="card w-full flex flex-col items-center justify-center"
    >
      <div className="w-full h-[310px] sm:w-[252px] sm:h-[252px] rounded-full bg-[#D9D9D9]">
        {pic && (
          <img src={pic} className="w-full h-full" alt={name} loading="lazy" />
        )}
      </div>
      <h3 className="font-medium uppercase text-[34.8px] leading-[24px] tracking-[3.36px] text-center my-7">
        {name}
      </h3>
    </motion.div>
  );
};

export default CardCat;
