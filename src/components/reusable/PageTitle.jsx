import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="pt-6 pb-10 w-screen text-center font-merriweatherBold px-8 my-8">
      <h1 className="text-3xl "> {title} </h1>
    </div>
  );
};

export default PageTitle;
