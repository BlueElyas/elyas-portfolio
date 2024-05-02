import React from "react";

const JokeContainer = ({ children, name, link, description }) => {
  console.log(name);
  return (
    <section>
      <div className="mx-2 flex flex-col items-center lg:border-2 lg:border-solid lg:border-darkGray lg:rounded-lg lg:p-4 lg:bg-softGray lg:w-[750px] lg:mx-auto lg:border-opacity-30">
        {children}
        <ul className="w-[90%] leading-8 flex flex-col gap-8 md:text-center">
          <li className="font-bold">
            Name:
            <span className="font-sans text-lg ml-4 font-normal">{name}</span>
          </li>
          <li className="font-bold break-all break-words">
            Link:
            <span className="font-sans text-lg ml-4 font-normal">
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
            <span className="font-sans text-lg ml-4 font-normal">
              {description}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default JokeContainer;
