import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contact-us-container p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-6">
            We'd love to hear from you! Whether you have a question about
            recipes, suggestions, or just want to say hello, feel free to reach
            out to us.
          </p>
          <div className="mb-8">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-green-600 text-2xl mr-2"
            />
            <a
              href="mailto:info@dummyemail.com"
              className="text-blue-500 text-lg hover:underline"
            >
              info@dummyemail.com
            </a>
          </div>
          <div className="mb-8">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-green-600 text-2xl mr-2"
            />
            <span className="text-lg">+1 (123) 957-3358</span>
          </div>
          <div className="mb-8">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-green-600 text-2xl mr-2"
            />
            <span className="text-lg">123 Veggie St, Plant City, USA</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="" className="text-blue-600 text-2xl hover:text-blue-700">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="" className="text-blue-400 text-2xl hover:text-blue-500">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="" className="text-pink-600 text-2xl hover:text-pink-700">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
