import React from "react";
const Pager = () => {
  return (
    <>
      <div className=" grid  grid-auto-fit">
        <div className=" py-8 px-5 bg-white text-black  ">
          <span className="text-[25px]">{`Ready to dive into `}</span>
          <span className="text-midnightblue text-[25px]">HABOT?</span>
          <p className="text-[18px]">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="p-2  rounded-md outline-none text-[18px] text-white hover:bg-green-950 cursor-pointer bg-green-600 ">
            Sign up Today !
          </button>
        </div>
        <div className="   py-10 text-center bg-white text-black centered ">
          <button className="w-[150px] md:w-[250px] h-10 m-2 cursor-pointer rounded-md border-[2px] outline-none border-orange-600">
            Abu Dhbi{" "}
          </button>
          <button className="w-[150px] md:w-[250px]  h-10 cursor-pointer rounded-md border-[2px] outline-none border-orange-600">
            Dubai
          </button>

          <button className="w-[150px] md:w-[250px] h-10 cursor-pointer  m-2 rounded-md border-[2px] outline-none border-orange-600">
            Sharjah & Ajman{" "}
          </button>
          <button className="w-[150px] md:w-[250px] h-10 cursor-pointer rounded-md border-[2px] outline-none border-orange-600 ">
            Fujairah
          </button>

          <button className="w-[150px] md:w-[250px] h-10 m-2 cursor-pointer rounded-md border-[2px] outline-none border-orange-600">
            Ras AI Khaimah
          </button>
          <button className="w-[150px] md:w-[250px] h-10 cursor-pointer rounded-md border-[2px] outline-none border-orange-600">
            Umma AI Quwain{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Pager;
