import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import real from './real.png'
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <section
      className="bg-white h-screen w-screen flex justify-center items-center"
      style={{ width: "100%" }}
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            YOUR SHIPPING BUDDY!!!
            
          </h1>
          <h3 className=" text-xl font-bold" style={{fontSize : "25px"}}><TypeAnimation
              sequence={["Where innovation meets home" , 1000," Where innovation meets home" , 1000]}
              wrapper="span"
              speed={50}
              
              repeat={Infinity}
            /></h3>
          <p className="max-w-2xl mb-7 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            <strong> </strong>
          </p>
          <Link
            to="/Customer"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-yellow-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
          >
           View Database
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          {/* <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100   "
          >
            Contact Us
          </Link> */}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {/* <img
            src={real}
            alt="mockup" style={{height : "450px" , width : "600px"}
          }
          /> */}
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Home;
