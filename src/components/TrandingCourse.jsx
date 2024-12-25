import React from "react";
import TrandingCourseBox from "./TrandingCourseBox";

const TrandingCourse = () => {
  return (
    <div className="flex flex-col mt-40 w-full ">
      <div className="flex flex-col justify-center items-center  ml-20 mr-20  ">
        <div className="flex flex-col">
          <h1 className="text-red-500 font-medium ml-[130px] mb-2">
            TOP TRENDING COURSES
          </h1>
          <p className="text-blue-950 text-[30px] font-bold">
            Over 200+ New Online Courses
          </p>
        </div>
        <div className="mt-16">
          <ul className="flex gap-6">
            <li className="bg-red-600 text-white pt-1 pb-1 pl-3 pr-3 rounded-md font-medium text-[12px]">
              ALL
            </li>
            <li className=" pt-1 pb-1 pl-3 pr-3 rounded-md font-medium text-[12px] hover:bg-red-600 hover:text-white">
              PRINTING
            </li>
            <li className=" pt-1 pb-1 pl-3 pr-3 rounded-md font-medium text-[12px] hover:bg-red-600 hover:text-white">
              WEB
            </li>
            <li className=" pt-1 pb-1 pl-3 pr-3 rounded-md font-medium text-[12px] hover:bg-red-600 hover:text-white">
              ILLUSTRATION
            </li>
            <li className=" pt-1 pb-1 pl-3 pr-3 rounded-md font-medium text-[12px] hover:bg-red-600 hover:text-white">
              MEDIA
            </li>
            <li className=" pt-1 pb-1 pl-3 pr-3 rounded-md font-medium text-[12px] hover:bg-red-600 hover:text-white">
              CRAFTS
            </li>
          </ul>
        </div>
      </div>

      <div>
        <TrandingCourseBox />
      </div>
    </div>
  );
};

export default TrandingCourse;
