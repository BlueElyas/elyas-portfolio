import React from "react";

const APIContainer = ({ children, name, link, description }) => {
  return (
    <section>
      <div className="mx-2 flex flex-col items-center lg:w-[700px] lg:mx-auto lg:border-opacity-30">
        {children}
        <ul className="w-[90%] leading-4 flex flex-col gap-8 md:text-center">
          <li className="font-bold">
            Name:
            <span className="font-sans ml-4 font-normal">{name}</span>
          </li>
          <li className="font-bold break-all break-words">
            Link:
            <span className="font-sans ml-4 font-normal">
              <a
                className="cursor-pointer hover:text-accent hover:underline visited:text-accent active:opacity-60"
                href={`${link}`}
              >
                {link}
              </a>
            </span>
          </li>
          <li className="font-bold">
            Desc:
            <span className="font-sans ml-4 font-normal">{description}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default APIContainer;
