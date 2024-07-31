import React from "react";
import { useParams } from "react-router-dom";

const RecipesCard = ({ recipe }) => {
  return (
    <div className="flex flex-col items-center max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 scale-90">
      <img
        className="w-4/5 h-48 object-cover rounded mt-2"
        src={recipe.img}
        alt="ricetta"
      />
      <div className="text-center">
        <h1 className="font-bold text-xl my-2">{recipe.title}</h1>
        <p className="text-gray-700 text-base mb-2">{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipesCard;
