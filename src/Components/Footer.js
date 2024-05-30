import React from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer text-center bg-darkslategray-200 text-white ">
      <div className="">
        <br />
        <hr class="h-px my-9 bg-gray-400 border-0 " />
        <div className="grid sm:grid-cols-3 md:grid-cols-6  ">
          <div className=" mt-14">
            <img src="image-1@2x.png" className=" bg-white w-[150px] h-10" />
          </div>
          <div className="footer-col  ">
            <h4>Company</h4>
            <p>About</p>
            <p>FAQ</p>
          </div>
          <div className="footer-col">
            <h4> Terms</h4>
            <p>Data Privacy</p>
            <p>Terms</p>
            <p>Accessibikity</p>
          </div>
          <div className="footer-col">
            <h4>Related</h4>
            <p>Find Buyerr</p>
            <p>Feedback</p>
          </div>
          <div className="">
            <h4 className="text-[20px]">Follow us</h4>
            <div className="social-link text-white text-[30px]">
              <a href="#">
                <TiSocialLinkedinCircular className="text-white "/>
              </a>
              <a href="#">
                <AiFillTwitterCircle className="text-white" />
              </a>
              <a href="#">
                <FaFacebook className="text-white"/>
              </a>
              <a href="#">
                <AiFillInstagram  className="text-white"/>{" "}
              </a>
            </div>
          </div>
        </div>
        <hr class=" h-px my-9 bg-gray-400 border-0 " />
        <br/>
      </div>
    </footer>
  );
};

export default Footer;
