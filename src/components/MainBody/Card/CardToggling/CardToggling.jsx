import React from "react";

const CardToggling = ({ activeTab, setActiveTab, itemCard }) => {
  console.log(activeTab);
  return (
    <div className="tabs tabs-box bg-transparent justify-center">
      <input
        type="radio"
        name="my_tabs_1"
        className="tab rounded-full w-30"
        aria-label="Product"
        defaultChecked
        onClick={() => setActiveTab("Products")}
      />
      <input
        type="radio"
        name="my_tabs_1"
        className="tab rounded-full w-30"
        aria-label={`Card(${itemCard.length})`}
        onClick={() => setActiveTab("Card")}
      />
    </div>
  );
};

export default CardToggling;
