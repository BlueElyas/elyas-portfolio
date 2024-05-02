import React from "react";
import { NavLink } from "react-router-dom";

const VisitPage = ({ title, description, name, startOrEnd }) => {
  return (
    <section className="my-0 flex flex-col gap-3 border-solid border-2 border-darkGray p-12 rounded-lg mx-4 mt-12 md:mt-0 border-opacity-20 md:w-[600px]">
      <h2 className="text-2xl">{title}</h2>
      <h2>{description} </h2>
      <hr className="border-darkGray border-opacity-40 w-full my-4" />
      <NavLink to={name} className={`self-${startOrEnd}`}>
        <button className="bg-accent text-softGray px-3 py-2 rounded-xl hover:scale-105 active:opacity-85 float-right">
          Click here!
        </button>
      </NavLink>
    </section>
  );
};

export default VisitPage;
