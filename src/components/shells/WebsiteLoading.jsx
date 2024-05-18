import React from "react";
import MenuTitle from "../reusable/mainmenu/MenuTitle";

const WebsiteLoading = () => {
  return (
    <>
      <MenuTitle />

      <a
        className="absolute bottom-8 left-[20%] font-bold cursor-pointer hover:underline hover:opacity-75 active:opacity-35"
        href="https://codepen.io/ankit567/pen/byKKeL"
        target="_blank"
      >
        Animation made by Ankit Jaiswal:{" "}
        <span className="text-accent">
          https://codepen.io/ankit567/pen/byKKeL
        </span>
      </a>
    </>
  );
};

export default WebsiteLoading;
