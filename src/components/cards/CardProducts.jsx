import React, { useState } from "react";
import linkIcon from "../../assets/link.png";
import QuickAdd from "../../assets/ouik.png";
import { FaCodeCompare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/features/products/actProducts";
import { message } from "antd";

const CardProducts = ({
  slug,
  pic,
  actions,
  id,
  name,
  price,
  category,
  sizes,
  colors,
  priceAfterDiscount,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });
  const [added, setAdded] = useState(false);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);

  const [quantity, setQuantity] = useState(1);

  const disPatch = useDispatch();
  const handleAddToCart = async () => {
    const cartData = {
      product_id: id,
      quantity,
      color_id: colorSelected || 1,
      size_id: sizeSelected || 1,
    };
    const response = await disPatch(addToCart(cartData));
    console.log(response);

    if (response.meta.requestStatus === "fulfilled") {
      message.success("Product added to cart successfully!");
      setAdded(true);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ x: -300, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: 0, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="card p-1 md:p-3 w-full md:w-[263px] bg-white rounded-[9px] relative group duration-200"
    >
      <Link to={`/product/${slug}`}>
        <img src={linkIcon} alt="linkIcon" className="ml-auto" />
      </Link>
      <div className="relative">
        <img
          src={pic}
          className="w-full object-contain h-[100px] md:w-[219px] md:h-[219px]"
          loading="lazy"
          alt={name}
        />
        <div className="absolute top-0 left-0 w-full h-full group duration-300 hidden group-hover:flex items-center justify-center gap-2">
          <div className="w-full h-full absolute bg-white opacity-0 group-hover:opacity-35"></div>
          <div className="flex w-full z-10 items-center flex-col justify-center gap-2">
            <div className="flex w-full flex-wrap  items-center justify-center gap-2">
              {sizes && sizes.length > 0
                ? sizes?.map((sizeArray) =>
                    sizeArray.map((item, subIndex) => (
                      <span
                        onClick={() => setSizeSelected(item.size_name)}
                        key={subIndex}
                        className="text-black p-1 sm:p-[12px] uppercase w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] bg-[#F5F4F4] flex items-center justify-center rounded-[9px] cursor-pointer"
                      >
                        {item.size_name
                          .split(" ")
                          .map((word) => word[0].toLowerCase())
                          .join("")}{" "}
                      </span>
                    ))
                  )
                : ""}
            </div>

            {added ? (
              <span className="text-white bg-[#FF3200] text-sm text-center rounded-2xl capitalize p-1 md:p-2">
                added to cart successfully.
              </span>
            ) : (
              <button
                onClick={() => handleAddToCart(id)}
                className="bg-[#FF3200] text-white rounded-[9px] md:w-[200px] flex items-center justify-center sm:gap-2 py-1 sm:py-2 px-2 sm:px-4 cursor-pointer hover:text-black duration-300 font-bold text-[10px] sm:text-[18px] sm:leading-[20px] md:tracking-[0] uppercase"
              >
                <img
                  src={QuickAdd}
                  className="h-3 w-3 sm:h-5 sm:w-5"
                  alt="QuickAdd"
                />
                Quick Add
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
        <span className="uppercase text-[#909090] text-sm text-center mx-auto block sm:mx-0 sm:text-left hover:text-black">
          {category}
        </span>
        <div className="flex items-center flex-wrap justify-center sm:justify-between gap-2">
          <h5 className="text-sm md:text-[15px] text-black font-normal capitalize">
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </h5>
          <span className="leading-[31px] tracking-[0] text-[#909090] uppercase text-[15px] font-normal">
            {priceAfterDiscount < price ? (
              <>
                <span className="line-through mr-2">{price} EGP</span>
                <span className="text-[#ff0000]">{priceAfterDiscount} EGP</span>
              </>
            ) : (
              <>{price} EGP</>
            )}
          </span>
        </div>
      </div>
      <div className="colors">
        <p className="text-[12px] leading-[16px] tracking-[0.2px] text-[#737373] capitalize">
          none
        </p>
        <div className="flex items-center justify-center md:justify-start gap-1 mt-1">
          {colors && colors.length > 0 ? (
            colors?.map((color, index) => (
              <span
                key={index}
                className="w-[20px] h-[20px] rounded-full cursor-pointer"
                style={{ backgroundColor: color.color_code }}
              ></span>
            ))
          ) : (
            <span
              key={0}
              className="w-[20px] h-[20px] rounded-full cursor-pointer"
              style={{ backgroundColor: "#fff" }}
            ></span>
          )}
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
