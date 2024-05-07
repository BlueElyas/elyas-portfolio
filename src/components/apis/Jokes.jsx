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
    <div className="text-center mx-[32px]text-darkGray flex-col gap-5 flex p-6 mb-5 border-solid border-darkGray border-2 rounded-2xl border-opacity-30 w-full lg:w-[500px] ">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-lg font-merriweatherReg lg:text-xl">
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
                <button className="flex justify-center flex-col items-center gap-1 border-accent border-solid px-2 my-4 border-2 text-[10px] rounded-lg tracking-widest font-bold ">
                  Hide Punchline
                </button>
              ) : (
                <button className="flex justify-center flex-col items-center gap-1 border-accent border-solid px-2 my-4 text-[10px] border-2  rounded-lg tracking-widest font-bold ">
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
      <div className="flex flex-col gap-5 mt-4">
        <p className="font-merriweatherReg text-lg">
          Click here for a new joke?
        </p>
        <button
          className="bg-accent p-3 rounded-lg w-32 mx-auto hover:scale-110 active:opacity-50 font-merriweatherReg text-softGray text-lg"
          onClick={() => {
            setNewJoke(!newJoke);
            setShowPunchline(!showPunchline);
          }}
        >
          New Joke!
        </button>
      </div>
    </div>
  );
};

export default Jokes;
