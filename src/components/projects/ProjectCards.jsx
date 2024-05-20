import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPortfolioDetails } from "../../utility/fetchPortfolioDetails";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const ProjectCards = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = fetchPortfolioDetails(slug);

  console.log(item);

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <div className=" ">
        <Slide>
          {item.images.map((image, index) => {
            console.log(image);
            return (
              <div
                className="flex h-[800px] w-[650px] justify-center bg-cover items-center"
                style={{ backgroundImage: image }}
                key={index}
              ></div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
};

export default ProjectCards;
