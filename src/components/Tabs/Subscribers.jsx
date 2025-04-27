import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import subscriberImg from "../../assets/subscribers.png";
const Subscribers = () => {
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsModalOpen(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Modal
        title={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={800}
        className="!p-0 !py-0 m-0"
        centered
      >
        <div className="bg-white rounded-lg overflow-hidden flex w-full md:h-[400px] max-w-3xl relative">
          {/* Left Side - Image */}
          <div className="h-full">
            <img
              src={subscriberImg}
              alt="subscriberImg"
              className="h-[200px] object-contain md:h-full w-full"
            />
          </div>

          {/* Right Side - Content */}
          <div className=" p-2 md:p-8 flex flex-col justify-center mx-auto relative">
            <h2 className="text-xl text-center md:text-6xl font-bold text-[#FF3200] mb-2">
              10% OFF
            </h2>
            <p className="text-base  text-center md:text-2xl md:mb-6 font-bold">
              FOR SUBSCRIBERS ONLY!
            </p>

            <input
              type="email"
              placeholder="enter your email"
              className="rounded-lg p-3 w-full mb-2 md:mb-4 shadow-2xl"
            />

            <button className="bg-[#FF3200] text-sm md:text-base w-fit mx-auto  hover:bg-white hover:text-black shadow-2xl cursor-pointer text-white rounded-lg p-2 md:p-3 font-bold  transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Subscribers;
