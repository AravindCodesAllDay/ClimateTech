import React from "react";
import config from "./app.config";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import WelcomeMain from "./pages/WelcomeMain";
import ModeSelection from "./pages/ModeSelection";
import PlaceSelection from "./pages/PlaceSelection";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";

function App() {
  const [data, setData] = useState([]);
  const [verify, setVerify] = useState(false);
  const apiUrl1 = config[process.env.NODE_ENV].apiUrl1;
  const apiUrl2 = config[process.env.NODE_ENV].apiUrl2;
  const username = import.meta.env.VITE_NAME;
  const password = import.meta.env.VITE_PASS;
  console.log(username);
  console.log(password);

  const fetchTasks = async () => {
    const res = await fetch(`${apiUrl1}/house`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const auth = async () => {
      ///fn starts
      try {
        const response = await fetch(`${apiUrl2}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          const { token } = await response.json();
          localStorage.setItem("token", token);
          console.log("Login successful");
        } else {
          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error:", error);
      } //fn ends
    };
    auth();
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setData(tasksFromServer);
    };
    getTasks();
  }, []);

  return (
    <>
      <section className="min-h-screen  pt-1 dark:text-gray-100 dark:bg-slate-900 duration-100">
        <div className=" top-1  right-2 absolute duration-100 dark:bg-slate-800 rounded"></div>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomeMain />} />
            <Route path="modeselect" element={<ModeSelection />} />
            <Route path="placeselect" element={<PlaceSelection />} />
            <Route path="contact" element={<Contact />} />
            {data.map((details) => (
              <Route
                key={details.id}
                path={`/${details.name}`}
                element={<Layout pagedetails={details} />}
              />
            ))}
          </Routes>
        </Router>
      </section>
    </>
  );
}

export default App;
