import React from "react";
import PageTitle from "../components/reusable/PageTitle.jsx";
import VisitPage from "../components/reusable/VisitPage.jsx";

const Home = () => {
  return (
    <>
      <PageTitle title="Welcome to my portfolio" />
      <main className="md:flex md:flex-col md:items-center md:gap-16">
        <VisitPage
          title="Visit my Projects"
          description="Projects and Client work"
          name="projects"
          startOrEnd="start"
        />
        <VisitPage
          title="Check out my use of APIs!"
          name="apis"
          startOrEnd="end"
          description="Info and links of each API used are included."
        />
      </main>
    </>
  );
};

export default Home;
