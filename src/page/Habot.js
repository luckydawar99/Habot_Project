import React from "react";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
const Habot = () => {
  return (
    <>
      <div className="  m-10 bg-blue-950 grid grid-auto-fit-md">
        <div className=" py-5 px-5 w-full h-full  text-black  ">
          <span className="">
            <FaYoutube className="left-1/4 cursor-pointer text-red-500 absolute mt-[100px] w-[120px] h-10 "/>
            <img className="w-full h-[300px]" src="i8tgrhxx4oqsd-1@2x.png" />
          </span>
        </div>

        <div className="  text-white px-6 mt-6 py-10 ">
          <div className="grid grid-cols-2">
            <Link className="text-[22px] px-14  text-orange-600">Buyer</Link>
            <Link className="text-[22px]  no-underline text-white ">
              Supplier
            </Link>
          </div>

          <div className="text-[20px] items-start py-3 ">
            <span>
              <TiTick className="  text-green-500" />
              Post your requirements.
            </span>
            <br />
            <span>
              <TiTick className="  text-green-500" />
              Sit back for multiple suppliers to contact you.
            </span>
            <br />
            <span>
              <TiTick className="  text-green-500" />
              Choose among the suppliers based on the ratings and reviews.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Habot;
