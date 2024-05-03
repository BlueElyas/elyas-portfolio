import React from "react";

const AlbumCard = ({ img, title, artist, link, dateReleased }) => {
  return (
    <div className=" w-[90%] lg:w-[450px] rounded-lg m-1 overflow-hidden cursor-pointer shadow-xl transition-all ease-linear transition-200ms hover:scale-105 hover:shadow-2xl p-4 flex-">
      <a href={link}>
        <img src={img} alt={title} className="w-full object-cover" />
        <ul className=" font-merriweatherBold my-4 leading-7">
          <li>
            Artist: <span className="font-merriweatherReg">{artist}</span>
          </li>
          <li>
            Title: <span className="font-merriweatherReg">{title}</span>
          </li>
          <li>
            Released:{" "}
            <span className="font-merriweatherReg">{dateReleased}</span>
          </li>
        </ul>
      </a>
    </div>
  );
};

export default AlbumCard;
