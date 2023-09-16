import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

const WelcomeMain = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme : dark)");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("N");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <>
      <div className=" items-end dark:text-gray-100 dark:bg-slate-900">
        {options?.map((opt) => (
          <button
            key={opt.text}
            onClick={() => setTheme(opt.text)}
            className={`items-end leading-9 text-2xl px-2 rounded-full m-1 ${
              theme === opt.text && "text-sky-600"
            }`}
          >
            <ion-icon name={opt.icon} />
          </button>
        ))}
      </div>
      <main className="flex items-center justify-center h-54  ml-1 flex-col space-y-56  ">
        <div className="text-center ">
          <Link to="/">
            <img
              src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/logo.png"
              className="flex items-center justify-center h-178 px-4 py-3.5 drop-shadow-2xl"
              alt="Zemlia Logo"
            />
          </Link>
          <div className="flex space-x-14 ml-16 font-body  ">
            <a
              className="font-body text-2xl dark:text-white text-green-800 my-2 capitalize
                        inline-block
                        relative
                        cursor-pointer
                        transition-all
                        duration-500
                        before:content-['']
                        before:absolute
                        before:-bottom-2
                        before:left-0
                        before:w-0
                        before:h-1.5
                        before:rounded-full
                        before:opacity-0
                        before:transition-all
                        before:duration-500
                        before:bg-gradient-to-r
                        before:from-green-600
                        before:via-green-400
                        before:to-green-500
                        hover:before:w-full
                        hover:before:opacity-100"
              href="/modeselect"
            >
              Mode
            </a>
            <a
              className="font-body text-2xl dark:text-white text-green-800 my-2 capitalize
                        inline-block
                        relative
                        cursor-pointer
                        transition-all
                        duration-500
                        before:content-['']
                        before:absolute
                        before:-bottom-2
                        before:left-0
                        before:w-0
                        before:h-1.5
                        before:rounded-full
                        before:opacity-0
                        before:transition-all
                        before:duration-500
                        before:bg-gradient-to-r
                        before:from-green-600
                        before:via-green-400
                        before:to-green-500
                        hover:before:w-full
                        hover:before:opacity-100"
              href="/PlaceSelect"
            >
              Place
            </a>
            <a
              className="font-body text-2xl dark:text-white text-green-800 my-2 capitalize
                        inline-block
                        relative
                        cursor-pointer
                        transition-all
                        duration-500
                        before:content-['']
                        before:absolute
                        before:-bottom-2
                        before:left-0
                        before:w-0
                        before:h-1.5
                        before:rounded-full
                        before:opacity-0
                        before:transition-all
                        before:duration-500
                        before:bg-gradient-to-r
                        before:from-green-600
                        before:via-green-400
                        before:to-green-500
                        hover:before:w-full
                        hover:before:opacity-100"
              href="/contact"
            >
              Our Team
            </a>
          </div>
        </div>
      </main>
      <div className="flex items-center  flex-col lg:items-center ">
        <p className="text-4xl mt-8 pl-42 font-content select-none leading-normal tracking-wider  font-extrabold text-center">
          Zemlia is a sustainability action catalyst,
          <br />
          simplifying the path to sustainable living and <br />
          🌍 fostering a better future 🌎
        </p>
        <div className="flex mr-36 lg:flex-col mt-5">
          <Link to="/modeselect">
            <button className=" h-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 px-4 py-3.5 text-xl m-1 font-body text-white transform bg-green-600 rounded-md hover:bg-green-400  focus:bg-green-400 absolute mr-auto">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WelcomeMain;
