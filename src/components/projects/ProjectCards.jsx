import React from "react";
import { useParams } from "react-router-dom";
import { fetchPortfolioDetails } from "../../utility/fetchPortfolioDetails";
import ProjectCardSlideShow from "./ProjectCardSlideShow";
import ProjectCardInfo from "./ProjectCardInfo";
import PageTitle from "../reusable/PageTitle";

const ProjectCards = () => {
  const { slug } = useParams();
  const item = fetchPortfolioDetails(slug);

  return (
    <div className="flex flex-col items-center w-[80%] mx-auto py-16">
      <div className="self-stretch">
        <PageTitle title={item.name} />
      </div>
      <ProjectCardInfo data={item} />
      <ProjectCardSlideShow images={item.images} />
    </div>
  );
};

export default ProjectCards;
