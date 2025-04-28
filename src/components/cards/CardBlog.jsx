import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const CardBlog = ({
  blogImg,
  title,
  author,
  blogPersonImg,
  desc,
  date,
  numRead,
  id,
}) => {
  return (
    <Link to={`/blog/blog-details/${id}`}>
      <motion.div
        initial={{ x: -130, opacity: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="card hover:-translate-y-5 duration-300 bg-[#D9D9D9] rounded-[11px]"
      >
        <div className="top relative rounded-[11px]">
          <img
            src={blogImg}
            className="h-[150px] sm:h-[250px] md:h-[300px] w-full  rounded-[11px]"
            alt={title}
          />
          <p className="text-[12px] text-white md:text-[20px] md:leading-[19px] uppercase font-semibold rounded-full text-center flex items-center justify-center w-fit p-1 md:p-3 absolute left-3 top-3 bg-[#FF3200]">
            10 <br /> JAN
          </p>
        </div>
        <div className="info px-1 md:px-4 flex flex-col items-center justify-center md:items-start md:justify-start py-3">
          <h4 className=" md:text-[21px] leading-[26px] tracking-normal uppercase font-medium">
            {title}
          </h4>
          <p className="text-[13px] text-center md:text-left leading-[24px] uppercase font-normal">
            {desc.substring(0, 60)}
          </p>
          <div className="flex items-center gap-3">
            <div>
              <img
                src={blogPersonImg}
                alt={author}
                className="w-[45px] h-[45px] md:h-[60px] md:w-[60px] rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col md:gap-2">
              <h3 className="uppercase text-[12px] md:text-[14px] font-semibold">
                {author}
              </h3>
              <div className="flex items-center md:gap-2 text-[10px] md:text-[14px] text-[#2B2C34]">
                {" "}
                <span>{date}</span> <span>∙</span>{" "}
                <span>{numRead} min read</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CardBlog;
