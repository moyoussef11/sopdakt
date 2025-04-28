import React from "react";
import logo from "../../assets/logoWhitwe.png";
import insta from "../../assets/insta.png";
import face from "../../assets/face.png";
import tik from "../../assets/tik.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="bg-[#FF3200] py-6 md:py-20 md:px-32 flex flex-col flex-wrap lg:flex-nowrap justify-center md:flex-row items-center gap-5">
        <div className="w-full lg:w-1/2 text-center md:text-left">
          <h4 className="text-[20px] md:text-[36px] tracking-[4%] text-white font-bold uppercase">
            subscribe newsletter
          </h4>
          <p className="md:text-[24px] text-white tracking-[0]">
            Get all the latest information on Events, Sales and Offers.
          </p>
        </div>
        <div>
          <form
            className="w-full md:w-[700px]  grid grid-cols-[1fr_150px]  gap-2"
            // className="w-full md:w-[700px] flex flex-wrap lg:flex-nowrap  flex-col md:flex-row justify-between items-center gap-2"
          >
            <input
              type="text"
              placeholder="Email address..."
              className="w-full bg-white rounded-xl p-4"
              name=""
              id=""
            />
            <button className="bg-black text-center w-fit text-white py-2 px-5  md:px-10 rounded-xl uppercase font-bold cursor-pointer">
              subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-black md:py-10 md:px-32 flex flex-col md:flex-row justify-center gap-5">
        <div className="w-full hidden md:block md:w-[25%]">
          <img
            src={logo}
            alt="logo"
            className="h-[50px] md:w-[220px] object-contain md:h-[207px] mx-auto mt-10"
          />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex items-center mx-auto gap-5 justify-between">
            <img src={logo} alt="logo" className="h-28 md:hidden" />
            <ul
              className="flex my-2 w-full  justify-center items-center flex-col md:flex-row md:justify-start flex-wrap gap-0 md:gap-5"
              // className="flex w-full flex-col md:flex-row justify-center items-center md:justify-start flex-wrap gap-5"
            >
              <li>
                <Link
                  to="/about-us"
                  className="text-[12px] md:text-[24px] leading-[28px] capitalize text-white"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-[12px] md:text-[24px] leading-[28px] capitalize text-white"
                >
                  Services{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-[12px] md:text-[24px] leading-[28px] capitalize text-white"
                >
                  Industries{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-[12px] md:text-[24px] leading-[28px] capitalize text-white"
                >
                  Our clients{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-[12px] md:text-[24px] leading-[28px] capitalize text-white"
                >
                  Blog{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/Career"
                  className="text-[12px] md:text-[24px] leading-[28px] capitalize text-white"
                >
                  Career{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-Us"
                  className="text-[12px] md:text-[24px] leading-[28px] capitalize text-white"
                >
                  Contact Us{" "}
                </Link>
              </li>
              <li className="hidden md:block">
                <div className="flex gap-2 items-center">
                  <a href="" target="_blank">
                    {" "}
                    <img src={insta} alt="socialIcons" loading="lazy" />
                  </a>
                  <a href="" target="_blank">
                    {" "}
                    <img src={face} alt="socialIcons" loading="lazy" />
                  </a>
                  <a href="" target="_blank">
                    {" "}
                    <img src={tik} alt="socialIcons" loading="lazy" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <ul
            className="flex w-full md:hidden  justify-center items-center flex-col md:flex-row md:justify-start flex-wrap md:gap-5"
            // className="flex w-full flex-col md:flex-row justify-center items-center md:justify-start flex-wrap gap-5"
          >
            <li>
              <div className="flex gap-2 items-center">
                <a href="" target="_blank">
                  {" "}
                  <img src={insta} alt="socialIcons" loading="lazy" />
                </a>
                <a href="" target="_blank">
                  {" "}
                  <img src={face} alt="socialIcons" loading="lazy" />
                </a>
                <a href="" target="_blank">
                  {" "}
                  <img src={tik} alt="socialIcons" loading="lazy" />
                </a>
              </div>
            </li>
          </ul>
          <ul className="text-white my-3 md:my-10 flex flex-wrap gap-3 justify-center md:flex-col md:gap-2 text-center md:text-left">
            <li>Email: info@NNGHTJcom</li>
            <li>Phone: 555-567-8901</li>
            <li>
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </li>
          </ul>
          <hr className="border border-white" />
          <div className="text-white flex items-center  justify-between flex-col md:flex-row gap-5 my-3 md:py-5">
            <div className="flex flex-wrap justify-center items-center gap-6 my-2 md:py-10">
              <span>© 2025 pd. All Rights Reserved.</span>
              <span>
                Devolped with ♡ by{" "}
                <a
                  href="https://www.pikyhost.com/"
                  target="_blank"
                  className="underline cursor-pointer"
                >
                  piky host
                </a>
              </span>
            </div>
            <span>
              <Link to="/privacy-policy" className="text-white underline">
                Privacy Policy
              </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
