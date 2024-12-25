import React from "react";
import { Button } from "./ui/button";

const News = () => {
  return (
    <div className="flex w-full flex-row mt-20">
      <div className="w-[50%] m-4 flex flex-col pl-20">
        <div>
          <p className="font-medium text-red-500 text-[14px]">
            <span>____</span> TOP CATEGORIES
          </p>
          <h1 className="font-bold text-blue-600 text-[35px]">
            Learn new skills to go ahead <br />
            for your career
          </h1>
        </div>
        <div>
          <div className="flex gap-4 mt-8">
            <p className="text-pink-600">icon</p>
            <div>
              <h1 className="text-blue-900 font-medium">
                Details Video tutorial
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicin gelit
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-8 mb-10">
            <p className="text-pink-600">icon</p>
            <div>
              <h1 className="text-blue-900 font-medium">
                Details Video tutorial
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicin gelit
              </p>
            </div>
          </div>
          <div className="">
            <Button className="bg-green-500 text-black hover:bg-pink-400">
              More About Support
            </Button>
          </div>
        </div>
      </div>
      <div className="m-4">
        <img
          src="https://pxelcode.com/tf-db/edutim/edutim/assets/images/bg/2-2.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default News;
