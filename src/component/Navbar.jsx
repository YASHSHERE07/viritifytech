import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Make sure the path is correct for your logo

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu upon navigation
  };

  return (
    <div className="m-4">
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="mb-4 rounded" />{" "}
        {/* Logo image displayed above the navbar */}
      </div>
      <nav className="bg-black shadow-lg mx-auto max-w-screen-lg px-4 py-2 lg:px-8 lg:py-4 my-4 rounded-xl text-xl ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden md:flex justify-center w-full">
            <div className="flex items-center justify-center space-x-[150px] grow">
              <button
                onClick={() => handleNavigate("/")}
                className="text-white font-semibold hover:text-blue-300 transition duration-300"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate("/trending")}
                className="text-white font-semibold hover:text-blue-300 transition duration-300"
              >
                Trending
              </button>
              <button
                onClick={() => handleNavigate("/products")}
                className="text-white font-semibold hover:text-blue-300 transition duration-300"
              >
                Products
              </button>
              <button
                onClick={() => handleNavigate("/about")}
                className="text-white font-semibold hover:text-blue-300 transition duration-300"
              >
                About
              </button>
            </div>
          </div>
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-white hover:text-blue-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
          <ul className="mt-4 space-y-2">
            <li>
              <button
                onClick={() => handleNavigate("/")}
                className="block w-full text-left text-white font-semibold hover:bg-gray-700 py-2 px-4 rounded transition duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("/trending")}
                className="block w-full text-left text-white font-semibold hover:bg-gray-700 py-2 px-4 rounded transition duration-300"
              >
                Trending
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("/products")}
                className="block w-full text-left text-white font-semibold hover:bg-gray-700 py-2 px-4 rounded transition duration-300"
              >
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate("/about")}
                className="block w-full text-left text-white font-semibold hover:bg-gray-700 py-2 px-4 rounded transition duration-300"
              >
                About
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
