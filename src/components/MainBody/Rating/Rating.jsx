import React from "react";

const Rating = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="container mx-auto">
        <div className="text-white py-12 px-6 flex flex-col md:flex-row items-center justify-around text-center gap-8">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-2">50K+</h2>
            <p className="text-lg opacity-80">Active Users</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-white opacity-30"></div>

          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-2">200+</h2>
            <p className="text-lg opacity-80">Premium Tools</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-white opacity-30"></div>

          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-2">4.9</h2>
            <p className="text-lg opacity-80">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
