import React from "react";
import PageTitle from "../reusable/PageTitle";
import VisitCard from "../reusable/experiments/VisitCard";

const ExperimentShell = () => {
  return (
    <>
      <PageTitle title="Experiments" />{" "}
      <main className="flex flex-col gap-8 items-center lg:grid lg:grid-cols-2 lg:w-[70%] lg:mx-auto lg:items-stretch lg:grid-flow-row">
        <VisitCard
          title="Using RESTful APIs"
          description="TThis page uses RESTful APIs, data manipulation, reusable components and data rendering."
          link="apis"
        />{" "}
        <VisitCard
          title="Albums that I enjoy or listen to"
          description="This page uses data, data manipulation, reusable components and data rendering."
          link="albums"
        />
      </main>
    </>
  );
};

export default ExperimentShell;
