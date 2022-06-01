import React from "react";
import Analize from "../assets/Analize.png";
const Analytics = function () {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={Analize} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#C17817] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
            omnis, repellat minima doloremque optio itaque commodi aspernatur.
            Fugiat id laudantium illum nihil necessitatibus! Consequuntur ut
            numquam sunt unde minus?
          </p>
          <button className="bg-[#000] w-[200px] mx-auto rounded-md py-3 md:mx-0 text-[#FDB833] font-medium my-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
// #B1740F
export default Analytics;
