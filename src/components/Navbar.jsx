import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-max-screen flex justify-between p-3 items-center top-0 left-0 right-0 bg-gradient-to-b from-green-600 to-green-400">
      <div className="underline">
        <Link to={"/"}>
          <img
            src="/Assets/icons8-vegetables-16.png"
            alt="Logo"
            className="scale-150 ml-4"
          />
        </Link>
      </div>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
