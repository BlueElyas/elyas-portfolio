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
        className="font-bold text-sm cursor-pointer hover:opacity-75 active:opacity-40 underline hover:no-underline "
      >
        Back to Home
      </NavLink>
    );

  return (
    <div className="pt-6 pb-10 w-screen text-center font-merriweatherBold px-8 my-4 leading-8 grid grid-cols-4">
      {showBackToHome}
      <h1 className="text-3xl mr-12 mt-6 col-span-4"> {title} </h1>
    </div>
  );
};

export default PageTitle;
