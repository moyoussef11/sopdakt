import React from "react";
import logo from "../assets/logo.png";
import authImg from "../assets/auth.png";
import deviderImg from "../assets/Divider.png";
import { FaGoogle, FaApple, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
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
        <div className="w-full absolute top-0 bg-white right-0 md:w-[600px] h-full pt-16 rounded-tl-[60px] rounded-bl-[60px] pb-4 px-10 md:px-20">
          <img
            src={logo}
            className="h-[70px] mb-5 w-[60px]  mx-auto"
            alt="logo"
          />
          <h3 className="text-[25px] mb-5 font-semibold leading-[41px] uppercase text-center">
            Welcome back to sopdakt{" "}
          </h3>
          <p className="text-center  my-5 rounded-[10px] py-3  leading-[25px] flex items-center flex-wrap md:flex-nowrap md:gap-5 justify-center text-[#19181F]">
            Kindly fill in your details below to log in{" "}
          </p>

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
                htmlFor="Password"
                className="leading-[25px] uppercase text-[#9794AA] font-medium"
              >
                Password{" "}
              </label>
              <Input.Password
                id="Password"
                className="placeholder:!uppercase border !border-[#CBCAD7] !p-4 !rounded-[6px]"
                placeholder="**************"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
            <Button className="!bg-[#FF3200] !text-white !uppercase !text-[16.8px] !leading-[24px] !font-bold !tracking-[3.36px] !px-5 !my-1 !w-fit mx-auto !border-none hover:!shadow-md hover:!text-black hover:!bg-white">
              sign in{" "}
            </Button>
            <p className="leading-[25px] text-center uppercase tracking-[0.5%] font-normal">
              don`t have an account?{" "}
              <Link
                className="text-[#FF3200] underline font-bold"
                to="/create-account"
              >
                signup
              </Link>
            </p>
            <div className="flex items-center my-5 gap-4 justify-center">
              <img src={deviderImg} alt="deviderImg" />
              <span>Or</span>
              <img src={deviderImg} alt="deviderImg" />
            </div>
            <div className="mx-auto flex items-center gap-5 flex-wrap">
              <FaGoogle className="text-[#716F6F] h-[20px] w-[20px] cursor-pointer hover:text-red-500 duration-300" />
              <FaApple className="text-[#716F6F] h-[20px] w-[20px] cursor-pointer hover:text-black duration-300" />
              <FaTwitter className="text-[#716F6F] h-[20px] w-[20px] cursor-pointer hover:text-blue-400 duration-300" />
              <FaFacebookF className="text-[#716F6F] h-[20px] w-[20px] cursor-pointer hover:text-blue-600 duration-300" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
