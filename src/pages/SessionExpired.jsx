import React from "react";
import SessionExpiredPic from "../assets/419.png";
import SessionExpiredPicIcon from "../assets/expierd.png";
import { Link } from "react-router-dom";
const SessionExpired = () => {
  return (
    <>
      <div className="py-10 bg-black text-white flex flex-col items-center justify-center">
        <span className="uppercase leading-[75.2px] text-center">
          {" "}
          <span className="text-gray-400">home</span> &gt;419
        </span>
        <p className="text-[28px] uppercase font-bold leading-[75.2px] md:tracking-[35.6px] text-center">
          419{" "}
        </p>
      </div>
      <div className="w-full overflow-hidden relative py-20 flex items-center justify-center bg-black text-white">
        <div className="flex flex-col gap-10 items-center justify-center">
          <img
            src={SessionExpiredPic}
            className="h-[200px] object-cover"
            alt="notFoundPic"
            loading="lazy"
          />
          <h4 className="text-[28px] leading-[55.2px] tracking-[7.6px] text-center uppercase font-bold">
            session expired{" "}
          </h4>
          <Link
            to="/"
            className="!bg-[#FF3200] uppercase w-fit mx-auto font-bold  !text-white py-3 rounded-xl cursor-pointer hover:opacity-70 duration-300 px-5 md:px-14"
          >
            BACK TO HOME PAGE{" "}
          </Link>
        </div>
        <img
          className="hidden md:block absolute left-0 h-[400px] -bottom-14"
          src={SessionExpiredPicIcon}
          alt="SessionExpiredPicIcon"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default SessionExpired;
