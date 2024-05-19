import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { linkStyles } from "./JavStyles";

const NavBar = ({ toggleNavbar, isActive }) => {
  return (
    <>
      <nav>
        <ul className="flex font-merriweatherReg place-items-center bg-softGray pb-6 md:pb-8 flex-wrap md:flex-row md:justify-around  gap-8 md:w-[600px]">
          <li className={linkStyles.join(" ")}>
            <NavLink to="/portfolio" className="flex items-center gap-4">
              <button onClick={() => toggleNavbar(!isActive)}>Portfolio</button>
            </NavLink>
          </li>
          <li className={linkStyles.join(" ")}>
            <NavLink to="apis" className="flex items-center gap-4">
              <button onClick={() => toggleNavbar(!isActive)}>
                External APIs
              </button>
            </NavLink>
          </li>
          <li className={linkStyles.join(" ")}>
            <NavLink to="about" className="flex items-center gap-4">
              <button onClick={() => toggleNavbar(!isActive)}>About me</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
