import React from "react";
import Ai from "../../assest//aiComponemt/aiGrowth.svg";
import Cards from "../aiCard";
import { AI_COMPONENT_MAPPER } from "../mapperConstant/mapperConstant";


export const AI = () => {       
  return (
    <>
      <div className="bg-grey p-20">
        <div className="flex mb-20 ">
          <div className="w-[50%]">
            <div className="text-4xl font-bold text-white tracking-wider">
              <p>
                Make <span className="text-blue text-5xl">A</span>
                <span className="text-green text-5xl">I</span> work
              </p>
              <p className="mt-2">for you.</p>
            </div>
            <div className="text-2xl mt-6 text-white">
              <p>
                use the power of artificial intelligence to automate your
                product growth for every sale.
              </p>
            </div>
          </div>
          <div className="w-[50%] flex justify-center ">
            <img className="w-[28%]" src={Ai} alt="" />
          </div>
        </div>
        <div className="flex justify-between">
        {AI_COMPONENT_MAPPER.map(item=>(
            <Cards
            key={item.title}
            title={item.title}
            src={item.src}
            alt={item.alt}/>

        ))}
        </div>
        </div>
    </>
  );
};
