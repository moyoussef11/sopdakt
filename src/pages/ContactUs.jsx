import React from "react";
import mailIcon from "../assets/icons-mail.png";
import phoneIcon from "../assets/icons-phone.png";
import instaIcon from "../assets/Group 198.png";
import faceIcon from "../assets/Group 200.png";
import tikIcon from "../assets/Group 199.png";
import MainSection from "../components/Tabs/MainSection";
const ContactUs = () => {
  return (
    <>
      {" "}
      <MainSection breadcrumb={` contact us`} title={"contact us"} />
    
      <div className="py-10 flex flex-col md:flex-row gap-5 md:gap-20 px-5 md:px-28">
        <div className="w-full md:w-1/2 bg-[#F5F5F5] rounded-[12px] p-10 flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <img src={phoneIcon} alt="phoneIcon" loading="lazy" />
            <p className="uppercase text-[20px] leading-[24px] tracking-[24%]">
              Call To Us
            </p>
          </div>
          <div className="text-[20px]">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <hr className="w-1/2 my-5" />
          <div className="flex gap-2 items-center">
            <img src={mailIcon} alt="mailIcon" loading="lazy" />
            <p className="uppercase text-[20px] leading-[24px] tracking-[24%]">
              Write To US{" "}
            </p>
          </div>
          <div className="text-[20px] flex flex-col gap-2">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@piky.com</p>
            <p>Emails: support@piky.com</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <form className="w-full flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name *"
                className="bg-[#F5F5F5] rounded-[4px] p-3"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="bg-[#F5F5F5] rounded-[4px] p-3"
              />{" "}
            </div>
            <input
              type="email"
              placeholder="Your Email *"
              className="bg-[#F5F5F5] rounded-[4px] p-3 w-full"
            />
            <textarea
              placeholder="Your Massage"
              rows={15}
              className="bg-[#F5F5F5] rounded-[4px] p-3 w-full"
            ></textarea>
            <div className="flex items-center justify-end gap-2 my-5">
              <button className="bg-[#FF3200] text-white text-[16.8px] w-full md:w-[162px] cursor-pointer hover:bg-white hover:text-black duration-300 font-bold leading-[20px] tracking-[0] uppercase py-2 px-4 rounded-[12px]">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="py-16 flex flex-col items-center justify-center">
        <h4 className="font-bold uppercase text-[34.8px] leading-[24px] tracking-[3.36px] text-center">
          follow us
        </h4>{" "}
        <ul className="py-10 flex gap-5 items-center justify-center flex-wrap">
          <li>
            <a href="" target="_blank">
              <img
                src={instaIcon}
                className="h-[118.84px]"
                alt="socialIcon"
                loading="lazy"
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img
                src={faceIcon}
                className="h-[118.84px]"
                alt="socialIcon"
                loading="lazy"
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img
                src={tikIcon}
                className="h-[118.84px]"
                alt="socialIcon"
                loading="lazy"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactUs;
