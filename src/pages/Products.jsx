import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import product1 from "../assets/shirtShop.png";
import CardShop from "../components/cards/CardShop";
import MainSection from "../components/Tabs/MainSection";

const products = Array(8).fill({
  name: "The Cloud Relaxed Cardigan",
  price: "200 EGP",
  image: "https://via.placeholder.com/300x400", // Replace with real image URL
  colors: ["bg-black", "bg-red-600", "bg-orange-400"],
});

const filters = {
  category: ["All Gender", "Accessories", "Clothing", "Dresses", "Tops"],
  color: ["Black", "Blue", "Brown", "Green", "Orange", "Pink", "Red", "Tan"],
  size: ["XS", "S", "M", "L"],
};

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedWaist, setSelectedWaist] = useState(null);
  const [selectedClothing, setSelectedClothing] = useState(null);

  const waistSizes = [35, 36, 37, 38, 39];
  const clothingSizes = filters.size;
  return (
    <>
      <MainSection breadcrumb={` CATEGORIES > MEN`} title={"MEN"} />{" "}
      <div className="px-5 lg:px-16 xl:px-24 py-14 flex flex-col flex-wrap lg:flex-nowrap lg:flex-row gap-4 ">
        <div className="w-full lg:w-1/4 bg-white z-10 p-2">
          <span className="text-[12px] leading-[16px] tracking-[0.2px] capitalize font-normal border-b-[1px] border-[#DDDBDC] block py-3">
            249 Products
          </span>
          <div className="flex justify-between md:flex-col flex-wrap gap-4 mt-5">
            <div className="bg-white border-b-2 py-5 border-[#DDDBDC] rounded-lg mt-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-base font-semibold text-gray-800 custom-font">
                  Category
                </h2>
                <IoIosArrowUp className="cursor-pointer" />
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <input type="checkbox" className="custom-checkbox" />
                  <span className="ml-2 text-sm text-gray-700 custom-font">
                    Everyone - ALL Gender Collection
                  </span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="custom-checkbox" />
                  <span className="ml-2 text-sm text-gray-700 custom-font">
                    Accessories & Gift Cards
                  </span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="custom-checkbox" />
                  <span className="ml-2 text-sm text-gray-700 custom-font">
                    Backpacks, Weekenders & Duffle Bags
                  </span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="custom-checkbox" />
                  <span className="ml-2 text-sm text-gray-700 custom-font">
                    Dress Shirts & Button Downs
                  </span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="custom-checkbox" />
                  <span className="ml-2 text-sm text-gray-700 custom-font">
                    Hoodies & Sweatshirts
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="block mt-3 text-sm text-[#4C4C4B] w-fit custom-font hover:underline"
              >
                View More +
              </a>
            </div>
            <div className="bg-white border-b-2 py-5 border-[#DDDBDC] rounded-lg mt-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-base font-semibold text-gray-800 custom-font capitalize">
                  colors
                </h2>
                <IoIosArrowUp className="cursor-pointer" />
              </div>
              <ul className="grid grid-cols-3 gap-2">
                {filters.color.map((color) => (
                  <li
                    key={color}
                    className="flex items-center flex-col justify-center"
                  >
                    <span
                      className="h-[24px] w-[24px] flex items-center justify-center rounded-full cursor-pointer"
                      style={{ backgroundColor: `${color}` }}
                    ></span>
                    <span>{color}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="block mt-3 text-sm text-[#4C4C4B] w-fit custom-font hover:underline"
              >
                View More +
              </a>
            </div>
            <div className="p-4">
              {/* قسم Waist */}
              <div className="mb-4 ">
                <h2 className="text-lg font-semibold mb-2">Waist</h2>
                <div className="flex space-x-2">
                  {waistSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedWaist(size)}
                      className={`w-12 h-12 flex items-center justify-center border rounded-md text-sm ${
                        selectedWaist === size
                          ? "bg-gray-200 border-gray-400"
                          : "bg-white border-gray-300"
                      } hover:bg-gray-100 transition-colors`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* قسم Clothing */}
              <div>
                <h2 className="text-lg font-semibold mb-2">CLOTHING</h2>
                <div className="flex space-x-2">
                  {clothingSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedClothing(size)}
                      className={`w-12 h-12 flex items-center justify-center border rounded-md text-sm ${
                        selectedClothing === size
                          ? "bg-gray-200 border-gray-400"
                          : "bg-white border-gray-300"
                      } hover:bg-gray-100 transition-colors`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4  flex flex-col justify-center products">
          <div className="flex flex-col gap-1 items-center justify-center md:items-start">
            {" "}
            <h3 className="md:text-[32px] leading-[40px] font-normal">
              Men’s Clothing & Apparel - New Arrivals
            </h3>
            <span className="leading-[40px] font-normal tracking-[0.64px]">
              Featured
            </span>
          </div>
          <div className="cards w-full md:w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <CardShop
              path={"/"}
              pic={product1}
              name={"Hyperadapt Shield Lite"}
              price={200}
            />
            <CardShop
              path={"/"}
              pic={product1}
              name={"Hyperadapt Shield Lite"}
              price={200}
            />
            <CardShop
              path={"/"}
              pic={product1}
              name={"Hyperadapt Shield Lite"}
              price={200}
            />
            <CardShop
              path={"/"}
              pic={product1}
              name={"Hyperadapt Shield Lite"}
              price={200}
            />
            <CardShop
              path={"/"}
              pic={product1}
              name={"Hyperadapt Shield Lite"}
              price={200}
            />
            <CardShop
              path={"/"}
              pic={product1}
              name={"Hyperadapt Shield Lite"}
              price={200}
            />
            <CardShop
              path={"/"}
              pic={product1}
              name={"Hyperadapt Shield Lite"}
              price={200}
            />
            <CardShop
              path={"/"}
              pic={product1}
              name={"Hyperadapt Shield Lite"}
              price={200}
            />
            <CardShop
              path={"/"}
              pic={product1}
              name={"Hyperadapt Shield Lite"}
              price={200}
            />
            <CardShop
              path={"/"}
              pic={product1}
              name={"Hyperadapt Shield Lite"}
              price={200}
            />
            <CardShop
              path={"/"}
              pic={product1}
              name={"Hyperadapt Shield Lite"}
              price={200}
            />
            <CardShop
              path={"/"}
              pic={product1}
              name={"Hyperadapt Shield Lite"}
              price={200}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
