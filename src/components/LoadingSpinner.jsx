import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default LoadingSpinner;
