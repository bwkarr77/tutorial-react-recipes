import React, { useEffect, useState } from "react";
import "./App.css";
//
import Recipe from "./Recipe";

function App() {
  const APP_ID = "8c715e28";
  const APP_KEY = "8a2ab33d36139cbb59afa2cfdb0af818";
  // const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    console.log("useEffect");
    getRecipes();
  }, [query]);
  // useEffect(() => {
  //   console.log("useEffect");
  // }, [counter]);  ---> console.log runs when counter changes

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json(); //format's the data in a nice way.
    console.log(data.hits);
    setRecipes(data.hits);
    console.log(recipes);
  };

  const updateSearch = e => {
    setSearch(e.target.value); //points to field.value
    // console.log(search);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          submit
        </button>
        {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe props={recipe.recipe} key={recipe.recipe.label} />
        ))}
      </div>
    </div>
  );
}

export default App;
