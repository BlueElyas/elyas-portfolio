import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const PageTitle = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const showBackToHome =
    location.pathname === "/portfolio" ? (
      <NavLink
        to="/"
        className="font-bold text-sm cursor-pointer hover:opacity-75 active:opacity-40 underline hover:no-underline self-start"
      >
        Back to Main Menu
      </NavLink>
    ) : (
      <button
        onClick={() => navigate(-1)}
        to="-1"
        className="font-bold text-sm cursor-pointer hover:opacity-75 active:opacity-40 underline hover:no-underline self-start"
      >
        Go Back
      </button>
    );

  return (
    <div className="pt-6 pb-10 text-center font-merriweatherBold px-8 my-4 leading-8 grid grid-cols-3 grid-rows-2">
      {showBackToHome}
      <h1 className="text-3xl mt-6 col-span-full"> {title} </h1>
    </div>
  );
};

export default PageTitle;
