import React, { useEffect, useState } from "react";

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

  return (
    <div className="text-center text-shadow  mx-4 md:w-[600wpx] lg:w-[70%] md:text-2xl lg:text-3xl text-darkGray flex-col gap-5 flex p-6 my-5 border-solid border-darkGray border-2 rounded-2xl border-opacity-30 ">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-lg lg:text-xl font-merriweatherReg">
            {jokes.setup}
          </p>
        </div>
        <div>
          <div className="flex justify-center scale-[150%] cursor-pointer hover:opacity-85 hover:text-red-800 active:opacity-30 text-lg text-accent ">
            <div
              onClick={() => {
                setShowPunchline(!showPunchline);
              }}
            >
              {showPunchline ? (
                <button className="flex justify-center flex-col items-center gap-1 border-accent border-solid px-2 my-4 border-2 text-[10px] rounded-lg">
                  Hide Punchline
                </button>
              ) : (
                <button className="flex justify-center flex-col items-center gap-1 border-accent border-solid px-2 my-4 text-[10px] border-2  rounded-lg">
                  Show Punchline
                </button>
              )}
            </div>
          </div>
        </div>
        <div>
          {showPunchline && (
            <p className="font-merriWeatherBold text-primaryText text-lg text-shadow">
              {jokes.punchline}
            </p>
          )}
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-5 mt-4">
        <p className="font-merriweatherReg text-lg">
          Click here for a new joke?
        </p>
        <button
          className="bg-accent p-3 rounded-lg w-32 mx-auto hover:scale-110 active:opacity-50 font-merriweatherReg text-softGray text-lg"
          onClick={() => setNewJoke(!newJoke)}
        >
          New Joke!
        </button>
      </div>
    </div>
  );
};

export default Jokes;
