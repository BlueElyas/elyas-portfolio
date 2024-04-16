import React from "react";

const HamburgerMenu = (props) => {
  const { isActive, setIsActive } = props;

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button
        className={`relative group ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-12 h-12 transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden">
            <div
              className={`bg-white h-0.5 w-full transform transition-all duration-300 origin-left ${
                isActive ? "rotate-45" : ""
              }`}
            ></div>
            <div
              className={`bg-white h-0.5 w-full transform transition-all duration-300 ${
                isActive ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`bg-white h-0.5 w-full transform transition-all duration-300 origin-left ${
                isActive ? "-rotate-45" : ""
              }`}
            ></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default HamburgerMenu;
