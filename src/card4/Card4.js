import React from "react";
import Img1 from "../assests/img1.png";

const Card4 = () => {
  return (
    <div className="mt-10">
      <section>
        <div className="flex flex-row flex-wrap justify-around bg-black">
          <div className="p-10 max-w-[400px]">
            <div className="border-4 rounded-md">
              <div>
                <img src={Img1} alt="" />
              </div>

              <div className="bg-white p-10">
                <div className="px-14">
                  <h2 className="text-1xl font-bold">1 week ago</h2>
                  <h1 className="text-2xl font-bold">Post One</h1>
                </div>

                <p>
                  Hey There is 1 Week Plan to go exclusive offer,Hey There is 1
                  Week Plan to go exclusive offer,Hey There is 1 Week Plan to go
                  exclusive offer,
                </p>
              </div>
              <div className="bg-pink-600 py-10">
                <div className="flex flex-row justify-around">
                  <span>Read</span>
                  <span>Views</span>
                  <span>Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 max-w-[400px]">
            <div className="border-4 rounded-md">
              <div>
                <img src={Img1} alt="" />
              </div>

              <div className="bg-white p-10">
                <div className="px-14">
                  <h2 className="text-1xl font-bold">1 week ago</h2>
                  <h1 className="text-2xl font-bold">Post One</h1>
                </div>

                <p>
                  Hey There is 1 Week Plan to go exclusive offer,Hey There is 1
                  Week Plan to go exclusive offer,Hey There is 1 Week Plan to go
                  exclusive offer,
                </p>
              </div>
              <div className="bg-orange-600 py-10">
                <div className="flex flex-row justify-around">
                  <span>Read</span>
                  <span>Views</span>
                  <span>Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 max-w-[400px]">
            <div className="border-4 rounded-md">
              <div>
                <img src={Img1} alt="" />
              </div>

              <div className="bg-white p-10">
                <div className="px-14">
                  <h2 className="text-1xl font-bold">1 week ago</h2>
                  <h1 className="text-2xl font-bold">Post One</h1>
                </div>

                <p>
                  Hey There is 1 Week Plan to go exclusive offer,Hey There is 1
                  Week Plan to go exclusive offer,Hey There is 1 Week Plan to go
                  exclusive offer,
                </p>
              </div>
              <div className="bg-green-700 py-10">
                <div className="flex flex-row justify-around">
                  <span>Read</span>
                  <span>Views</span>
                  <span>Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card4;
