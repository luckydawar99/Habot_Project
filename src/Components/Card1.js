import React from 'react'
import { MdManageAccounts } from "react-icons/md";
import { AiFillFileText } from "react-icons/ai";
import { BsFileTextFill } from "react-icons/bs";
import { TbMessageCheck } from "react-icons/tb";
import { PiNotePencilBold } from "react-icons/pi";
import { PiHandshakeFill } from "react-icons/pi";
const Card1 = () => {
  return (
    <section className="py-20 text-center">
   <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
      <h2 className="text-[28px] font-semibold md:text-3xl"><b>How it Works?</b></h2>
      <p className="mx-auto mt-3 max-w-2xl sm:tex-[14px] md:text-[16px] lg:tex-[25px]">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
      <div className="mt-14 text-[23px] grid md:grid-cols-3 md:h-[500px] md:grid-rows-2  w-full h-full">
         <div className="grid2-item py-10 bg-cyan-100 hover:bg-cyan-400">
            <span className='text-[50px] '><MdManageAccounts /></span>
            <p>Select Your Role & SignUp</p>
         </div>
         <div className="grid2-item py-10 bg-orange-50 hover:bg-orange-400">
         <span className='text-[50px]'><AiFillFileText /></span>
         <p>Buyers Post Your Requirements</p>   
         </div>
         <div className="grid2-item py-10 bg-cyan-100 hover:bg-cyan-400">
         <span className='text-[50px]'><BsFileTextFill /> </span>
         <p>Review,Select,and Contact the Best Suppliers</p>     
         </div>
         <div className="grid2-item py-8 bg-purple-50 hover:bg-purple-400">
         <span className='text-[50px]'><TbMessageCheck /></span>
        <p>Suppliers Complete your profile and get notified for Opportunities</p>     
         </div>
         <div className="grid2-item py-8 bg-sky-100 hover:bg-sky-400">
         <span className='text-[50px]'><PiNotePencilBold /></span>
         <p>Contact Buyers and Share Your Quote for the service</p>  
         </div>
         <div className="grid2-item py-8 bg-red-50 hover:bg-red-400">
         <span className='text-[50px]'><PiHandshakeFill /></span>
         <p>Both the Parties can Connect and Make Business Levave a Feedback</p>  
         </div>
      </div>
   </div>
</section>
  )
}

export default Card1