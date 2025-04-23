import React from "react";
import notFoundPic from "../assets/404.png";
import { Link } from "react-router-dom";
import MainSection from "../components/Tabs/MainSection";
const NotFound404 = () => {
  return (
    <>
      <MainSection breadcrumb={` 404`} title={"404"} />

      <div className="w-full py-20 flex items-center justify-center bg-black text-white">
        <div className="flex flex-col gap-10 items-center justify-center">
          <img
            src={notFoundPic}
            className="h-[200px]"
            alt="notFoundPic"
            loading="lazy"
          />
          <h4 className="text-[28px] leading-[55.2px] tracking-[7.6px] text-center uppercase font-bold">
            PAGE NOT FOUNDED{" "}
          </h4>
          <Link
            to="/"
            className="!bg-[#FF3200] uppercase w-fit mx-auto font-bold  !text-white py-3 rounded-xl cursor-pointer hover:!text-black hover:!bg-white hover:!shadow-2xl duration-300 px-5 md:px-14"
          >
            BACK TO HOME PAGE{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound404;
