import React from "react";
import linkIcon from "../../assets/link.png";
import QuickAdd from "../../assets/ouik.png";
import { FaCodeCompare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const CardProducts = ({ path, pic, name, price, category }) => {
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
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="card p-3 w-full md:w-[263px] bg-white rounded-[9px] relative group duration-200"
    >
      <Link to={path}>
        <img src={linkIcon} alt="linkIcon" className="ml-auto" />
      </Link>
      <div className="relative">
        <img
          src={pic}
          className="w-full object-contain md:w-[219px] h-[219px]"
          loading="lazy"
          alt={name}
        />
        <div className="absolute top-0 left-0 w-full h-full group duration-300 hidden group-hover:flex items-center justify-center gap-2">
          <div className="w-full h-full absolute bg-white opacity-0 group-hover:opacity-35"></div>
          <div className="flex z-10 items-center flex-col justify-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-black p-[12px] uppercase w-[40px] h-[40px] bg-[#F5F4F4] flex items-center justify-center rounded-[9px] cursor-pointer">
                m
              </span>
              <span className="text-black p-[12px] uppercase w-[40px] h-[40px] bg-[#F5F4F4] flex items-center justify-center rounded-[9px] cursor-pointer">
                l
              </span>
              <span className="text-black p-[12px] uppercase w-[40px] h-[40px] bg-[#F5F4F4] flex items-center justify-center rounded-[9px] cursor-pointer">
                xl
              </span>
            </div>
            <button className="bg-[#FF3200] text-white rounded-[9px] w-[200px] flex items-center justify-center gap-2 py-2 px-4 cursor-pointer hover:text-black duration-300 font-bold leading-[20px] tracking-[0] uppercase">
              <img src={QuickAdd} alt="QuickAdd" />
              Quick Add
            </button>
          </div>
        </div>
      </div>
      <div>
        <span className="uppercase text-[#909090] text-sm hover:text-black">
          {category}
        </span>
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-[15px] text-black font-normal capitalize">
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </h5>
          <span className="leading-[31px] tracking-[0] text-[#909090] uppercase text-[15px] font-normal">
            {price} EGP
          </span>
        </div>
      </div>
      <div className="colors">
        <p className="text-[12px] leading-[16px] tracking-[0.2px] text-[#737373] capitalize">
          black
        </p>
        <div className="flex items-center gap-1 mt-1">
          <span className="w-[20px] h-[20px] bg-[#000000] rounded-full cursor-pointer"></span>
          <span className="w-[20px] h-[20px] bg-[#FF3200] rounded-full cursor-pointer"></span>
          <span className="w-[20px] h-[20px] bg-[#D9D9D9] rounded-full cursor-pointer"></span>
          <span className="w-[20px] h-[20px] bg-[#FF3200] rounded-full cursor-pointer"></span>
        </div>
      </div>
      <div className="actions my-2">
        <div className="flex items-center justify-between gap-2">
          <span className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer">
            <FaCodeCompare size={25} className="text-[#000000]" />
          </span>
          <span className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer">
            <CiHeart size={25} className="text-[#000000]" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CardProducts;
