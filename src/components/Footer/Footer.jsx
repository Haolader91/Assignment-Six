import React from "react";
// import { Instagram, Facebook, Twitter } from "lucide-react"; // Make sure lucide-react is installed
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-12 mb-16">
          <div className="lg:grid-cols-2">
            <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Product</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="/Features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/Pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/Templates"
                  className="hover:text-white transition-colors"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="/Integrations"
                  className="hover:text-white transition-colors"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="/About" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/Blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/Careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a href="/Press" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 text-gray-400 mb-8">
              <li>
                <a
                  href="/Documentation"
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/Help Center"
                  className="hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/Community"
                  className="hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="/Contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 lg:hidden">
              Social Links
            </h3>
            <div className="flex gap-4">
              <a
                href="/Instagram"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="/Facebook"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="/Twitter"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500">
            © 2026 Digitools. All rights reserved.
          </p>

          <div className="flex gap-8 text-gray-500">
            <a href="#" className="hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
