import React from "react";
import WeProvide from "../../assest/provide/weProvide.png";
import Chat from "../../assest/provide/chat.png";
import Computer from "../../assest/provide/computer.png";
import Profile from "../../assest/provide/profile.png";
import Message from "../../assest/provide/message.png";
import Calculator from "../../assest/provide/calculator.png";
import "./styles.scss";
export const Provide = () => {
  return (
    <div className="provide-container">
      <div className="z-0">
        <img className="provide-image" src={WeProvide} alt="" />
        <div className="weprovide-text text-9xl text-white text-center z-10">
          <p>We Provide</p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap mt-[150px] text-white text-center">
        <div className="w-[118px] mx-12">
          <img  src={Chat} alt="" />
          <p className="my-8">Chatbot</p>
        </div>
        <div className="w-[118px] mx-12">
          <img src={Computer} alt="" />
          <p className="my-12">e-KYC | re-KYC</p>
        </div>
        <div className="w-[118px] mx-12">
          <img src={Profile} alt="" />
          <p className="my-16">Aadhar e-sign</p>
        </div>
        <div className="w-[118px] mx-12">
          <img src={Message} alt="" />
          <p className="my-8">Automated email software</p>
        </div>
        <div className="w-[118px] mx-12">
          <img src={Calculator} alt="" />
          <p className="my-8">Online Calculator</p>
        </div>
      </div>
    </div>
  );
};
