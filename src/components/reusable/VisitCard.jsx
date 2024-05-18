import React from "react";
import { NavLink } from "react-router-dom";

const VisitCard = ({ title, link, description }) => {
  return (
    <div className="p-10 border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col md:items-start gap-4 items-center flex-1 min-w-min">
      <h5 className="mb-2 text-2xl font-bold tracking- text-white">{title}</h5>

      <p className="mb-3 font-normal text-gray-400">{description}</p>
      <NavLink
        to={link}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none  bg-blue-600 "
      >
        Check it out!
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </NavLink>
    </div>
  );
};

export default VisitCard;
