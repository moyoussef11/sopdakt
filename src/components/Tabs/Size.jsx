import React from "react";
import size from "../../assets/size.png";
import close from "../../assets/close.png";
import {  Modal } from "antd";

const SizeChart = ({ openSize, setOpenSize }) => {
  const sizes = [
    {
      label: "S",
      inch: { length: 28, bust: 36.2, shoulder: 15.7 },
      cm: { length: 71, bust: 82, shoulder: 37 },
    },
    {
      label: "L",
      inch: { length: 29.9, bust: 44.1, shoulder: 18.1 },
      cm: { length: 76, bust: 102, shoulder: 43 },
    },
    {
      label: "XL",
      inch: { length: 31.1, bust: 48, shoulder: 19.3 },
      cm: { length: 79, bust: 112, shoulder: 46 },
    },
    {
      label: "2XL",
      inch: { length: 31.9, bust: 52, shoulder: 20.5 },
      cm: { length: 80, bust: 122, shoulder: 49 },
    },
    {
      label: "3XL",
      inch: { length: 33.1, bust: 55.9, shoulder: 21.7 },
      cm: { length: 84, bust: 132, shoulder: 52 },
    },
  ];

  return (
    <Modal
      title={null}
      open={openSize}
      footer={null}
      width={800}
      closable={false}
      style={{ padding: 0 }}
    >
      <div className="">
        <div className="relative">
          <div className="max-w-4xl mx-auto bg-white p-4 relative rounded-[12px]">
            <img
              src={close}
              className="absolute -left-10 h-11 -top-8 cursor-pointer"
              alt="closeIcon"
              loading="lazy"
              onClick={() => setOpenSize(false)}
            />
            <div className="flex relative items-center flex-wrap md:flex-nowrap justify-between mb-4 border-b border-[#808285] pb-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img className="md:h-[230px]" src={size} alt="size" />
              </div>
              <div className="w-full mb-4 md:mb-0">
                <h4 className="text-[50px] leading-[100%] text-[#FF3200] mb-2">
                  Size Chart for Men
                </h4>
                <p className="text-[#555741] text-[20px] leading-[100%] mb-4">
                  This size chart shows product measurements taken when products
                  are laid flat. Actual product measurements may vary by up to
                  1".
                </p>
              </div>
            </div>

            {/* Inch Table */}
            <h2 className="font-semibold text-[#808285] bg-[#E6E6E6] w-fit text-center px-6 text-sm mb-2">
              Inch
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2"></th>
                    {sizes.map((size) => (
                      <th
                        key={size.label}
                        className="border border-gray-300 p-2 "
                      >
                        {size.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">
                      A Length
                    </td>
                    {sizes.map((size) => (
                      <td
                        key={size.label}
                        className="border border-gray-300 font-bold p-2 text-center"
                      >
                        {size.inch.length}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300  p-2 font-medium">
                      B Bust
                    </td>
                    {sizes.map((size) => (
                      <td
                        key={size.label}
                        className="border border-gray-300 p-2 font-bold text-center"
                      >
                        {size.inch.bust}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">
                      C Shoulder
                    </td>
                    {sizes.map((size) => (
                      <td
                        key={size.label}
                        className="border border-gray-300 p-2 font-bold text-center"
                      >
                        {size.inch.shoulder}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Centimeter Table */}
            <h2 className="font-semibold my-2 text-[#808285] bg-[#E6E6E6] w-fit text-center px-6 text-sm mb-2">
              Centimetre
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2"></th>
                    {sizes.map((size) => (
                      <th
                        key={size.label}
                        className="border border-gray-300  p-2"
                      >
                        {size.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">
                      A Length
                    </td>
                    {sizes.map((size) => (
                      <td
                        key={size.label}
                        className="border border-gray-300 p-2 font-bold text-center"
                      >
                        {size.cm.length}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">
                      B Bust
                    </td>
                    {sizes.map((size) => (
                      <td
                        key={size.label}
                        className="border border-gray-300 p-2 font-bold text-center"
                      >
                        {size.cm.bust}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">
                      C Shoulder
                    </td>
                    {sizes.map((size) => (
                      <td
                        key={size.label}
                        className="border border-gray-300 p-2 font-bold text-center"
                      >
                        {size.cm.shoulder}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SizeChart;
