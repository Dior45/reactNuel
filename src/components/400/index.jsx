// Error400.js
import React from "react";

const Error400 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-red-500">Error 400</h1>
        <p className="text-gray-600 mt-2">Bad Request</p>
        <p className="text-gray-600 mt-4">
          Oops! Something went wrong with your request.
        </p>
        <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error400;
