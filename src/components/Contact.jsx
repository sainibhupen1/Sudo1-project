import React from "react";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
// import SubscriptionBox from "./SubscriptionBox";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="flex w-full flex-col h-full">
      <div>
        <Navbar />
      </div>
      <div className="flex mt-[100px] ">
        <div className="bg-blue-400 w-full h-80 flex items-center justify-center flex-col">
          <h1 className="text-white font-bold text-[50px]">Contact Us</h1>
          <p className="font-medium text-gray-600">
            HOME <span className="text-white">/ CONTACT</span>
          </p>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
      {/* <SubscriptionBox /> */}
      {/* <Footer /> */}
      {/* <div className="-mt-20 ">
        <SubscriptionBox />
      </div> */}
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
