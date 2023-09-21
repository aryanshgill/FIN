import React from "react";
import Finovo from "../../assest/header/text.png";
import Logo from "../../assest/header/logoVector.png";
import { RImg } from "../../component/rImg";
export const Footer = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="p-12 w-[40%] flex flex-col justify-center items-center ">
          <div className="flex">
            <div>
              <RImg innerImgClassName='w-[50px] mt-4 me-2' src={Logo} alt="" />
            </div>
            <div>
              <RImg innerImgClassName='w-[80px] mt-4' src={Finovo} alt="" />
            </div>
          </div>
          <div className="font-bold text-center my-4">
            <p>Complete automation,no manual</p>
          </div>
          <div className="text-center font-bold opacity-80">
            <p>
              Finovo helps you grow your business with top-notch technology.
            </p>
          </div>
        </div>

        <div className="p-12 w-[60%] flex justify-between">
          <div className="mx-2 cursor-pointer">
            <ul>
              <p className="font-bold my-2">Products</p>
              <li>Aadhar E-Sign</li>
              <li>KYC</li>
              <li>Chatbots</li>
              <li>Online Calculator</li>
              <li>Automated Email System</li>
            </ul>
          </div>
          <div className="mx-2 cursor-pointer">
            <ul>
              <p className="font-bold my-2">Finovo</p>
              <li>About</li>
              <li>Careers</li>
              <li>Customercare</li>
            </ul>
          </div>
          <div className="mx-2 curson-pointer">
            <ul>
              <p className="font-bold my-2">Resources</p>
              <li>Articles</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="mx-2 cursor-pointer">
            <ul>
              <p className="font-bold my-2">Policy</p>
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
