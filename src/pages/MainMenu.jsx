import React from "react";
import MenuLoading from "../components/reusable/mainmenu/MenuLoading";
import { useAnimation } from "../context/AnimationContext";
import { NavLink } from "react-router-dom";
import MenuTitle from "../components/reusable/mainmenu/MenuTitle";
import styles from "./mainmenu.module.css";

const MainMenu = () => {
  const { showTitle } = useAnimation();

  return (
    <>
      {showTitle ? (
         <div
          className={`bg-custom-gradient animate-gradient-x h-screen text-white ${styles.wrapper} [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]`}
        >
        <MenuTitle />
           </div>
      ) : (
        <div
          className={`bg-custom-gradient animate-gradient-x h-screen text-white ${styles.wrapper} [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]`}
        >
          <div className="pt-52 mx-auto text-center">
            <h1 className="text-6xl text-center font-4 font-bold  mb-6">
              Welcome
            </h1>
            <h2 className="text-xl font-4 font-semibold pb-11 text-center p-5 md:mx-auto md:w-1/2">
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
                to="home/portfolio"
              >
                View Portfolio
              </NavLink>
            </div>
            <a
              className="text-sm font-sans w-96 font-bold underline hover:no-underline hover:opacity-75 active:opacity-40 lg:text-lg"
              href="https://github.com/BlueElyas/elyas-portfolio"
            >
              Visit the code for my personal website here
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default MainMenu;
