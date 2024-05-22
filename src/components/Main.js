import React from "react";
import { heroImagesList, donarInBed } from "../helper/uiImages";

const Main = () => {
  return (
    <div className="flex flex-col mx-4 my-6 px-2 py-6  bg-[#f5f5f5] md:w-[60vw]">
      <ul className="flex flex-wrap">
        {heroImagesList.map((item, index) => (
          <li
            key={index}
            className="flex flex-col  h-[200px] justify-center shadow-lg m-2 rounded-lg bg-white px-2  "
          >
            <img
              src={item.imgUrl}
              alt={item.name}
              className="w-[150px] h-[150px] rounded-lg"
            />
            <h1 className="text-2x font-semibold text-center ">{item.name}</h1>
          </li>
        ))}
      </ul>
      <div className="flex m-2 px-2 border-t-2 py-6">
      <div className="bg-white shadow-md rounded-lg p-2 ">
        <p className="text-4xl text-red-500">115</p>
          <h1 className="text-2xl ">Registered Voluntary Donors to save lives</h1>
          
        </div>
        <img
          src={donarInBed}
          alt="donar"
          className="w-[200px] h-[200px] mx-4 rounded-xl shadow-md"
        />
        <div className="flex flex-col mx-2">
          <p className="text-xl">Fullfilled Requests </p>
          <h1 className="text-4xl font-semibold text-red-500">100 + </h1>

          <p className="text-xl"> Pending Requests</p>
          <h1 className="text-4xl font-semibold">15 +</h1>
        </div>
       
       
      </div>
    </div>
  );
};

export default Main;
