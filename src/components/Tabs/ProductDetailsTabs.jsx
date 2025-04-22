import React, { useState } from "react";
import {
  FaTshirt,
  FaTemperatureLow,
  FaBan,
  FaWater,
  FaRegSnowflake,
} from "react-icons/fa";
import { MdLocalShipping, MdRateReview, MdPolicy } from "react-icons/md";
import { BiInfoCircle } from "react-icons/bi";
import pic1 from "../../assets/Border (1).png";
import pic2 from "../../assets/Border (2).png";
import pic3 from "../../assets/Border (3).png";
import pic4 from "../../assets/Border (4).png";
import pic5 from "../../assets/Border (5).png";


const tabs = [
  "Description",
  "Additional Information",
  "Review",
  "Shipping",
  "Return Policies",
];

const ProductDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className=" p-6 text-sm">
      {/* Tabs */}
      <div className="flex flex-wrap gap-6 border-b border-[#EBEBEB] mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium ${
              activeTab === tab
                ? "border-b-2 border-red-500 text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Description" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="mb-4">
              This shirt features button-up sleeves and a relaxed silhouette.
              It’s made from crinkle-texture LENZING™ ECOVERO™ Viscose —
              responsibly sourced fabric that's soft and sustainable.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="list-disc list-inside space-y-1 text-[#909090]">
                <li>Front button placket</li>
                <li>Adjustable sleeve tabs</li>
                <li>Embroidered crest at placket and hem</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Material Details</h4>
              <ul className="list-disc list-inside space-y-1 text-[#909090]">
                <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                <li>Care: Hand wash</li>
                <li>Imported</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Materials Care</h4>
            <ul className="space-y-3 text-[#909090]">
              <li className="flex items-center gap-3">
                <img src={pic1} className="h-6" alt="pic" loading="lazy" />
                Machine wash max. 30°C. Short spin.
              </li>
              <li className="flex items-center gap-3">
                <img src={pic2} className="h-6" alt="pic" loading="lazy" />
                Iron maximum 110°C.
              </li>
              <li className="flex items-center gap-3">
                <img src={pic3} className="h-6" alt="pic" loading="lazy" />
                Do not bleach.
              </li>
              <li className="flex items-center gap-3">
                <img src={pic4} className="h-6" alt="pic" loading="lazy" />
                Do not dry clean.
              </li>
              <li className="flex items-center gap-3">
                <img src={pic5} className="h-6" alt="pic" loading="lazy" />
                Tumble dry, medium heat.
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === "Additional Information" && (
        <div className="text-gray-600 space-y-2">
          <p>
            <BiInfoCircle className="inline mr-2 text-blue-500" />
            Fit: Relaxed — an easy shape that's just shy of loose.
          </p>
          <p>
            <BiInfoCircle className="inline mr-2 text-blue-500" />
            Fabric weight: Light
          </p>
          <p>
            <BiInfoCircle className="inline mr-2 text-blue-500" />
            Sheer: Not sheer
          </p>
        </div>
      )}

      {activeTab === "Review" && (
        <div className="text-[#909090]">
          <MdRateReview className="inline text-yellow-500 mr-2" />
          <p>"Very comfortable and stylish!" - Sarah</p>
          <p>"Great material and fit." - Omar</p>
        </div>
      )}

      {activeTab === "Shipping" && (
        <div className="text-[#909090]">
          <MdLocalShipping className="inline text-green-600 mr-2" />
          <p>
            Free shipping on orders over $50. Delivered within 3–7 business
            days.
          </p>
        </div>
      )}

      {activeTab === "Return Policies" && (
        <div className="text-[#909090]">
          <MdPolicy className="inline text-red-600 mr-2" />
          <p>
            Returns accepted within 30 days of delivery. Items must be unused
            and in original packaging.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsTabs;
