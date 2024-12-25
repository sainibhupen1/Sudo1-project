import React from "react";
import { FaTv } from "react-icons/fa6";
import { FaFileMedicalAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineEmojiEvents } from "react-icons/md";

const CountingPage = () => {
  return (
    <div className="flex w-full items-center justify-center mt-20 bg-pink-500 h-[400px]">
      <div className="flex justify-between w-[80%]">
        <div className=" p-4">
          <h1 className="ml-7 mb-2 font-bold text-[30px] text-white">
            <FaTv size={50} />
          </h1>
          <p className="ml-9 font-bold text-[30px] text-white">90</p>
          <hr className="mt-4 mb-4 ml-2 mr-6" />
          <p className="text-white">Expert Instructors</p>
        </div>

        <div className=" p-4">
          <h1 className="ml-3 mb-2 font-bold text-[30px] text-white">
            <FaFileMedicalAlt size={50} />
          </h1>
          <p className="ml-2 font-bold text-[30px] text-white">1450</p>
          <hr className="mt-4 mb-4 ml-2 mr-6" />
          <p className="text-white">Total Course</p>
        </div>

        <div className=" p-4">
          <h1 className="ml-5 mb-2 font-bold text-[30px] text-white">
            <FaRegHeart size={50} />
          </h1>
          <p className="ml-4 font-bold text-[30px] text-white">5697</p>
          <hr className="mt-4 mb-4 ml-2 mr-6" />
          <p className="text-white">Happy Students</p>
        </div>

        <div className=" p-4">
          <h1 className="ml-7 mb-2 font-bold text-[30px] text-white">
            <MdOutlineEmojiEvents size={50} />
          </h1>
          <p className="ml-9 font-bold text-[30px] text-white">24</p>
          <hr className="mt-4 mb-4 ml-2 mr-6" />
          <p className="text-white">Creative Events</p>
        </div>
      </div>
    </div>
  );
};

export default CountingPage;
