import React from "react";
import JokeContainer from "../components/apis/JokeContainer";
import Jokes from "../components/apis/Jokes";
import PageTitle from "../components/reusable/PageTitle";

const Apis = () => {
  return (
    <>
      <PageTitle title="Fun with Apis!" />
      <>
        <JokeContainer
          name="Official Jokes API"
          link="https://github.com/15Dkatz/official_joke_api?tab=readme-ov-file"
          description="An API thats easy to use to generate jokes. Documentation found in
              their github."
        >
          <Jokes />
        </JokeContainer>
      </>
    </>
  );
};

export default Apis;
