import React from "react";

const Ready = () => {
  return (
    <section className="bg-[#7F26FD] py-20 px-6 text-white text-center">
      <div className="mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="bg-white text-[#7F26FD] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Explore Products
          </button>

          <button className="border border-white/40 bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        <p className="text-sm opacity-70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Ready;
