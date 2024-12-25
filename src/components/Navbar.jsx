import { FaSearch } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white z-20  p-6 flex items-center  fixed w-full">
      <div>
        <h1
          className="text-4xl font-bold first-letter:text-red-500 cursor-pointer"
          onClick={() => navigate("/")}
        >
          edutim
        </h1>
      </div>

      <div className="ml-6 mt-2 font-medium flex relative group">
        <h1 className="cursor-pointer p-2 bg-blue-950 text-white rounded-md">
          Categories
        </h1>

        <ul className="absolute top-[50px] left-0 bg-white text-black shadow-lg mt-2 rounded-md z-10 w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <li className="p-2 hover:bg-gray-200 cursor-pointer">WordPress</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Web Design</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Marketing</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">
            Graphics Design
          </li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Financial</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">
            Personal Growth
          </li>
        </ul>
      </div>

      <div className="ml-4">
        <div className="relative flex items-center">
          <input
            className="border w-[120px] pl-2 pr-8 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search"
          />
          <p className="absolute right-3 text-gray-500 cursor-text">
            <FaSearch />
          </p>
        </div>
      </div>

      <div className="ml-10 mr-4 flex-1">
        <ul className="flex gap-10 font-medium text-[14px] justify-end">
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 text-red-500">
              Home <IoIosArrowDown />
            </div>
            <ul className="absolute top-[25px] left-0 bg-white text-black shadow-lg mt-2 rounded-md z-10 w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Home 1</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Home 2</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Home 3</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Home 4</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Home 5</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Home 6</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Home 7</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Home 8 <span className="text-red-500">New</span>
              </li>
            </ul>
          </li>
          <li
            className="cursor-pointer hover:text-red-500"
            onClick={() => navigate("/about")}
          >
            About
          </li>

          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-red-500">
              Courses <IoIosArrowDown />
            </div>
            <ul className="absolute top-[25px] left-0 bg-white text-black shadow-lg mt-2 rounded-md z-10 w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Course Style 1
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Course Style 2
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Course Style 3
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Course Style 4
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Course Filter
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Course List
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Course Details style 1
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Course Details Style Tab
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Course Details Style Tab 2
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Course Details Classic
              </li>
            </ul>
          </li>

          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-red-500">
              Shop <IoIosArrowDown />
            </div>
            <ul className="absolute top-[25px] left-0 bg-white text-black shadow-lg mt-2 rounded-md z-10 w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Shop</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Shop List Filter
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Shop Single
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Cart</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Checkout</li>
            </ul>
          </li>

          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-red-500">
              Pages <IoIosArrowDown />
            </div>
            <ul className="absolute top-[25px] left-0 bg-white text-black shadow-lg mt-2 rounded-md z-10 w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Instructor
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Login</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">404</li>
            </ul>
          </li>

          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-red-500">
              Blog <IoIosArrowDown />
            </div>
            <ul className="absolute top-[25px] left-0 bg-white text-black shadow-lg mt-2 rounded-md z-10 w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <li className="p-2 hover:bg-gray-200 cursor-pointer">Blog</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                Blog Single
              </li>
            </ul>
          </li>
          <li
            className="cursor-pointer hover:text-red-500"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>
      </div>

      <div className="ml-8">
        <div
          className="flex items-center gap-2 pl-6 pr-6 pt-2 pb-2 bg-red-500 font-medium text-white rounded-md hover:bg-blue-500 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <MdLogin />
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
