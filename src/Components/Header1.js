import React from "react";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center justify-between">
        <img
          className="absolute left-[1px] w-20 h-8"
          alt="logo"
          src="image-1@2x.png"
        />
        <div className="absolute right-[270px] items-center  border-2">
          <input type="text" placeholder="FindSupplier" className=" w-20 h-6" />
        </div>

        <div className="absolute  right-[165px] items-center  border-2 ">
          <input
            type="text"
            placeholder="FindServiceTag"
            className=" text-black w-24 h-6 "
          />
        </div>

        <div className="absolute right-[12px] items-center ">
          <Link
            to="/login"
            className="px-3 py-1 rounded text-white bg-red-600 "
          >
            Login
          </Link>

          <Link
            to="/singin"
            className="px-3 py-1 m-2 rounded text-white bg-red-600 hover:bg-red-700"
          >
            SingIn
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header1;
