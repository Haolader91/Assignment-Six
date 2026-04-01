import React, { Suspense } from "react";
import { UserPlus, Package, Rocket } from "lucide-react";
import GetStartIcons from "./GetStartIcons/GetStartIcons";

const getStartCardPromise = fetch("/GetStartCard.json").then((res) =>
  res.json(),
);

const GetStart = () => {
  return (
    <>
      <div className="text-center mt-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-lg mb-16">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <GetStartIcons
          getStartCardPromise={getStartCardPromise}
        ></GetStartIcons>
      </Suspense>
    </>
  );
};

export default GetStart;
