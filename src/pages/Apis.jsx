import React from "react";
import APIContainer from "../components/apis/APIContainer";
import Jokes from "../components/apis/Jokes";
import PageTitle from "../components/reusable/PageTitle";

const Apis = () => {
  return (
    <>
      ``
      <PageTitle title="Fun with Apis!" />
      <>
        <APIContainer
          name="Official Jokes API"
          link="https://github.com/15Dkatz/official_joke_api?tab=readme-ov-file"
          description="An API thats easy to use to generate jokes. Documentation found in
              their github."
        >
          <Jokes />
        </APIContainer>
      </>
    </>
  );
};

export default Apis;
