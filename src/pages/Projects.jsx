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
      <section className="text-center mx-auto">
        <div className="text-center w-[80%] mx-auto">
          <PageTitle title="Portfolio" />
          <div className="leading-8">
            <a
              href="https://github.com/BlueElyas"
              className="underline hover:no-underline hover:opacity-75 text-xl active:opacity-30 mb-16"
              target="_noblank"
            >
              Visit my github here!
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:flex-row gap-8 lg:gap-12 lg:flex-wrap">
          {projects.map((project) => {
            return <AlbumCard project={project} key={project.slug} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Projects;
