import React from "react";
import { BsBag } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import Img6 from "../assests/img6.png";
import Img7 from "../assests/img7.png";

const Card8 = () => {
  return (
    <div className="mt-10 bg-gradient-to-r from-orange-600 via-indigo-900 to-indigo-900">
      <section>
        <div className="max-w-[800px] m-auto ">
          <div className="grid grid-cols-2 py-32 px-32">
            <div className="bg-white relative ">
              <img src={Img7} alt="" className="absolute top-14" />
            </div>
            <div className="bg-slate-900 w-[400px]">
              <div className="flex flex-row justify-around py-10">
                <div className="text-orange-400  font-bold text-2xl">
                  <h1>GUCCI</h1>
                </div>
                <div className="text-orange-500 text-2xl flex flex-row px-10 font-bold space-x-9">
                  <a href="">
                    <AiOutlineSearch />
                  </a>
                  <a href="">
                    <BiUserCircle />
                  </a>
                  <a href="">
                    <BsCartCheck />
                  </a>
                </div>
              </div>
              <div className=" px-9 py-6">
                <span className="text-white text-xl ">Winter Collection</span>
              </div>
              <h1 className="text-3xl font-bold text-white px-4 ">
                Men Black Sneaker
              </h1>
              <div className="flex flex-row px-5 text-white font-bold space-x-4">
                <span>$150</span>
                <span>$150</span>
              </div>
              <div className="flex flex-row px-5 py-3 text-white font-bold justify-between">
                <span>Size</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
              </div>
              <div className="flex flex-row px-5 py-3 text-white font-bold justify-between">
                <span>Color</span>
                <span>Yellow</span>
                <span>Black</span>
                <span>Blue</span>
              </div>
              <div className="py-2 flex flex-row text-white justify-around">
                <div className="flex flex-row space-x-2">
                  <a href="" className="py-1">
                    <BsBag />
                  </a>
                  <span>Buy Now</span>
                </div>
                <div className="flex flex-row space-x-2">
                  <a href="" className="py-1">
                    <BsCartCheck />
                  </a>
                  <span>Buy Now</span>
                </div>
              </div>
            </div>
            <div className="relative bottom-72">
              <img src={Img6} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card8;
