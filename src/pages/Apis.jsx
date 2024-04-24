import React from "react";
import ApiContainer from "../components/apis/ApiContainer";
import Jokes from "../components/apis/Jokes";

const Apis = () => {
  return (
    <>
      <h2 className="my-6 text-3xl font-merriweatherBold underline">
        Some APIs I found
      </h2>
      <div>
        <ApiContainer
          name="Official Jokes API"
          link="https://github.com/15Dkatz/official_joke_api?tab=readme-ov-file"
          description="An API thats easy to use to generate jokes. Documentation found in
              their github."
        >
          <Jokes />
        </ApiContainer>
      </div>
    </>
  );
};

export default Apis;
