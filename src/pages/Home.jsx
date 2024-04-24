import React from "react";
import Hero from "../components/home/Hero.jsx";
import VisitApi from "../components/home/VisitApi.jsx";
import VisitPortfolio from "../components/portfolio/VisitPortfolio.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <VisitPortfolio />
      <VisitApi />
    </>
  );
};

export default Home;
