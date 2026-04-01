import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { toast } from "react-toastify";

const CardData = ({ data, idx, itemCard, setItemCard }) => {
  const [isBuyNow, setIsBuyNow] = useState(false);
  const handlerBuyNow = () => {
    const isFound = itemCard.find((item) => item.id === data.id);
    if (isFound) {
      toast.error("Already added");
      return;
    }
    setIsBuyNow(true);
    toast.success("Buy now!");
    setItemCard([...itemCard, data]);
  };
  return (
    <div key={idx}>
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm relative font-sans">
        <div className="absolute top-6 right-6 bg-[#FEF3C7] text-[#D97706] text-sm font-medium px-4 py-1 rounded-full">
          {data?.tag}
        </div>

        <div className="w-16 h-16 bg-[#F8FAFC] rounded-full flex items-center justify-center border border-gray-100 mb-6">
          <span className="text-3xl">📝</span>{" "}
        </div>

        <h2 className="text-2xl font-bold text-[#0F172A] mb-3">{data.name}</h2>
        <p className="text-gray-500 leading-relaxed mb-6">{data.description}</p>

        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-3xl font-bold text-[#0F172A]">
            ${data.price}
          </span>
          <span className="text-gray-400 font-medium">/{data.period}</span>
        </div>

        <ul className="space-y-4 mb-10">
          {data.features.map((feature, idx) => {
            return (
              <li key={idx} className="flex items-center gap-3 text-gray-600">
                <span className="text-[#30B868] text-2xl">
                  <IoMdCheckmark />
                </span>
                {feature}
              </li>
            );
          })}
        </ul>

        <button
          onClick={handlerBuyNow}
          className={`w-full text-white font-semibold py-4 rounded-2xl transition-colors duration-300 ${
            isBuyNow
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
          }`}
        >
          {isBuyNow ? "Add to Card" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default CardData;
