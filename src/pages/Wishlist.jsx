import React from "react";
import { Table, Button } from "antd";
import pro from "../assets/pro.png";
import closeWhite from "../assets/closeWihte.png";
import MainSection from "../components/Tabs/MainSection";

const data = [
  {
    key: "1",
    product: (
      <div className="flex items-center gap-10 flex-wrap md:flex-nowrap">
        <div className="relative bg-[#E7E7E7] flex items-center justify-center p-2 rounded-xl">
          <img
            src={closeWhite}
            alt="closeWhite"
            className="cursor-pointer absolute -right-3 -top-3"
          />
          <img
            src={pro}
            alt="Men Watch"
            loading="lazy"
            className="h-[60px] w-[50px]"
          />
        </div>
        <span className="text-[14px] leading-[24.5px] capitalize">
          Men Black Gentle Belt
        </span>
      </div>
    ),
    price: (
      <span className="text-[14px] text-[#777777] text-center mx-auto block">
        $179.0
      </span>
    ),
    stockStatus: (
      <span className="text-[14px] text-[#222529] font-semibold text-center mx-auto block">
        In stock
      </span>
    ),
  },
  {
    key: "2",
    product: (
      <div className="flex items-center gap-10 flex-wrap md:flex-nowrap">
        <div className="relative bg-[#E7E7E7] flex items-center justify-center p-2 rounded-xl">
          <img
            src={closeWhite}
            alt="closeWhite"
            className="cursor-pointer absolute -right-3 -top-3"
          />
          <img
            src={pro}
            alt="Men Watch"
            loading="lazy"
            className="h-[60px] w-[50px]"
          />
        </div>
        <span className="text-[14px] leading-[24.5px] capitalize">
          Men Black Gentle Belt
        </span>
      </div>
    ),
    price: (
      <span className="text-[14px] text-[#777777] text-center mx-auto block">
        $179.0
      </span>
    ),
    stockStatus: (
      <span className="text-[14px] text-[#222529] font-semibold text-center mx-auto block">
        In stock
      </span>
    ),
  },
  {
    key: "3",
    product: (
      <div className="flex items-center gap-10 flex-wrap md:flex-nowrap">
        <div className="relative bg-[#E7E7E7] flex items-center justify-center p-2 rounded-xl">
          <img
            src={closeWhite}
            alt="closeWhite"
            className="cursor-pointer absolute -right-3 -top-3"
          />
          <img
            src={pro}
            alt="Men Watch"
            loading="lazy"
            className="h-[60px] w-[50px]"
          />
        </div>
        <span className="text-[14px] leading-[24.5px] capitalize">
          Men Black Gentle Belt
        </span>
      </div>
    ),
    price: (
      <span className="text-[14px] text-[#777777] text-center mx-auto block">
        $179.0
      </span>
    ),
    stockStatus: (
      <span className="text-[14px] text-[#222529] font-semibold text-center mx-auto block">
        In stock
      </span>
    ),
  },
];

const Wishlist = () => {
  const [size, setSize] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const columns = [
    {
      title: (
        <span className="font-bold text-center mx-auto block">PRODUCT</span>
      ),
      dataIndex: "product",
      key: "product",
    },
    {
      title: <span className="font-bold text-center mx-auto block">PRICE</span>,
      dataIndex: "price",
      key: "price",
    },
    {
      title: (
        <span className="font-bold text-center mx-auto block">
          STOCK STATUS
        </span>
      ),
      dataIndex: "stockStatus",
      key: "stockStatus",
    },
    {
      title: (
        <span className="font-bold text-center mx-auto block">ACTIONS</span>
      ),
      key: "actions",
      render: () => (
        <div className="flex gap-2 justify-center items-center md:space-x-2 flex-wrap">
          <Button
            style={{
              border: "1px solid #D1D5DB",
              color: "#4B5563",
              backgroundColor: "#F4F4F4",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#fff")
            }
          >
            <span className=" text-[10px] md:text-[13px] font-bold"> QUICK VIEW</span>
          </Button>

          <Button
            style={{
              backgroundColor: "#FF3200", // = bg-red-500
              color: "#FFFFFF", // = text-white
              padding: size < 768 ? "1px" : "10px 40px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#DC2626")
            } // = hover:bg-red-600
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#EF4444")
            }
          >
            <span className="uppercase text-[10px] md:text-[16.8px] font-bold md:py-2">
              SELECT OPTION
            </span>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      {" "}
      <MainSection breadcrumb={` Wishlist`} title={"Wishlist"} />{" "}
      <div className="py-10 md:py-24">
        <h4 className="font-bold uppercase text-[34.8px] leading-[24px] tracking-[3.36px] text-center">
          My wishlist{" "}
        </h4>{" "}
        <div className="md:p-4 my-10 max-w-6xl mx-auto">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="text-center w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Wishlist;
