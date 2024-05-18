import React from "react";
import PageTitle from "../components/reusable/PageTitle";
import projects from "../projects";
import VisitCard from "../components/reusable/VisitCard";

const Projects = () => {
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
      </section>
    </main>
  );
};

export default Projects;
