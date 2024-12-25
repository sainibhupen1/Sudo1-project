import React from "react";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { RiTvFill } from "react-icons/ri";
import { ImHeadphones } from "react-icons/im";
import { CgAirplane } from "react-icons/cg";

const BlogBox = () => {
  return (
    <div>
      <div className="flex justify-center gap-8 mt-20 ml-10 mr-10">
        <div className="group shadow-lg w-[240px] h-[240px] pt-6 pb-6 pl-4 pr-4 rounded-lg flex flex-col hover:translate-y-[-8px] transition-all hover:bg-red-400">
          <p className="text-red-500 mb-2 group-hover:text-white">
            <FaFilterCircleXmark size={50} />
          </p>
          <p className="text-[20px] mt-2 text-blue-950 font-bold mb-2 group-hover:text-white">
            Expert Teacher
          </p>
          <p className="text-gray-500 group-hover:text-white">
            Behind the word mountains, far from the countries
          </p>
        </div>

        <div className="group shadow-lg w-[240px] h-[240px] pt-6 pb-6 pl-4 pr-4 rounded-lg flex flex-col hover:translate-y-[-8px] transition-all hover:bg-red-400">
          <p className="text-red-500 mb-2 group-hover:text-white">
            <RiTvFill size={50} />
          </p>
          <p className="text-[20px] mt-2 text-blue-950 font-bold mb-2 group-hover:text-white">
            Quality Education
          </p>
          <p className="text-gray-500 group-hover:text-white">
            Behind the word mountains, far from the countries
          </p>
        </div>

        <div className="group shadow-lg w-[240px] h-[240px] pt-6 pb-6 pl-4 pr-4 rounded-lg flex flex-col hover:translate-y-[-8px] transition-all hover:bg-red-400">
          <p className="text-red-500 mb-2 group-hover:text-white">
            <ImHeadphones size={50} />
          </p>
          <p className="text-[20px] mt-2 text-blue-950 font-bold mb-2 group-hover:text-white">
            Life Time Support
          </p>
          <p className="text-gray-500 group-hover:text-white">
            Behind the word mountains, far from the countries
          </p>
        </div>
        <div className="group shadow-lg w-[240px] h-[240px] pt-6 pb-6 pl-4 pr-4 rounded-lg flex flex-col hover:translate-y-[-8px] transition-all hover:bg-red-400">
          <p className="text-red-500 mb-2 group-hover:text-white">
            <CgAirplane size={50} />
          </p>
          <p className="text-[20px] mt-2 text-blue-950 font-bold mb-2 group-hover:text-white">
            HD Video
          </p>
          <p className="text-gray-500 group-hover:text-white">
            Behind the word mountains, far from the countries
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
