import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

const Contact = () => {
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
      <main className="flex items-center justify-center h-54  ml-1 flex-col space-y-48  ">
        <div className="text-center ">
          <Link to="/">
            <img
              src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/logo.png"
              className="flex items-center justify-center h-178 px-4 py-3.5 drop-shadow-2xl"
              alt="Zemlia Logo"
            />
          </Link>
          <div className="flex space-x-14 ml-20 font-body  ">
            <Link
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
              to="/"
            >
              Home
            </Link>

            <Link
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
              to="/modeselect"
            >
              Mode
            </Link>
            <Link
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
              to="/PlaceSelect"
            >
              Place
            </Link>
          </div>
        </div>
      </main>
      <div className="flex flex-col mt-24 ">
        <div className="flex flex-col">
          <h2 className=" text-center text-5xl mb-5">UI / UX TEAM</h2>
          <div className="flex flex-row space-x-7 ml-20">
            <div className="w-6/12 px-4">
              <img
                src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/Gotham.jpg"
                alt="Gowtham"
                className="shadow rounded-full w-80 h-96 align-middle border-none"
              />
            </div>
            <div className="w-6/12 px-4">
              <img
                src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/Aravindhan.jpg"
                alt="Aravindhan"
                className="shadow rounded-full w-80 h-96 align-middle border-none"
              />
            </div>
            <div className="w-6/12 px-4">
              <img
                src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/Ragul.jpg"
                alt="Ragul"
                className="shadow rounded-full w-80 h-96 align-middle border-none"
              />
            </div>
          </div>
          <h2 className=" text-center text-5xl mt-12 mb-2">DATABASE TEAM</h2>
          <div className="flex flex-row space-x-7 ml-20 mt-5">
            <div className="w-6/12  px-4">
              <img
                src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/sree.jpg"
                alt="Sree"
                className="shadow rounded-full w-80 h-96 align-middle border-none"
              />
            </div>
            <div className="w-6/12 px-4">
              <img
                src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/sarvash.jpg"
                alt="Sarvesh"
                className="shadow rounded-full w-80 h-96 align-middle border-none"
              />
            </div>
            <div className="w-6/12 px-4">
              <img
                src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/Praveen.jpg"
                alt="Praveen"
                className="shadow rounded-full w-80 h-96 align-middle border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
