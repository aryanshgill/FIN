import React from "react";
import "./styles.scss";
import { RButton } from "../../component/rButtton";

export const OneStopSolution = () => {
  return (
    <div className="sol-content py-[130px]">
      <div className="flex justify-center flex-col text-center gap-6 mb-12">
        <p className="font-bold text-white text-3xl">
          One stop solutions for{" "}
          <span className="text-4xl text-black">Every Industry</span>
        </p>
        <p className="mx-20 font-semibold">
          We are committed to delivering result-oriented & cost-cutting
          automation solutions for all industries.
        </p>
        <div className="">
          <RButton
            externalClassName="p-4 m-2"
            buttonName="Capital Market"
            bgColor="bg-black"
            border="border-none"
            text="text-white"
          />
          <RButton
            externalClassName="p-4 m-2"
            buttonName="Finance"
            bgColor="bg-black"
            border="border-none"
            text="text-white"
          />
          <RButton
            externalClassName="p-4 m-2"
            buttonName="Manufacturing"
            bgColor="bg-black"
            border="border-none"
            text="text-white"
          />
          <RButton
            externalClassName="p-4 m-2"
            buttonName="Banking"
            bgColor="bg-black"
            border="border-none"
            text="text-white"
            />
         <br/>
          <RButton
            externalClassName="p-4 m-2"
            buttonName="Hospitals"
            bgColor="bg-black"
            border="border-none"
            text="text-white"
          />
          <RButton
            externalClassName="p-4 m-2" 
            buttonName="Real Estate"
            bgColor="bg-black"
            border="border-none"
            text="text-white"
          />
          <RButton
            externalClassName="p-4 m-2"
            buttonName="Hotels"
            bgColor="bg-black"
            border="border-none"
            text="text-white"
          />
            </div>
          
          <div className="font-semibold">
            <p>and many more...</p>
          </div>
      </div>
    </div>
  );
};
