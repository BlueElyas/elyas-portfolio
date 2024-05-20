import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPortfolioDetails } from "../../utility/fetchPortfolioDetails";
import ProjectCardSlideShow from "./ProjectCardSlideShow";
import ProjectCardInfo from "./ProjectCardInfo";

const ProjectCards = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(fetchPortfolioDetails(slug));

  return (
    <div className="flex flex-col items-center w-[80%] mx-auto py-16">
      <button
        className="underline font-merriweatherBold self-start"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <ProjectCardInfo data={item} />
      <ProjectCardSlideShow images={item.images} />
    </div>
  );
};

export default ProjectCards;
