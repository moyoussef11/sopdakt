import React from "react";
import { motion, useInView } from "framer-motion";

const CardFeatureBox = ({ icon, title, subtitle }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0, y: 30 }}
      animate={
        isInView
          ? { scale: 1, opacity: 1, y: 0 }
          : { scale: 0.8, opacity: 0, y: 30 }
      }
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="w-[90px] p-1 h-[90px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[239px] lg:h-[239px] bg-white rounded-full shadow-xl flex flex-col items-center justify-center  overflow-hidden gap-1"
    >
      <img
        src={icon}
        className="h-3 w-3 my-1 sm:h-8 sm:w-8 md:h-[60px] md:w-[60px]"
        alt={`${title}Icon`}
        loading="lazy"
      />
      <h5 className="uppercase font-bold text-center text-[7px] sm:text-sm lg:text-xl">
        {title}
      </h5>
      <p className="text-[7px] sm:text-sm text-center">{subtitle}</p>
    </motion.div>
  );
};

export default CardFeatureBox;
