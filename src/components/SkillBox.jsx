import React, { useState } from "react";

const SkillBox = () => {
  const [currentBox, setCurrentBox] = useState(0);
  const boxes = [
    {
      id: 1,
      img: "https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/test-2.jpg",
      num: "99",
      name: "Abhay shrma",
      Roll: "App Developer",
    },
    {
      id: 2,
      img: "https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/test-3.jpg",
      num: "88",
      name: "Vijay Soni",
      Roll: "Wev Developer",
    },
    {
      id: 3,
      img: "https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/test-1.jpg",
      num: "99",
      name: "Dipanshu",
      Roll: "Web Designer",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRps4hbntbqu22IpUj4BUXuCVVBBeM9bQPI4Q&s",
      num: "88",
      name: "Devansh S..",
      Roll: "Marketing",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD0Z9m6EOjvhxbg6tQ11j2VpGcrsfdJt7mA&s",
      num: "99",
      name: "John Dev",
      Roll: "Web Development",
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2wLRAmu-WlJYIhmFFE5YoOy47a_PEH0HXw&s",
      num: "88",
      name: "Himanshu",
      Roll: "App Developer",
    },
  ];

  const handleNext = () => {
    if (currentBox < boxes.length - 1) {
      setCurrentBox(currentBox + 1);
    }
  };

  const handlePrevious = () => {
    if (currentBox > 0) {
      setCurrentBox(currentBox - 1);
    }
  };

  return (
    <div className="flex flex-col w-full text-center mt-14">
      <div className="flex flex-col rounded-md  shadow-inner mx-auto w-[50%] bg-gray-50">
        <div className="flex flex-row w-full justify-between">
          <div className="m-2 flex gap-4">
            <img
              src={boxes[currentBox].img}
              alt="img1"
              className="w-20 rounded-full "
            />
            <div>
              <h1 className="mt-2 font-medium text-[22px]">
                {boxes[currentBox].name}
              </h1>
              <p className="text-red-500 text-[14px]">
                {boxes[currentBox].Roll}
              </p>
            </div>
          </div>

          <div className="m-4 ">
            <p className="flex items-center justify-center text-gray-300 border border-gray-400 rounded-full w-14 h-14  text-[40px] font-bold">
              {boxes[currentBox].num}
            </p>
          </div>
        </div>
        <div className="m-4">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            enim officia nulla ipsum deleniti. Rem ad sed laborum? Magni ab
            culpa soluta dicta dolore sit obcaecati numquam, earum eum
            doloribus?
          </p>
          <p className="-ml-80 mt-4">
            <span className="text-yellow-500 text-[30px]">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
          </p>
        </div>
      </div>

      <div className="flex   w-full  ">
        <div className="flex ml-80 mr-80 justify-between w-full">
          <button
            onClick={handlePrevious}
            disabled={currentBox === 0}
            className={`px-4 mt-4 mb-4 py-2  bg-blue-500 text-white rounded mr-4 ${
              currentBox === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentBox === boxes.length - 1}
            className={`px-4 m-4 bg-blue-500 text-white rounded ${
              currentBox === boxes.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
