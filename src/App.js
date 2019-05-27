import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "706d2333";
  const APP_KEY = "2f1ae0d100905484d30d6dab996f90b5";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} class="col s8 ">
        <div className="row offset-s2">
          <div className="input-field col s8 offset-s2">
            <input type="text" value={search} onChange={updateSearch} />
            <label>Enter Recipe Name</label>
            <button className="btn waves-effect waves-light" type="submit">
              Search
              <i className="material-icons right" />
            </button>
          </div>
        </div>
      </form>

      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;
