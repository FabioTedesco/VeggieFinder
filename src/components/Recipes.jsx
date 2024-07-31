import React from "react";
import RecipesCard from "./RecipesCard";
import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
  return (
    <div className="grid grid-cols-4 bg-slate-600 p-3">
      {recipes.map((recipe) => (
        <Link to={`/RecipesCard/${recipe.id}`} key={recipe.id}>
          <RecipesCard recipe={recipe} />
        </Link>
      ))}
    </div>
  );
};

export default Recipes;
