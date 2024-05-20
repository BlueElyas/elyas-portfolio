import React from "react";
import { NavLink } from "react-router-dom";

const VisitCard = ({ project }) => {
  const { name, description, images, slug } = project;
  console.log(images[0]);

  return (
    <div className="p-10 border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col gap-8 md:text-start md:flex-row-reverse md:gap-12 md:w-[600px] md:h-[450px] md:justify-between">
      <div className="md:w-1/3">
        <img src={images[0]} alt={name} className="w-full" />
      </div>
      <hr className="hidden md:block border-[1px] border-solid border-opacity-30 border-white h-full " />

      <div className="flex flex-col items-start md:justify-between md:h-[300px] box-border text-start gap-8 md:gap-0">
        <div className="md:w-[250px]">
          <h5 className="mb-2 text-2xl font-bold text-white ">{name}</h5>
          <p className="font-normal text-gray-400 ">{description}</p>
        </div>
        <NavLink
          to={slug}
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
