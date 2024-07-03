import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 w-52">
        <div className="skeleton h-32 w-full bg-gray-200"></div>
        <div className="skeleton h-4 w-28 bg-gray-200"></div>
        <div className="skeleton h-4 w-full bg-gray-200"></div>
        <div className="skeleton h-4 w-full bg-gray-200"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;