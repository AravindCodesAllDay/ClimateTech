import { useState, useEffect } from "react";
import config from "../app.config";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import api from "./api";

const Displaycontent = ({ close, infoType }) => {
  const [info, setInfo] = useState([]);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const apiUrl2 = config[process.env.NODE_ENV].apiUrl2;

  const fetchTasks = async () => {
    const res = await api.get(`${apiUrl2}/methods`);
    const info = await res.json();
    return info;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setInfo(tasksFromServer);
    };
    getTasks();
  }, []);

  function closeBlurb() {
    close(false);
  }

  const showOneDetail = (value) => {
    switch (value) {
      case 1:
        setOpen1(!open1);
        setOpen2(false);
        setOpen3(false);
        break;
      case 2:
        setOpen1(false);
        setOpen2(!open2);
        setOpen3(false);
        break;
      case 3:
        setOpen1(false);
        setOpen2(false);
        setOpen3(!open3);
        break;
    }
  };

  return (
    <>
      <div className="border-3 border-green-400 rounded-md mr-4 mt-36 h-full p-2">
        {info.map((detail) => {
          if (detail.component_type == infoType) {
            return (
              <div>
                <div className="text-2xl font-body flex flex-row font-extrabold text-center">
                  <div className="flex flex-row text-2xl">
                    <ion-icon
                      onClick={closeBlurb}
                      name="close-circle-outline"
                    ></ion-icon>
                  </div>
                  <div className="flex flex-row ml-12 pb-10">
                    <h3>{detail.component_type}</h3>
                  </div>
                </div>

                <div>
                  <Container>
                    <div className="details font-body">
                      <button
                        className="h-10 px-4 py-2 m-1 transition min-w-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 shadow-lg font-body shadow-cyan-500/50 text-white transform bg-green-600 rounded-full hover:bg-green-400 focus:outline-none focus:bg-green-400"
                        onClick={() => showOneDetail(1)}
                        aria-controls="example2"
                        aria-expanded={open1}
                      >
                        Reduce
                      </button>

                      <Collapse in={open1}>
                        <div id="example2">
                          <ul className="list-disc ml-10 text-green-600">
                            {detail.reduce.map((point) => {
                              return <li>{point}</li>;
                            })}
                          </ul>
                        </div>
                      </Collapse>

                      <button
                        className="h-10 px-4 py-2 m-1 transition min-w-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 shadow-lg font-body shadow-cyan-500/50 text-white transform bg-green-600 rounded-full hover:bg-green-400 focus:outline-none focus:bg-green-400"
                        onClick={() => showOneDetail(2)}
                        aria-controls="example3"
                        aria-expanded={open2}
                      >
                        Reuse
                      </button>
                      <Collapse in={open2}>
                        <div id="example3">
                          <ul className="list-disc ml-10 text-green-600">
                            {detail.reuse.map((point) => {
                              return <li>{point}</li>;
                            })}
                          </ul>
                        </div>
                      </Collapse>

                      <button
                        className="h-10 px-4 py-2 m-1 transition min-w-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 shadow-lg font-body shadow-cyan-500/50 text-white transform bg-green-600 rounded-full hover:bg-green-400 focus:outline-none focus:bg-green-400"
                        onClick={() => showOneDetail(3)}
                        aria-controls="example4"
                        aria-expanded={open3}
                      >
                        Recycle
                      </button>
                      <Collapse in={open3}>
                        <div id="example4">
                          <ul className="list-disc ml-10 text-green-600">
                            {detail.recycle.map((point) => {
                              return <li>{point}</li>;
                            })}
                          </ul>
                        </div>
                      </Collapse>
                    </div>
                  </Container>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Displaycontent;
