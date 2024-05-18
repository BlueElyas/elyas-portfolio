import React from "react";

import MainMenuButton from "../reusable/mainmenu/MainMenuButton";
import WebsiteLoading from "./WebsiteLoading";
import MenuLoading from "../reusable/mainmenu/MenuLoading";
import { useAnimation } from "../../context/AnimationContext";

const MainMenu = () => {
  const { showTitle, showLoading } = useAnimation();

  return (
    <>
      {showTitle ? (
        <WebsiteLoading />
      ) : showLoading ? (
        <MenuLoading />
      ) : (
        <div className="flex justify-center items-center flex-col bg-darkGray text-softGray h-screen gap-8 text-lg lg:text-4xl font-merriweatherBold overflow-hidden">
          <p className="text-lg font-sans mx-8 w-[80%]">
            <p class="font-normal text-md md:text-xl">
              Front-End Developer skilled in HTML/CSS, JavaScript, React, and
              TypeScript, with a focus on creating responsive and accessible web
              applications.
            </p>
            <p>
              Confidence in utilizing Typescript, HTML/CSS, and React to deliver
              high-quality projects
            </p>
          </p>
          <div className="flex flex-col gap-8">
            <MainMenuButton name="View CV" link="cv" />
            <MainMenuButton name="View Portfolio" link="portfolio" />
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
