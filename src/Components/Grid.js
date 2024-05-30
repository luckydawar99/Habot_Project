import React from 'react';
//import { Link } from 'react-router-dom';

function Grid() {
  return (
    <div className='flex w-full h-56 bg-cyan-100 justify-center items-center'>
      <div className='flex items-center space-x-2 sm:space-x-4'>
        <span className='text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px]'>
        <b className='  text-black'>Let Suppliers <span className='underline underline-offset-1'>Find You</span></b>
        </span>
        <button className='px-3 py-2 text-[14px] sm:px-4 sm:py-2 sm:text-[18px] md:px-5 md:py-3 lg:px-6 lg:py-3 lg:text-[22px] xl:px-8 xl:py-4 xl:text-[25px] cursor-pointer bg-orange-500 text-white rounded-md hover:bg-orange-700'>
          Get Verified
        </button>
      </div>
    </div>
  );
}

export default Grid;
