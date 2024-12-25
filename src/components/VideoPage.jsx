import React from "react";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const VideoPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full  bg-gray-200">
      <div className="w-[50%] flex mt-10 ml-20  flex-col">
        <h1 className="flex items-center text-blue-400 gap-2 text-[14px]">
          <span className="text-red-500 text-[20px] -mt-4">____</span>WORKING
          PROCESS
        </h1>
        <p className="text-blue-950 font-bold text-[45px]">
          Watch video to <br /> Know more <br />
          about us
        </p>
      </div>

      <div className="w-[50%] bg-blue-500 relative">
        <img
          src="https://pxelcode.com/tf-db/edutim/edutim/assets/images/bg/cta-bg.jpg"
          alt=""
          className="opacity-15 w-full h-auto"
        />
        <h1 className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
          <MdOutlinePlayCircleOutline
            size={120}
            onClick={() => navigate("/")}
            className="text-red-200 cursor-pointer"
          />
        </h1>
      </div>
    </div>
  );
};

export default VideoPage;
