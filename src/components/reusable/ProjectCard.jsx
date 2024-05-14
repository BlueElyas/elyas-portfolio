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
    website.lenght === 0 ? (
      ""
    ) : (
      <a href={github} target="_blank" rel="noreferrer">
        Github
      </a>
    );

  return (
    <div className=" w-[90%] lg:w-[400px] rounded-lg m-1 overflow-hidden cursor-pointer shadow-2xl ">
      {/* <img src={img} alt={name} className="w-full object-cover" /> */}
      <ul className="flex flex-col gap-6 font-merriweatherBold my-4 leading-8 justify-center px-10 leading-">
        <li>
          Name: <span className="font-merriweatherReg block mb-2">{name}</span>
        </li>
        <li>
          Tools:
          <span className="font-merriweatherReg block mb-2">
            {tools.join(", ")}
          </span>
        </li>
        <li>
          Desc:
          <span className="font-merriweatherReg block mb-2">{description}</span>
        </li>
        <li className="text-accent hover:opacity-70 underline hover:no-underline ">
          {hideWebsite}
        </li>
        <li className="text-accent hover:opacity-70 underline hover:no-underline ">
          {hideGithub}
        </li>
      </ul>
    </div>
  );
};

export default ProjectCard;
