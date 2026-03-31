import React from "react";

const CardToggling = () => {
  return (
    <div className="flex justify-center items-center p-10">
      <div className=" bg-white rounded-full border-gray-100 shadow-sm p-1 items-center">
        <button className="px-8 py-3 rounded-full font-medium bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-white shadow-lg">
          Products
        </button>
        <button className="px-8 py-3 rounded-full font-medium text-[#2D1B69]">
          Card (2)
        </button>
      </div>
    </div>
  );
};

export default CardToggling;
