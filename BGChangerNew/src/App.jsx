import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2 text-2xl">
          <div className="flex flex-wrap justify-center px-3 py-2 bg-white shadow-lg rounded-2xl gap-3">
            <button
            onClick={() => setColor("olive")}
              className="outline-none py-1 px-4 rounded-full shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              olive
            </button>
            <button
            onClick={() => setColor("white")}
              className="outline-none py-1 px-4 rounded-full shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              white
            </button>
            <button
            onClick={() => setColor("green")}
              className="outline-none py-1 px-4 rounded-full shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
            onClick={() => setColor("skyblue")}
              className="outline-none py-1 px-4 rounded-full shadow-lg"
              style={{ backgroundColor: "skyblue" }}
            >
              blue
            </button>
            <button
            onClick={() => setColor("red")}
              className="outline-none py-1 px-4 rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
            onClick={() => setColor("lavender")}
              className="outline-none py-1 px-4 rounded-full shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              lavendar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
