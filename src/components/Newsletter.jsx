import React from "react";

const Newsletter = function () {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="grid lg:grid-cols-3 max-w-[1240px] mx-auto">
        <div className="lg:col-span-2 my-4">
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2 ">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              placeholder="Enter Email"
              type="email"
              className="p-3 w-full rounded-md text-black flex"
            />
            <button className="bg-[#FDB833] w-[200px] mx-auto rounded-md py-3 text-black font-medium my-6 ml-4 ">
              Notify Me
            </button>
          </div>
          <p>
            we care about the protection of your data. Read our{" "}
            <span className="text-[#FDB833]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
