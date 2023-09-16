import { useState, useEffect } from "react";
import React from "react";

function Topnavbar() {
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
      <nav className=" border-b-4 border-green-600 shadow-md justify-center items-center">
        <div className="flex flex-row items-center navbar-nav">
          <div className=" mr-auto">
            <a href="/">
              <img
                src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/logo.png"
                alt="Zemlia Logo"
                className="w-22 h-10"
              />
            </a>
          </div>
          <div className="text-center navbar-nav ml-auto mr-auto">
            <main className="flex items-center justify-center  ml-1 flex-col space-y-28  ">
              <div className="flex space-x-7 ml-8 font-body  ">
                <a
                  className="font-body text-xl dark:text-white text-green-800 my-2 capitalize
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
                  href="/"
                >
                  Home
                </a>
                <a
                  className="font-body text-xl dark:text-white text-green-800 my-2 capitalize
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
                  className="font-body text-xl dark:text-white text-green-800 my-2 capitalize
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
                  className="font-body text-xl dark:text-white text-green-800 my-2 capitalize
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
            </main>
          </div>

          <div className=" dark:text-gray-100 dark:bg-slate-900 ml-auto">
            {options?.map((opt) => (
              <button
                key={opt.text}
                onClick={() => setTheme(opt.text)}
                className={`leading-9 text-2xl px-2 rounded-full m-1 ${
                  theme === opt.text && "text-sky-600"
                }`}
              >
                <ion-icon name={opt.icon} />
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Topnavbar;
