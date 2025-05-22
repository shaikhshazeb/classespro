"use client"
import React from "react";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
        {/* Cartoon Character */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-32 mx-auto mb-4"
        >
          <path
            d="M100 20c-40 0-60 30-60 70s10 70 60 70 60-30 60-70-20-70-60-70zm-25 55c2 0 3 2 3 4s-1 4-3 4-3-2-3-4 1-4 3-4zm50 0c2 0 3 2 3 4s-1 4-3 4-3-2-3-4 1-4 3-4zm-40 35h30c2 0 2 3 0 3h-30c-2 0-2-3 0-3zm15 8c3 0 5 3 5 6s-2 6-5 6-5-3-5-6 2-6 5-6z"
            fill="none"
            stroke="#f97316"
            strokeWidth="5"
          />
        </svg>

        {/* Error Text */}
        <h1 className="text-6xl font-bold text-orange-500 mb-2">404 ERROR!</h1>
        <p className="text-orange-300 text-lg mb-6">Sorry, the page not found</p>

        {/* Back Button */}
        <a
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition"
        >
          BACK TO HOME
        </a>
      </div>
    </div>
  );
};

export default Error404;
