import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const APP_ID = "8c715e28";
  const APP_KEY = "8a2ab33d36139cbb59afa2cfdb0af818";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  // const counterFunc = () => {
  //   setCounter(counter++);
  // };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          submit
        </button>
        <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
      </form>
    </div>
  );
}

export default App;
