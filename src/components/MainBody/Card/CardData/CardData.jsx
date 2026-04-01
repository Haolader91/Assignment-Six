import React from "react";
import Card from "../Card";
import { toast } from "react-toastify";
import { BiSolidCartAdd } from "react-icons/bi";

const CardData = ({ itemCard, setItemCard }) => {
  // console.log(itemCard);
  const totalPrice = itemCard.reduce((sum, item) => sum + item.price, 0);

  const handlerAllClear = () => {
    setItemCard([]);
    toast("All item Delete!");
  };
  const handlerDelete = (item) => {
    const filterArray = itemCard.filter((d) => d.id !== item.id);
    setItemCard(filterArray);
    toast.success("Order Placed Successfully!!");
  };
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
        <h2 className="text-2xl font-bold text-[#101727] mb-8">Your Cart</h2>

        {itemCard.length === 0 ? (
          <>
            <div className="flex flex-col justify-center items-center h-64">
              <span className="text-7xl text-[#9514FA]">
                {/* Icon rendered as text using inline */}
                <BiSolidCartAdd />
              </span>
              <p className="text-gray-600 text-lg mt-4">
                Your Cart is Currently Empty!!
              </p>
            </div>
          </>
        ) : (
          <>
            {itemCard.map((item, id) => (
              <div key={id} className="space-y-4">
                {/* Item 1 */}
                <div className="flex mb-2 items-center justify-between bg-[#F8FAFC] p-6 rounded-3xl border border-gray-50">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm border border-gray-100">
                      📝
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#101727]">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 font-medium">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handlerDelete(item)}
                    className="text-[#FF4D8D] font-semibold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="flex justify-between items-center mb-10">
                <span className="text-gray-500 text-lg">Total:</span>
                <span className="text-4xl font-bold text-[#101727]">
                  ${totalPrice}
                </span>
              </div>

              <button
                onClick={handlerAllClear}
                className="w-full bg-[#8B2CFF] hover:bg-[#7A1EEB] text-white text-lg font-bold py-5 rounded-2xl transition-all shadow-lg shadow-purple-100 active:scale-[0.98]"
              >
                Proceed To Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardData;
