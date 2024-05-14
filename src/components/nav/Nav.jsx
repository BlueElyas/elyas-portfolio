import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { linkStyles } from "./JavStyles";

const NavBar = ({ toggleNavbar, isActive }) => {
  return (
    <>
      <nav>
        <ul className="flex gap-1font-merriweatherReg flex-col place-items-center bg-softGray pb-16 md:pb-8 flex-wrap md:flex-row  w-screen border-solid border-2 border-darkGray border-opacity-10 rounded-b-full gap-4 md:border-none md:w-[300px]">
          <li className={linkStyles.join(" ")}>
            <NavLink to="/personal" className="flex items-center gap-4">
              <div className="md:hidden">
                <FaArrowAltCircleRight />
              </div>
              <button onClick={() => toggleNavbar(!isActive)}>Home</button>
            </NavLink>
          </li>
          <li className={linkStyles.join(" ")}>
            <NavLink to="projects" className="flex items-center gap-4">
              <div className="md:hidden">
                <FaArrowAltCircleRight />
              </div>

              <button onClick={() => toggleNavbar(!isActive)}>Projects</button>
            </NavLink>
          </li>
          <li className={linkStyles.join(" ")}>
            <NavLink to="experiments">Experiments</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
