import React from "react";
import BlogBox from "./BlogBox";
import CountingPage from "./CountingPage";
import Course from "./course";
import Footer from "./Footer";
import Home from "./Home";
import LearnPage from "./LearnPage";
import Navbar from "./Navbar";
import PopularCourse from "./PopularCourse";
import Professional from "./Professional";
import Skills from "./Skills";
import SubscriptionBox from "./SubscriptionBox";
import TrandingCourse from "./TrandingCourse";
import VideoPage from "./VideoPage";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Course />
      <PopularCourse />
      <LearnPage />
      <BlogBox />
      <TrandingCourse />
      <CountingPage />
      <VideoPage />
      <Skills />
      <Professional />
      <TrandingCourse />
      <SubscriptionBox />
      <Footer />
    </div>
  );
};

export default Main;
