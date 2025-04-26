import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MainSection from "../components/Tabs/MainSection";

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {" "}
      <MainSection breadcrumb={` profile`} title={"profile"} />{" "}
      <div className="py-10 px-5 md:px-24 lg:px-32 flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-1/4 flex flex-col space-y-7">
          <ul className="flex items-center md:items-start md:flex-col justify-center md:justify-start  gap-3 flex-wrap">
            <h4 className="text-[26px] mb-2 leading-[24px] tracking-[0] font-medium">
              Manage My Account
            </h4>
            <li>
              <Link
                to={"/profile"}
                className="text-[21px] font-normal leading-[24px] text-[#FF3200]"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="text-[21px] font-normal leading-[24px] text-[#000000] opacity-60 hover:text-[#FF3200]"
              >
                Address Book{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="text-[21px] font-normal leading-[24px] text-[#000000] opacity-60 hover:text-[#FF3200]"
              >
                My Payment Options{" "}
              </Link>
            </li>
          </ul>
          <ul className="flex items-center md:items-start md:flex-col justify-center md:justify-start  gap-3 flex-wrap">
            <h4 className="text-[26px] mb-2 leading-[24px] tracking-[0] font-medium">
              My Orders{" "}
            </h4>

            <li>
              <Link
                to={"/"}
                className="text-[21px] font-normal leading-[24px] text-[#000000] opacity-60 hover:text-[#FF3200]"
              >
                My Returns{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="text-[21px] font-normal leading-[24px] text-[#000000] opacity-60 hover:text-[#FF3200]"
              >
                My Cancellations{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-3/4">
          <h4 className="text-[26px] leading-[28px] font-medium text-[#FF3200]">
            Edit Your Profile
          </h4>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="fName" className="capitalize leading-[24px]">
                  First Name
                </label>
                <input
                  type="text"
                  id="fName"
                  placeholder="Md"
                  className="bg-[#F5F5F5] rounded-[4px] p-3 w-full"
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="lName" className="capitalize leading-[24px]">
                  Last Name{" "}
                </label>
                <input
                  type="text"
                  id="lName"
                  placeholder="Rimel"
                  className="bg-[#F5F5F5] rounded-[4px] p-3 w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="Email" className="capitalize leading-[24px]">
                  Email{" "}
                </label>
                <input
                  type="email"
                  id="Email"
                  placeholder="rimel1111@gmail.com"
                  className="bg-[#F5F5F5] rounded-[4px] p-3 w-full"
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="Address" className="capitalize leading-[24px]">
                  Address{" "}
                </label>
                <input
                  type="text"
                  id="Address"
                  placeholder="Kingston, 5236, United State"
                  className="bg-[#F5F5F5] rounded-[4px] p-3 w-full"
                />
              </div>
            </div>
            <div>
              <h4 className="text-[16px] leading-[24px] font-normal capitalize my-3">
                Password Changes{" "}
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <input
                  type="password"
                  id="Current Password"
                  placeholder="Current Passwod"
                  className="bg-[#F5F5F5] rounded-[4px] p-3 w-full"
                />
                <input
                  type="password"
                  id="New Password"
                  placeholder="New Password"
                  className="bg-[#F5F5F5] rounded-[4px] p-3 w-full"
                />
                <input
                  type="password"
                  id="Confirm New Password"
                  placeholder="Confirm New Password"
                  className="bg-[#F5F5F5] rounded-[4px] p-3 w-full"
                />
              </div>
            </div>
            <div className="action flex gap-5 my-10 w-full items-center justify-end">
              <button className="rounded-[12px] bg-[#FF3200] text-white uppercase leading-[24px] py-2 px-6 cursor-pointer hover:bg-green-400 duration-300 md:px-14">
                save changes
              </button>
              <button
                type="reset"
                className="underline cursor-pointer uppercase text-[16.8px] font-bold tracking-[3.36px]"
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
