import React from "react";
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
        <ul className="flex gap-1 font-merriweatherReg flex-col items-center bg-softGray flex-wrap md:flex-row">
          <li className={linkStyles.join(" ")}>
            <NavLink to="/">
              <button onClick={() => toggleNavbar(!isActive)}>Home</button>
            </NavLink>
          </li>
          <li className={linkStyles.join(" ")}>
            <NavLink to="/">
              <button onClick={() => toggleNavbar(!isActive)}>Projects</button>
            </NavLink>
          </li>
          <li className={linkStyles.join(" ")}>
            <NavLink to="/">
              <button onClick={() => toggleNavbar(!isActive)}>
                My Journey
              </button>
            </NavLink>
          </li>
          <li className={linkStyles.join(" ")}>
            <NavLink to={`/apis`}>
              <button onClick={() => toggleNavbar(!isActive)}>APIs</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
