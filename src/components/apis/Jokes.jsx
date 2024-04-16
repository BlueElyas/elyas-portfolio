import React, { useEffect, useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const Jokes = () => {
  const [jokes, setJokes] = useState({
    type: "",
    setup: "",
    punchline: "",
  });
  const [showPunchline, setShowPunchline] = useState(false);

  const [newJoke, setNewJoke] = useState(false);

  const getJokes = async () => {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    setJokes(data);
  };

  useEffect(() => {
    getJokes();
  }, [newJoke]);

  console.log(jokes);

  return (
    <div className="text-center  text-shadow w-[40%] mx-auto rounded-lg bg-cyan-700 bg-opacity-55 text-softGray flex-col gap-5 flex p-4 my-5">
      <div>
        <p className="text-3xl font-merriweatherReg">{jokes.setup}</p>
      </div>
      <div>
        <div className="flex justify-center scale-[200%] cursor-pointer hover:opacity-85 hover:text-red-800 active:opacity-30 text-2xl text-accent">
          <button
            onClick={() => {
              setShowPunchline(!showPunchline);
            }}
          >
            {showPunchline ? <GoArrowUp /> : <GoArrowDown />}
          </button>
        </div>
      </div>
      <div>
        {showPunchline && (
          <p className="font-merriWeatherBold text-primaryText text-2xl text-shadow">
            {jokes.punchline}
          </p>
        )}
      </div>
      <hr />
      <p className="font-merriweatherReg">Click here for a new joke?</p>
      <button
        className="bg-accent p-3 rounded-lg w-32 mx-auto hover:scale-110 active:opacity-50 font-merriweatherReg"
        onClick={() => setNewJoke(!newJoke)}
      >
        New Joke!
      </button>
    </div>
  );
};

export default Jokes;
