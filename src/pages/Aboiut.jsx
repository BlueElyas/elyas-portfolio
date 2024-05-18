import React from "react";
import { albums } from "../albums";
import PageTitle from "../components/reusable/PageTitle";
import AlbumCard from "../components/reusable/AlbumCard";

const AlbumPage = () => {
  return (
    <main className="flex flex-col ">
      <PageTitle title="My interests and links" />

      <div className="flex flex-wrap items-center justify-center gap-24">
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