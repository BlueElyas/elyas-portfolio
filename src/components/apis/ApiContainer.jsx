import React from "react";

const ApiContainer = ({ children, name, link, description, apiIdx }) => {
  console.log(name);
  return (
    <section>
      <div className="mx-2 flex flex-col items-center">
        <h2 className="font-merriweatherReg text-xl tracking-widest">
          API Number: {apiIdx}
        </h2>
        {children}
        <ul className="my-0 flex flex-col gap-3 border-solid border-2 border-darkGray  rounded-lg mx-4 mt-12 md:mt-0 border-opacity-20 p-4">
          <li className="font-bold">
            Name:{" "}
            <span className="font-sans text-lg ml-4 font-normal">{name}</span>
          </li>
          <li className="font-bold">
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

export default ApiContainer;
