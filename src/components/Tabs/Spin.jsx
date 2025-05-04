import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";

const sectors = [
  "ساعة",
  "موبايل",
  "سماعات",
  "لاب توب",
  "هدية مجانية",
  "كوبون خصم",
];

const colors = ["#ffffff", "#FF3200"]; // أبيض وأحمر

const Spin = () => {
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

  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [prize, setPrize] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsModalOpen(true);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setPrize(null);
    const randomRotation = 360 * 5 + Math.floor(Math.random() * 360);
    const finalRotation = rotation + randomRotation;
    setRotation(finalRotation);

    setTimeout(() => {
      setSpinning(false);
      const normalizedRotation = finalRotation % 360;
      const sectorAngle = 360 / sectors.length;
      const winningIndex = Math.floor(
        ((360 - normalizedRotation) % 360) / sectorAngle
      );
      setPrize(sectors[winningIndex]);
    }, 5000);
  };

  const radius = 150;
  const viewBoxSize = radius * 2;

  const getSectorPath = (index, total) => {
    const angle = (2 * Math.PI) / total;
    const startAngle = angle * index;
    const endAngle = startAngle + angle;

    const x1 = radius + radius * Math.sin(startAngle);
    const y1 = radius - radius * Math.cos(startAngle);
    const x2 = radius + radius * Math.sin(endAngle);
    const y2 = radius - radius * Math.cos(endAngle);

    return `
      M ${radius},${radius}
      L ${x1},${y1}
      A ${radius},${radius} 0 0,1 ${x2},${y2}
      Z
    `;
  };

  return (
    <Modal
      title={null}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={700}
      className="!p-0 !py-0 m-0"
      centered
    >
      <div className="bg-white rounded-lg w-full md:h-[400px] max-w-3xl flex flex-col md:flex-row items-center justify-center relative">
        {/* Left Side - Image */}
        <div className="h-full  md:-ml-[180px]">
          {/* <WheelSpinner /> */}
          <div className="flex flex-col items-center justify-center  overflow-hidden">
            <div className="relative w-[300px] h-[300px]">
              {/* Red border */}
              <div className="absolute inset-0 rounded-full border-[8px] border-white"></div>

              {/* White border */}
              <div className="absolute inset-2 rounded-full border-[8px] border-[#FF3200]"></div>

              {/* Wheel */}
              <motion.svg
                className="absolute inset-4"
                viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
                animate={{ rotate: rotation }}
                transition={{ duration: 5, ease: "easeOut" }}
              >
                {sectors.map((sector, index) => {
                  const anglePerSector = 360 / sectors.length;
                  const rotationForText =
                    index * anglePerSector + anglePerSector / 2;

                  return (
                    <g key={index}>
                      <path
                        d={getSectorPath(index, sectors.length)}
                        fill={colors[index % 2]}
                        stroke="#000"
                        strokeWidth="0.5"
                      />
                      <text
                        x={radius}
                        y={radius / 3}
                        textAnchor="middle"
                        fill={index % 2 === 0 ? "#000000" : "#ffffff"}
                        fontSize="14"
                        fontWeight="bold"
                        transform={`rotate(${rotationForText}, ${radius}, ${radius})`}
                      >
                        {sector}
                      </text>
                    </g>
                  );
                })}
              </motion.svg>

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 w-[30px] h-[30px] bg-white rounded-full border-2 border-gray-300 -translate-x-1/2 -translate-y-1/2 z-20"></div>

              {/* Pointer */}
              <div className="absolute top-[117px] left-1/2 transform -translate-x-1/2 z-30">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-[#FF3200]"></div>
              </div>
            </div>
            {/* Congratulations Message */}
            {prize && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-6 p-3 md:absolute left-0 bottom-0 md:w-full flex items-center justify-center bg-green-500 text-white font-bold rounded-xl shadow-lg"
              >
                🎉 مبروك! كسبت: {prize} 🎉
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="p-2 md:p-8 flex flex-col justify-center mx-auto relative">
          <h2 className=" md:text-[34px] text-center font-bold uppercase text-[#FF3200] mb-2">
            Enjoy Extra Discounts{" "}
          </h2>
          <p className="text-base  uppercase  text-center md:text-[40px] md:leading-[140%] md:mb-6 font-bold">
            Spin and Win <br /> On Selected Items{" "}
          </p>

          <PhoneInput
            country={"eg"}
            containerClass="!w-full"
            inputClass="!w-full"
            value={""}
            //   onChange={(phone) => this.setState({ phone })}
          />

          <button
            onClick={spin}
            className="bg-[#FF3200] uppercase text-sm md:text-base w-fit mx-auto  hover:bg-white hover:text-black shadow-2xl cursor-pointer text-white rounded-lg my-1 md:my-5 p-2 md:p-3 font-bold  transition"
          >
            spin to win
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Spin;
