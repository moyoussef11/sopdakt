import React, { useEffect, useState } from "react";
import heroImg from "../assets/male-black-oversized-so-fresh-graphic-back-print-t-shirtX 1.png";
import cat1 from "../assets/shirt.png";
import product1 from "../assets/product-6.jpg.png";
import flash from "../assets/flash.png";
import car from "../assets/car.png";
import visa from "../assets/visa.png";
import headphone from "../assets/headphone.png";
import share from "../assets/share.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import CardCat from "../components/cards/CardCat";

import CardProducts from "../components/cards/CardProducts";
import CardFeatureBox from "../components/cards/CardFeatureBox";
import axios from "axios";
import {
  BASEURL,
  FAKEBESTSELLERS,
  FEATURED_CATEGORIES,
  HOME,
  HOME_PAGE,
  PRODUCTS,
  SLIDER,
} from "../utils/Api";
import { Empty } from "antd";
import CardSkeletonCat from "../components/cards/CardSkeletonCat";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProducts } from "../rtk/features/products/actProducts";

const Home = () => {
  const [featuredCat, setFeaturedCat] = useState([]);
  const [sliderHero, setSliderHero] = useState({});
  const [mainSlider, setMainSlider] = useState({});
  const [secondSlider, setSecondSlider] = useState({});
  const [centerSection, setCenterSection] = useState({});
  const [lastSection, setLastSection] = useState([]);
  const [latestSection, setLatestSection] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { featuredProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // console.log(sliderHero);
  // console.log(mainSlider);

  const getFeaturedCat = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${BASEURL}/${HOME}/${FEATURED_CATEGORIES}`, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
          "Accept-Language": "en",
        },
      });
      setFeaturedCat(res.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getSlider = async () => {
    try {
      const res = await axios.get(`${BASEURL}/${HOME_PAGE}/${SLIDER}`, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
          "Accept-Language": "en",
        },
      });
      setSliderHero(res.data.data);
      setMainSlider(res.data.data.main_slider);
      setCenterSection(res.data.data.center_section);
      setLastSection(res.data.data.last_sections);
      setLatestSection(res.data.data.latest_section);
      setSecondSlider(res.data.data.second_slider);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getBestSeller = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${BASEURL}/${PRODUCTS}/${FAKEBESTSELLERS}`, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
          "Accept-Language": "en",
        },
      });
      setBestSeller(res.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFeaturedCat();
    getSlider();
    getBestSeller();
    dispatch(getFeaturedProducts());
  }, [dispatch]);

  // console.log(import.meta.env.VITE_API_KEY);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <main className="w-full">
        <Swiper
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-full custom-swiper-paginations"
        >
          <SwiperSlide>
            <div className="w-full h-[200px] md:h-[500px] flex flex-row">
              <div className="bg-black py-10 h-full w-full md:w-1/2 flex flex-col md:gap-2 justify-center items-center md:items-start md:px-[100px] text-white">
                <span className="text-sm md:text-[42px] font-[200px] text-center md:text-left">
                  Spring / Summer Season
                </span>
                <div className="flex items-center gap-1">
                  <span className="font-bold md:text-3xl md:leading-7">
                    up <br /> to
                  </span>
                  <p className="font-bold md:text-5xl md:tracking-[5px] uppercase">
                    50% off
                  </p>
                </div>
                <button className="bg-[#FF3200] text-sm font-normal text-white md:text-[16.8px] md:w-[224px] md:h-[52px] cursor-pointer hover:bg-white hover:text-black duration-300 md:font-bold md:leading-[20px] tracking-[0] uppercase py-2 px-4 rounded-[12px]">
                  shop now
                </button>
              </div>
              <div className="w-full h-full bg-[#e9e9e9] md:w-1/2">
                <img
                  src={heroImg}
                  className="object-contain h-full w-full"
                  alt="heroImg"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[200px] md:h-[500px] flex flex-row">
              <div className="bg-black py-10 h-full w-full md:w-1/2 flex flex-col md:gap-2 justify-center items-center md:items-start md:px-[100px] text-white">
                <span className="text-sm md:text-[42px] font-[200px] text-center md:text-left">
                  Spring / Summer Season
                </span>
                <div className="flex items-center gap-1">
                  <span className="font-bold md:text-3xl md:leading-7">
                    up <br /> to
                  </span>
                  <p className="font-bold md:text-5xl md:tracking-[5px] uppercase">
                    50% off
                  </p>
                </div>
                <button className="bg-[#FF3200] text-sm font-normal text-white md:text-[16.8px] md:w-[224px] md:h-[52px] cursor-pointer hover:bg-white hover:text-black duration-300 md:font-bold md:leading-[20px] tracking-[0] uppercase py-2 px-4 rounded-[12px]">
                  shop now
                </button>
              </div>
              <div className="w-full h-full bg-[#e9e9e9] md:w-1/2">
                <img
                  src={heroImg}
                  className="object-contain h-full w-full"
                  alt="heroImg"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
      <section
        id="categories"
        className="py-12 md:py-24 overflow-hidden px-10 sm:px-[100px] md:px-[120px]"
      >
        <h4 className="font-bold uppercase text-[24.8px] sm:text-[34.8px] leading-[24px] tracking-[3.36px] text-center">
          CATEGORIES
        </h4>
        {isLoading ? (
          // سكلتون أثناء التحميل
          <div className="cards grid grid-cols-4 gap-4 lg:gap-28 w-fit mx-auto py-14">
            {[...Array(8)].map((_, index) => (
              <CardSkeletonCat key={index} />
            ))}
          </div>
        ) : featuredCat && featuredCat.length > 0 ? (
          // عرض الكروت لما تكون البيانات موجودة
          <div className="cards grid grid-cols-4 gap-4 lg:gap-28 w-fit mx-auto py-14">
            {featuredCat.map((cat, index) => (
              <CardCat
                key={index}
                pic={cat.image_url}
                name={cat.name}
                path={`/categories/${cat.id}`}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-14 text-lg">
            <Empty description=" No data found." />
          </div>
        )}
      </section>
      <section id="best-seller" className="py-12 md:py-20 bg-[#D9D9D9] px-5">
        <h4 className="font-bold uppercase text-[34.8px] leading-[24px] tracking-[3.36px] text-center">
          BEST SELLER
        </h4>
        <div className="cards md:mt-20 my-10">
          <div className="relative w-full h-[350px] md:h-[450px]">
            {isLoading ? (
              <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="loader"></div> <span>loading...</span>
              </div>
            ) : bestSeller && bestSeller.length > 0 ? (
              <Swiper
                slidesPerView={5}
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1100: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  1400: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper w-full h-full custom-swiper-paginations"
              >
                {bestSeller.map((item) => (
                  <SwiperSlide key={item.id}>
                    <CardProducts
                      id={item.id}
                      slug={item.slug}
                      pic={item.image_url || product1}
                      name={item.name}
                      price={item.price}
                      category={item.category.name}
                      colors={item.colors_with_sizes}
                      sizes={item.colors_with_sizes.map((item) => item.sizes)}
                      actions={bestSeller.map((item) => item.actions)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="flex justify-center items-center w-full h-full">
                <Empty description=" No data found." />
              </div>
            )}
          </div>
        </div>
      </section>
      <section
        id="flash"
        style={{ backgroundImage: `url(${flash})` }}
        className="relative w-full h-[300px] md:h-[599px] bg-center bg-cover bg-no-repeat flex items-center justify-center"
      >
        <div className=" absolute left-0  w-full h-full bg-black opacity-65"></div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-5 md:gap-12 text-white text-center">
          <h5 className=" font-normal text-center text-[52.8px] leading-[24px] md:tracking-[27.36px]">
            FLASH SALE
          </h5>
          <span className="uppercase text-4xl md:text-[91.8px] md:leading-[24px] md:tracking-[3.36px] text-center">
            UP TO 70%
          </span>
          <button className="bg-[#FF3200] text-white text-[16.8px] w-[224px] h-[52px] cursor-pointer hover:bg-white hover:text-black duration-300 font-bold leading-[20px] tracking-[0] uppercase py-2 px-4 rounded-[12px]">
            shop now
          </button>{" "}
        </div>
      </section>
      <section id="FEATURED PRODUCTS" className="py-10 overflow-hidden">
        <h4 className="font-bold uppercase text-[34.8px] leading-[34px] md:leading-[24px] md:tracking-[3.36px] text-center">
          FEATURED <br className="md:hidden" /> PRODUCTS
        </h4>{" "}
        <div className="bg-[#FF3200] p-3 my-10 flex items-center justify-center">
          <div className="my-10 flex flex-col items-center justify-center gap-5 md:gap-10 text-white text-center">
            <div
              className="cards py-10 grid grid-cols-2 md:grid-cols-3 gap-5 relative"
              // className="cards py-10 flex items-center justify-center gap-5 md:gap-10 flex-wrap"
            >
              {isLoading ? (
                <div className="flex mx-auto absolute flex-col justify-center items-center w-full h-full">
                  <div className="loaderO"></div>
                  <span className="text-center">loading...</span>
                </div>
              ) : featuredProducts && featuredProducts.length > 0 ? (
                featuredProducts?.map((item) => (
                  <CardProducts
                    key={item.id}
                    id={item.id}
                    slug={item.slug}
                    pic={item.image_url || product1}
                    name={item.name}
                    price={item.price}
                    category={item.category_name}
                    colors={item.colors_with_sizes}
                    sizes={item.colors_with_sizes?.map((item) => item.sizes)}
                    actions={bestSeller?.map((item) => item.actions)}
                    priceAfterDiscount={item.after_discount_price}
                  />
                ))
              ) : (
                <div className="flex justify-center items-center w-full h-full">
                  <Empty description=" No data found." />
                </div>
              )}
            </div>
            <button className="my-5 mx-auto bg-white text-black px-[50px] py-2 shadow-2xl uppercase font-bold cursor-pointer rounded-[9px]">
              shop now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-5 md:gap-10 lg:gap-20  w-fit mx-auto">
          <CardFeatureBox
            icon={headphone}
            title="Customer Support"
            subtitle="Need Assistance?"
          />
          <CardFeatureBox
            icon={visa}
            title="Secured Payment"
            subtitle="Safe & Fast"
          />
          <CardFeatureBox
            icon={share}
            title="Free Returns"
            subtitle="Easy & Free"
          />
          <CardFeatureBox
            icon={car}
            title="Free Shipping"
            subtitle="Made To Help You"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
