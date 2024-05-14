import React from "react";

const MainMenuButton = ({ name, link }) => {
  return (
    <>
      <a
        href={link}
        className="relative rounded-full px-8 py-5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 active:opacity-30"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">{name}</span>
      </a>
    </>
  );
};

export default MainMenuButton;
