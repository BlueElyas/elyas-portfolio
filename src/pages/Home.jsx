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
          startOrEnd="right"
        />
        <VisitPage
          title="Check out my use of APIs!"
          name="experiments/apis"
          startOrEnd="left"
          description="Info and links of each API used are included."
        />
        <VisitPage
          title="Check out some albums I listen to"
          name="experiments/albums"
          startOrEnd="right"
          description="Just some albums I listen to!"
        />
      </main>
    </>
  );
};

export default Home;
