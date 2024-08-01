import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

const Footer = () => {
  return (
    <div className=" bg-gray-900 fixed bottom-0 w-full text-white p-4">
      <div className="max-w-2xl mx-auto text-white py-3">
        <div className=" flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            {" "}
            &copy; All rights reserved{" "}
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                className="h-5 mx-2"
              />
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                className="h-5 mx-2"
              />
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                className="h-5 mx-2"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
