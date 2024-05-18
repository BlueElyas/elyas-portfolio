import React from "react";

import MainMenuButton from "../reusable/mainmenu/MainMenuButton";
import MenuTitle from "../reusable/mainmenu/MenuTitle";

const MainMenu = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-darkGray text-softGray h-screen gap-8 text-lg lg:text-4xl font-merriweatherBold text-center overflow-hidden">
      <MenuTitle />
      <p className="text-lg font-sans mx-8 w-1/3">
        My name is{" "}
        <span class="text-xl font-semibold text-orange-500">Elyas</span>
        <p className="block my-4 text-orange-500">Welcome to my page 👋 </p>
        <p class="font-normal text-md md:text-xl">
          Front-End Developer skilled in HTML/CSS, JavaScript, React, and
          TypeScript, with a focus on creating responsive and accessible web
          applications. Confidence in utilizing Typescript, HTML/CSS, and React
          to deliver high-quality projects
        </p>
      </p>
      <MainMenuButton name="View CV" link="cv.html" />
      <MainMenuButton name="View Portfolio" link="personal" />

      <a
        className="text-sm font-sans w-96 text-softGray font-bold underline hover:no-underline hover:opacity-75 active:opacity-40 lg:text-lg"
        href="https://github.com/BlueElyas/elyas-portfolio"
      >
        Visit the code for my personal website here
      </a>
    </div>
  );
};

export default MainMenu;
