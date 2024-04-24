import React from "react";
import { NavLink } from "react-router-dom";

const VisitPortfolio = () => {
  return (
    <section className="my-12 flex flex-col gap-3 border-solid border-2 border-darkGray p-12 rounded-lg mx-4 mt-12 md:mt-0 border-opacity-20 md:w-[600px] items-end">
      <h2 className="text-2xl">Visit my Projects</h2>
      <h2>Projects and Client work </h2>
      <hr className="border-darkGray border-opacity-40 w-full my-4" />
      <NavLink to="projects" className=" self-start">
        <button className="bg-accent text-softGray px-3 py-2 rounded-xl hover:scale-105 active:opacity-85">
          Click here!
        </button>
      </NavLink>
    </section>
  );
};

export default VisitPortfolio;
