import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { linkStyles, subLinkStyles } from "./JavStyles";

const NavBar = ({ toggleNavbar, isActive }) => {
  const [showExperiment, setShowExperiment] = useState(false);

  return (
    <>
      <nav onMouseLeave={(e) => setShowExperiment(!showExperiment)}>
        <ul className="flex gap-1font-merriweatherReg flex-col place-items-center bg-softGray pb-8 flex-wrap md:flex-row  w-screen border-solid border-2 border-darkGray border-opacity-10 rounded-b-full gap-4 md:border-none md:w-[300px]">
          <li className={linkStyles.join(" ")}>
            <NavLink to="/" className="flex items-center gap-4">
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
          <li
            className={linkStyles.join(" ")}
            onMouseEnter={(e) => {
              setShowExperiment(true);
            }}
          >
            <NavLink to="experiments">Experiments</NavLink>
          </li>
          {showExperiment ? (
            <div className="flex gap-4 absolute top-[250px]  md:top-auto md:mt-20 md:ml-40">
              <li className={subLinkStyles.join(" ")}>
                <NavLink
                  to="experiments/apis"
                  className="flex items-center gap-4"
                >
                  <div className="md:hidden">
                    <FaArrowAltCircleRight />
                  </div>
                  <button onClick={() => toggleNavbar(!isActive)}>APIs</button>
                </NavLink>
              </li>
              <li className={subLinkStyles.join(" ")}>
                <NavLink
                  to="experiments/albums"
                  className="flex items-center gap-4"
                >
                  <div className="md:hidden">
                    <FaArrowAltCircleRight />
                  </div>
                  <button onClick={() => toggleNavbar(!isActive)}>
                    Albums
                  </button>
                </NavLink>
              </li>
            </div>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
