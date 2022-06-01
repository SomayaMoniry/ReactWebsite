import React from "react";
import Typed from "react-typed";

const Hero = function () {
  return (
    <div className="text-white">
      <div className=" flex flex-col w-full max-w-[800px] mx-auto text-center h-screen mt-[-96px] justify-center ">
        <p className="text-[#FDB833] uppercase font-bold p-2">
          growing with data analytics
        </p>
        <h1 className="md:text-7xl font-bold sm:text-6xl text:text-4xl md:py-6 ">
          Grow with data.
        </h1>
        <div className="flex justify-center py-4">
          <p className="md:text-5xl  sm:text-4xl text-xl  font-bold ">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:pl-4 md:text-5xl  sm:text-4xl text-xl font-bold pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-gray-500 font-bold md:2xl text-xl">
          Monitor your data analytics to increase revenue for BTB,BTC & SASS
          platforms.
        </p>
        <button className="bg-[#FDB833] w-[200px] mx-auto rounded-md py-3 text-black font-medium my-6 ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
