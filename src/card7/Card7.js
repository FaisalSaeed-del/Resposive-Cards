import React from "react";
import Img2 from "../assests/img4.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GrUserManager } from "react-icons/gr";

const Card7 = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-300 via-green-300 to-emerald-200">
      <section>
        <div>
          <div className="py-10 px-64  ">
            <div className="grid grid-cols-5 border-4  border-white rounded-lg shadow-green-300 shadow-xl ">
              <div className="col-span-1">
                <img src={Img2} alt="" className="max-w-[380px] " />
              </div>
              <div className="bg-white col-span-4 max-w-[700px]">
                <h1 className="p-1 font-bold text-1xl text-end text-green-600">
                  Ant Collector
                </h1>
                <div className="px-10 py-10">
                  <h1 className="font-bold">
                    Morgen <br /> <span> Sweeny</span>
                  </h1>
                  <p>
                    By animating a few CSS paint & composite properties, we can
                    create fun interactions on hover & focus.
                  </p>
                </div>
                <div className="py-3 text-green-600 text-2xl justify-center flex flex-row space-x-3">
                  <a href="">
                    <AiOutlineHeart />
                  </a>
                  <a href="">
                    <AiOutlineMail />
                  </a>
                  <a href="">
                    <HiOutlineUserGroup />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card7;
