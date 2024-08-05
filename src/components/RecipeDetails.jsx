import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { GlobalContext } from "../store/GlobalContext";

const RecipeDetails = () => {
  const { ID } = useParams();
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const [selectedRecipe, setSelectedRecipe] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${ID}/information?apiKey=${apiKey}`
      )
      .then((response) => {
        const data = response.data;
        setSelectedRecipe(data);
      })
      .catch((error) => {
        console.error("Error fetching recipe details", error);
      });
  }, [ID]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className=" w-[30%] mx-auto mt-10 border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-center flex-1">
              {selectedRecipe.title}
            </h2>
            <button>
              <FontAwesomeIcon
                icon={faHeart}
                size="lg"
                className="text-red-500 cursor-pointer"
              />
            </button>
          </div>
          <img
            src={selectedRecipe.image}
            alt="Sample"
            className="w-full h-96 object-cover"
          />
        </div>
        <p className=" max-w-md mx-auto text-gray-700 text-sm ">
          {selectedRecipe.instructions}
        </p>
      </div>

      <Footer />
    </>
  );
};

export default RecipeDetails;
