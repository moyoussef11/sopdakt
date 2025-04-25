import React from "react";
import linkIcon from "../../assets/link.png";
import QuickAdd from "../../assets/ouik.png";
import comIcon from "../../assets/com.png";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const CardShop = ({ path, pic, name, price, category }) => {
  return (
    <>
      {" "}
      <motion.div
        initial={{ x: -250, opacity: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="card shadow-2xl  p-3 w-full  bg-white rounded-[12px] relative group duration-200"
      >
        <Link to={path}>
          <img src={linkIcon} alt="linkIcon" className="ml-auto" />
        </Link>
        <div className="relative">
          <img
            src={pic}
            className="w-full h-[252px]"
            loading="lazy"
            alt={name}
          />
        </div>
        <div>
          <span className="uppercase text-[#909090] text-sm hover:text-black">
            {category}
          </span>
          <div className="flex items-center justify-between gap-2">
            <h5 className="text-[15px] font-normal capitalize">
              {name.length > 20 ? name.slice(0, 20) + "..." : name}
            </h5>
            <span className=" leading-[31px] tracking-[0] text-[#909090] uppercase text-[15px] font-normal">
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
        <div className="actions my-4">
          <div className="flex items-center justify-between gap-2">
            <span className="w-[40px] h-[40px]  rounded-full flex items-center justify-center cursor-pointer">
              <img src={comIcon} alt="comIcon" loading="lazy" />
            </span>
            <button className=" font-bold w-full py-2 shadow-lg uppercase bg-white rounded-full flex items-center justify-center cursor-pointer">
              add to cart
            </button>
            <span className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer">
              <CiHeart size={25} className="text-[#000000]" />
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CardShop;
