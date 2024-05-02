import React from "react";

const Albums = ({ title, artist, img, rating, dateListened, link }) => {
  const artistName = typeof artist === "string" ? artist : artist.join(", ");

  return (
    <div className=" box-border flex flex-col items-center my-5 border-2 border-solid border-darkGray rounded-3xl p-6 border-opacity-55 w-[80%] mx-4 lg:w-[750px]">
      <div className="flex flex-col md:flex-row items-center w-full justify-around">
        <div className=" text-start w-[50%]">
          <p className="font-merriweatherReg">Artist/s:</p>
          <h1 className="mt-1 mb-4 font-merriweatherBold text-2xl">
            {artistName}
          </h1>
          <br />
          <br />
          <p className="font-merriweatherReg">Album name:</p>{" "}
          <h2 className=" mt-1 mb-4 font-merriweatherBold text-xl">{title}</h2>
        </div>
        <img
          src={img}
          alt={`album cover of NAME-HERE's ALBUM-HERE `}
          className=" w-[300px] rounded-3xl"
        />
      </div>
      <br />
      <hr className=" w-full opacity-50 border-darkGray" />
      <div className="my-7 leading-10 font-merriweatherReg text-xl flex gap-8 justify-around">
        <p className="w-[50%]">
          My rating:
          <br />
          <span className="text-accent text-lg">{rating}/10</span>
        </p>
        <p>
          Date listened:
          <br />
          <span className="text-accent text-lg">{dateListened}</span>
        </p>
      </div>
      <button className="bg-accent py-4 px-8 text-xl text-softGray rounded-xl font-bold tracking-wider hover:opacity-70 active:opacity-90">
        <a
          href={link}
          referrerPolicy="no-referrer"
          rel="noreferrer"
          target="_blank"
        >
          Link to Spotify!
        </a>
      </button>
    </div>
  );
};

export default Albums;
