import React, { useState } from "react";
import logo from "../../assets/logo.png";
import dropIcon from "../../assets/drop.png";
import dropLang from "../../assets/dropLang.png";
import langs from "../../assets/langs.png";
import user from "../../assets/user.png";
import cart from "../../assets/cart.png";
import compare from "../../assets/com.png";
import { CiHeart } from "react-icons/ci";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="w-full relative h-[80px] flex justify-between gap-5 items-center px-[30px] md:px-[180px] py-[20px] bg-white">
        <div>
          <img src={logo} className="w-[54px] h-[61px]" alt="logo" />
        </div>
        <nav className="hidden md:block h-full">
          <ul className="flex h-full items-center flex-wrap gap-[10px] lg:gap-[30px]">
            <li>
              <Link
                to="/"
                className="text-[18px] font-bold leading-[20px] tracking-[0] uppercase underline underline-offset-[13.5%] decoration-[#FF3200]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-[18px] font-normal leading-[20px] tracking-[0] uppercase flex items-center gap-1"
              >
                categories
                <img src={dropIcon} className="h-[8px]" alt="dropIcon" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-[18px] font-normal leading-[20px] tracking-[0] uppercase flex items-center gap-1"
              >
                Products
                <img src={dropIcon} className="h-[8px]" alt="dropIcon" />
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-[18px] font-normal leading-[20px] tracking-[0] uppercase"
              >
                About us{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-[18px] font-normal leading-[20px] tracking-[0] uppercase"
              >
                contact us{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-[18px] font-normal leading-[20px] tracking-[0] uppercase"
              >
                blog{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden h-full md:flex items-center gap-[20px]">
          <div className="lang cursor-pointer flex flex-wrap items-center gap-2">
            <img src={langs} className="h-[11px] w-[16px]" alt="langs" />
            <span className="leading-[18px] text-[12px] font-bold">
              {" "}
              English{" "}
            </span>
            <img src={dropLang} className="h-[12px] w-[8px]" alt="dropLang" />
          </div>
          <div>
            <ul className="flex flex-wrap shrink-0 items-center gap-[10px]">
              <li>
                <Link to="/">
                  <img src={user} alt="userIcon" className="w-[24px]" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CiHeart className="w-[24px] h-[24px]" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <IoIosSearch className="w-[24px] h-[24px]" />
                </Link>
              </li>
              <li className="w-fit">
                <Link to="/">
                  <img src={compare} alt="compareIcon" className="w-[24px]" />
                </Link>
              </li>
              <li className="w-fit">
                <Link to="/" className="relative">
                  <span className="absolute -right-1 bg-[#FF5B5B] w-[16px] h-[16px] rounded-[8px] text-center text-[11px]">
                    0
                  </span>
                  <img src={cart} alt="userIcon" className="w-[24px]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden cursor-pointer z-20">
          {isOpen ? (
            <IoMdClose
              className="w-[30px] h-[30px] cursor-pointer text-[#FF3200]"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <CiMenuBurger
              className="w-[30px] h-[30px] cursor-pointer text-[#FF3200]"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        <div
          className={`md:hidden absolute ${
            isOpen ? "top-[80px]" : "-top-[800px]"
          } left-0 w-full bg-white z-10 duration-300`}
        >
          <nav className="block h-full my-5">
            <ul className="flex h-full flex-col items-center flex-wrap gap-[30px]">
              <li>
                <Link
                  to="/"
                  className="text-[18px] font-bold leading-[20px] tracking-[0] uppercase underline underline-offset-[13.5%] decoration-[#FF3200]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-[18px] font-normal leading-[20px] tracking-[0] uppercase flex items-center gap-1"
                >
                  categories
                  <img src={dropIcon} className="h-[8px]" alt="dropIcon" />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-[18px] font-normal leading-[20px] tracking-[0] uppercase flex items-center gap-1"
                >
                  Products
                  <img src={dropIcon} className="h-[8px]" alt="dropIcon" />
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-[18px] font-normal leading-[20px] tracking-[0] uppercase"
                >
                  About us{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-[18px] font-normal leading-[20px] tracking-[0] uppercase"
                >
                  contact us{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-[18px] font-normal leading-[20px] tracking-[0] uppercase"
                >
                  blog{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="h-full flex items-center flex-col justify-center gap-[20px] my-5">
            <div className="lang cursor-pointer flex flex-wrap items-center gap-2">
              <img src={langs} className="h-[11px] w-[16px]" alt="langs" />
              <span className="leading-[18px] text-[12px] font-bold">
                {" "}
                English{" "}
              </span>
              <img src={dropLang} className="h-[12px] w-[8px]" alt="dropLang" />
            </div>
            <div>
              <ul className="flex flex-wrap shrink-0 items-center gap-[10px]">
                <li>
                  <Link to="/">
                    <img src={user} alt="userIcon" className="w-[24px]" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <CiHeart className="w-[24px] h-[24px]" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <IoIosSearch className="w-[24px] h-[24px]" />
                  </Link>
                </li>
                <li className="w-fit">
                  <Link to="/">
                    <img src={compare} alt="compareIcon" className="w-[24px]" />
                  </Link>
                </li>
                <li className="w-fit">
                  <Link to="/" className="relative">
                    <span className="absolute -right-1 bg-[#FF5B5B] w-[16px] h-[16px] rounded-[8px] text-center text-[11px]">
                      0
                    </span>
                    <img src={cart} alt="userIcon" className="w-[24px]" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
