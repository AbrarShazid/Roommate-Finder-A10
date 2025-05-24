

import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../assets/error.json";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white px-4">
      <div className="w-full max-w-md">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <h2 className="text-3xl font-bold mt-6">Oops! Page Not Found</h2>
      <p className="text-center text-lg mt-2">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-[#f2555d] text-white rounded hover:bg-[#e0444e] transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Error;

