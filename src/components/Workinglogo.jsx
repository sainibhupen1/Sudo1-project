import React from "react";

const Workinglogo = () => {
  return (
    <div className="flex flex-col mt-20 items-center w-full">
      <div className="flex flex-col w-full items-center mb-10">
        <p className="text-pink-500 font-medium text-[14px]">
          WORKING PARTNERS
        </p>
        <p className="text-blue-800 font-bold text-[35px]">
          Our valuable Partners
        </p>
        <span className="font-bold text-red-500 text-[20px]">_____</span>
      </div>
      <div className="flex  ">
        <ul className=" mt-4 flex flex-row gap-10 justify-between w-full shadow-lg p-4">
          <li>
            <img
              src="https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/logo1.png"
              alt=""
              className="w-40"
            />
          </li>
          <li>
            <img
              src="	https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/logo2.png"
              alt=""
              className="w-40"
            />
          </li>
          <li>
            <img
              src="https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/logo3.png"
              alt=""
              className="w-40"
            />
          </li>
          <li>
            <img
              src="	https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/logo4.png"
              alt=""
              className="w-40"
            />
          </li>
          <li>
            <img
              src="https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/logo6.png"
              alt=""
              className="w-40"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Workinglogo;
