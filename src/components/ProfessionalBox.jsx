import React, { useState } from "react";

const ProfessionalBox = () => {
  const boxes = [
    {
      id: 1,
      img: "https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/test-2.jpg",
      name: "Abhay shrma",
      Roll: "App Developer",
    },
    {
      id: 2,
      img: "https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/test-3.jpg",
      name: "Vijay Soni",
      Roll: "Wev Developer",
    },
    {
      id: 3,
      img: "https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/test-1.jpg",
      name: "Dipanshu",
      Roll: "Web Designer",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRps4hbntbqu22IpUj4BUXuCVVBBeM9bQPI4Q&s",
      name: "Devansh S..",
      Roll: "Marketing",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD0Z9m6EOjvhxbg6tQ11j2VpGcrsfdJt7mA&s",
      name: "John Dev",
      Roll: "Web Development",
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2wLRAmu-WlJYIhmFFE5YoOy47a_PEH0HXw&s",
      name: "Himanshu",
      Roll: "App Developer",
    },
    {
      id: 7,
      img: "https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/test-2.jpg",
      name: "Abhay shrma",
      Roll: "App Developer",
    },
    {
      id: 8,
      img: "https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/test-3.jpg",
      name: "Vijay Soni",
      Roll: "Wev Developer",
    },
    {
      id: 9,
      img: "https://pxelcode.com/tf-db/edutim/edutim/assets/images/clients/test-1.jpg",
      name: "Dipanshu",
      Roll: "Web Designer",
    },
    {
      id: 10,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRps4hbntbqu22IpUj4BUXuCVVBBeM9bQPI4Q&s",
      name: "Devansh S..",
      Roll: "Marketing",
    },
    {
      id: 11,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD0Z9m6EOjvhxbg6tQ11j2VpGcrsfdJt7mA&s",
      name: "John Dev",
      Roll: "Web Development",
    },
    {
      id: 12,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2wLRAmu-WlJYIhmFFE5YoOy47a_PEH0HXw&s",
      name: "Himanshu",
      Roll: "App Developer",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 3 < boxes.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrevious = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    }
  };

  const visibleBoxes = boxes.slice(startIndex, startIndex + 3);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex justify-between w-full max-w-5xl">
        {visibleBoxes.map((box) => (
          <div
            key={box.id}
            className="flex-col bg-blue-300 w-[200px] h-[220px] shadow-lg rounded-md flex items-center justify-center"
          >
            <div>
              <img
                src={box.img}
                alt="img"
                className="rounded-full w-[150px] h-[150px] object-cover"
              />
            </div>
            <div className="mt-1">
              <h1 className="font-medium text-white text-[20px]">{box.name}</h1>
              <p className="font-medium text-[12px]">({box.Roll})</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex mt-8  space-x-10">
        <button
          onClick={handlePrevious}
          disabled={startIndex === 0}
          className={`ml-20 px-4 py-2 bg-pink-500 text-white rounded ${
            startIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-pink-700"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + 3 >= boxes.length}
          className={` px-4 py-2 bg-pink-500 text-white rounded ${
            startIndex + 3 >= boxes.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-pink-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfessionalBox;
