import React from "react";
import SkillBox from "./skillBox";

const Skills = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full ml-20 mr-20 mt-20">
        <div className="flex items-center flex-col justify-center w-full">
          <p className="text-red-600 font-medium text-[14px] mb-2">
            TESTIMONIALS
          </p>
          <h1 className="text-blue-950 font-bold text-[34px]">
            Learn New Skills to Go Ahead
          </h1>
          <h2 className="text-blue-950 font-bold text-[34px]">
            for Your Career
          </h2>
          <h1 className="text-red-600 font-bold text-[26px]">______</h1>
        </div>
        <div>
          <SkillBox />
        </div>
      </div>
    </div>
  );
};

export default Skills;
