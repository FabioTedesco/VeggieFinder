import React from "react";

const Searchbar = () => {
  return (
    <div>
      <input type="text" placeholder="Search for your recipe" />
      <button className="border-solid border-2 border-indigo-600 bg-lime-800">
        Cerca
      </button>
    </div>
  );
};

export default Searchbar;
