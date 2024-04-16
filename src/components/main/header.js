import React, { useState } from "react";
import HamburgerMenu from "../nav/HamburgerMenu";
import NavBar from "../nav/Nav";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="flex justify-around py-8 items-center bg-softGray">
        <h1 className="font-merriweatherBold text-4xl">Elyas F</h1>
        <div className="md:hidden">
          <HamburgerMenu isActive={showNav} setIsActive={setShowNav} />
        </div>
        <div className="hidden md:block">
          <NavBar toggleNavbar={setShowNav} isActive={showNav} />
        </div>
      </header>
      {showNav && <NavBar toggleNavbar={setShowNav} isActive={showNav} />}
    </>
  );
};

export default Header;