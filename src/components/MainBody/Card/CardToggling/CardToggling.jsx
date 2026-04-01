import React from "react";

const CardToggling = ({ activeTab, setActiveTab, itemCard }) => {
  console.log(activeTab);
  return (
    <div className="tabs tabs-box bg-transparent justify-center">
      <div className="inline-flex items-center bg-white border border-gray-100 rounded-full p-1 shadow-sm">
        {/* Products Button */}
        <button
          onClick={() => setActiveTab("Products")}
          className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
            activeTab === "Products"
              ? "bg-[#8B2CFF] text-white shadow-lg shadow-purple-200"
              : "bg-transparent text-[#2D1B69] hover:bg-gray-50"
          }`}
        >
          Products
        </button>

        {/* Cart Button */}
        <button
          onClick={() => setActiveTab("Card")}
          className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
            activeTab === "Card"
              ? "bg-[#8B2CFF] text-white shadow-lg shadow-purple-200"
              : "bg-transparent text-[#2D1B69] hover:bg-gray-50"
          }`}
        >
          Cart ({itemCard.length})
        </button>
      </div>
    </div>
  );
};

export default CardToggling;
