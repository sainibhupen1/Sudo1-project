import React from "react";
import { FaLaptop } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";

const Course = () => {
  return (
    <div className="flex justify-center gap-4 -mt-[120px] ml-10 mr-10">
      <div className=" text-white bg-purple-500  w-[220px] h-[240px] pt-6 pb-6 pl-4 pr-4 rounded-lg flex justify-center items-center flex-col  hover:translate-y-[-8px] transition-all">
        <p>
          <FaLaptop size={80} />
        </p>
        <p className="font-medium mt-2">Web Development</p>
        <p>(4 Course)</p>
      </div>

      <div className=" text-white bg-blue-500  w-[220px] h-[240px] pt-6 pb-6 pl-4 pr-4 rounded-lg flex justify-center items-center flex-col hover:translate-y-[-8px] transition-all">
        <p>
          <MdDesignServices size={80} />
        </p>
        <p className="font-medium mt-2">Design</p>
        <p>(12 Course)</p>
      </div>

      <div className=" text-white bg-yellow-500  w-[220px] h-[240px] pt-6 pb-6 pl-4 pr-4 rounded-lg flex justify-center items-center flex-col hover:translate-y-[-8px] transition-all">
        <p>
          <SiGooglemarketingplatform size={80} />
        </p>
        <p className="font-medium mt-2">Marketing</p>
        <p>(6 Course)</p>
      </div>

      <div className=" text-white bg-red-500  w-[220px] h-[240px] pt-6 pb-6 pl-4 pr-4 rounded-lg flex justify-center items-center flex-col hover:translate-y-[-8px] transition-all">
        <p>
          <FaPlaneDeparture size={80} />
        </p>
        <p className="font-medium mt-2">Art Design</p>
        <p>(6 Course)</p>
      </div>

      <div className=" text-white bg-green-500  w-[220px] h-[240px] pt-6 pb-6 pl-4 pr-4 rounded-lg flex justify-center items-center flex-col hover:translate-y-[-8px] transition-all">
        <p>
          <FaHandHoldingHeart size={80} />
        </p>
        <p className="font-medium mt-2">Design</p>
        <p>(12 Course)</p>
      </div>
    </div>
  );
};

export default Course;
