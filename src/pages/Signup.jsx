import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import authImg from "../assets/auth.png";
import deviderImg from "../assets/Divider.png";
import { FcGoogle } from "react-icons/fc";
import { Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../rtk/features/Auth/actAuth";

const Signup = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const passwordValue = watch("password");
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  const onSubmit = async (data) => {
    const result = await dispatch(registerUser(data));
    if (result.payload.status === "success") return nav("/login");
  };
  return (
    <div className="w-full  relative bg-center bg-cover">
      <div className="relative">
        <div className="relative hidden md:block w-full h-full">
          <img
            src={authImg}
            className="md:w-[1100px] object-center"
            alt="authImg"
          />
          <div className="h-full w-full bg-[#FF320054] absolute top-0 left-0"></div>
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-2">
              {error && (
                <span className="text-[12px] font-semibold text-red-500">
                  The email has already been taken.
                </span>
              )}
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
                htmlFor="name"
                className="leading-[25px] uppercase text-[#9794AA] font-medium"
              >
                Full Name{" "}
              </label>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="name"
                    placeholder="Enter your full name"
                    className="placeholder:uppercase border !border-[#CBCAD7] !p-4 !rounded-[6px]"
                  />
                )}
              />
              {errors.name && (
                <span className="text-[12px] font-semibold text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
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
                    autoComplete="new-password"
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
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Confirm Password"
                className="leading-[25px] uppercase text-[#9794AA] font-medium"
              >
                Confirm Password{" "}
              </label>
              {/* حقل Confirm Password */}
              <Controller
                name="password_confirmation"
                control={control}
                rules={{
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === passwordValue || "Passwords do not match",
                }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    autoComplete="new-password"
                    id="Confirm Password"
                    placeholder="Confirm your password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    className="placeholder:uppercase border !border-[#CBCAD7] !p-4 !rounded-[6px]"
                  />
                )}
              />
              {errors.password_confirmation && (
                <span className="text-[12px] font-semibold text-red-500">
                  {errors.password_confirmation.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className={`bg-[#FF3200] ${
                loading === "pending"
                  ? "opacity-50 pointer-events-none cursor-not-allowed"
                  : "opacity-100"
              } p-2 rounded-2xl cursor-pointer !text-white !uppercase text-[16.8px] !leading-[24px] !font-bold !tracking-[3.36px] !px-5 !my-1 !w-fit mx-auto !border-none hover:!shadow-md hover:!text-black hover:!bg-white`}
            >
              {loading === "pending" ? "Loading..." : "sign up"}
            </button>
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
