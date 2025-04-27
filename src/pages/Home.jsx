import React, { useEffect } from "react";
import heroImg from "../assets/male-black-oversized-so-fresh-graphic-back-print-t-shirtX 1.png";
import cat1 from "../assets/shirt.png";
import product1 from "../assets/product-6.jpg.png";
import flash from "../assets/flash.png";
import car from "../assets/car.png";
import visa from "../assets/visa.png";
import headphone from "../assets/headphone.png";
import share from "../assets/share.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import CardCat from "../components/cards/CardCat";

import CardProducts from "../components/cards/CardProducts";
import CardFeatureBox from "../components/cards/CardFeatureBox";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <div className="cards grid grid-cols-4 gap-4 w-full  py-14">
          <CardCat pic={cat1} name="T-Shirts" />
          <CardCat pic={cat1} name="jeans" />
          <CardCat pic={cat1} name="watches" />
          <CardCat pic={cat1} name="shirts" />
          <CardCat pic={cat1} name="jeans" />
          <CardCat pic={cat1} name="T-Shirts" />
          <CardCat pic={cat1} name="watches" />
          <CardCat pic={cat1} name="watches" />
        </div>
      </section>
      <section id="best-seller" className="py-12 md:py-20 bg-[#D9D9D9] px-5">
        <h4 className="font-bold uppercase text-[34.8px] leading-[24px] tracking-[3.36px] text-center">
          BEST SELLER
        </h4>
        <div className="cards md:mt-20 my-10">
          <div className="relative w-full h-[350px] md:h-[450px]">
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
              <SwiperSlide>
                <CardProducts
                  id={"1"}
                  pic={product1}
                  name={"Hyperadapt Shield Lite"}
                  price={200}
                  category={"category"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProducts
                  id={"1"}
                  pic={product1}
                  name={"Hyperadapt Shield Lite"}
                  price={200}
                  category={"category"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProducts
                  id={"1"}
                  pic={product1}
                  name={"Hyperadapt Shield Lite"}
                  price={200}
                  category={"category"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProducts
                  id={"1"}
                  pic={product1}
                  name={"Hyperadapt Shield Lite"}
                  price={200}
                  category={"category"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProducts
                  id={"1"}
                  pic={product1}
                  name={"Hyperadapt Shield Lite"}
                  price={200}
                  category={"category"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProducts
                  id={"1"}
                  pic={product1}
                  name={"Hyperadapt Shield Lite"}
                  price={200}
                  category={"category"}
                />
              </SwiperSlide>
            </Swiper>
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
              className="cards py-10 grid grid-cols-2 md:grid-cols-3 gap-5"
              // className="cards py-10 flex items-center justify-center gap-5 md:gap-10 flex-wrap"
            >
              <CardProducts
                path={"/"}
                pic={product1}
                name={"Hyperadapt Shield Lite"}
                price={200}
                category={"category"}
              />
              <CardProducts
                path={"/"}
                pic={product1}
                name={"Hyperadapt Shield Lite"}
                price={200}
                category={"category"}
              />
              <CardProducts
                path={"/"}
                pic={product1}
                name={"Hyperadapt Shield Lite"}
                price={200}
                category={"category"}
              />
            </div>
            <button className="my-5 mx-auto bg-white text-black px-[50px] py-2 shadow-2xl uppercase font-bold cursor-pointer rounded-[9px]">
              shop now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-10 lg:gap-20  w-fit mx-auto">
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
