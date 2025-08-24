import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 to-purple-900 text-white px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        Coming Soon
      </h1>
      <p className="text-sm sm:text-base text-center mb-6">
        We're working hard to bring you something amazing. Stay tuned....
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ComingSoon;

