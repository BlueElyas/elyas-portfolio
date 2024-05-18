import React from "react";
import MenuLoading from "../components/reusable/mainmenu/MenuLoading";
import { useAnimation } from "../context/AnimationContext";
import { NavLink } from "react-router-dom";
import MenuTitle from "../components/reusable/mainmenu/MenuTitle";

const MainMenu = () => {
  const { showTitle, showLoading } = useAnimation();

  return (
    <>
      {showTitle ? (
        <MenuTitle />
      ) : showLoading ? (
        <MenuLoading />
      ) : (
        <div class="pt-52 mx-auto text-center">
          <h1 class="text-6xl text-center font-4 font-bold text-accent mb-6">
            Welcome
          </h1>
          <h2 class="text-xl font-4 font-semibold pb-11 text-gray-700 text-center p-5 md:mx-auto md:w-1/2">
            I am a Front-End Developer skilled in HTML/CSS, JavaScript, React,
            and TypeScript, with a focus on creating responsive and accessible
            web applications.
          </h2>
          <div className="text-center mb-16 flex gap-5 justify-center">
            <NavLink
              className="inline-flex items-center py-3 font-semibold bg-black text-white px-7 hover:bg-white hover:text-black active:opacity-35  text-centerw-[200px] box-border text-lg"
              to="cv"
            >
              View CV
            </NavLink>
            <NavLink
              className="inline-flex items-center py-3 font-semibold bg-black text-white px-7 hover:bg-white hover:text-black active:opacity-35  text-centerw-[200px] box-border text-lg"
              to="portfolio"
            >
              View Portfolio
            </NavLink>
          </div>
          <a
            className="text-sm font-sans w-96 text-orange-500 font-bold underline hover:no-underline hover:opacity-75 active:opacity-40 lg:text-lg"
            href="https://github.com/BlueElyas/elyas-portfolio"
          >
            Visit the code for my personal website here
          </a>
        </div>
      )}
    </>
  );
};

export default MainMenu;
