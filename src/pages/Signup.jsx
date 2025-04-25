import React from "react";
import logo from "../assets/logo.png";
import authImg from "../assets/auth.png";
import deviderImg from "../assets/Divider.png";
import { FcGoogle } from "react-icons/fc";
import { Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="w-full h-screen relative bg-center bg-cover">
      <div className="relative">
        <div className="relative hidden md:block w-full h-full">
          <img
            src={authImg}
            className="md:w-[1100px] h-screen object-center"
            alt="authImg"
          />
          <div className="h-screen w-full bg-[#FF320054] absolute top-0 left-0"></div>
        </div>
        <div className="w-full absolute top-0 bg-white right-0 md:w-[600px] xl:w-[700px] h-full pt-16 rounded-tl-[60px] rounded-bl-[60px] pb-4 px-10 md:px-20">
          <Link to="/">
            <img
              src={logo}
              className="h-[70px] mb-5 w-[60px]  mx-auto"
              alt="logo"
            />
          </Link>
          <h3 className="text-[32px] mb-5 font-semibold leading-[41px] uppercase text-center">
            Create an account
          </h3>
          <p className="text-center border border-[#CBCAD7] my-5 rounded-[10px] py-3 cursor-pointer leading-[25px] flex items-center flex-wrap md:flex-nowrap md:gap-5 justify-center text-[#19181F]">
            Create account with Google <FcGoogle size={30} />
          </p>
          <div className="flex items-center my-5 gap-4 justify-center">
            <img src={deviderImg} alt="deviderImg" />
            <span>Or</span>
            <img src={deviderImg} alt="deviderImg" />
          </div>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="leading-[25px] uppercase text-[#9794AA] font-medium"
              >
                Email Address
              </label>
              <Input
                id="email"
                className="placeholder:uppercase border !border-[#CBCAD7] !p-4 !rounded-[6px]"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="leading-[25px] uppercase text-[#9794AA] font-medium"
              >
                Full Name{" "}
              </label>
              <Input
                id="name"
                className="placeholder:uppercase border !border-[#CBCAD7] !p-4 !rounded-[6px]"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Password"
                className="leading-[25px] uppercase text-[#9794AA] font-medium"
              >
                Password{" "}
              </label>
              <Input.Password
                id="Password"
                className="placeholder:!uppercase border !border-[#CBCAD7] !p-4 !rounded-[6px]"
                placeholder="Create your password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
            <Button className="!bg-[#FF3200] !text-white !uppercase !text-[16.8px] !leading-[24px] !font-bold !tracking-[3.36px] !px-5 !my-1 !w-fit mx-auto !border-none hover:!shadow-md hover:!text-black hover:!bg-white">
              sign up
            </Button>
            <p className="leading-[25px] text-center uppercase tracking-[0.5%] font-normal">
              Already have an account?{" "}
              <Link className="text-[#FF3200] underline font-bold" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
