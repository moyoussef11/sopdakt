import React, { useEffect } from "react";
import herpAbout from "../assets/herpAbout.png";
import service1 from "../assets/Services.png";
import service2 from "../assets/Services2.png";
import service3 from "../assets/Services3.png";
import service4 from "../assets/Services4.png";
import founder from "../assets/founder.png";
import CardService from "../components/cards/CardService";
import { motion, useInView } from "framer-motion";
import MainSection from "../components/Tabs/MainSection";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });
  return (
    <>
      <MainSection breadcrumb={`ABOUT US`} title={"ABOUT US"} />

      <main
        className="w-full h-[400px] relative bg-center bg-no-repeat bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${herpAbout})`,
        }}
      >
        <div className="h-full w-full absolute bg-[#FF32006B]"></div>
        <h4 className="text-3xl sm:text-[50px] relative font-bold text-white text-center md:leading-[54px] md:tracking-[0.2px] uppercase">
          We believe <br /> we can all make <br /> a difference.
        </h4>
      </main>
      <section id="our-story" className="py-1 px-5 md:px-24">
        <div className="max-w-[1100px] scale-90 mx-auto">
          <h4 className="text-[54px] mb-5 leading-[64px] md:tracking-[49px] text-[#FF3200] text-center font-bold uppercase">
            Our Story
          </h4>
          <p className="py-3 text-[26px] leading-[36px] tracking-[0] font-normal text-center md:text-left">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="py-3 text-[26px] leading-[36px] tracking-[0] font-normal text-center md:text-left">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </section>
      <section id="vision" className="py-1 px-5 md:px-8 lg:px-24">
        <div className="flex scale-90 gap-8 flex-col flex-wrap md:flex-row lg:flex-nowrap">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-10">
            <div className="w-full bg-white rounded-[11px] shadow-2xl p-6">
              <h5 className="uppercase text-3xl md:text-[54px] md:leading-[64px] md:tracking-[50px] font-bold  text-center md:text-left mb-7">
                VISION
              </h5>
              <p className="font-normal text-[#282D3B] uppercase text-2xl md:text-[28px] md:leading-[39px] tracking-[0] text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry. has been the industry’ standard dummy
              </p>
            </div>
            <div className="w-full bg-white rounded-[11px] shadow-2xl p-6">
              <h5 className="uppercase text-3xl md:text-[54px] md:leading-[64px] md:tracking-[50px] font-bold  text-center md:text-left mb-7">
                MISION
              </h5>
              <p className="font-normal text-[#282D3B] uppercase text-2xl md:text-[28px] md:leading-[39px] tracking-[0] text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry. has been the industry’ standard dummy
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="w-full bg-black text-white rounded-[11px] shadow-2xl p-6">
              <h5 className="uppercase text-3xl md:text-[54px] text-[54px] md:leading-[64px] tracking-[13px] font-bold  text-center md:text-left mb-7">
                VALUES
              </h5>
              <p className="font-normal uppercase text-2xl md:text-[28px] md:leading-[39px] tracking-[0] text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry. has been the industry’ standard dummy
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="founder" className="py-28 px-5 md:px-24 overflow-hidden">
        <div
          className="services max-w-[1100px] scale-125 sm:scale-none w-fit mx-auto grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 "
          // className="services max-w-[1100px] mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <CardService
            nums={"10.5k"}
            pic={service1}
            desc={"Sallers active our site"}
            className={""}
          />

          <CardService
            nums={"33k"}
            pic={service2}
            desc={"Mopnthly Produduct Sale"}
            className={"bg-[#FF3200] text-white"}
          />

          <CardService
            nums={"45.5k"}
            pic={service3}
            desc={"Customer active in our site"}
            className={""}
          />

          <CardService
            nums={"25k"}
            pic={service4}
            desc={"Anual gross sale in our site"}
            className={""}
          />
        </div>

        <div className="flex overflow-hidden flex-col items-center justify-center my-10 bg-white p-4">
          <motion.div
            ref={ref}
            initial={{ x: 15000, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex flex-row bg-white rounded-xl overflow-hidden"
          >
            {/* Vertical "FOUNDER" text */}
            <div className="flex items-start px-4 bg-white">
              <p className="[writing-mode:vertical-rl] rotate-180 text-[#FF3200] text-3xl sm:text-[54px] font-semibold  leading-[64px] tracking-[15px] sm:tracking-[30px]  uppercase">
                Founder
              </p>
            </div>

            {/* Main content */}
            <div className="p-6">
              <img
                src={founder}
                alt="Founder"
                className="rounded-xl w-[400px] h-auto object-cover"
              />
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-black">
                  Mohammed Ahmed
                </h2>
                <p className="text-gray-500 text-sm">Founder & Chairman</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
