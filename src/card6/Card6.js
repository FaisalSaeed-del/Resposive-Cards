import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { TiDeleteOutline } from "react-icons/ti";

const Card6 = () => {
  return (
    <div>
      <section>
        <div className="flex flex-row flex-wrap justify-around">
          <div className="p-10 max-w-[400px]">
            <div className="border-4 border-white rounded-md shadow-lg">
              <div className="relative ">
                <div className=" py-3 px-28">
                  <spna className=" py-1 px-4 text-center text-white rounded-full  bg-yellow-400 text-5xl ">
                    21
                  </spna>
                </div>
              </div>
              <div className="bg-white p-10">
                <div className="px-16 ">
                  <h2 className="text-4xl font-bold">Basic</h2>
                </div>
                <div className="py-4 px-2 text-1xl">
                  <div className="flex flex-row justify-between">
                    <span>One Selected Template</span>
                    <a href="">
                      <TiDeleteOutline />
                    </a>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span>One Selected Template</span>
                    <a href="">
                      <FcCheckmark />
                    </a>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span>One Selected Template</span>
                    <a href="">
                      <FcCheckmark />
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-24 py-2">
                <button className="border-orange-300 border-4 text-bold text-orange-300 bg-white rounded-full w-36">
                  PURCHASE
                </button>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="p-10 max-w-[400px]">
            <div className="border-4 border-white rounded-md shadow-lg">
              <div className="relative ">
                <div className=" py-3 px-28">
                  <spna className=" py-1 px-4 text-center text-white rounded-full  bg-purple-400 text-5xl ">
                    21
                  </spna>
                </div>
              </div>
              <div className="bg-white p-10">
                <div className="px-16 ">
                  <h2 className="text-4xl font-bold">Basic</h2>
                </div>
                <div className="py-4 px-2 text-1xl">
                  <div className="flex flex-row justify-between">
                    <span>One Selected Template</span>
                    <a href="">
                      <TiDeleteOutline />
                    </a>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span>One Selected Template</span>
                    <a href="">
                      <FcCheckmark />
                    </a>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span>One Selected Template</span>
                    <a href="">
                      <FcCheckmark />
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-24 py-2">
                <button className="border-orange-300 border-4 text-bold text-orange-300 bg-white rounded-full w-36">
                  PURCHASE
                </button>
              </div>
            </div>
          </div>
          <div className="p-10 max-w-[400px]">
            <div className="border-4 border-white rounded-md shadow-lg">
              <div className="relative ">
                <div className=" py-3 px-28">
                  <spna className=" py-1 px-4 text-center text-white rounded-full  bg-green-400 text-5xl ">
                    21
                  </spna>
                </div>
              </div>
              <div className="bg-white p-10">
                <div className="px-16 ">
                  <h2 className="text-4xl font-bold">Basic</h2>
                </div>
                <div className="py-4 px-2 text-1xl">
                  <div className="flex flex-row justify-between">
                    <span>One Selected Template</span>
                    <a href="">
                      <TiDeleteOutline />
                    </a>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span>One Selected Template</span>
                    <a href="">
                      <FcCheckmark />
                    </a>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span>One Selected Template</span>
                    <a href="">
                      <FcCheckmark />
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-24 py-2">
                <button className="border-orange-300 border-4 text-bold text-orange-300 bg-white rounded-full w-36">
                  PURCHASE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card6;
