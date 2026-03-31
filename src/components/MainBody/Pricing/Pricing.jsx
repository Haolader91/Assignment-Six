import React, { Suspense } from "react";
import PricingCard from "./PricingCard/PricingCard";
const pricingCardPromise = fetch("/public/Pricing.json").then((res) =>
  res.json(),
);
const Pricing = () => {
  return (
    <section className="py-20 px-6 bg-slate-50 font-sans">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      {
        <Suspense
          fallback={
            <span className="loading loading-spinner text-primary"></span>
          }
        >
          <PricingCard pricingCardPromise={pricingCardPromise}></PricingCard>
        </Suspense>
      }
    </section>
  );
};

export default Pricing;
