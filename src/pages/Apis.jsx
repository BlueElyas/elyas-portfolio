import React from "react";
import Jokes from "../components/apis/Jokes";
import PageTitle from "../components/reusable/PageTitle";
import APIContainer from "../components/reusable/APIContainer";

const Apis = () => {
  return (
    <main className=" w-[80%] mx-auto">
      <PageTitle title="Using different APIs" />
      <APIContainer
        name="Official Jokes API"
        link="https://github.com/15Dkatz/official_joke_api?tab=readme-ov-file"
        description="An API thats easy to use to generate jokes. Documentation found in
              their github."
      >
        <Jokes />
      </APIContainer>
    </main>
  );
};

export default Apis;
