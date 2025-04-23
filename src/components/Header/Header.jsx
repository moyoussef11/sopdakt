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
import flash from "../../assets/flash.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation().pathname.split("/")[1];
  const [active, setActive] = useState(pathname === "" ? "/" : pathname);

  return (
    <>
      <header className="w-full relative flex justify-between gap-5 items-center px-[30px] md:px-[56px] lg:px-[180px] py-[10px] bg-white">
        <Link to="/">
          <img src={logo} className="w-[54px] h-[61px]" alt="logo" />
        </Link>
        <nav className="hidden md:block h-full">
          <ul className="flex h-full items-center flex-wrap gap-[10px] lg:gap-[30px]">
            <li>
              <Link
                to="/"
                onClick={() => setActive("/")}
                className={`text-[18px]  leading-[20px] tracking-[0] uppercase underline-offset-[13.5%] ${
                  active === "/" ? "activeLink" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="group">
              <Link
                onClick={() => setActive("categories")}
                to="/categories"
                className={`text-[18px] font-normal leading-[20px] hover:underline hover:decoration-[#FF3200] hover:font-bold tracking-[0] ${
                  active === "categories" ? "activeLink" : ""
                } uppercase flex items-center gap-1`}
              >
                categories
                <img src={dropIcon} className="h-[8px]" alt="dropIcon" />
              </Link>
              <div className="w-full hidden group-hover:block absolute left-0 z-10">
                <div className="flex h-full">
                  <div className="w-1/2 bg-white flex items-center justify-between pt-5 pb-16 px-28">
                    <ul className="flex flex-col gap-3">
                      <h5 className="text-[23px] my-5 leading-[20px] font-medium capitalize">
                        Men{" "}
                      </h5>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          FASHION TRENDS{" "}
                        </Link>
                      </li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                      <h5 className="text-[23px] my-5 leading-[20px] font-medium capitalize">
                        women{" "}
                      </h5>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          FASHION TRENDS{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{ backgroundImage: `url(${flash})` }}
                    className="w-1/2 bg-red-500 bg-center bg-cover relative flex items-center justify-center"
                  >
                    <div className=" absolute left-0  w-full h-full bg-black opacity-65"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center gap-5 md:gap-12 text-white text-center">
                      <h5 className="font-normal text-center text-[32.8px] leading-[24px] md:tracking-[27.36px]">
                        FLASH SALE
                      </h5>
                      <span className="uppercase font-bold text-[61.8px] md:leading-[24px] md:tracking-[3.36px] text-center">
                        UP TO 70%
                      </span>
                      <button className="bg-[#FF3200] text-white text-[16.8px] w-[204px] h-[52px] cursor-pointer hover:bg-white hover:text-black duration-300 font-bold leading-[20px] tracking-[0] uppercase py-2 px-4 rounded-[12px]">
                        shop now
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="group">
              <Link
                onClick={() => setActive("products")}
                to="/products"
                className={`text-[18px] ${
                  active === "products" ? "activeLink" : ""
                } hover:underline hover:decoration-[#FF3200] hover:font-bold font-normal leading-[20px] tracking-[0] uppercase flex items-center gap-1`}
              >
                Products
                <img src={dropIcon} className="h-[8px]" alt="dropIcon" />
              </Link>
              <div className="w-full hidden group-hover:block absolute left-0 z-10">
                <div className="flex h-full">
                  <div className="w-1/2 bg-white flex items-center justify-between pt-5 pb-16 px-28">
                    <ul className="flex flex-col gap-3">
                      <h5 className="text-[23px] my-5 leading-[20px] font-medium capitalize">
                        Men{" "}
                      </h5>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          FASHION TRENDS{" "}
                        </Link>
                      </li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                      <h5 className="text-[23px] my-5 leading-[20px] font-medium capitalize">
                        women{" "}
                      </h5>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                        >
                          FASHION TRENDS{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{ backgroundImage: `url(${flash})` }}
                    className="w-1/2 bg-red-500 bg-center bg-cover relative flex items-center justify-center"
                  >
                    <div className=" absolute left-0  w-full h-full bg-black opacity-65"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center gap-5 md:gap-12 text-white text-center">
                      <h5 className="font-normal text-center text-[32.8px] leading-[24px] md:tracking-[27.36px]">
                        FLASH SALE
                      </h5>
                      <span className="uppercase font-bold text-[61.8px] md:leading-[24px] md:tracking-[3.36px] text-center">
                        UP TO 70%
                      </span>
                      <button className="bg-[#FF3200] text-white text-[16.8px] w-[204px] h-[52px] cursor-pointer hover:bg-white hover:text-black duration-300 font-bold leading-[20px] tracking-[0] uppercase py-2 px-4 rounded-[12px]">
                        shop now
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                onClick={() => setActive("about-us")}
                to="/about-us"
                className={`text-[18px] ${
                  active === "about-us" ? "activeLink" : ""
                } font-normal leading-[20px] tracking-[0] uppercase hover:underline hover:decoration-[#FF3200] hover:font-bold`}
              >
                About us{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={() => setActive("contact-us")}
                className={`text-[18px] ${
                  active === "contact-us" ? "activeLink" : ""
                } hover:underline hover:decoration-[#FF3200] hover:font-bold font-normal leading-[20px] tracking-[0] uppercase`}
              >
                contact us{" "}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActive("blog")}
                to="/blog"
                className={`text-[18px] ${
                  active === "blog" ? "activeLink" : ""
                } hover:underline hover:decoration-[#FF3200] hover:font-bold font-normal leading-[20px] tracking-[0] uppercase`}
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
                <Link to="/login">
                  <img src={user} alt="userIcon" className="w-[24px]" />
                </Link>
              </li>
              <li>
                <Link to="/wishlist">
                  <CiHeart className="w-[24px] h-[24px]" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <IoIosSearch className="w-[24px] h-[24px]" />
                </Link>
              </li>
              <li className="w-fit">
                <Link to="/compare">
                  <img src={compare} alt="compareIcon" className="w-[24px]" />
                </Link>
              </li>
              <li className="w-fit">
                <Link to="/cart" className="relative">
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
                  onClick={() => {
                    setIsOpen(false);
                    setActive("/");
                  }}
                  className={`text-[18px] leading-[20px] tracking-[0] uppercase ${
                    active === "/" ? "activeLink" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="group">
                <Link
                  onClick={() => {
                    setIsOpen(false);
                    setActive("categories");
                  }}
                  className={`text-[18px] ${
                    active === "categories" ? "activeLink" : ""
                  } font-normal leading-[20px] tracking-[0] uppercase flex items-center gap-1`}
                  to="/categories"
                >
                  categories
                  <img src={dropIcon} className="h-[8px]" alt="dropIcon" />
                </Link>
                <div className="w-full hidden group-hover:block absolute left-0 z-10">
                  <div className="flex flex-col h-full">
                    <div className=" bg-white flex items-center justify-between pt-5 pb-16 px-5">
                      <ul className="flex flex-col gap-3">
                        <h5 className="text-[23px] my-5 leading-[20px] font-medium capitalize">
                          Men{" "}
                        </h5>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            FASHION TRENDS{" "}
                          </Link>
                        </li>
                      </ul>
                      <ul className="flex flex-col gap-3">
                        <h5 className="text-[23px] my-5 leading-[20px] font-medium capitalize">
                          women{" "}
                        </h5>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            FASHION TRENDS{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group">
                <Link
                  to="/products"
                  onClick={() => {
                    setIsOpen(false);
                    setActive("products");
                  }}
                  className={`text-[18px] ${
                    active === "products" ? "activeLink" : ""
                  } font-normal leading-[20px] tracking-[0] uppercase flex items-center gap-1`}
                >
                  Products
                  <img src={dropIcon} className="h-[8px]" alt="dropIcon" />
                </Link>
                <div className="w-full hidden group-hover:block absolute left-0 z-10">
                  <div className="flex flex-col h-full">
                    <div className=" bg-white flex items-center justify-between pt-5 pb-16 px-5">
                      <ul className="flex flex-col gap-3">
                        <h5 className="text-[23px] my-5 leading-[20px] font-medium capitalize">
                          Men{" "}
                        </h5>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            FASHION TRENDS{" "}
                          </Link>
                        </li>
                      </ul>
                      <ul className="flex flex-col gap-3">
                        <h5 className="text-[23px] my-5 leading-[20px] font-medium capitalize">
                          women{" "}
                        </h5>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            T-SHIRTS
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="text-[18px] leading-[20px] text-[#6F6C90] uppercase"
                          >
                            FASHION TRENDS{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                    setActive("about-us");
                  }}
                  className={`text-[18px] leading-[20px] tracking-[0] uppercase ${
                    active === "about-us" ? "activeLink" : ""
                  }`}
                  to="/about-us"
                >
                  About us{" "}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                    setActive("contact-us");
                  }}
                  className={`text-[18px] leading-[20px] tracking-[0] uppercase ${
                    active === "contact-us" ? "activeLink" : ""
                  }`}
                  to="/contact-us"
                >
                  contact us{" "}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                    setActive("blog");
                  }}
                  className={`text-[18px] leading-[20px] tracking-[0] uppercase ${
                    active === "blog" ? "activeLink" : ""
                  }`}
                  to="/blog"
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
                  <Link onClick={() => setIsOpen(false)} to="/login">
                    <img src={user} alt="userIcon" className="w-[24px]" />
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setIsOpen(false)} to="/wishlist">
                    <CiHeart className="w-[24px] h-[24px]" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <IoIosSearch className="w-[24px] h-[24px]" />
                  </Link>
                </li>
                <li onClick={() => setIsOpen(false)} className="w-fit">
                  <Link to="/compare">
                    <img src={compare} alt="compareIcon" className="w-[24px]" />
                  </Link>
                </li>
                <li className="w-fit">
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="/cart"
                    className="relative"
                  >
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
