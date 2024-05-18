import React from "react";

const MenuLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-top-color:transparent w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
      <p className="ml-2">Loading...</p>
    </div>
  );
};

export default MenuLoading;
