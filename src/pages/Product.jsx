import React, { use, useEffect, useState } from "react";
import pro1 from "../assets/product1.png";
import pro2 from "../assets/product2.png";
import pro3 from "../assets/product3.png";
import pro from "../assets/pro.png";
import down from "../assets/down.png";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import CardOffer from "../components/cards/CardOffer";
import ProductDetailsTabs from "../components/Tabs/ProductDetailsTabs";
import FAQSection from "../components/Accordion/FAQSection";
import product1 from "../assets/product-6.jpg.png";
import CardProductLike from "../components/cards/CardProductLike";
import SizeChart from "../components/Tabs/Size";
import { motion, useInView } from "framer-motion";
import SizeRecommendation from "../components/Tabs/SizeRecommendation";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishList,
  getProduct,
  getProductColorsAndSizes,
} from "../rtk/features/products/actProducts";
import { message } from "antd";
import { set } from "react-hook-form";

const faqs = [
  {
    question: "WHAT IS WEBFLOW AND WHY IS IT THE BEST WEBSITE BUILDER?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "WHAT IS YOUR FAVORITE TEMPLATE FROM BRIX TEMPLATES?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus reprehenderit deleniti.",
  },
  {
    question: "HOW DO YOU CLONE A WEBFLOW TEMPLATE FROM THE SHOWCASE?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
  {
    question: "WHY IS BRIX TEMPLATES THE BEST WEBFLOW AGENCY OUT THERE?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatem molestias sunt.",
  },
];

const Product = () => {
  const { slug } = useParams();
  const [idProdcut, setIdProduct] = useState(null);
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState([]);
  const productsState = useSelector((state) => state.products);
  const { product } = productsState;
  const disPatch = useDispatch();
  const nav = useNavigate();
  const [added, setAdded] = useState(false);
  const [addedToWish, setAddedToWish] = useState("");

  const handleAddToWishList = async (id) => {
    const res = await disPatch(addToWishList(id));
    console.log(res);
  };

  const getProductData = async () => {
    const response = await disPatch(getProduct(slug));

    if (response.meta.requestStatus === "fulfilled") {
      setIdProduct(response.payload.id);
      setMainImage(response.payload.media.feature_product_image);
      setImages(response.payload.media.more_product_images_and_videos);
    }
  };

  const getAllColorsAndSizes = async () => {
    const response = await disPatch(getProductColorsAndSizes(idProdcut));
    if (response.meta.requestStatus === "fulfilled") {
      setColors(response.payload.variants);
      const allSizes = response.payload.variants.map((item) => {
        return item.sizes;
      });
      setSizes(allSizes);
    }
  };


  console.log(product);
  

  const handleAddToCart = () => {
    if (!selectedSize) {
      return message.error("Please select size");
    }
    if (!color) {
      return message.error("Please select color");
    }
    if (quantity <= 0) {
      return message.error("Please Enters quantity");
    }
    const cartData = {
      product_id: idProdcut,
      quantity: quantity > 0 ? quantity : 1,
      color_id: color,
      size_id: selectedSize,
    };
    disPatch(addToCart(cartData)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        message.success("Added to cart successfully");
        setAdded(true);
        // nav("/cart");
      } else {
        setAdded(false);
        message.error("Failed to add to cart");
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductData();
  }, [slug]);

  useEffect(() => {
    if (idProdcut) {
      getAllColorsAndSizes();
    }
  }, [idProdcut]);

  const [openSize, setOpenSize] = useState(false);
  const [openSizeRec, setOpenSizeRec] = useState(false);

  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.05,
  });

  const toggleAddWishlist = async (id) => {
    const res = await disPatch(addToWishList(id));
    if (res.payload.status === "added") {
      setAddedToWish("added");
      message.success("Added to wishlist successfully");
    } else if (res.payload.status === "removed") {
      setAddedToWish("removed");
      message.success("Removed from wishlist successfully");
    } else {
      message.error("Failed to add to wishlist please login and try again");
    }
  };


  return (
    <>
      <div className="w-full text-center py-5 md:py-10">
        <span className="text-[16.8px] uppercase text-[#716F6F] text-center">
          {" "}
          home &gt; categories &gt;{" "}
          <span className="font-medium text-black">
            {product?.category_name}
          </span>{" "}
        </span>
      </div>
      <div className="hero scale-95 overflow-hidden px-5 md:px-24 py-5 md:py-10 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full py-10 md:w-1/2 flex flex-col-reverse md:flex-row gap-4 items-center justify-center">
          {/* <div className="imgs md:flex flex items-center gap-5 flex-wrap justify-center md:flex-col md:gap-2">
            <img
              src={pro1}
              alt="productImg"
              onClick={() => setMainImage(pro1)}
              className={`h-[100px] md:h-full md:w-[170px] rounded-[13px] cursor-pointer ${
                mainImage === pro1
                  ? "border border-[#FF3200]"
                  : "border border-transparent hover:border-[#FF3200]"
              }`}
              loading="lazy"
            />
            <img
              src={pro2}
              alt="productImg"
              onClick={() => setMainImage(pro2)}
              className={`h-[100px] md:h-full md:w-[170px] rounded-[13px] cursor-pointer ${
                mainImage === pro2
                  ? "border border-[#FF3200]"
                  : "border border-transparent hover:border-[#FF3200]"
              }`}
              loading="lazy"
            />
            <img
              src={pro3}
              alt="productImg"
              onClick={() => setMainImage(pro3)}
              className={`h-[100px] md:h-full md:w-[170px] rounded-[13px] cursor-pointer ${
                mainImage === pro3
                  ? "border border-[#FF3200]"
                  : "border border-transparent hover:border-[#FF3200]"
              }`}
              loading="lazy"
            />
          </div> */}

          {images?.length > 0 ? (
            <div className="imgs md:flex flex items-center gap-5 flex-wrap justify-center md:flex-col md:gap-2">
              <img
                src={product?.media?.feature_product_image}
                alt="media"
                onClick={() =>
                  setMainImage(product?.media?.feature_product_image)
                }
                className={`h-[100px] md:h-[100px] w-[170px] md:w-[170px] rounded-[13px] cursor-pointer object-cover ${
                  mainImage === product?.media?.feature_product_image
                    ? "border border-[#FF3200]"
                    : "border border-transparent hover:border-[#FF3200]"
                }`}
                loading="lazy"
              />
              {images.map((item, index) => {
                const isVideo =
                  item?.endsWith(".mp4") || item?.includes(".mp4");
                return isVideo ? (
                  <video
                    key={index}
                    src={item}
                    controls
                    onClick={() => setMainImage(item)}
                    className={`h-[100px] md:h-[100px] w-[170px] md:w-[170px] rounded-[13px] cursor-pointer object-cover ${
                      mainImage === item
                        ? "border border-[#FF3200]"
                        : "border border-transparent hover:border-[#FF3200]"
                    }`}
                  />
                ) : (
                  <img
                    key={index}
                    src={item}
                    alt="media"
                    onClick={() => setMainImage(item)}
                    className={`h-[100px] md:h-[100px] w-[170px] md:w-[170px] rounded-[13px] cursor-pointer object-cover ${
                      mainImage === item
                        ? "border border-[#FF3200]"
                        : "border border-transparent hover:border-[#FF3200]"
                    }`}
                    loading="lazy"
                  />
                );
              })}
            </div>
          ) : (
            "not found img"
          )}
          {mainImage && (
            <div className="img w-full">
              {mainImage?.toLowerCase().endsWith(".mp4") ? (
                <video
                  src={mainImage}
                  controls
                  className="rounded-[13px] w-full object-contain"
                />
              ) : (
                <img
                  src={mainImage}
                  alt="productImg"
                  className="rounded-[13px] h-[400px] md:h-[620px] w-full object-contain"
                  loading="lazy"
                />
              )}
            </div>
          )}
        </div>
        <motion.div
          ref={ref}
          initial={{ x: 300, opacity: 0 }}
          animate={{
            x: isInView || window.innerWidth < 768 ? 0 : 360,
            opacity: isInView || window.innerWidth < 768 ? 1 : 0,
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full  md:w-1/2"
        >
          <div className="head border-b-2 border-[#D9D9D9] pb-5">
            <h4 className="font-bold text-[20px] md:text-[45px] md:leading-[33.24px] uppercase tracking-[0] ">
              {product?.name}
            </h4>
            <div className="flex items-center justify-between flex-wrap gap-2 md:my-5">
              <div className="stars flex items-center flex-wrap gap-1 my-5">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`text-[25px] ${
                      index < Math.round(product.real_average_rating)
                        ? "text-[#FFA500]" // نجمة ملونة (مقيمة)
                        : "text-gray-300" // نجمة غير ملونة
                    }`}
                  />
                ))}
              </div>
              <p className="font-semibold text-[14px] leading-[22px] underline cursor-pointer">
                ADD TO COMPARE
              </p>
            </div>
            {product?.after_discount_price < product?.price ? (
              <>
                <span className="line-through mr-2 text-3xl md:text-[51px">
                  {product?.price} EGP
                </span>
                <span className="text-[#ff0000] text-3xl md:text-[51px">
                  {product?.after_discount_price} EGP
                </span>
              </>
            ) : (
              <>
                <span className="text-3xl md:text-[51px] font-bold leading-[33.24px] text-[#FF3200] tracking-[0]">
                  {product?.price}EGP
                </span>{" "}
              </>
            )}
          </div>
          <div className="colors border-b-2 border-[#D9D9D9] md:pb-5">
            <h5 className="text-[18px] leading-[33.24px] text-[#D9D9D9] tracking-[0] my-3">
              SELECT COLOR
            </h5>
            <div className="flex items-center gap-2 my-3">
              {colors?.length > 0 ? (
                colors.map((item) => (
                  <span
                    key={item.id}
                    style={{ backgroundColor: item.color_name }}
                    onClick={() => setColor(item.color_id)}
                    className={`w-[40px] h-[40px] rounded-full cursor-pointer p-3 border-2 ${
                      item.color_id === color
                        ? "border-[#FF3200]"
                        : "border-transparent"
                    } hover:border-[#FF3200] transition-all duration-200`}
                  ></span>
                ))
              ) : (
                <p className="text-sm text-gray-500">لا توجد ألوان متاحة</p>
              )}
            </div>
          </div>
          <div className="sizes border-b-2 border-[#D9D9D9] md:pb-5">
            <h5 className="text-[18px] leading-[33.24px] text-[#D9D9D9] tracking-[0] my-3">
              CHOOSE SIZE{" "}
            </h5>
            <div className="flex items-center justify-between flex-wrap gap-2 my-3">
              <div className="flex items-center justify-center flex-wrap gap-2 my-3">
                {sizes?.flat()?.map((item) => {
                  const isActive = item.size_id === selectedSize;
                  return (
                    <span
                      key={item.id}
                      onClick={() => setSelectedSize(item.size_id)}
                      className={`min-w-[40px] h-[40px] px-3 bg-[#F5F5F5] rounded-[9px] cursor-pointer border-2 flex items-center justify-center font-bold text-[12px] leading-[33.24px] tracking-[0] transition-all duration-200
        ${
          isActive
            ? "border-[#FF3200] text-[#FF3200]"
            : "border-transparent hover:border-[#FF3200] hover:text-[#FF3200]"
        }`}
                    >
                      {item.size_name
                        .split(" ")
                        .map((word) => word[0].toLowerCase())
                        .join("")}{" "}
                    </span>
                  );
                })}

                <span
                  onClick={() => setOpenSizeRec(true)}
                  className="bg-[#F5F5F5] capitalize rounded-[9px] cursor-pointer border-2 border-transparent p-1 hover:border-[#FF3200] hover:text-[#FF3200] font-bold text-[12px] leading-[33.24px] tracking-[0]"
                >
                  Size Recomnadtion{" "}
                </span>
              </div>
              <p
                onClick={() => setOpenSize(true)}
                className="font-semibold text-[14px] leading-[22px] underline cursor-pointer"
              >
                SIZE GUIDE{" "}
              </p>{" "}
            </div>
          </div>
          <div className="actions flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center flex-wrap gap-2 my-3">
              <div className="border border-[#DDDBDC] flex items-center justify-between gap-2 my-3 py-2 px-4 rounded-[9px]">
                <span
                  onClick={() => setQuantity(quantity - 1)}
                  className="cursor-pointer text-xl"
                >
                  -
                </span>
                <span>{quantity <= 0 ? 0 : quantity}</span>
                <span
                  onClick={() => setQuantity(quantity + 1)}
                  className="cursor-pointer text-xl"
                >
                  +
                </span>
              </div>
              {added ? (
                <span className="bg-[#ff3200] text-center border-2 border-transparent  text-white text-[12.8px] w-[154px] h-[52px] duration-300 font-bold leading-[20px] tracking-[0] uppercase py-2 px-4 rounded-[12px]">
                  added to cart successfully{" "}
                </span>
              ) : (
                <button
                  onClick={() => handleAddToCart()}
                  className="bg-[#ff3200] border-2 border-transparent hover:border-black text-white text-[16.8px] w-[224px] h-[52px] cursor-pointer hover:bg-white hover:text-black duration-300 font-bold leading-[20px] tracking-[0] uppercase py-2 px-4 rounded-[12px]"
                >
                  add to cart{" "}
                </button>
              )}
            </div>
            {addToWishList === "added" ? (
              <CiHeart
                onClick={() => toggleAddWishlist(idProdcut)}
                color="#FF3200"
                className="text-[30px] cursor-pointer"
              />
            ) : (
              <CiHeart
                onClick={() => toggleAddWishlist(idProdcut)}
                className="text-[30px] cursor-pointer"
              />
            )}
          </div>
          <div className="note text-[20px] flex flex-col gap-2 my-3 w-full shadow-2xl p-4 rounded-2xl">
            <h4 className="font-bold  leading-[100%] uppercase text-[#FF3200]">
              Note:
            </h4>
            <p className="uppercase font-medium my-2">
              {" "}
              every one can buy 2 only
            </p>
          </div>
        </motion.div>
      </div>
      <section id="offers" className="md:py-14 overflow-hidden">
        <h4 className="font-bold uppercase text-[34.8px] sm:leading-[24px] tracking-[3.36px] text-center">
          special bundle offers{" "}
        </h4>
        <div className="cards lg:scale-90 my-14 grid grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-24">
          <CardOffer
            title={"EID OFFER!"}
            desc={"GET THIS BUNDLE NOW"}
            offer={"BUY 1 GET 1"}
            pic1={pro}
            pic2={pro}
          />
          <CardOffer
            title={"EID OFFER!"}
            desc={"GET THIS BUNDLE NOW"}
            offer={"BUY 1 GET 1"}
            pic1={pro}
            pic2={pro}
          />
          <CardOffer
            title={"EID OFFER!"}
            desc={"GET THIS BUNDLE NOW"}
            offer={"BUY 1 GET 1"}
            pic1={pro}
            pic2={pro}
          />
        </div>
        <div className="flex items-center justify-end cursor-pointer gap-2 my-5 px-5 md:px-24">
          <p className="font-semibold text-[14px] leading-[22px] underline cursor-pointer">
            ADD TO COMPARE
          </p>
          {/* <img
            src={down}
            className="h-10 cursor-pointer"
            alt="down"
            loading="lazy"
          /> */}
        </div>
      </section>
      <section id="tabs" className="py-5 md:py-14 px-5 md:px-24">
        <ProductDetailsTabs product={product} />
      </section>
      <section id="accordion" className="py-5 md:py-14 px-5 md:px-24">
        <FAQSection faqs={faqs.slice(0, 3)} />
      </section>
      <section id="offers" className="py-14 bg-[#D9D9D9] overflow-hidden">
        <h4 className="font-bold uppercase text-[34.8px] md:leading-[24px] tracking-[3.36px] text-center">
          YOU MIGHT ALSO LIKE{" "}
        </h4>
        <div
          className="cards py-10 px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 md:gap-10 "
          // className="cards py-10 px-5 flex items-center justify-center gap-5 md:gap-10 flex-wrap"
        >
          <CardProductLike
            id={"1"}
            pic={product1}
            name={"Hyperadapt Shield Lite"}
            price={200}
            category={"category"}
          />
          <CardProductLike
            id={"2"}
            pic={product1}
            name={"Hyperadapt Shield Lite"}
            price={200}
            category={"category"}
          />
          <CardProductLike
            id={"3"}
            pic={product1}
            name={"Hyperadapt Shield Lite"}
            price={200}
            category={"category"}
          />
          <CardProductLike
            id={"4"}
            pic={product1}
            name={"Hyperadapt Shield Lite"}
            price={200}
            category={"category"}
          />
        </div>
      </section>
      <SizeChart
        data={product?.size_guide}
        openSize={openSize}
        setOpenSize={setOpenSize}
      />
      <SizeRecommendation
        openSizeRec={openSizeRec}
        setOpenSizeRec={setOpenSizeRec}
      />
    </>
  );
};

export default Product;
