import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCardSlideShow = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Slider
        {...settings}
        className="w-full max-w-lg max-h-96 flex items-center shadow-2xl relative overflow-hidden cursor-pointer"
      >
        {images.map((image, index) => {
          console.log(image);
          return (
            <div key={index} className="w-full object-cover">
              <img src={image} alt={image} />
            </div>
          );
        })}
      </Slider>
      <h1 className="mt-14 w-1/2 text-center">
        There are no arrows or dots because its hidden! Please use your mouse or
        finger to drag the images along.
      </h1>
    </div>
  );
};

export default ProjectCardSlideShow;
