import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="container mx-auto flex justify-between">
          <div className="navbar-start">
            <a className="text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              DigiTools
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-5 text-xl">
            <span>
              <FiShoppingCart />
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
