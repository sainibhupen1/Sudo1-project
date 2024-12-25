import React from "react";
import Navbar from "./Navbar";
import LearnPage from "./LearnPage";
import CountingPage from "./CountingPage";
import News from "./News";
import Workinglogo from "./Workinglogo";
import Skills from "./Skills";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="flex w-full flex-col h-[3000px]">
      <div>
        <Navbar />
      </div>
      <div className="flex mt-[100px] ">
        <div className="bg-blue-400 w-full h-80 flex items-center justify-center flex-col">
          <h1 className="text-white font-bold text-[50px]">Who We Are</h1>
          <p className="font-medium text-gray-600">
            HOME <span className="text-white">/ ABOUT US</span>
          </p>
        </div>
      </div>
      <div>
        <LearnPage />
      </div>
      <div className="flex w-full  ">
        <div className="flex w-full ml-40 mr-40">
          <CountingPage />
        </div>
      </div>
      <div>
        <News />
      </div>
      <div>
        <Workinglogo />
      </div>
      <div className="mt-20">
        <Skills />
      </div>
      <div className="mt-80">
        <Footer />
      </div>
    </div>
  );
};

export default About;
