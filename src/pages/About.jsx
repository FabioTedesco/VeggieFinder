import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            placeat nihil, quas praesentium officiis neque magni illo, sequi
            odio consequatur labore! Aliquid quo quisquam omnis nobis, labore
            voluptatem optio libero.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus
            ad iure natus tempore illum culpa temporibus beatae adipisci et.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod
            voluptatibus quo sint optio provident minima exercitationem esse
            aliquid illo? ingredients.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque
            quae ad maiores animi, labore dolore explicabo non magni ipsum.{" "}
            <a href="mailto:info@dummymail.com" className="text-blue-500">
              info@dummymail.com
            </a>
            .
          </p>
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <p className="text-lg mb-6">
            Stay connected with us on social media for the latest updates and
            new recipes:
          </p>
          <div className="flex justify-center space-x-4">
            <a href="" className="text-blue-600 hover:underline">
              Facebook
            </a>
            <a href="" className="text-blue-400 hover:underline">
              Twitter
            </a>
            <a href="" className="text-pink-600 hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
