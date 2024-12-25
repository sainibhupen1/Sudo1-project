import React from "react";
import { Button } from "./ui/button";
import { IoIosArrowForward } from "react-icons/io";

const ContactForm = () => {
  return (
    <div className=" flex flex-col items-center mt-20 bg-gray-50 h-[700px]">
      <div className="flex flex-col items-center">
        <h1 className="font-medium text-[16px]">CONTACT US</h1>
        <h1 className="font-bold text-[30px] text-pink-500">Have any query?</h1>
        <p className="mb-2 font-bold text-[20px] text-red-500">_____</p>
        <p className="w-[60%] pl-8 font-medium text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="w-full mt-20 flex flex-row">
        <div className="flex flex-col pt-8 pl-8 pb-8 w-[30%]">
          <div className="flex flex-col mb-8">
            <p className="font-medium text-pink-600">Email Us</p>
            <p className="font-bold text-[25px]">support@email.com</p>
          </div>
          <div className="flex flex-col mb-8">
            <p className="font-medium text-pink-600">Make a Call</p>
            <p className="font-bold text-[25px]">+1234567890</p>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-pink-600">Corporate Office</p>
            <p className="font-bold text-[25px]">
              Moon Street Light Avenue,
              <br />
              14/15 Jupiter,JP 80630
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[70%]  p-8 pr-20">
          <div className="flex flex-row w-full justify-between">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-200 p-3 pr-40 rounded-full hover:border border-red-500 "
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-200 p-3 pr-40 rounded-full hover:border border-red-500 "
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="bg-gray-200 p-3 pr-40 rounded-full hover:border border-red-500 mt-4 w-full"
            />
          </div>
          <div>
            <textarea
              name="text"
              id="text"
              placeholder="Your Message"
              className="bg-gray-200 p-3 pr-40 rounded-md h-[140px] hover:border border-red-500 mt-4 w-full"
            ></textarea>
          </div>
          <div className="flex w-full justify-end mt-4">
            <Button className="bg-pink-600 flex">
              Send Message <IoIosArrowForward className="mt-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
