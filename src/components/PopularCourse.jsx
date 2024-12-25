import React from "react";
import { Button } from "./ui/button";
import PopularCourseBox from "./PopularCourseBox";

const PopularCourse = () => {
  return (
    <div className="flex flex-col  ml-10 mr-10 mt-40  ">
      <div className="flex w-full ml-10 mr-10 flex-row justify-between">
        <div>
          <p className="flex font-medium text-blue-500">
            <span className="-mt-4 text-red-600 font-bold text-[22px]">
              ____
            </span>
            TOP TRENDING COURSES
          </p>
          <h1 className="font-bold text-[34px] text-[#1e40af]">
            Our Popular Online Courses
          </h1>
        </div>
        <div className="mr-20">
          <Button className="bg-red-600 pl-8 pr-8 pt-6 pb-6 mt-2">
            All Course
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <PopularCourseBox />
      </div>
    </div>
  );
};

export default PopularCourse;
