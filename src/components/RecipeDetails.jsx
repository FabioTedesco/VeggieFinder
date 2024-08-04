import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../store/GlobalContext";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

const RecipeDetails = () => {
  const { recipes } = useContext(GlobalContext);

  const { ID } = useParams();

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className=" w-[30%] mx-auto mt-10 border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-center flex-1">Titolo</h2>
            <button>
              <FontAwesomeIcon
                icon={faHeart}
                size="lg"
                className="text-red-500 cursor-pointer"
              />
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZXR0YXxlbnwwfHwwfHx8Mg%3D%3D"
            alt="Sample"
            className="w-full h-96 object-cover"
          />
        </div>
        <p className=" max-w-md mx-auto text-gray-700 text-lg ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          perspiciatis expedita nesciunt id reprehenderit asperiores esse,
          dolores vitae magni! Quis quas sapiente, delectus adipisci cum aliquid
          eius labore impedit numquam non qui magni vero tempora earum saepe
          quibusdam mollitia esse possimus magnam, doloremque inventore sed
          dicta ducimus. Ipsum, et dolorum?
        </p>
      </div>

      <Footer />
    </>
  );
};

export default RecipeDetails;
