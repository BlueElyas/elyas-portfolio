import React from "react";
import { NavLink } from "react-router-dom";

const VisitCard = ({ title, link, description, images }) => {
  return (
    <div className="p-10 border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col md:items-start gap-4 md:text-start md:flex-row-reverse md:gap-12 md:w-[600px]">
      <div className="md:w-1/2">
        <img src={images[0]} alt={title} className="w-full" />
      </div>

      <div className="flex flex-col md:items-start md:justify-around md:h-[300px] box-border">
        <h5 className="mb-2 text-2xl font-bold text-white ">{title}</h5>
        <p className="mb-3 font-normal text-gray-400 ">{description}</p>
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default VisitCard;
