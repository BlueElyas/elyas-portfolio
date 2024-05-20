import React, { useState } from "react";
import NavBar from "../nav/Nav";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="flex justify-center md:pr-7 md:pt-5 items-center bg-softGray md:items-baseline md:justify-center">
        <NavBar toggleNavbar={setShowNav} isActive={showNav} />
      </header>
    </>
  );
};

export default Header;
