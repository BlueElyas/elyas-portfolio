import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const PageTitle = ({ title }) => {
  const location = useLocation();

  console.log(location);

  const showBackToHome =
    location.pathname === "/" ? (
      ""
    ) : (
      <NavLink
        to="/"
        className="font-bold text-sm cursor-pointer hover:opacity-75 active:opacity-40 underline hover:no-underline self-start"
      >
        Back to Home
      </NavLink>
    );

  return (
    <div className="pt-6 pb-10 text-center font-merriweatherBold px-8 my-4 leading-8 grid grid-cols-3 grid-rows-2">
      {showBackToHome}
      <h1 className="text-3xl mt-6 col-span-full"> {title} </h1>
    </div>
  );
};

export default PageTitle;
