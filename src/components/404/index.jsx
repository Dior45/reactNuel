// Error404.js
import React from "react";

const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-red-500">Error 404</h1>
        <p className="text-gray-600 mt-2">Page Not Found</p>
        <p className="text-gray-600 mt-4">
          Sorry, the page you are looking for might be in another universe.
        </p>
        <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error404;
