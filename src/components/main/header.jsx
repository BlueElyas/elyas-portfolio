import React, { useState } from "react";
import HamburgerMenu from "../nav/HamburgerMenu";
import NavBar from "../nav/Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="flex justify-around py-10 items-center bg-softGray md:items-baseline">
        <h1 className="font-merriweatherBold text-4xl">
          <NavLink to="/personal">Elyas F</NavLink>
        </h1>
        <div className="md:hidden">
          <HamburgerMenu isActive={showNav} setIsActive={setShowNav} />
        </div>
        <div className="hidden md:block">
          <NavBar toggleNavbar={setShowNav} isActive={showNav} />
        </div>
      </header>
      {showNav && (
        <div className="md:hidden">
          <NavBar toggleNavbar={setShowNav} isActive={showNav} />
        </div>
      )}
    </>
  );
};

export default Header;
