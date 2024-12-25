import React from "react";
import { Button } from "./ui/button";
import { GoPeople } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";

const PopularCourseBox = () => {
  return (
    <div className="flex ml-10 mr-10  w-[93%] justify-between">
      <div className="flex flex-col border border-gray-200">
        <div className="relative">
          <img
            src="	https://pxelcode.com/tf-db/edutim/edutim/assets/images/course/course1.jpg"
            alt="img1"
            width={340}
            className="rounded-md"
          />
          <span className="absolute top-2 left-2 text-gray-500 font-medium p-1 rounded-md bg-white">
            Beginner
          </span>
        </div>
        <div className="m-4 ">
          <div>
            <h1 className="text-red-500 font-bold mb-2 text-[30px]">$50</h1>
            <p className="text-blue-950 font-bold mb-2 text-[20px] hover:text-red-500">
              Information About UI/UX
              <br />
              Design Degree
            </p>
            <p className="mb-2">
              <span className="text-yellow-500 mr-2">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              (5.00)
            </p>
            <p className="text-gray-500 mb-4 ">
              Lorem ipsum dolor sit,amet constrectetur <br />
              adipisicing elit.quis,alias.
            </p>
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex gap-4">
              <p className="flex items-center gap-2 font-medium">
                <span className="text-red-500">
                  <GoPeople />
                </span>
                340
              </p>
              <p className="flex items-center gap-2 font-medium">
                <span className="text-red-500">
                  <CiBookmark />
                </span>
                82 Lessons
              </p>
            </div>
            <div>
              <Button className="font-bold hover:bg-red-500">Details</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col border border-gray-200">
        <div className="relative">
          <img
            src="	https://pxelcode.com/tf-db/edutim/edutim/assets/images/course/course2.jpg"
            alt="img1"
            width={340}
            className="rounded-md"
          />
          <span className="absolute top-2 left-2 text-gray-500 font-medium p-1 rounded-md bg-white">
            Advanced
          </span>
        </div>
        <div className="m-4 ">
          <div>
            <h1 className="text-red-500 font-bold mb-2 text-[30px]">
              $80{" "}
              <span className="line-through text-gray-500 text-[20px]">
                $120
              </span>
            </h1>
            <p className="text-blue-950 font-bold mb-2 text-[20px] hover:text-red-500">
              Photography Crash Course
              <br />
              for Photographer
            </p>
            <p className="mb-2">
              <span className="text-yellow-500 mr-2">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              (5.00)
            </p>
            <p className="text-gray-500 mb-4 ">
              Lorem ipsum dolor sit,amet constrectetur <br />
              adipisicing elit.quis,alias.
            </p>
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex gap-4">
              <p className="flex items-center gap-2 font-medium">
                <span className="text-red-500">
                  <GoPeople />
                </span>
                340
              </p>
              <p className="flex items-center gap-2 font-medium">
                <span className="text-red-500">
                  <CiBookmark />
                </span>
                82 Lessons
              </p>
            </div>
            <div>
              <Button className="font-bold hover:bg-red-500">Details</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col border border-gray-200">
        <div className="relative">
          <img
            src="	https://pxelcode.com/tf-db/edutim/edutim/assets/images/course/course3.jpg"
            alt="img1"
            width={340}
            className="rounded-md"
          />
          <span className="absolute top-2 left-2 text-gray-500 font-medium p-1 rounded-md bg-white">
            Expert
          </span>
        </div>
        <div className="m-4 ">
          <div>
            <h1 className="text-red-500 font-bold mb-2 text-[30px]">
              $100{" "}
              <span className="line-through text-gray-500 text-[20px]">
                $180
              </span>
            </h1>
            <p className="text-blue-950 font-bold mb-2 text-[20px] hover:text-red-500">
              React - The Complete Guide
              <br />
              (React Router)
            </p>
            <p className="mb-2">
              <span className="text-yellow-500 mr-2">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              (5.00)
            </p>
            <p className="text-gray-500 mb-4 ">
              Lorem ipsum dolor sit,amet constrectetur <br />
              adipisicing elit.quis,alias.
            </p>
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex gap-4">
              <p className="flex items-center gap-2 font-medium">
                <span className="text-red-500">
                  <GoPeople />
                </span>
                340
              </p>
              <p className="flex items-center gap-2 font-medium">
                <span className="text-red-500">
                  <CiBookmark />
                </span>
                82 Lessons
              </p>
            </div>
            <div>
              <Button className="font-bold hover:bg-red-500">Details</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourseBox;
