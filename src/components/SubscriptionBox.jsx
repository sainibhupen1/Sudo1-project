import React from "react";

const SubscriptionBox = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-[14px] font-bold text-gray-800 mb-4 text-center">
          NEWSLETTER
        </h1>
        <p className="text-blue-600 font-bold text-[20px] text-center mb-6">
          Join our comminity of Students
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Your Email.."
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBox;
