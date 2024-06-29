"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { TypeAnimation } from "react-type-animation";
import { FlipWords } from "../ui/flip-words";

const Hero = () => {
  const words = ["learning", "innovation", "execution"];
  return (
    <>
      <div style={{ height: "100vh" }}>
        <img
          src="https://i.postimg.cc/vBjwPJct/Vector.png"
          alt=""
          className="background-image"
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexFlow: "row",
            justifyContent: "center",
            alignContent: "space-between",
            gap: 30,
            marginTop: "5rem",
            marginBottom: "5rem",
          }}
        >
          <div
            className="artboard artboard-horizontal phone-1"
            style={{ fontSize: "20px", marginLeft: "10rem"}}
          >
            <div style={{ marginTop: "10rem" }} className="montserrat-custom">

              <div className="h-[5rem] flex justify-center items-center px-4">
                <div className=" text-neutral-50 dark:text-neutral-400" style={{marginLeft:'-15rem', fontSize:'3em'}}>
                  Make
                  <FlipWords words={words} /> <br />
                  better with Prepify
                </div>
              </div>
            </div>
           
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl mt-6" style={{marginLeft:'-5rem' , marginTop:'5rem'}}>
              <a href="/services">Explore</a>
            </button>
          </div>
          <div
            className="artboard artboard-horizontal phone-1"
            style={{ position: "relative", display: "inline-block" }}
          >
            <img
              src="https://i.postimg.cc/vBDcxwJr/Property-1-Frame-3.png"
              alt=""
              style={{ display: "block" }}
            />
            <img
              src="https://i.postimg.cc/Wzbhh8vD/image-1.png"
              alt=""
              className="overimage animate-pulse"
              style={{
                position: "absolute",
                top: "70%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
