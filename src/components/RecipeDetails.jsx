import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const RecipeDetails = () => {
  const { ID } = useParams();
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const [selectedRecipe, setSelectedRecipe] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.spoonacular.com/recipes/${ID}/information?apiKey=${apiKey}`
      )
      .then((response) => {
        const data = response.data;
        setSelectedRecipe(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipe details", error);
      });
  }, [ID]);

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="flex justify-center mt-40 scale-150">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-col mx-3 md:flex-row justify-center items-center h-screen md:space-y-0 md:space-x-10 ">
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-[30%] border border-gray-400 rounded-2xl shadow-md overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center flex-1 underline">
                {selectedRecipe.title}
              </h2>
            </div>
            <img
              src={selectedRecipe.image}
              alt="Sample"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
            />
          </div>
          <p
            className=" max-w-md mx-auto mt-2 mb-20 lg:mt-0 text-gray-700 text-sm sm:text-base lg:text-lg p-3 "
            dangerouslySetInnerHTML={{ __html: selectedRecipe.instructions }}
          ></p>
        </div>
      )}

      <Footer />
    </>
  );
};

export default RecipeDetails;
