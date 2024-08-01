import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import Recipes from "./components/Recipes.jsx";
import RecipesCard from "./components/RecipesCard.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contacts",
    element: <Contacts />,
  },
  {
    path: "/RecipesCard",
    element: <Recipes />,
  },
  {
    path: "/Favorites",
    element: <RecipeDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
