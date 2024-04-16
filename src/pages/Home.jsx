import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="text-center my-6 flex flex-col gap-3">
        <h2 className="text-2xl">Not much here yet!</h2>
        <h2>Visit the API page. Different APIs to test.</h2>
        <NavLink to="apis">
          <button className="bg-accent text-softGray p-3 rounded-xl hover:scale-105 active:opacity-85">
            Click here!
          </button>
        </NavLink>
      </section>
    </main>
  );
};

export default Home;
