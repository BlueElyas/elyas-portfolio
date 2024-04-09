import React from "react";

const Header = () => {
  const linkStyles = [
    "text-lg",
    "text-softGray",
    "bg-accent",
    "p-2",
    "rounded-lg",
    "shadow-lg",
    "cursor-pointer",
    "hover:scale-110 ",
    "active:opacity-45",
  ];

  return (
    <header className="flex justify-around py-8 items-center bg-softGray">
      <h1 className="font-merriweatherBold text-4xl">Elyas F</h1>
      <nav>
        <ul className="flex gap-4 font-merriweatherReg self-center">
          <li className={linkStyles.join(" ")}>Home</li>
          <li className={linkStyles.join(" ")}>Projects</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
