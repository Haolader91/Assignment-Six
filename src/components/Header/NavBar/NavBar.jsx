import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = ({ itemCard }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="container mx-auto flex justify-between">
          <div className="navbar-start">
            <a
              href="/DigiTools"
              className="text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
            >
              DigiTools
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[18px]">
              <li>
                <a href="/Products">Products</a>
              </li>
              <li>
                <a href="/Features">Features</a>
              </li>
              <li>
                <a href="/Pricing">Pricing</a>
              </li>
              <li>
                <a href="/Testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/FAQ">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-5 text-[18px]">
            <span className="relative">
              <FiShoppingCart />
              {itemCard.length > 0 && (
                <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs px-2 rounded-full">
                  {itemCard.length}
                </span>
              )}
            </span>
            <span>Login</span>
            <a className="btn bg-linear-to-r from-[#9514FA] to-[#7127F8] text-white rounded-full">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
