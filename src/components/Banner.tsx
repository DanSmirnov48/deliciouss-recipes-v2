import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black rounded-2xl"></div>
      <img
        src="/images/cooking6.jpg"
        className="w-full h-full object-cover rounded-2xl"
        alt="Cooking Banner"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <h2 className="text-white text-opacity-80 flex justify-center items-center text-5xl">
          Simple and delicious
        </h2>
      </div>
    </div>
  );
};

export default Banner;
