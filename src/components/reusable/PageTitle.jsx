import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAnimation } from "../../context/AnimationContext";
import linkStyles from "./JavStyles";

const PageTitle = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setShowLoading, setShowTitle } = useAnimation();

  const handleClick = () => {
    setShowLoading(false);
    setShowTitle(false);
  };

  const showBackToHome =
    location.pathname === "/home/portfolio" ? (
      <NavLink to="/" onClick={handleClick} className={linkStyles.join(" ")}>
        Back to Main Menu
      </NavLink>
    ) : (
      <button
        onClick={() => navigate(-1)}
        to="-1"
        className={linkStyles.join(" ")}
      >
        Go Back
      </button>
    );

  return (
    <div className="pt-6 pb-10 text-center font-merriweatherBold px-8  leading-8 grid grid-cols-3 grid-rows-2 ">
      {showBackToHome}
      <h1 className="text-3xl mt-6 md:mt-0 col-span-full lg:text-5xl">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
