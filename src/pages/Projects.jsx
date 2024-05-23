import React from "react";
import PageTitle from "../components/reusable/PageTitle";
import projects from "../projects";
import { Outlet, useLocation } from "react-router-dom";
import AlbumCard from "../components/reusable/AlbumCard";

const Projects = () => {
  const location = useLocation();

  if (location.pathname !== "/home/portfolio") {
    return <Outlet />;
  }

  return (
    <main>
      <section className="text-center w-[80%] mx-auto">
        <PageTitle title="Portfolio" />
        <div className="leading-8">
          <a
            href="https://github.com/BlueElyas"
            className="underline hover:no-underline hover:opacity-75 text-xl active:opacity-30"
            target="_noblank"
          >
            Visit my github here!
          </a>
        </div>
        <div className="mt-8 grid place-items-center md:grid-cols-2 lg:grid-cols-3 items-start">
          {projects.map((project) => {
            return <AlbumCard project={project} key={project.slug} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Projects;
