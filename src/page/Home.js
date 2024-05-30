import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiToolboxFill } from "react-icons/pi";

const Home = () => {
  return (
    <>
      <div 
        to={"/"}
        style={{
          backgroundImage: "url('rectangle-1@2x.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" h-[400px] w-full " >
        <div className="items-center text-center justify-center p-12">
          <div className="text-white ">
            <h1 className=" ">Are You Supplier?</h1>
            <h2 className="">Explore Matching Opportunities</h2>
          </div>
          <PiToolboxFill className="absolute cursor-pointer px-5 top-[266px] text-orange-600 "/>
            <input
              type="text"
              placeholder="Search your required here"
              className="m-2 p-1 w-56 h-8 text-center"
            />
            <FaLocationDot className="absolute cursor-pointer top-[265px]  text-center text-orange-600 " />
            <input
              type="text"
              placeholder="Search your desired location here"
              className="p-1 w-56 h-8 text-center"
            />
            <button className="m-2 px-5 py-3 cursor-pointer bg-green-500 hover:bg-green-950">
              Search
            </button>
          <p className="text-white">
            Are you a buyer?{" "}
            <a className=" cursor-pointer underline">
              Click here if you are looking to post a requirements
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
