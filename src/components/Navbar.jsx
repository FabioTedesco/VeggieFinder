import React from "react";

const Navbar = () => {
  return (
    <nav className="w-max-screen flex justify-between p-3 bg-lime-500 items-center  top-0 left-0 right-0">
      <div className="underline">Navbar left</div>
      <div>
        <ul className="flex mx-5 underline">
          <li className="p-3">Home</li>
          <li className="p-3">About</li>
          <li className="p-3">Contacts</li>
          <li className="p-3">Favorites</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
