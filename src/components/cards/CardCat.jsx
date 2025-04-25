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
      className="flex flex-col items-center justify-center"
    >
      <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] rounded-full bg-[#D9D9D9] overflow-hidden">
        {pic && (
          <img
            src={pic}
            className="w-full h-full object-cover"
            alt={name}
            loading="lazy"
          />
        )}
      </div>
      <h3 className="font-medium uppercase text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] tracking-[2px] text-center mt-3">
        {name}
      </h3>
    </motion.div>
  );
};

export default CardCat;
