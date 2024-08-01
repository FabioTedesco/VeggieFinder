import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ContextProvider from "./store/GlobalContext";
// import axios from "axios";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Hero />
      <Recipes />
      <Footer />
    </ContextProvider>
  );
}

export default App;
