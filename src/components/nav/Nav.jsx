import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = ({ toggleNavbar, isActive }) => {
  const linkStyles = [
    "text-lg",
    "text-accent",
    "p-2",
    "rounded-lg",
    "cursor-pointer",
    "hover:scale-110 ",
    "active:opacity-45",
    "text-sm",
    "font-bold",
    "md:text-lg",
  ];
  return (
    <>
      <nav>
        <ul className="flex gap-1font-merriweatherReg flex-col place-items-center bg-softGray pb-8 flex-wrap md:flex-row fixed w-screen border-solid border-2 border-darkGray border-opacity-10 rounded-b-full md:static md:w-full md:border-none">
          <li className={linkStyles.join(" ")}>
            <NavLink to="/" className="flex items-center gap-4">
              <div className="md:hidden">
                <FaArrowAltCircleRight />
              </div>
              <button onClick={() => toggleNavbar(!isActive)}>Home</button>
            </NavLink>
          </li>
          <li className={linkStyles.join(" ")}>
            <NavLink to="albums" className="flex items-center gap-4">
              <div className="md:hidden">
                <FaArrowAltCircleRight />
              </div>

              <button onClick={() => toggleNavbar(!isActive)}>Albums</button>
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
            <NavLink to="apis" className="flex items-center gap-4">
              <div className="md:hidden">
                <FaArrowAltCircleRight />
              </div>

              <button onClick={() => toggleNavbar(!isActive)}>APIs</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
