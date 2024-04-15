import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // Ensure this CSS file contains the styles used below

const BentoGrid = () => {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div className="max-w-[1600px] mx-auto font-protest-riot ">
      <div className="flex justify-center items-center  bg-[#F4EAE0] rounded-3xl">
        <div className="w-full px-4 py-[60px] max-w-[900px] mx-auto">
          {/* First row of grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div
              className="h-[150px] rounded-[50px] shadow bg-[#FBA834] flex justify-center items-center scale-hover cursor-pointer"
              onClick={() => navigateToPage("/space")}
            >
              <div className="text-center font-bold text-5xl scale-text">
                Space
              </div>
            </div>
            <div
              className="h-[150px] rounded-[50px] shadow bg-white flex justify-center items-center scale-hover cursor-pointer"
              onClick={() => navigateToPage("/startups")}
            >
              <div className="text-center font-bold text-5xl scale-text">
                Startups
              </div>
            </div>
          </div>

          {/* Second row of grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div
              className="h-[235px] rounded-[60px] shadow bg-[#2C7865] flex justify-center items-center scale-hover cursor-pointer"
              onClick={() => navigateToPage("/crypto")}
            >
              <div className="text-center font-bold text-5xl scale-text">
                Crypto
              </div>
            </div>
            <div
              className="h-[235px] rounded-[60px] shadow bg-white flex justify-center items-center scale-hover cursor-pointer"
              onClick={() => navigateToPage("/ai")}
            >
              <div className="text-center font-bold text-5xl scale-text">
                AI
              </div>
            </div>
            <div className="lg:col-span-2 h-[230px] rounded-[50px] shadow bg-[#5BBCFF] flex justify-center items-center scale-hover cursor-pointer">
              <div className="text-white bg font-bold text-[40px] scale-text">
                What's New
              </div>
            </div>
          </div>

          {/* Third row (single element) */}
          <div
            className="h-[150px] rounded-[80px] shadow bg-white flex justify-center items-center scale-hover cursor-pointer"
            onClick={() => navigateToPage("/podcasts-and-interviews")}
          >
            <div className="text-center font-bold text-5xl scale-text">
              Podcasts and Interviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
