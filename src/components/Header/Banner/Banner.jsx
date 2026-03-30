import React from "react";
import bannerImg from "../../../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div>
      <div className="mt-15">
        <div className="container mx-auto max-h-screen flex justify-between gap-5">
          <div className="mt-25">
            <h2 className="text-[72px] font-bold text-[#101727] p-5">
              Supercharge Your <br />
              Digital Workflow
            </h2>
            <p className="text-[18px] text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today. <br /> Explore Products
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
          <div className="">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
