import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-max-screen flex justify-between p-3 bg-lime-500 items-center  top-0 left-0 right-0">
      <div className="underline">Navbar left</div>
      <div>
        <ul className="flex mx-5 underline">
          <li className="p-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-3">
            <Link to={"/About"}>About</Link>
          </li>
          <li className="p-3">
            <Link to={"/Contacts"}>Contacts</Link>
          </li>
          <li className="p-3">
            <Link to={"/Favorites"}>Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
