import React from "react";
import Albums from "../components/reusable/Albums";
import { albums } from "../albums";
import PageTitle from "../components/reusable/PageTitle";
import AlbumCard from "../components/reusable/AlbumCard";

const AlbumPage = () => {
  return (
    <main className="flex flex-col items-center">
      <PageTitle title="Random albums that I have listened to" />

      <div className="flex flex-wrap items-center justify-center gap-24">
        {albums.map((data) => {
          return (
            <AlbumCard
              title={data.title}
              artist={data.artist}
              img={data.img}
              dateReleased={data.dateReleased}
              link={data.link}
            />
          );
        })}
      </div>
    </main>
  );
};

export default AlbumPage;
