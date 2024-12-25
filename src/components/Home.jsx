import React from "react";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="flex justify-center pt-20  w-full h-[650px] bg-[#505b7a]">
      <div className="flex mt-20 flex-col gap-6 w-[50%]">
        <div className="flex justify-center">
          <h1 className="font-bold text-white">EXPERT INSTRUCTION</h1>
        </div>
        <div>
          <h1 className="text-[44px] text-white ml-10  font-bold">
            Build Skills With Expert Any <p className="ml-20">Time,Anywhere</p>
          </h1>
        </div>
        <div>
          <p className="font-medium text-white">
            We invest in personnel,technological innovations and infrastructure
            and have{" "}
            <p className="ml-20">
              {" "}
              established regional and international offices.
            </p>
          </p>
        </div>
        <div className="flex justify-center">
          <Button className="bg-red-500 font-bold text-[16px] p-6 hover:bg-blue-700">
            Our Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
