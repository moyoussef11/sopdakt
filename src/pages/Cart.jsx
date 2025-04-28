import React, { useEffect } from "react";
import pro from "../assets/pro.png";
import { Link } from "react-router-dom";
import MainSection from "../components/Tabs/MainSection";
const Cart = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      {" "}
      <MainSection breadcrumb={` cart`} title={"cart"} />
      <section className="sm:py-16 px-5 md:px-10 lg:px-24">
        <div className="bg-white p-6 flex flex-col md:flex-row gap-6">
          {/* Left Section - Products */}
          <div className="w-full md:w-2/3">
            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-y-4">
                <thead>
                  <tr className="text-left font-semibold">
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((item, i) => (
                    <tr key={i} className="bg-white border-b border-gray-200">
                      <td className="flex gap-4 items-center py-4">
                        <img
                          src={pro}
                          className="w-[80px] h-[100px] object-cover rounded-md"
                          alt="Product"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-normal text-[14px]">
                            Oversized Printed T-shirt
                          </p>
                          <p className="text-xs text-[#545454]">M / Black</p>
                          <button className="text-[#FF3200] underline cursor-pointer text-xs mt-1">
                            Remove
                          </button>
                        </div>
                      </td>
                      <td className="text-sm font-normal">$18.00</td>
                      <td>
                        <div className="flex items-center bg-[#F2F2F2] w-fit px-2 py-1 rounded-md text-sm">
                          <button className="px-1 text-gray-500 text-xl cursor-pointer">
                            -
                          </button>
                          <span className="px-3">1</span>
                          <button className="px-1 text-[#FF3200] text-xl cursor-pointer">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-sm font-semibold">$18.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Order Note */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                Add Order Note
              </label>
              <textarea
                rows="3"
                placeholder="How Can We Help You?"
                className="w-full border border-gray-300 rounded-md p-3 text-sm"
              ></textarea>
            </div>
          </div>

          {/* Right Section - Summary */}
          <div className="w-full md:w-1/3 space-y-6">
            {/* Promo Code */}
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                placeholder="Promo Code"
                className="flex-grow border border-[#909090] rounded-[11px] px-4 py-3 text-sm"
              />
              <button className="bg-[#FF3200] text-white px-4 md:px-10 py-2 font-bold text-[16.8px] rounded-md">
                APPLY
              </button>
            </div>

            {/* Cart Total */}
            <div className="border border-[#909090] gap-10 md:min-h-[400px] flex flex-col justify-between rounded-md p-4 shadow-sm">
              <div>
                <h2 className="text-md font-semibold mb-2">CART TOTAL</h2>
                <div className="flex justify-between border-b py-5 leading-[24px] border-[#909090] text-sm mb-2">
                  <span>SUBTOTAL:</span>
                  <span>$54.00</span>
                </div>
                <div className="flex justify-between border-b py-5 leading-[24px] border-[#909090] text-sm mb-2">
                  <span>SHIPPING:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-sm font-semibold pt-2">
                  <span>TOTAL:</span>
                  <span>$54.00</span>
                </div>
              </div>

              <Link
                to={"/cart/checkout"}
                className="w-full block text-center bg-[#FF3200] hover:opacity-70 cursor-pointer text-white py-3 rounded-md font-semibold text-sm"
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
