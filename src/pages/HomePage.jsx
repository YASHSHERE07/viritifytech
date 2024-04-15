import React from "react";
import { useNavigate } from "react-router-dom";
import LatestTechNews from "../component/LatestTechNews";
import TechNewsBanner from "../component/TechNewsBanner";
import ConnectWithEmailBanner from "../component/ConnectWithEmailBanner";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-8 m-3">
          <div className="lg:col-span-6 min-h-[800px] rounded-[80px] shadow bg-orange-500 m-4 flex justify-center items-center overflow-hidden">
            {/* Assuming you have a specific image URL you want to use */}
            <img
              src="https://images.pexels.com/photos/723072/pexels-photo-723072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Featured"
              className="w-full h-full object-cover" // This ensures the image covers the div without stretching
            />
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 m-1">
              {/* Teal component */}
              <div
                className="min-h-[400px] rounded-[80px] shadow bg-teal-500 flex justify-center items-center cursor-pointer"
                onClick={() => navigateToPage("/trending")}
              >
                <div className="text-center font-bold font-protest-riot text-5xl text-white">
                  Trending
                </div>
              </div>

              {/* Red component */}
              <div
                className="min-h-[400px] rounded-[80px] shadow bg-red-500 flex justify-center items-center cursor-pointer"
                onClick={() => navigateToPage("/products")}
              >
                <div className="text-center font-bold font-protest-riot text-5xl text-white">
                  Products
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechNewsBanner />
      <LatestTechNews />
      <ConnectWithEmailBanner />
    </>
  );
};

export default HomePage;
