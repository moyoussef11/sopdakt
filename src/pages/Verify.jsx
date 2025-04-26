import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import failedPic from "../assets/failed.png";
import donePic from "../assets/Scene-1.gif";
const Verify = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [status, setStatus] = useState(false);
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col gap-5">
          <img
            src={donePic}
            className="h-[350px] w-[250px] object-cover mx-auto"
            loading="lazy"
            alt="donePic"
          />
          <h4 className="text-[28px] leading-[55.2px] tracking-[7.6px] text-center uppercase font-bold">
            YOUR ORDER IS CONFIRMED
          </h4>
          <Link
            to="/"
            className="!bg-[#FF3200] uppercase w-fit mx-auto font-bold  !text-white py-3 rounded-xl cursor-pointer hover:!text-black hover:!bg-white hover:!shadow-2xl duration-300 px-5 md:px-14"
          >
            BACK TO HOME PAGE{" "}
          </Link>
        </div>
      </div>
      {/* <div className="w-full h-screen bg-black text-white flex items-center justify-center">
        <div className="flex flex-col gap-5">
          <img
            src={failedPic}
            className="h-[250px] w-[250px] object-cover mx-auto"
            loading="lazy"
            alt="failedPic"
          />
          <h4 className="text-[28px] leading-[55.2px] tracking-[7.6px] text-center uppercase font-bold">
            YOUR ORDER IS failed{" "}
          </h4>
          <Link
            to="/"
            className="!bg-[#FF3200] uppercase w-fit mx-auto font-bold  !text-white py-3 rounded-xl cursor-pointer hover:!text-black hover:!bg-white hover:!shadow-2xl duration-300 px-5 md:px-14"
          >
            BACK TO HOME PAGE{" "}
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Verify;
