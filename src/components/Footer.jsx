import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-green-200 fixed bottom-0 w-full text-black p-2 ">
      <div className="max-w-2xl mx-auto text-black py-3">
        <div className=" flex flex-col md:flex-row md:justify-between items-center text-sm text-black">
          <p className="order-2 md:order-1 md:mt-0">
            &copy; All rights reserved
          </p>
          <div className="order-1 md:order-2">
            <Link to={"/About"}>
              <span className="px-2">About us</span>
            </Link>

            <Link to={"/Contacts"}>
              <span className="px-2 border-l">Contact us</span>
            </Link>

            <span className="px-2 border-l">
              <a href="https://github.com/FabioTedesco" target="_blank">
                <FontAwesomeIcon
                  icon="fa-brands fa-github"
                  className="h-5 mx-2"
                />
              </a>

              <a
                href="https://www.instagram.com/fabioo_pueblo/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-instagram"
                  className="h-5 mx-2"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/fabio-tedesco-3bb865251/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-linkedin"
                  className="h-5 mx-2"
                  href=""
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
