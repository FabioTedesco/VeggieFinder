import React from "react";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <div
      className="flex justify-center items-center bg-lime-300 h-40 bg-auto"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVybyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDI%3D')`,
      }}
    >
      <Searchbar />
    </div>
  );
};

export default Hero;
