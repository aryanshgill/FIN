import React from "react";
import './styles.scss'
export const OperationComp = () => {
  return (
    <div className="py-[130px] main-content bg-lightBlue">
      <div className="flex justify-center flex-col text-center gap-6 mb-12">
        <p className="mx-20 font-bold text-white text-3xl">How <span className="text-5xl text-black">finovo</span> helps businesses to streamline their daily operation?</p>
        <p className="mx-20 font-semibold">
          We are a leading automation company in india that provide the one-stop
          solution for all artificial intelligence needs.As a big market player
          in the competitive industry, we feel proud to offer a wide array of
          tailor-made services and products with cost-cutting edge solutions.It
          includes&nbsp;
          <span className="font-bold">
            Chatbots, e-KYC/Re-KYC, Aadhaar E-Sign, Auto Emailer, DigiLocker,
            Online Calculators,
          </span>
          and many more.
        </p>
        <p className="mx-20 font-semibold">
          We can help businesses streamline their daily operations through our
          unmatched services and result-driven approach. Our dedicated
          professionals work tirelessly to accomplish clients goal that give
          them value for money.
        </p>
      </div>
    </div>
  );
};
