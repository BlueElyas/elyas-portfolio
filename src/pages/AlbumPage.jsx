import React from "react";
import Albums from "../components/reusable/Albums";
import { albums } from "../albums";
import PageTitle from "../components/reusable/PageTitle";

const AlbumPage = () => {
  return (
    <main className="flex flex-col items-center">
      <PageTitle title="Random albums that I have listened to" />
      {albums.map((data) => {
        return (
          <Albums
            title={data.title}
            artist={data.artist}
            img={data.img}
            rating={data.rating}
            dateListened={data.dateListened}
            link={data.link}
            key={data.title}
          />
        );
      })}
    </main>
  );
};

export default AlbumPage;
