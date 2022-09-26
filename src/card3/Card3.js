import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";

const Card3 = () => {
  return (
    <div className="mt-10">
      <section>
        <div className="grid grid-cols-2 ">
          <div className="bg-black">
            <h1 className="text-white text-6xl">Hello</h1>
          </div>
          <div className="bg-yellow-200 w-full ">
            <div className="grid grid-cols-2 py-52 px-52 ">
              <div className="bg-red-500">
                <div className="py-7 px-9 ">
                  <div className="bg-red-300 w-20 shadow-lg shadow-gray-900 rounded-full">
                    <span className="px-3">Level 1</span>
                  </div>
                  <div className="py-6 px-1  text-6xl">
                    <a href="" className="shadow-lg shadow-gray-900">
                      <FaUserCircle />
                    </a>
                  </div>
                  <div className="bg-red-300 w-20 shadow-lg shadow-gray-900 rounded-full">
                    <span className="px-3">Level 1</span>
                  </div>
                </div>
              </div>
              <div className="bg-white wmax-w[330px] min-w-[330px] ">
                <div className="py-10  px-10">
                  <h3>Faisal Saeed</h3>
                  <p>
                    Hello,World.Hello,World
                    <br /> Hello,World.Hello,World.
                  </p>
                </div>
                <spann className="px-14">Hello MOUSE OVER FOR INFO!</spann>
              </div>
            </div>
            <div className="grid grid-cols-2 py-52 px-52 relative bottom-[380px]">
              <div className="bg-green-700">
                <div className="py-7 px-9 ">
                  <div className="bg-red-300 w-20 shadow-lg shadow-gray-900 rounded-full">
                    <span className="px-3">Level 1</span>
                  </div>
                  <div className="py-6 px-1  text-6xl">
                    <a href="" className="shadow-lg shadow-gray-900">
                      <FaUserCircle />
                    </a>
                  </div>
                  <div className="bg-red-300 w-20 shadow-lg shadow-gray-900 rounded-full">
                    <span className="px-3">Level 1</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-800 wmax-w[330px] min-w-[330px] ">
                <div className="py-10  px-10">
                  <h3>Faisal Saeed</h3>
                  <p>
                    Hello,World.Hello,World
                    <br /> Hello,World.Hello,World.
                  </p>
                </div>
                <spann className="px-14">Hello MOUSE OVER FOR INFO!</spann>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card3;
