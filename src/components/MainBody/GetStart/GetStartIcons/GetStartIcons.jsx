import React, { use } from "react";
import { UserPlus, Package, Rocket } from "lucide-react";

const getIcons = {
  UserPlus: UserPlus,
  Package: Package,
  Rocket: Rocket,
};

const GetStartIcons = ({ getStartCardPromise }) => {
  const getStartCardLoad = use(getStartCardPromise);
  //   console.log(getStartCardLoad);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-8">
        {getStartCardLoad.map((get, ind) => {
          const GetIconsComponent = getIcons[get.icon] ?? null;
          //   console.log(GetIconsComponent)
          return (
            <div
              key={ind}
              className="relative p-10 bg-white border border-gray-100 rounded-4xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="absolute top-6 right-6 bg-[#8B2CFF] text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg shadow-purple-200">
                {get.id}
              </div>

              <div className="w-20 h-20 bg-[#F5EEFF] rounded-full flex items-center justify-center mb-8">
                {GetIconsComponent && (
                  <GetIconsComponent size={32} className="text-[#8B2CFF]" />
                )}
              </div>

              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                {get.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{get.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetStartIcons;
