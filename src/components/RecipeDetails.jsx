import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      <div className="flex justify-center items-center ">
        <div className=" w-[30%] mx-auto mt-10 border border-gray-400 rounded-2xl shadow-md overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-center flex-1 underline">
              {selectedRecipe.title}
            </h2>
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
