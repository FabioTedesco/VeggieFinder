import React, { useState, useEffect, useContext } from "react";
import RecipesCard from "./RecipesCard";
import { GlobalContext } from "../store/GlobalContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { submittedQuery, handleError, recipes, setRecipes } =
    useContext(GlobalContext);

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
        <div className=" bg-gray-100 h-screen"></div>
      ) : (
        <div className="grid grid-cols-4 bg-gradient-to-b from-green-400 to-green-600  pb-32">
          {recipes.map((recipe) => (
            <Link to={`/RecipeDetails/${recipe.id}`} key={recipe.id}>
              <RecipesCard recipe={recipe} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
