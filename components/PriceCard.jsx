import React from "react";
import { FaRegClock } from "react-icons/fa";

const PriceCard = ({d,m,y}) => {
  return (
    <div className="flex justify-around mt-7 w-full ">
      <div className="border flex flex-col text-blue-10 items-center justify-center px-6 py-2 spacey-3 w-max">
        <p className="text-center">Daily</p>
        <FaRegClock size={60} color="#3a77f4" className="text-center" />
        <div>
          <h1 className="font-extrabold text-5xl -mb-1 text-center">{d} Br</h1>
          <p className="text-xs text-center">Per Person</p>
        </div>
      </div>
      <div className="border flex flex-col text-white bg-blue-10 items-center justify-center px-6 py-2 spacey-3 w-max">
        <p className="text-center">Monthly</p>
        <FaRegClock size={60} color="#fff" className="text-center" />
        <div>
          <h1 className="font-extrabold text-5xl -mb-1 text-center">{m} Br</h1>
          <p className="text-xs text-center">Per Person</p>
        </div>
      </div>
      <div className="border flex flex-col text-blue-10 items-center justify-center px-6 py-2 spacey-3 w-max">
        <p className="text-center">Annualy</p>
        <FaRegClock size={60} color="#3a77f4" className="text-center" />
        <div>
          <h1 className="font-extrabold text-5xl -mb-1 text-center">{y} Br</h1>
          <p className="text-xs text-center">Per Person</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
