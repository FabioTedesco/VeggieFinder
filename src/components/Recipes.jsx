import React, { useState, useEffect, useContext } from "react";
import RecipesCard from "./RecipesCard";
import { GlobalContext } from "../store/GlobalContext";
import axios from "axios";

const Recipes = () => {
  const { submittedQuery, handleError } = useContext(GlobalContext);
  const [recipes, setRecipes] = useState([]);

  const SPOONACULAR_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
  useEffect(() => {
    if (submittedQuery !== "") {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${submittedQuery}&diet=vegetarian` +
            `&apiKey=${SPOONACULAR_KEY}`
        )
        .then((response) => {
          const data = response.data.results;
          setRecipes(data);
          console.log(submittedQuery);
        })
        .catch((error) => {
          console.error(error.response.data.message);
          handleError(error);
        });
    }
  }, [submittedQuery]);

  return (
    <div>
      {recipes.length === 0 ? (
        <div></div>
      ) : (
        <div className="grid grid-cols-4 bg-lime-900">
          {recipes.map((recipe) => (
            <RecipesCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
