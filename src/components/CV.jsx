import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { useAnimation } from "../context/AnimationContext";
import { NavLink } from "react-router-dom";

const CV = () => {
  const { setShowTitle, setShowLoading } = useAnimation();

  const handleClick = () => {
    setShowTitle(false);
    setShowLoading(false);
  };

  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <NavLink
            to="/"
            className="underline hover:no-underline hover:opacity-70 active:hover:50"
            onClick={handleClick}
          >
            Go Back
          </NavLink>
          <div className="text-center">
            <div className="flex justify-center mb-16">
              <img
                src="cvassets/image/elyas.jpg"
                alt="headshot of elyas"
                className="rounded-2xl"
              />
            </div>
            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
              Elyas
            </h6>
            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
              Front-End Developer
            </h1>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <FontAwesomeIcon icon={faFeather} />
              </div>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Strong Communication
              </h4>
              <p className="font-normal text-gray-500 text-md">
                Through my career and education I have developed strong
                communication as a result of working in a variety of diverse
                teams.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <FontAwesomeIcon icon={faFeather} />
              </div>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                High Adaptability
              </h4>
              <p className="font-normal text-gray-500 text-md">
                I am able to adapt or shift depending on client preference,
                market shifts, colleague input or deadlines. This is due to my
                experience in fast-paced, deadline-oriented work environments.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <FontAwesomeIcon icon={faFeather} />
              </div>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Passionate about tech
              </h4>
              <p className="font-normal text-gray-500 text-md">
                Ever since I did my first HTML/CSS course on Scrimba in August
                2023, I fell in love with coding and creating applications.
                Since then I have worked with 2 clients, developed technical
                skills in multiple languages, and enjoyed work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-0">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                Portfolio
              </h1>
              <p className="font-normal text-gray-500 text-xs md:text-base">
                I have brought here my biggest and favorite works <br />
                as a developer.
              </p>
            </div>

            <div className="space-y-24">
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  01
                </h1>
                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    My Portfolio Website
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Utilises React.js, Javascript, react-router, and Tailwinds.
                    <br />
                    It is a scalable project with multiple reusable components,
                    <br />
                    various RESTful API data manipulation and a consistent
                    custom design scheme.
                    <br />
                    It is very experimental and uses complex routing systems
                    <br />
                    and router hooks.
                  </p>
                  <br />
                  <a
                    href="https://github.com/BlueElyas/elyas-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the Github here
                  </a>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  02
                </h1>
                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Saya Gems
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Lead a team to develop a Jewelry eCommerce website
                    <br />
                    for a client using Shopify, HTML, and CSS. I created
                    <br />
                    the design scheme via Figma and customized the theme code
                    <br />
                    according to client preference.
                  </p>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/elyas-f-57b022232/#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Please contact me to get a live demo
                  </a>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  03
                </h1>
                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Audiophile eCommerce website
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    A multi-page application with data used to display products.
                    <br />
                    Contains complex state management using the useContext hook.
                    <br />
                    There is a functional cart, checkout page, and validation
                    form.
                    <br />
                    Utilizes Typescript, React.js, and Tailwind.
                  </p>
                  <br />
                  <a
                    href="https://github.com/BlueElyas/audiophile-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the Github here
                  </a>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  04
                </h1>
                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    Country Search Page
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Uses RESTful API data to display all the countries in a
                    <br />
                    card component. Utilizes filtering, reusable components
                    <br />
                    and dark/light mode. Filtering can be done via select or
                    <br />
                    search bar.
                    <br />
                    Uses React.js, Javascript, and Tailwind.
                  </p>
                  <br />
                  <a
                    href="https://github.com/BlueElyas/country-search-restful-api"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the Github here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Experience
          </h1>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-400 text-base uppercase">
                Company
              </h6>
              <p className="font-semibold text-gray-600 text-base">
                TechNative Digital
                <span className="font-normal text-gray-300">/ Brighton</span>
              </p>
              <p className="font-semibold text-gray-600 text-base">
                Freelance
                <span className="font-normal text-gray-300">/ London</span>
              </p>
              <p className="font-semibold text-gray-600 text-base">
                Hanson Wade
                <span className="font-normal text-gray-300">/ London</span>
              </p>
            </div>
            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-400 text-base uppercase">
                Position
              </h6>
              <p className="font-normal text-gray-400 text-base">
                Full-Stack Developer
              </p>
              <p className="font-normal text-gray-400 text-base">
                Web Developer
              </p>
              <p className="font-normal text-gray-400 text-base">
                Delegate sales executive
              </p>
            </div>
            <div className="space-y-8 md:space-y-16">
              <h6 className="font-medium text-gray-400 text-base uppercase">
                Year
              </h6>
              <p className="font-normal text-gray-400 text-base">
                Mar 2024 - present
              </p>
              <p className="font-normal text-gray-400 text-base">
                Dec 2023 - present
              </p>
              <p className="font-normal text-gray-400 text-base">
                June 2023 - Sep 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Education
          </h1>
          <div className="flex flex-col lg:flex-row lg:w-full justify-center gap-10">
            <div className="bg-gray-50 px-8 py-10 rounded-md flex-1">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Sep 2018 – Sep 2021
              </h4>
              <p className="font-normal text-gray-500 text-md mb-4 leading-10">
                University of Brighton
                <br />
                BSc Biomedical Science
                <br />
                2.1
              </p>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md flex-1">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Sep 2021 – Sep 2022
              </h4>
              <p className="font-normal text-gray-500 text-md mb-4 leading-10">
                University College London
                <br />
                MSc Global Health and Development
                <br />
                Merit
              </p>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md flex-1">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Sep 2023 – Nov 2023
              </h4>
              <p className="font-normal text-gray-500 text-md mb-4 leading-10">
                Scrimba
                <br />
                Front-End Career Path
                <br />
                React.js, Javascript, HTML/CSS, Responsive Design, APIs
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <footer className="py-10 md:py-16 mb-20 md:mb-40">
        <div className="flex items-center justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/elyas-f-57b022232/"
            className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
          >
            <i
              data-feather="linkedin"
              className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
            ></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default CV;
