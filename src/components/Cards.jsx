import React from "react";
import Single from "../assets/Single.png";
import Group from "../assets/Group.png";

const Cards = function () {
  return (
    <div className="bg-white w-full py-[10rem] px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
          <img
            src={Single}
            alt="image of single user "
            className="w-14 mx-auto mt-[-2rem] bg-white"
          />
          <h2 className="font-bold text-center py-8 text-2xl ">Single User</h2>
          <p className="font-medium text-center text-4xl ">149$</p>
          <div className="text-center items-center mt-4 ">
            <p className="border-b py-1">500 GB Storage</p>
            <p className="border-b py-1">1 Granted USer</p>
            <p className="border-b py-1">Sent up to 2 GB</p>
          </div>
          <button className="bg-[#FDB833] w-[200px] mx-auto rounded-md py-3 text-black font-medium my-6">
            Start Trial
          </button>
        </div>

        <div className="w-full flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
          <img
            src={Group}
            alt="image of single user "
            className="w-14 mx-auto mt-[-2rem] bg-white"
          />
          <h2 className="font-bold text-center py-8 text-2xl ">Single User</h2>
          <p className="font-medium text-center text-4xl   ">149$</p>
          <div className="text-center items-center mt-4 ">
            <p className="border-b py-1">500 GB Storage</p>
            <p className="border-b py-1">1 Granted USer</p>
            <p className="border-b py-1">Sent up to 2 GB</p>
          </div>
          <button className="bg-[#FDB833] w-[200px] mx-auto rounded-md py-3 text-black font-medium my-6">
            Start Trial
          </button>
        </div>

        <div className="w-full flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
          <img
            src={Single}
            alt="image of single user "
            className="w-14 mx-auto mt-[-2rem] bg-white"
          />
          <h2 className="font-bold text-center py-8 text-2xl ">Single User</h2>
          <p className="font-medium text-center text-4xl ">149$</p>
          <div className="text-center items-center mt-4 ">
            <p className="border-b py-1">500 GB Storage</p>
            <p className="border-b py-1">1 Granted USer</p>
            <p className="border-b py-1">Sent up to 2 GB</p>
          </div>
          <button className="bg-[#FDB833] w-[200px] mx-auto rounded-md py-3 text-black font-medium my-6">
            Start Trial
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Cards;
