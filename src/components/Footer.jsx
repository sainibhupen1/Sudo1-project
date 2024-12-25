import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialDribbble } from "react-icons/sl";
import { FaHeadphones } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex w-full -mt-60 bg-blue-950 h-[530px]">
      <div className="flex mt-40 ml-20 mr-10 flex-col">
        <div className="flex w-full ">
          <div className="flex w-[35%] flex-col mr-2 pr-4">
            <h1 className="font-bold text-white cursor-default text-[20px]">
              About Us
            </h1>
            <p className="mt-4 text-white font-medium">
              Veniam Sequi molestias aut necessitatibus optio magni at natus
              accusamus.Lorem ipsum dolor sit amet, consectetur adipisicin
              gelit, sed do eiusmod tempor incididunt{" "}
            </p>
            <div className="flex w-full mt-4">
              <ul className="ml-4 mr-10 flex gap-2 w-full justify-between">
                <li className=" rounded-full p-3 bg-white text-red-500 cursor-pointer hover:text-green-800 hover:bg-red-400">
                  <SlSocialFacebook />
                </li>
                <li className=" rounded-full p-3 bg-white text-red-500 cursor-pointer hover:text-green-800 hover:bg-red-400">
                  <SlSocialTwitter />
                </li>
                <li className=" rounded-full p-3 bg-white text-red-500 cursor-pointer hover:text-green-800 hover:bg-red-400">
                  <SlSocialLinkedin />
                </li>
                <li className=" rounded-full p-3 bg-white text-red-500 cursor-pointer hover:text-green-800 hover:bg-red-400">
                  <SlSocialDribbble />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full flex-row ml-12 mr-12 justify-between">
            <div>
              <h1 className="text-white font-bold text-[20px] mb-4 cursor-default">
                Company
              </h1>
              <ul>
                <li className="text-white font-medium mb-2  cursor-pointer hover:text-red-500">
                  About us
                </li>
                <li className="text-white font-medium mb-2  cursor-pointer hover:text-red-500">
                  Contact us
                </li>
                <li className="text-white font-medium mb-2  cursor-pointer hover:text-red-500">
                  Projects us
                </li>
                <li className="text-white font-medium mb-2  cursor-pointer hover:text-red-500">
                  Terms & Condition us
                </li>
                <li className="text-white font-medium mb-2  cursor-pointer hover:text-red-500">
                  Privacy policy us
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-bold text-[20px] mb-4 cursor-default">
                Courses
              </h1>
              <ul>
                <li className="text-white font-medium mb-2  cursor-pointer hover:text-red-500">
                  SEO Business us
                </li>
                <li className="text-white font-medium mb-2  cursor-pointer hover:text-red-500">
                  Digital Marketing
                </li>
                <li className="text-white font-medium mb-2  cursor-pointer hover:text-red-500">
                  Graphic Design
                </li>
                <li className="text-white font-medium mb-2  cursor-pointer hover:text-red-500">
                  Site Development
                </li>
                <li className="text-white font-medium mb-2  cursor-pointer hover:text-red-500">
                  Social Marketing
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-bold text-[20px] mb-4 cursor-default">
                Contact
              </h1>
              <ul>
                <li className="flex gap-6 mb-4">
                  <p>
                    <FaHeadphones className="text-[30px] text-red-600" />
                  </p>
                  <p className="text-white font-medium">
                    Phone Number <br />{" "}
                    <span className="text-[14px]">(68)3455902</span>
                  </p>
                </li>
                <li className="flex gap-6 mb-4">
                  <p>
                    <IoIosMail className="text-[30px] text-red-600" />
                  </p>
                  <p className="text-white font-medium">
                    Email Address <br />{" "}
                    <span className="text-[14px]">info@yourdomain.com</span>
                  </p>
                </li>
                <li className="flex gap-6">
                  <p>
                    <FaLocationDot className="text-[30px] text-red-600" />
                  </p>
                  <p className="text-white font-medium">
                    Office Address <br />{" "}
                    <span className="text-[14px]">
                      Moon Street Light Avenue
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-12" />
        <div className="mt-2 items-center justify-between p-2 flex w-full">
          <h1 className="text-4xl text-white font-bold first-letter:text-red-500 cursor-default">
            edutim
          </h1>
          <p className="text-white font-medium">
            @ Copyright reserved to Edutim.Proudly Crafted by{" "}
            <span className="text-red-700 hover:text-green-800  cursor-pointer">
              Dreambuzz
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
