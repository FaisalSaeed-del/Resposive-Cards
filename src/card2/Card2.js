import React from "react";

const Card2 = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 via-red-100 to-red-800 p-40 mt-10 relative">
      <section>
        <div className="bg-white shadow-lg  m-auto rounded-lg   ">
          <div className="px-56 py-10">
            <span>23 Sep,2022</span> <br />
            <h1 className="text-3xl font-bold ">LOREM ISPUM!</h1>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas
            </p>
            <button className="bg-gradient-to-r from-orange-600 via-red-100 to-red-800 rounded-full p-1 font-bold  mt-10">
              Read More
            </button>
          </div>
          <div className="bg-red-500 shadow-xl py-20 px-20 rounded-lg  max-w-[300px] mx-auto absolute bottom-56 left-32"></div>
        </div>
      </section>
    </div>
  );
};

export default Card2;
