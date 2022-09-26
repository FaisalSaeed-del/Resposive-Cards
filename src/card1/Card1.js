import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaUnity } from "react-icons/fa";

const Card1 = () => {
  return (
    <div className="bg-blue-400 p-20">
      <section>
        <div className="bg-yellow-400  m-auto w-[300px] shadow-2xl">
          <div className=" p-32 px-15 py-10 text-6xl bg-yellow-400 ">
            <a href="" className="svg bg-yellow-300">
              <FaUserCircle />
            </a>
          </div>
          {/* Social ICONS  */}
          <div className="flex flex-row justify-center gap-x-2 text-2xl ">
            <a href="">
              <AiFillGoogleCircle />
            </a>
            <a href="">
              <BsGithub />
            </a>
            <a href="">
              <AiFillTwitterCircle />
            </a>
            <a href="">
              <FaUnity />
            </a>
          </div>
          {/* {/* REVIEWS */}

          <div className="flex flex-row justify-around font-serif font-bold text-center">
            <div className="py-10 px-6  ">
              <span>51</span>
              <br />
              <span>Following</span> <br />
              <span>9</span>
              <br />
              <span>Created</span> <br />
              <span>51</span>
              <br />
              <span>Following</span> <br />
            </div>
            <div className="py-10 px-6">
              <span>51</span>
              <br />
              <span>Following</span> <br />
              <span>51</span>
              <br />
              <span>Following</span> <br />
              <span>51</span>
              <br />
              <span>Following</span> <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card1;
