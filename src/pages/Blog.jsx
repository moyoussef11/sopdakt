import React from "react";
import MainSection from "../components/Tabs/MainSection";
import heroImg from "../assets/blogHero.png";
import { HiOutlineSearch } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { Input } from "antd";
import blogImg from "../assets/blog1.png";
import blogPersonImg from "../assets/personblog.jpg";
import filterImg from "../assets/Filter.png";
import CardBlog from "../components/cards/CardBlog";

const Blog = () => {
  return (
    <>
      {" "}
      <MainSection breadcrumb={`BLOG`} title={"BLOG"} />
      <section
        style={{ backgroundImage: `url(${heroImg})` }}
        className="w-full h-screen  bg-center bg-cover bg-no-repeat relative flex items-center justify-center md:justify-start px-5 md:px-16 lg:px-32"
      >
        <div className="bg-[#FF5B5B30] w-full h-full absolute left-0"></div>

        <h4 className="text-5xl sm:text-[70px] relative font-bold text-white text-center leading-[84px] tracking-[0.2px] uppercase">
          We believe <br /> we can all make <br /> a difference.
        </h4>
      </section>
      <section className="scale-90 px-5 md:px-16 lg:px-32">
        <form className="flex items-center justify-center">
          <Input
            size="large"
            placeholder="Search"
            prefix={<HiOutlineSearch className="mr-2" />}
            style={{
              backgroundColor: "#F5F5F5",
              border: "none",
              maxWidth: "700px",
              padding: "15px",
            }}
            suffix={
              <button type="reset">
                <GrFormClose size={20} />
              </button>
            }
          />
        </form>
        <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap gap-5 my-24">
          <div className="cards w-full grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <CardBlog
              id={"1"}
              blogImg={blogImg}
              title={"Fashion Trends"}
              author="mohamed"
              blogPersonImg={blogPersonImg}
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean..."
              date="Jan 10, 2022"
              numRead="3"
            />
            <CardBlog
              id={"1"}
              blogImg={blogImg}
              title={"Fashion Trends"}
              author="mohamed"
              blogPersonImg={blogPersonImg}
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean..."
              date="Jan 10, 2022"
              numRead="3"
            />
            <CardBlog
              id={"1"}
              blogImg={blogImg}
              title={"Fashion Trends"}
              author="mohamed"
              blogPersonImg={blogPersonImg}
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean..."
              date="Jan 10, 2022"
              numRead="3"
            />
            <CardBlog
              id={"1"}
              blogImg={blogImg}
              title={"Fashion Trends"}
              author="mohamed"
              blogPersonImg={blogPersonImg}
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean..."
              date="Jan 10, 2022"
              numRead="3"
            />
            <CardBlog
              id={"1"}
              blogImg={blogImg}
              title={"Fashion Trends"}
              author="mohamed"
              blogPersonImg={blogPersonImg}
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean..."
              date="Jan 10, 2022"
              numRead="3"
            />
            <CardBlog
              id={"1"}
              blogImg={blogImg}
              title={"Fashion Trends"}
              author="mohamed"
              blogPersonImg={blogPersonImg}
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean..."
              date="Jan 10, 2022"
              numRead="3"
            />
            <CardBlog
              id={"1"}
              blogImg={blogImg}
              title={"Fashion Trends"}
              author="mohamed"
              blogPersonImg={blogPersonImg}
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean..."
              date="Jan 10, 2022"
              numRead="3"
            />
            <CardBlog
              id={"1"}
              blogImg={blogImg}
              title={"Fashion Trends"}
              author="mohamed"
              blogPersonImg={blogPersonImg}
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean..."
              date="Jan 10, 2022"
              numRead="3"
            />
            <CardBlog
              id={"1"}
              blogImg={blogImg}
              title={"Fashion Trends"}
              author="mohamed"
              blogPersonImg={blogPersonImg}
              desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean..."
              date="Jan 10, 2022"
              numRead="3"
            />
          </div>
          <div className="filters w-full lg:w-1/4">
            <div className="w-full lg:w-80 p-4 bg-white rounded-2xl shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-sm leading-[19.2px]">FILTER</h2>
                <img src={filterImg} className="h-[25px]" alt="filterImg" />
              </div>

              {/* Months */}
              <div className="mb-6">
                <p className="text-[14px] font-medium text-[#98A0B4] uppercase leading-[20px] mb-2">
                  MONTHS
                </p>
                <div className="flex gap-3 flex-wrap">
                  {["Any", "1", "2", "3", "4", "5+"].map((label) => (
                    <button
                      key={label}
                      className="text-[14px] cursor-pointer font-medium leading-[20px] px-4 py-1 rounded-[16px] bg-[#F2F4F7] text-[#4B4B4B]"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Words Range */}
              <div className="mb-6">
                <p className="text-[14px] font-medium text-[#98A0B4] uppercase leading-[20px] mb-4">
                  WORDS RANGE
                </p>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Min"
                    className="w-full px-2 py-1 border border-[#D0D5DD] rounded-md text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Max"
                    className="w-full px-2 py-1 border border-[#D0D5DD] rounded-md text-xs"
                  />
                </div>
                <div className="my-4">
                  <div className="text-[#FF3200] flex items-center justify-between text-[12px] font-semibold leading-[17px]">
                    <span>1</span>
                    <span>1000</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="1000"
                    className="w-full accent-[#FF3200]"
                  />
                </div>
              </div>

              {/* Newest */}
              <div className="mb-6">
                <p className="text-[14px] font-medium text-[#98A0B4] uppercase leading-[20px] mb-4">
                  NEWEST
                </p>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="NEW"
                    className="w-full px-2 py-1 border border-[#D0D5DD] rounded-md text-xs"
                  />
                  <input
                    type="text"
                    placeholder="OLD"
                    className="w-full px-2 py-1 border border-[#D0D5DD] rounded-md text-xs"
                  />
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  className="w-full accent-[#FF3200]"
                />
              </div>

              {/* Year Built */}
              <div className="mb-6">
                <p className="text-[14px] font-medium text-[#98A0B4] uppercase leading-[20px] mb-4">
                  YEAR BUILT
                </p>
                <div className="flex gap-2">
                  <select className="w-full px-2 py-1 border border-[#D0D5DD] rounded-md text-xs">
                    <option>Min</option>
                  </select>
                  <select className="w-full px-2 py-1 border border-[#D0D5DD] rounded-md text-xs">
                    <option>Max</option>
                  </select>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <p className="text-[14px] font-medium text-[#98A0B4] uppercase leading-[20px] mb-4">
                  AMENITIES
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "FASHION",
                    "MEN",
                    "TRENDS",
                    "ACCWSSORISE",
                    "Cable Ready",
                    "Available now",
                    "College",
                    "Corporate",
                    "Elevator",
                    "Extra Storage",
                    "High speed internet",
                    "Garage",
                    "Pet allowed",
                  ].map((item) => (
                    <button
                      key={item}
                      className="text-xs leading-[12px] capitalize cursor-pointer px-3 py-1 rounded-full bg-[#F2F4F7] text-[#4B4B4B]"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
