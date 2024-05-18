import React, { useState } from "react";
import HamburgerMenu from "../nav/HamburgerMenu";
import NavBar from "../nav/Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="flex justify-end pr-7 py-10 items-center bg-softGray md:items-baseline md:justify-center">
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
