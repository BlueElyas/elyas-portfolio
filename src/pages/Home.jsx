import React from "react";
import PageTitle from "../components/reusable/PageTitle.jsx";
import VisitPage from "../components/reusable/VisitPage.jsx";

const Home = () => {
  return (
    <>
      <PageTitle title="Welcome to my portfolio" />
      <main className="flex flex-col gap-8 items-center lg:grid lg:grid-cols-2 lg:w-[70%] lg:mx-auto lg:items-stretch lg:grid-flow-row">
        <VisitPage
          title="Visit my Projects"
          description="Projects and Client work"
          name="projects"
        />
        <VisitPage
          title="Check out my experiments"
          name="experiments"
          description="API usage and some of my favorite albums!"
        />
      </main>
    </>
  );
};

export default Home;
