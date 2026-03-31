import React, { Suspense } from "react";
import CardToggling from "./CardToggling/CardToggling";
import CardData from "./CardData/CardData";

const cardDataPromise = fetch("CardData.json").then((res) => res.json());

const Card = () => {
  return (
    <div>
      <div className="text-center mt-20">
        <h2 className="text-[48px] text-[#101727] font-bold mb-5">
          Premium Digital Tools
        </h2>
        <p className="text-xl text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <CardToggling></CardToggling>
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <CardData cardDataPromise={cardDataPromise}></CardData>
      </Suspense>
    </div>
  );
};

export default Card;
