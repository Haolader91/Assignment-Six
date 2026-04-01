import React from "react";
import bannerImg from "../../../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div>
      <div className="my-15">
        <div className="container mx-auto flex justify-between gap-5 flex-col md:flex-row">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[72px] font-bold text-[#101727] p-5">
              Supercharge Your <br className="hidden md:block" />
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Digital Workflow
              </span>
            </h2>
            <p className="text-[18px] text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity <br className="hidden md:block" /> software—all in
              one place. Start creating faster today.{" "}
              <br className="hidden md:block" /> Explore Products
            </p>
            <div className="mt-7 flex gap-6">
              <button className="btn p-4 bg-linear-to-r from-[#9514FA] to-[#7127F8] text-white rounded-full">
                Explore Products
              </button>
              <button className="btn p-4 btn-outline btn-primary rounded-full">
                <span>
                  <CiPlay1 />
                </span>
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
