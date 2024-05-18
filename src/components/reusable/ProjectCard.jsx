import React from "react";

const ProjectCard = ({ name, tools, description, website, github }) => {
  const hideWebsite =
    website.length === 0 ? (
      ""
    ) : (
      <a href={website} target="_blank" rel="noreferrer">
        Website
      </a>
    );

  const hideGithub =
    github.length === 0 ? (
      ""
    ) : (
      <a href={github} target="_blank" rel="noreferrer">
        Github
      </a>
    );

  return (
    <div className=" w-[90%] lg:w-[400px] rounded-lg m-1 overflow-hidden cursor-pointer shadow-2xl ">
      {/* <img src={img} alt={name} className="w-full object-cover" /> */}
      <ul className="flex flex-col gap-6 font-merriweatherBold my-4 leading-8 justify-center p-10 leading-">
        <li>
          <span className="font-merriweatherReg block mb-2 text-2xl">
            {name}
          </span>
        </li>
        <li>
          <span className="font-merriweatherReg block mb-2">{description}</span>
        </li>
        <li>
          Tools:
          <span className="font-merriweatherReg block mb-2">
            {tools.join(", ")}
          </span>
        </li>
        <button>View More</button>
      </ul>
    </div>
  );
};

export default ProjectCard;
