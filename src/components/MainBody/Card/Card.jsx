import { use, useState } from "react";
import ProductsCardData from "./ProductsCardData/ProductsCardData";
import CardToggling from "./CardToggling/CardToggling";
import CardData from "./CardData/CardData";

const Card = ({ ProductsCardDataPromise, activeTab, setActiveTab }) => {
  const ProductsCardDataLoad = use(ProductsCardDataPromise);
  // console.log(cardData);

  const [itemCard, setItemCard] = useState([]);
  // console.log(itemCard);

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
        {/* <ToggleSwitch></ToggleSwitch> */}
      </div>

      <CardToggling
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        itemCard={itemCard}
      ></CardToggling>

      {activeTab === "Card" ? (
        <CardData itemCard={itemCard} setItemCard={setItemCard}></CardData>
      ) : null}

      {/* Card  */}
      {activeTab === "Products" ? (
        <div className="grid grid-cols-3 container mx-auto gap-5 my-10">
          {ProductsCardDataLoad.map((data, idx) => (
            <ProductsCardData
              key={idx}
              data={data}
              idx={idx}
              itemCard={itemCard}
              setItemCard={setItemCard}
            ></ProductsCardData>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Card;
