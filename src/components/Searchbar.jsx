import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from "../store/GlobalContext";
import Modal from "./Modal";

const Searchbar = () => {
  const { query, setQuery, setSubmittedQuery } = useContext(GlobalContext);

  const handleOnChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(query);
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center">
      <div className="relative text-center text-white px-4 sm:px-8">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ">
          Find a good vegeterian recipe!
        </h1>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search an ingredient"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-2 rounded-lg text-black"
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-all duration-200"
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
          <Modal />
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
