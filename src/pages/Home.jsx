import React from "react";
import PageTitle from "../components/reusable/PageTitle.jsx";
import VisitPage from "../components/reusable/VisitPage.jsx";

const Home = () => {
  return (
    <>
      <PageTitle title="Welcome to my portfolio" />
      <main className="flex flex-col md:flex-row md:gap-16 items-center lg:w-[80%] lg:mx-auto">
        <VisitPage
          title="Visit my Projects"
          description="Projects and Client work"
          name="projects"
          startOrEnd="right"
        />
        <VisitPage
          title="Check out my use of APIs!"
          name="apis"
          startOrEnd="left"
          description="Info and links of each API used are included."
        />
      </main>
    </>
  );
};

export default Home;
