import React, { use } from "react";
import { IoMdCheckmark } from "react-icons/io";

import {
  FiCheckSquare,
  FiGlobe,
  FiMic,
  FiTrendingUp,
  FiBriefcase,
  FiLinkedin,
  FiLayers,
  FiCode,
  FiPackage,
} from "react-icons/fi";
const iconMap = {
  FiCheckSquare: FiCheckSquare,
  FiGlobe: FiGlobe,
  FiMic: FiMic,
  FiTrendingUp: FiTrendingUp,
  FiBriefcase: FiBriefcase,
  FiLinkedin: FiLinkedin,
  FiLayers: FiLayers,
  FiCode: FiCode,
  FiPackage: FiPackage,
};

const CardData = ({ cardDataPromise }) => {
  const cardDisplay = use(cardDataPromise);

  //   console.log(cardDataPromise);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-8">
        {cardDisplay.map((data, ind) => {
          const IconComponent = iconMap[data.icon];
          return (
            <div
              key={ind}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm relative"
            >
              <div className="absolute top-6 right-6 bg-[#FEF3C7] text-[#D97706] text-sm font-medium px-4 py-1 rounded-full">
                {data.tagType}
              </div>

              <div className="w-16 h-16 bg-[#F8FAFC] rounded-full flex items-center justify-center border border-gray-100 mb-6">
                <span className="text-3xl">{<IconComponent />}</span>
              </div>

              <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
                {data.name}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                {data.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl font-bold text-[#0F172A]">
                  ${data.price}
                </span>
                <span className="text-gray-400 font-medium">
                  /{data.period}
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {data.features.map((feature, idx) => {
                  return (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <span className="text-[#30B868] text-2xl">
                        <IoMdCheckmark />
                      </span>
                      {feature}
                    </li>
                  );
                })}
              </ul>

              <button className="w-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold py-6 rounded-full">
                Buy Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardData;
