import React from "react";

const ApiContainer = ({ children, name, link, description }) => {
  console.log(name);
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        {children}
        <ul className="font-merriweatherReg text-xl leading-8 mb-64">
          <li>
            Name: <span className="font-sans text-lg ml-4">{name}</span>
          </li>
          <li>
            Link:
            <span className="font-sans text-lg ml-4">
              <a
                className="cursor-pointer hover:text-accent hover:underline visited:text-accent active:opacity-60"
                href={`${link}`}
              >
                {link}
              </a>
            </span>
          </li>
          <li>
            Desc:
            <span className="font-sans text-lg ml-4">{description}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ApiContainer;
