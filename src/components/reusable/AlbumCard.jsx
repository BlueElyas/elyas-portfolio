import React from "react";
import { NavLink } from "react-router-dom";

const AlbumCard = ({ project }) => {
  const { name, description, images, slug } = project;
  return (
    <NavLink to={slug}>
      <div className=" w-[90%] lg:w-80 rounded-lg m-1 overflow-hidden cursor-pointer shadow-xl transition-all ease-linear transition-200ms hover:scale-105 hover:shadow-2xl p-4 bg-white text-darkGray text-start ">
        <img src={images[0]} alt={name} className="w-full object-cover " />
        <ul className="  my-4 leading-7 flex flex-col gap-4">
          <li className="font-merriweatherBold">{name}</li>
          <li>{description}</li>
          <NavLink
            to={slug}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none justify-center bg-blue-600 "
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
        </ul>
      </div>
    </NavLink>
  );
};

export default AlbumCard;
