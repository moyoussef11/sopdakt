import React, { useEffect } from "react";
import comparImg from "../assets/compare.png";
import comparIcon from "../assets/compareIcon.png";
import { Link } from "react-router-dom";
import MainSection from "../components/Tabs/MainSection";

const products = [
  {
    name: "Maxwell® RSC",
    link: "#",
    image: comparImg,
  },
  {
    name: "Maxwell® RSC 48",
    link: "#",
    image: comparImg,
  },
  {
    name: "Maxwell® CSC",
    link: "#",
    image: comparImg,
  },
  {
    name: "Maxwell® FSC",
    link: "#",
    image: comparImg,
  },
  {
    name: "Maxwell ABC",
    link: "#",
    image: comparImg,
  },
];

const rows = [
  {
    label: "Availability",
    values: [
      "✅ In Stock",
      "✅ In Stock",
      "✅ In Stock",
      "✅ In Stock",
      "✅ In Stock",
    ],
  },
  {
    label: "Vendor",
    values: ["Ecomus", "M&H", "Ecomus", "AS4600", "AS1000"],
  },
  {
    label: "Color",
    values: [
      "Grey, Pink, Light Pink, White",
      "-",
      "Orange, Black, White",
      "up to 16 samples",
      "up to 32 samples",
    ],
  },
];

const Compare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {" "}
      <MainSection breadcrumb={` compare`} title={"compare"} />
      <div className="py-10 md:py-24">
        <div className="max-w-[1200px] mx-auto overflow-x-auto">
          <table className="table-auto border-separate border-spacing-0 w-full text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 bg-transparent font-bold p-4 text-left min-w-[200px] z-10"></th>
                {products.map((product, i) => (
                  <th
                    key={i}
                    className="border-l border-gray-200 p-4 min-w-[180px]"
                  >
                    <button className="underline cursor-pointer text-[12px] font-normal leading-[19px] text-center capitalize text-[#FF3200]">
                      remove
                    </button>
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-[200px] h-[300px] mx-auto"
                    />
                    <h5 className="mt-2 text-[16px] font-normal leading-[25.6px]">
                      {product.name}{" "}
                    </h5>
                    <div className="prices text-[16px] font-semibold leading-[16px] text-center flex flex-col md:flex-row justify-center gap-2 mt-2">
                      <span className=" opacity-50 text-[13px] leading-[13px]">
                        $14.99
                      </span>
                      <span className="text-[#DB1215]">$8.99</span>
                    </div>
                    <button className="uppercase cursor-pointer flex items-center justify-center gap-2 mt-4 bg-white text-black font-bold py-2 px-4 rounded-[12px] hover:bg-[#DC2626] hover:text-white transition duration-300 ease-in-out mx-auto border border-[#EBEBEB]">
                      <img
                        src={comparIcon}
                        alt="comparIcon"
                        className="h-4"
                        loading="lazy"
                      />
                      <span>QUICK ADD</span>
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="sticky left-0 font-semibold bg-white p-4 max-w-[200px] z-10 shadow-inner">
                    {row.label}
                  </td>
                  {row.values.map((val, j) => (
                    <td key={j} className="border-l border-gray-200 p-4">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link
        to={"/products"}
        className="text-[16.8px] text-center uppercase leading-[24px] font-bold bg-[#FF3200] text-white py-3 px-14 rounded-[12px] hover:bg-[#DC2626] transition duration-300 ease-in-out block mx-auto w-fit my-10"
      >
        back to shopping
      </Link>
    </>
  );
};

export default Compare;
