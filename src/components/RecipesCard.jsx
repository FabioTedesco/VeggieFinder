import React from "react";

const RecipesCard = ({ recipe }) => {
  return (
    <div className="flex flex-col items-center max-w-sm rounded-2xl overflow-hidden shadow-lg bg-slate-200 scale-90">
      <img
        className="w-4/5 h-48 object-cover rounded mt-2"
        src={recipe.image}
        alt="ricetta"
      />
      <div className="text-center">
        <h1 className="font-bold text-xl my-2">{recipe.title}</h1>
      </div>
    </div>
  );
};

export default RecipesCard;
