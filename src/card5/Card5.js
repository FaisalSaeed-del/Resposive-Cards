import React from "react";
import Img1 from "../assests/img1.png";
import Img2 from "../assests/img2.png";
import Img3 from "../assests/img3.png";
import { FiSettings } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { SiTurbosquid } from "react-icons/si";

const Card5 = () => {
  return (
    <div className="mt-10">
      <section>
        <div className="flex flex-row flex-wrap justify-around">
          <div className="p-10 max-w-[400px]">
            <div className="border-4 rounded-md shadow-lg">
              <div className="relative">
                <img src={Img1} alt="" />
                <div className=" text-5xl">
                  <a
                    href=""
                    className=" bg-amber-50 w-20 p-4 rounded-full  absolute  top-40 left-28"
                  >
                    <SiTurbosquid />
                  </a>
                </div>
              </div>

              <div className="bg-blue-400 p-10">
                <div className="px-16 py-1 ">
                  <h2 className="text-1xl font-bold">1 week ago</h2>
                  <h1 className="text-2xl font-bold">Post One</h1>
                </div>

                <p>
                  Hey There is 1 Week Plan to go exclusive offer,Hey There is 1
                  Week Plan to go exclusive offer,Hey There is 1 Week Plan to go
                  exclusive offer,
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-rose-300 via-rose-400 to-pink-200 shadow-xl m-auto relative bottom-5 p-2 text-white text-center  border-pink-400 rounded-lg font-bold w-[90px]">
              <button>Buy Now</button>
            </div>
          </div>
          {/* Second Card */}
          <div className="p-10 max-w-[400px]">
            <div className="border-4 rounded-md shadow-lg">
              <div className="relative">
                <img src={Img2} alt="" />
                <div className=" text-5xl">
                  <a
                    href=""
                    className=" bg-amber-50 w-20 p-4 rounded-full  absolute  top-40 left-28"
                  >
                    <FiSettings />
                  </a>
                </div>
              </div>

              <div className="bg-pink-400 p-10">
                <div className="px-16 py-1 ">
                  <h2 className="text-1xl font-bold">1 week ago</h2>
                  <h1 className="text-2xl font-bold">Post One</h1>
                </div>

                <p>
                  Hey There is 1 Week Plan to go exclusive offer,Hey There is 1
                  Week Plan to go exclusive offer,Hey There is 1 Week Plan to go
                  exclusive offer,
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-rose-300 via-rose-400 to-pink-200 shadow-xl m-auto relative bottom-5 p-2 text-white text-center  border-pink-400 rounded-lg font-bold w-[90px]">
              <button>Buy Now</button>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="p-10 max-w-[400px]">
            <div className=" shadow-lg border-4 border-white rounded-2xl  ">
              <div className="relative">
                <img src={Img3} alt="" />
                <div className=" text-5xl">
                  <a
                    href=""
                    className=" bg-amber-50 w-20 p-4 rounded-full  absolute  top-40 left-28"
                  >
                    <TbBrandTelegram />
                  </a>
                </div>
              </div>

              <div className="bg-green-400 p-10">
                <div className="px-16 py-1 ">
                  <h2 className="text-1xl font-bold">1 week ago</h2>
                  <h1 className="text-2xl font-bold">Post One</h1>
                </div>

                <p>
                  Hey There is 1 Week Plan to go exclusive offer,Hey There is 1
                  Week Plan to go exclusive offer,Hey There is 1 Week Plan to go
                  exclusive offer,
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-rose-300 via-rose-400 to-pink-200 shadow-xl m-auto relative bottom-5 p-2 text-white text-center  border-pink-400 rounded-lg font-bold w-[90px]">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card5;
