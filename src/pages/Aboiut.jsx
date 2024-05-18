import React from "react";
import { albums } from "../albums";
import PageTitle from "../components/reusable/PageTitle";
import AlbumCard from "../components/reusable/AlbumCard";

const AlbumPage = () => {
  return (
    <main className=" w-[80%] mx-auto">
      <PageTitle title="My interests and links" />

      <div className="flex flex-wrap items-center justify-center gap-16">
        {albums.map((data) => {
          return (
            <AlbumCard
              title={data.title}
              artist={data.artist}
              img={data.img}
              dateReleased={data.dateReleased}
              link={data.link}
              key={data.title}
            />
          );
        })}
      </div>
    </main>
  );
};

export default AlbumPage;
