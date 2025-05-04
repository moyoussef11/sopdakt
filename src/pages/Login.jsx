import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import authImg from "../assets/auth.png";
import deviderImg from "../assets/Divider.png";
import { FaGoogle, FaApple, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../rtk/features/Auth/actAuth";
import { useLocation, Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const nav = useNavigate();

  const onSubmit = async (data) => {
    const result = await dispatch(loginUser(data));
    if (result.payload.message === "Login successful") {
      const from = location.state?.from?.pathname || "/";
      nav(from, { replace: true });
    }
  };

  useEffect(() => {
    if (error) {
      message.error("credentials are incorrect password or email");
    }
  }, [error]);

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
          <h3 className="text-[25px] mb-5 font-semibold leading-[41px] uppercase text-center">
            Welcome back to sopdakt{" "}
          </h3>
          <p className="text-center  my-5 rounded-[10px] py-3  leading-[25px] flex items-center flex-wrap md:flex-nowrap md:gap-5 justify-center text-[#19181F]">
            Kindly fill in your details below to log in{" "}
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="leading-[25px] uppercase text-[#9794AA] font-medium"
              >
                Email Address
              </label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="email"
                    autoComplete="email"
                    className="placeholder:uppercase border !border-[#CBCAD7] !p-4 !rounded-[6px]"
                    placeholder="Enter your email address"
                  />
                )}
              />
              {errors.email && (
                <span className="text-[12px] font-semibold text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="Password"
                className="leading-[25px] uppercase text-[#9794AA] font-medium"
              >
                Password{" "}
              </label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    id="password"
                    autoComplete="current-password"
                    placeholder="Create your password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    className="placeholder:uppercase border !border-[#CBCAD7] !p-4 !rounded-[6px]"
                  />
                )}
              />
              {errors.password && (
                <span className="text-[12px] font-semibold text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className={`bg-[#FF3200] ${
                loading === "pending"
                  ? "opacity-50 cursor-not-allowed pointer-events-none"
                  : "opacity-100"
              } cursor-pointer p-2 rounded-2xl !text-white !uppercase !text-[16.8px] !leading-[24px] !font-bold !tracking-[3.36px] !px-5 !my-1 !w-fit mx-auto !border-none hover:!shadow-md hover:!text-black hover:!bg-white`}
            >
              {loading === "pending" ? "loading..." : " sign in"}{" "}
            </button>
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
