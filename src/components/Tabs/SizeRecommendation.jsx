import React, { useState } from "react";
import outlineIcon from "../../assets/layer.png";
import { Modal } from "antd";
import close from "../../assets/close.png";
import person from "../../assets/oerf.png";

const SizeRecommendation = ({ openSizeRec, setOpenSizeRec }) => {
  const [form, setForm] = useState({});
  const [openPerfect, setPerfect] = useState(false);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const fields = [
    { label: "Weight", options: ["50", "60", "70", "80"] },
    { label: "Hieght", options: ["150", "160", "170", "180"] },
    { label: "Age", options: ["18", "25", "30", "40"] },
    { label: "Abdomen", options: ["60", "70", "80", "90"] },
    { label: "Chest", options: ["80", "90", "100", "110"] },
  ];

  return (
    <>
      <Modal
        title={null}
        open={openSizeRec}
        footer={null}
        width={800}
        closable={false}
        style={{ padding: 0 }}
      >
        <div className="relative flex flex-col items-center justify-center bg-white p-6">
          <h1 className="text-[30px] md:text-[50px] font-normal text-[#FF3200]  text-center">
            Size Recomandtion
          </h1>
          <img
            src={close}
            className="absolute -left-10 h-11 -top-8 cursor-pointer"
            alt="closeIcon"
            loading="lazy"
            onClick={() => setOpenSizeRec(false)}
          />
          <form onSubmit={handleSubmit} className="w-full">
            {fields.map(({ label, options }) => {
              const fieldId = label.toLowerCase();
              return (
                <div key={label} className="">
                  <label className="block mb-1 font-medium">{label}</label>
                  <div className="relative border border-orange-500 rounded-md flex items-center">
                    <img src={outlineIcon} alt="outlineIcon" className="mx-2" />
                    <input
                      list={`list-${fieldId}`}
                      placeholder="Insert text here"
                      value={form[fieldId] || ""}
                      onChange={(e) => handleChange(fieldId, e.target.value)}
                      className="w-full py-3 px-3 text-sm outline-none appearance-none"
                      style={{
                        WebkitAppearance: "none",
                        MozAppearance: "textfield",
                      }}
                    />
                    <datalist id={`list-${fieldId}`} className="w-full">
                      {options.map((opt) => (
                        <option key={opt} value={opt} className="w-full" />
                      ))}
                      <option value="Other" className="w-full" />
                    </datalist>
                  </div>
                </div>
              );
            })}

            <button
              type="submit"
              onClick={() => setPerfect(true)}
              className="w-full bg-[#FF3200] my-3 cursor-pointer hover:bg-white hover:shadow-2xl md:w-[170px] mx-auto block uppercase text-white hover:text-black py-3 rounded-md font-bold text-lg transition"
            >
              countiue
            </button>
          </form>
        </div>
      </Modal>
      <Modal
        title={null}
        open={openPerfect}
        footer={null}
        width={800}
        closable={false}
        style={{ padding: 0 }}
      >
        <div className=" relative flex flex-col items-center justify-center bg-white p-6">
          <h1 className="text-[20px] md:text-[50px] uppercase font-normal text-[#FF3200] text-center">
            your perfect size is m{" "}
          </h1>
          <img
            src={close}
            className="absolute -left-10 h-11 -top-8 cursor-pointer"
            alt="closeIcon"
            loading="lazy"
            onClick={() => setPerfect(false)}
          />
          <img src={person} className="h-[450px] object-cover" alt="product" />
          <button
            type="submit"
            onClick={() => setPerfect(true)}
            className="w-full bg-[#FF3200] cursor-pointer hover:bg-white hover:shadow-2xl md:w-[200px] mx-auto block uppercase text-white hover:text-black py-3 rounded-md font-bold text-lg transition"
          >
            add to cart{" "}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default SizeRecommendation;
