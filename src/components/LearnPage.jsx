import React from "react";
import { Button } from "./ui/button";
import { PiArrowElbowRightBold } from "react-icons/pi";

const LearnPage = () => {
  return (
    <div className="flex mt-20 w-full justify-center ">
      <div className="flex flex-row justify-between  w-full mr-20 ml-20">
        <div className=" w-[50%]">
          <img
            src="	https://pxelcode.com/tf-db/edutim/edutim/assets/images/bg/choose.png"
            alt="img"
            width={500}
          />
        </div>
        <div className="w-[45%] mt-20 ">
          <p className="text-blue-700 flex items-center font-medium mb-2">
            <span className="text-red-500 text-[20px] -mt-4 ">____</span>TOP
            CATEGORIES
          </p>
          <p className="text-blue-950 text-[34px] font-bold mb-2">
            Learn new skills to go ahead for your career
          </p>
          <p className="text-gray-500 mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            excepturi explicabo esse nisi molestias molestiae magni porro
            magnam, iusto sunt aliquid necessitatibus optio quod iste facilis
            similique eos voluptatum sint?
          </p>
          <Button className="bg-red-600 hover:bg-gray-700 pl-8 pr-8 pt-6 pb-6 font-bold">
            <PiArrowElbowRightBold /> Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;
