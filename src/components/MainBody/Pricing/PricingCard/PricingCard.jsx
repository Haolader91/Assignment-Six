import React, { use } from "react";
import { FaCheck } from "react-icons/fa";

const PricingCard = ({ pricingCardPromise }) => {
  const pricingCardLoad = use(pricingCardPromise);
  // console.log(pricingCardLoad);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch container mx-auto">
      {pricingCardLoad.map((pricingData, index) => {
        return (
          <div
            key={index}
            className={`relative p-8 rounded-xl border duration-500 flex flex-col ${
              pricingData.isPopular
                ? "bg-[#8B2CFF] text-white border-transparent shadow-2xl scale-105 z-10 py-12"
                : "bg-white text-[#0F172A] border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2"
            }`}
          >
            {pricingData.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-5 py-1.5 rounded-full uppercase shadow-md">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{pricingData.name}</h3>
              <p
                className={`text-sm ${pricingData.isPopular ? "text-purple-100" : "text-gray-400"}`}
              >
                {pricingData.description}
              </p>
            </div>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold tracking-tighter">
                {pricingData.price}
              </span>
              <span
                className={`text-lg font-medium ${pricingData.isPopular ? "text-purple-200" : "text-gray-400"}`}
              >
                /Month
              </span>
            </div>

            <ul className="space-y-4 mb-10 grow">
              {pricingData.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheck className="text-green-500" />
                  <span
                    className={`text-sm font-medium ${pricingData.isPopular ? "text-purple-50" : "text-gray-600"}`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 ${
                pricingData.isPopular
                  ? "bg-white text-[#8B2CFF] hover:bg-gray-100 shadow-lg"
                  : "bg-[#8B2CFF] text-white hover:bg-[#7A1EEB] shadow-md shadow-purple-100"
              }`}
            >
              {pricingData.buttonText}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PricingCard;
