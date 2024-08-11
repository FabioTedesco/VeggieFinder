import React from "react";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <div
      className="flex justify-center items-center h-40 sm:h-56 md:h-64 lg:h-80 xl:h-96 bg-lime-300 bg-center bg-cover"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1473648717346-73c9c15cbad6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <Searchbar />
    </div>
  );
};

export default Hero;
