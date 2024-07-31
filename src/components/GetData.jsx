import React from "react";
import axios from "axios";

const GetData = () => {
  axios
    .get("https://api.spoonacular.com/recipes/complexSearch")
    .then((response) => {
      console.log(response);
    });

  return <div></div>;
};

export default GetData;
