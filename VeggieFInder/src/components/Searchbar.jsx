import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Searchbar = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold mb-4 ">Cerca Ricette Vegetariane</h1>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Cerca una ricetta..."
            className="w-full md:w-1/2 p-2 rounded-lg text-black"
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600"
          >
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
