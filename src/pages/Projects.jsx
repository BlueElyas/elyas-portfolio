import React from "react";
import PageTitle from "../components/reusable/PageTitle";
import projects from "../projects";
import VisitCard from "../components/reusable/VisitCard";

const Projects = () => {
  return (
    <div>
      <div className="text-center mx-5">
        <PageTitle title="Portfolio" />
        <div className="leading-8">
          <p>
            Here are a variety of projects I have done. Under each will show the
            tools I have used
          </p>
          <p>
            Some projects are client, some are portfolio and some are for fun!{" "}
          </p>
          <a
            href="https://github.com/BlueElyas"
            className="underline hover:no-underline hover:opacity-75 active:opacity-30"
            target="_noblank"
          >
            Visit my github here!
          </a>
        </div>
        <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-center mt-8 gap-24 md:items-baseline">
          {projects.map((project) => {
            return (
              <VisitCard
                title={project.name}
                description={project.description}
                link={project.website}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
