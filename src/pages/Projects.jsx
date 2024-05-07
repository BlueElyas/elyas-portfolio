import React from "react";
import PageTitle from "../components/reusable/PageTitle";

const Projects = () => {
  return (
    <div>
      <div className="text-center mx-5">
        <PageTitle title="Projects" />
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
      </div>
    </div>
  );
};

export default Projects;
