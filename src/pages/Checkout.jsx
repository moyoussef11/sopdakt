import React, { useState } from "react";
import { Select, Checkbox } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import visaPic from "../assets/payment.png";
import arrowPic from "../assets/ar.png";
import { Modal, Input, Typography } from "antd";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      {" "}
      <div className="py-10 bg-black text-white flex flex-col items-center justify-center">
        <span className="uppercase leading-[75.2px] text-center">
          {" "}
          <span className="text-gray-400">home</span> &gt;cart &gt; checkout
        </span>
        <p className="text-[28px] uppercase font-bold leading-[75.2px] md:tracking-[35.6px] text-center">
          checkout{" "}
        </p>
      </div>
      <section className="px-5 md:px-10 lg:px-28 py-16">
        <h4 className="text-[22px] font-bold leading-[33px] tracking-[-0.22px] capitalize">
          Billing details
        </h4>
        <div className="flex gap-5 flex-col md:flex-row md:gap-20">
          <div className="flex-grow">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="fName"
                    className="text-[12px] uppercase font-normal text-[#6C757D]"
                  >
                    First name{" "}
                    <span className="text-red-500 text-[16px]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    className="border border-[#DFDFDF] rounded-[11px] p-3"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="lName"
                    className="text-[12px] uppercase font-normal text-[#6C757D]"
                  >
                    last name{" "}
                    <span className="text-red-500 text-[16px]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    className="border border-[#DFDFDF] rounded-[11px] p-3"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="Company name"
                  className="text-[12px] uppercase font-normal text-[#6C757D]"
                >
                  Company name (optional){" "}
                </label>
                <input
                  type="text"
                  name="Company name"
                  id="Company name"
                  className="border border-[#DFDFDF] rounded-[11px] p-3"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="fName"
                  className="text-[12px] uppercase font-normal text-[#6C757D]"
                >
                  Country / Region{" "}
                  <span className="text-red-500 text-[16px]">*</span>
                </label>
                <Select
                  showSearch
                  filterOption={(input, option) => {
                    var _a;
                    return (
                      (_a =
                        option === null || option === void 0
                          ? void 0
                          : option.label) !== null && _a !== void 0
                        ? _a
                        : ""
                    )
                      .toLowerCase()
                      .includes(input.toLowerCase());
                  }}
                  options={[
                    { value: "1", label: "Jack" },
                    { value: "2", label: "Lucy" },
                    { value: "3", label: "Tom" },
                  ]}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="address"
                  className="text-[12px] uppercase font-normal text-[#6C757D]"
                >
                  Street address{" "}
                  <span className="text-red-500 text-[16px]">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="border border-[#DFDFDF] placeholder:text-[10px] rounded-[11px] p-3"
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  name="address2"
                  id="address2"
                  className="border border-[#DFDFDF] placeholder:text-[10px] rounded-[11px] p-3"
                  placeholder="Apartment, suite, unite, etc. (optional)"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="County"
                  className="text-[12px] uppercase font-normal text-[#6C757D]"
                >
                  County <span className="text-red-500 text-[16px]">*</span>
                </label>
                <input
                  type="text"
                  name="County"
                  id="County"
                  className="border border-[#DFDFDF] rounded-[11px] p-3"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="City"
                  className="text-[12px] uppercase font-normal text-[#6C757D]"
                >
                  Town / City{" "}
                  <span className="text-red-500 text-[16px]">*</span>
                </label>
                <Select
                  showSearch
                  filterOption={(input, option) => {
                    var _a;
                    return (
                      (_a =
                        option === null || option === void 0
                          ? void 0
                          : option.label) !== null && _a !== void 0
                        ? _a
                        : ""
                    )
                      .toLowerCase()
                      .includes(input.toLowerCase());
                  }}
                  options={[
                    { value: "1", label: "Jack" },
                    { value: "2", label: "Lucy" },
                    { value: "3", label: "Tom" },
                  ]}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="Governorate"
                  className="text-[12px] uppercase font-normal text-[#6C757D]"
                >
                  Governorate
                </label>
                <input
                  type="text"
                  name="Governorate"
                  id="Governorate"
                  className="border border-[#DFDFDF] rounded-[11px] p-3"
                />
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="Phone"
                    className="text-[12px] uppercase font-normal text-[#6C757D]"
                  >
                    Phone <span className="text-red-500 text-[16px]">*</span>
                  </label>
                  <PhoneInput
                    country={"eg"}
                    containerClass="!w-full"
                    inputClass="!w-full"
                    value={""}
                    //   onChange={(phone) => this.setState({ phone })}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="Phone"
                    className="text-[12px] uppercase font-normal text-[#6C757D]"
                  >
                    Another phone{" "}
                    <span className="text-red-500 text-[16px]">*</span>
                  </label>
                  <PhoneInput
                    country={"eg"}
                    value={""}
                    containerClass="!w-full"
                    inputClass="!w-full"
                    //   onChange={(phone) => this.setState({ phone })}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="Email"
                  className="text-[12px] uppercase font-normal text-[#6C757D]"
                >
                  Email address{" "}
                  <span className="text-red-500 text-[16px]">*</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  className="border border-[#DFDFDF] rounded-[11px] p-3"
                />
              </div>
              <div className="flex flex-col gap-2 text-[#777777]">
                <Checkbox style={{ color: "#777777" }} onChange={onChange}>
                  Create an account?
                </Checkbox>
                <Checkbox style={{ color: "#777777" }} onChange={onChange}>
                  Ship to a different address?
                </Checkbox>
              </div>
              <div className="mt-6">
                <label className="block text-[#777777] text-sm font-medium mb-2">
                  Order notes (optional){" "}
                </label>
                <textarea
                  rows="3"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="w-full border border-gray-300 rounded-md p-3 text-sm text-[#777777]"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="w-full md:w-[400px]">
            <div className="max-w-md mx-auto bg-white p-6 rounded-md space-y-3">
              {/* Cart Totals */}
              <div>
                <h2 className="text-[20px] font-medium leading-[28px] tracking-[0px] mb-4">
                  CART TOTAL
                </h2>
                <div className="flex justify-between border-b border-b-[#666666] text-sm mb-2 pb-5">
                  <span>SUBTOTAL:</span>
                  <span>$1750</span>
                </div>
                <div className="flex justify-between border-b pb-5 text-sm mb-2">
                  <span>SHIPPING:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between border-b pb-5 text-sm mb-2">
                  <span>
                    DISCOUNT:{" "}
                    <span className="text-[#909090]">(PROMO CODE)</span>
                  </span>
                  <span>$100</span>
                </div>
                <div className="flex justify-between text-sm font-semibold pt-2">
                  <span>TOTAL:</span>
                  <span>$1650</span>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-md font-semibold mb-2">PAYMENT METHOD:</h3>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      className="accent-[#FF3200]"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                    />
                    CASH ON DELIVERY
                  </label>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        className="accent-[#FF3200]"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                      />
                      <span className="flex items-center gap-1">
                        <span className="text-xl">
                          <img
                            src={visaPic}
                            className="h-5"
                            alt="visaPic"
                            loading="lazy"
                          />
                        </span>{" "}
                        C R E D I T &nbsp; C A R D
                      </span>
                    </label>
                    <div className="">
                      <img
                        src={arrowPic}
                        onClick={() => setPaymentMethod("card")}
                        alt="arrowPic"
                        loading="lazy"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Credit Card Form */}
              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Name On Card
                    </label>
                    <input
                      type="text"
                      placeholder="Enter name on card"
                      className="w-full border rounded-md p-2 text-sm placeholder:text-[#909090] border-[#666666]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter card number"
                      className="w-full border rounded-md p-2 text-sm border-[#666666]"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="text-sm font-medium block mb-1">
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        placeholder="Enter expiration date"
                        className="w-full border rounded-md p-2 text-sm border-[#666666]"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="text-sm font-medium block mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="Enter CVV"
                        className="w-full border rounded-md p-2 text-sm border-[#666666]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Pay Now Button */}
              <button
                onClick={showModal}
                className="w-full md:w-1/2 mx-auto block hover:opacity-70 duration-300 bg-[#FF3200] cursor-pointer text-center uppercase text-white py-3 rounded-md font-semibold text-sm"
              >
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
      <Modal
        title={null}
        open={isModalOpen}
        onOk={handleOk}
        closeIcon={false}
        onCancel={handleCancel}
        footer={null}
        width={850}
      >
        <div className="flex p-1 flex-col gap-5 items-center justify-center">
          <h4 className="text-2xl text-center md:text-[35px] text-[#FF3200] leading-[24px] md:tracking-[-0.22px] uppercase font-normal">
            PLEASE ENTER THE OTP TO CONFIRM YOUR ORDER{" "}
          </h4>
          <p className="text-[37px] leading-[24px] my-5 md:tracking-[-0.22px]">
            OTP HAS BEEN SEND TO <span>010222225551</span>
          </p>
          <div className="mx-auto block">
            <Input.OTP formatter={(str) => str.toUpperCase()} />
          </div>
          <div className="flex flex-col gap-3">
            <Link
              to="/cart/checkout/verify"
              className="!bg-[#FF3200] uppercase font-bold !text-white py-1 rounded-xl cursor-pointer hover:opacity-70 duration-300 px-5 md:px-7"
            >
              VERFIY
            </Link>
            <button className="underline my-5 text-[#909090] uppercase cursor-pointer">
              RESEND AGAIN
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Checkout;
