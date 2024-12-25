import React from "react";
import { Button } from "./ui/button";
import ProfessionalBox from "./ProfessionalBox";
import { BsFillPeopleFill } from "react-icons/bs";

const Professional = () => {
  return (
    <div className="bg-blue-100 flex w-full h-[580px] mt-10">
      <div className="flex flex-col  w-full ml-20 mr-20 mt-20 mb-20">
        <div className="flex flex-row w-full justify-between">
          <div className="ml-20">
            <p className="text-gray-900 font-medium text-[14px] flex ">
              <span className="text-red-600 text-[20px] -mt-3 mr-1">_____</span>
              BEST EXPERT TRAINER
            </p>
            <h1 className="font-bold text-[33px] text-pink-600">
              Our Professional Trainer
            </h1>
          </div>
          <Button className="mr-10 mt-2 bg-green-900 hover:bg-pink-400">
            <BsFillPeopleFill />
            Join With Us
          </Button>
        </div>

        <div>
          <ProfessionalBox />
        </div>
      </div>
    </div>
  );
};

export default Professional;
