import React from "react";
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
  return (
    <>
      <main className="w-full h-[596px]">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper custom-swiper-pagination"
        >
          <SwiperSlide>
            <div className="w-full h-[596px] flex flex-col md:flex-row">
              <div className="bg-black py-10 h-full w-full md:w-1/2 flex flex-col gap-2 justify-center items-center md:items-start md:px-[100px] text-white">
                <span className="text-[42px] font-[200] text-center md:text-left">
                  Spring / Summer Season
                </span>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-3xl leading-7">
                    up <br /> to
                  </span>
                  <p className="font-bold text-5xl tracking-[5px] uppercase">
                    50% off
                  </p>
                </div>
                <button className="bg-[#FF3200] text-white text-[16.8px] w-[224px] h-[52px] cursor-pointer hover:bg-white hover:text-black duration-300 font-bold leading-[20px] tracking-[0] uppercase py-2 px-4 rounded-[12px]">
                  shop now
                </button>
              </div>
              <div className="w-full h-full md:w-1/2">
                <img
                  src={heroImg}
                  className="h-full w-full object-center"
                  alt="heroImg"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[596px] flex flex-col md:flex-row">
              <div className="bg-black py-10 h-full w-full md:w-1/2 flex flex-col gap-2 justify-center items-center md:items-start md:px-[100px] text-white">
                <span className="text-[42px] font-[200] text-center md:text-left">
                  Spring / Summer Season
                </span>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-3xl leading-7">
                    up <br /> to
                  </span>
                  <p className="font-bold text-5xl tracking-[5px] uppercase">
                    50% off
                  </p>
                </div>
                <button className="bg-[#FF3200] text-white text-[16.8px] w-[224px] h-[52px] cursor-pointer hover:bg-white hover:text-black duration-300 font-bold leading-[20px] tracking-[0] uppercase py-2 px-4 rounded-[12px]">
                  shop now
                </button>
              </div>
              <div className="w-full h-full md:w-1/2">
                <img
                  src={heroImg}
                  className="h-full w-full object-center"
                  alt="heroImg"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
      <section
        id="categories"
        className="py-24 overflow-hidden px-10 sm:px-[100px] md:px-[140px]"
      >
        <h4 className="font-bold uppercase text-[34.8px] leading-[24px] tracking-[3.36px] text-center">
          CATEGORIES
        </h4>
        <div className="cards  py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <CardCat pic={cat1} name="T-Shirts" />
          <CardCat name="jeans" />
          <CardCat name="watches" />
          <CardCat name="shirts" />
          <CardCat name="jeans" />
          <CardCat name="T-Shirts" />
          <CardCat name="watches" />
          <CardCat name="watches" />
        </div>
      </section>
      <section id="best-seller" className="py-20 bg-[#D9D9D9] px-5">
        <h4 className="font-bold uppercase text-[34.8px] leading-[24px] tracking-[3.36px] text-center">
          BEST SELLER
        </h4>
        <div className="cards mt-20 my-10">
          <div className="relative">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
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
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="mySwiper custom-swiper-paginations"
            >
              <SwiperSlide>
                <CardProducts
                  path={"/"}
                  pic={product1}
                  name={"Hyperadapt Shield Lite"}
                  price={200}
                  category={"category"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProducts
                  path={"/"}
                  pic={product1}
                  name={"Hyperadapt Shield Lite"}
                  price={200}
                  category={"category"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProducts
                  path={"/"}
                  pic={product1}
                  name={"Hyperadapt Shield Lite"}
                  price={200}
                  category={"category"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProducts
                  path={"/"}
                  pic={product1}
                  name={"Hyperadapt Shield Lite"}
                  price={200}
                  category={"category"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProducts
                  path={"/"}
                  pic={product1}
                  name={"Hyperadapt Shield Lite"}
                  price={200}
                  category={"category"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardProducts
                  path={"/"}
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
        className="bg-blue-400 relative w-full h-[599px] bg-center bg-cover bg-no-repeat flex items-center justify-center"
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
            <div className="cards py-10 flex items-center justify-center gap-5 md:gap-10 flex-wrap">
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
        <div className="flex items-center justify-center gap-10 flex-wrap">
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
