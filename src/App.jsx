import React, { useRef, useState, useEffect, useContext, useMemo } from "react";
import Button from "./components/todos/button";
import Childcallback from "./components/Childcallback";
import "./App.css";

export let userContext = React.createContext(null);
function App() {
  let [count, setCount] = useState(0);
  let [test, setTest] = useState(0);

  let user = [
    { id: 1, name: "Fahriddin", age: 15 },
    { id: 2, name: "Shamsiddin", age: 13 },
    { id: 3, name: "Abdulloh", age: 15 },
  ];

  function work() {
    let counter = 0;
    console.log("Functsiya ishladi");
    for (let i = 0; i < 100000; i++) {
      counter += i;
    }
    return counter;
  }

  let cach = useMemo(work, test);

  return (
    <div className="flex flex-col items-center justify-center">
      <userContext.Provider value={user}>
        <Button />
      </userContext.Provider>
      <div className="flex flex-col items-center justify-center border-2 border-black p-[20px] rounded-xl">
        <h1 className="text-zinc-600 mt-4 mb-4">yegindisi = {cach}</h1>
        <button
          className="btn text-white w-28"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          click
        </button>
      </div>
    </div>
  );
}

export default App;
