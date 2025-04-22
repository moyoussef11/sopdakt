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
      className="w-[239px] h-[239px] bg-white rounded-full shadow-xl flex flex-col items-center justify-center gap-1"
    >
      <img src={icon} alt={`${title}Icon`} loading="lazy" />
      <h5 className="uppercase font-bold">{title}</h5>
      <p className="text-sm">{subtitle}</p>
    </motion.div>
  );
};

export default CardFeatureBox;
