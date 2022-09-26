import React from "react";
import Img6 from "../assests/img6.png";
const Card9 = () => {
  return (
    <div className="bg-pink-100 mt-10">
      <div className="max-w-[800px] m-auto  ">
        <div className="grid grid-cols-2 py-32 px-32  ">
          <div className="bg-white relative  shadow-lg shadow-pink-100 ">
            <img src={Img6} alt="" className="absolute top-14" />
          </div>
          <div className="bg-white w-[400px]  shadow-lg shadow-pink-100">
            <div className="flex flex-row justify-around py-10">
              <div className="text-pink-300  font-bold">
                <span>Women's Running Shoes</span>
                <h1 className="text-2xl text-black">Nikke EPIC REACT</h1>
                <h1 className="text-7xl">150$</h1>
              </div>
            </div>
            <div className="px-6 py-1">
              <p>
                Reported by Matt Powell, Senior Advisor at NPD Sports, NIKE,
                Inc. dominated sales throughout the last year, with the Nike Air
                Force 1 Low (which is currently celebrating its 40th
                anniversary) taking the top spot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card9;
