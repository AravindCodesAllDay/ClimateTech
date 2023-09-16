import { useState } from "react";
import { Link } from "react-router-dom";
import Displayfaq from "../components/Displayfaq";
import Topnavbar from "../components/Topnavbar";

const PlaceSelection = () => {
  const [showdetails, setshowdetails] = useState(false);

  const handlemouseclick = () => {
    setshowdetails(!showdetails);
  };

  return (
    <>
      {<Topnavbar />}

      <div className="container flex   pl-20 py-10 mx-auto flex-row items-center">
        <div className="w-full lg:w-1/2 ">
          <div className="lg:max-w-lg">
            <h2 className="text-4xl font-body font-semibold text-center tracking-wide bg-clip-text text-transparent bg-green-800 dark:bg-white">
              Pick your living space
            </h2>
          </div>
          <div
            onClick={() => handlemouseclick()}
            className="flex justify-center pl-10 w-full mt-8 bg-transparent margin-left-5 rounded-md lg:max-w-sm "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{ cursor: "pointer" }}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
            <p style={{ cursor: "pointer" }} className="ml-2"></p>
            <br />
          </div>
          {showdetails && <Displayfaq />}
        </div>

        <div className="container flex flex-row ml-32">
          <div className="w-6/12   mr-54 mb-10">
            <p className="ml-14 mb-16 text-4xl font-match ">
              <b>Apartment</b>
            </p>
            <Link to="/home">
              <div>
                <img
                  src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/apart.png"
                  alt="apartment"
                  class="ml-9 shadow rounded-full max-w-full h-96 align-middle border-zinc-950 transition ease-in-out drop-shadow-2xl delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
                />
              </div>
            </Link>
          </div>
          <div className="mt-20">
            <Link to="/home">
              <div className="mb-12 mt-20">
                <img
                  src="https://raw.githubusercontent.com/AravindCodesAllDay/images/main/uploads/individualHouse.png"
                  alt="village house"
                  class="shadow rounded-full max-w-max h-64 align-middle border-zinc-950 transition ease-in-out drop-shadow-2xl delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
                />
              </div>
            </Link>
            <p className="ml-32  text-4xl font-match">
              <b>Home</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PlaceSelection;
