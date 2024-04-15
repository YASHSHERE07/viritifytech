import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-gray-200 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-20 py-8"
      style={{ maxHeight: "500px" }}
    >
      {/* Use Tailwind's text size classes for responsive font sizes */}
      <h1
        className="font-permanent-marker text-4xl md:text-7xl lg:text-8xl font-bold text-gray-800 my-4 md:my-0 overflow-hidden"
        style={{ maxHeight: "300px" }}
      >
        VIRITIFY.COM .....
      </h1>
      <p className="max-w-md text-xl md:text-2xl text-black font-bold my-4 md:my-0">
        "Your work is going to fill a large part of your life, and the only way
        to be truly satisfied is to do what you believe is great work." – Steve
        Jobs
      </p>
    </div>
  );
};

export default Banner;
