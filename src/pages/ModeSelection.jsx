import { Link } from "react-router-dom";
import Topnavbar from "../components/Topnavbar";

const ModeSelection = () => {
  return (
    <>
      {<Topnavbar />}

      <div className="font-body">
        <p className="flex items-center justify-center font-bold pt-5 pl-14 font-body text-5xl dark:text-white text-green-800">
          Select Mode
        </p>
        <div className="container border-transparent flex flex-col items-center mt-20 pl-20 py-10 mx-auto lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 ml-10">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-body tracking-wide text-center bg-text-black dark:text-white  lg:text-4xl text-green-800 ">
                I am New Here!
              </h1>
            </div>
            <div className="flex justify-center pl-20 w-full mt-8 bg-transparent ml-5 rounded-full lg:max-w-sm ">
              <Link to="/placeselect">
                <a
                  type="button"
                  className="font-semibold h-10 px-4 py-2 m-1 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 shadow-lg font-match shadow-cyan-500/50 text-white transition-colors transform bg-green-600 rounded-full hover:bg-green-400 focus:outline-none focus:bg-green-400"
                >
                  Explore Mode
                </a>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 ml-10">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl  font-body tracking-wide bg-text-black dark:text-white text-center lg:text-4xl text-green-800">
                Back for more!
              </h1>
            </div>
            <div className="flex justify-center pl-20 w-full mt-8 ml-5 bg-transparent rounded-md lg:max-w-sm">
              <Link to="/placeselect">
                <a
                  type="button"
                  className="44 font-semibold h-10 px-4 py-2 m-1 shadow-lg font-match ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 text-white transition-colors transform bg-green-600 rounded-full hover:bg-green-400 focus:outline-none focus:bg-green-400"
                >
                  Focus Mode
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModeSelection;
