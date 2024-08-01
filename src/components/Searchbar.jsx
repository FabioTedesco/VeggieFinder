import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from "../store/GlobalContext";
import Modal from "./Modal";

const Searchbar = () => {
  const { query, setQuery } = useContext(GlobalContext);
  const { submittedQuery, setSubmittedQuery } = useContext(GlobalContext);

  const handleOnChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(query);
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold mb-4 ">
          Find a good vegeterian recipe!
        </h1>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search an ingredient"
            className="w-full md:w-1/2 p-2 rounded-lg text-black"
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600"
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
