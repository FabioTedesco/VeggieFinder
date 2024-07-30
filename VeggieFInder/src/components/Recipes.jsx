import React from "react";
import RecipesCard from "./RecipesCard";

const Recipes = ({ recipes }) => {
  return (
    <div className="grid grid-cols-4 bg-slate-600 p-3">
      <RecipesCard recipe={recipes} />
    </div>
  );
};

export default Recipes;
