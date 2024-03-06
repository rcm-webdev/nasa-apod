import React from "react";

const Hero: React.FC = (): JSX.Element => (
  <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse"></div>
    <div className="hero-content text-neutral-content ">
      <div className="max-w-md">
        <h1 className="mb-5 w-full text-6xl md:text-7xl leading-tight font-bold text-neutral-content">
          Astro
          <span className="relative inline-block px-3 py-0.5 font-bold text-white bg-primary rounded-md transform rotate-[3deg]">
            <div className="absolute inset-0 "></div>
            <span className="relative inline-block transform -rotate-[3deg] ">
              View
            </span>
          </span>
        </h1>
        <p className="text-lg font-light text-neutral-content text-center mb-5 ">
          <span className="font-bold ">AstroView</span> is a simple web
          application made for The Star Gazer&apos;s club. It allows club
          members to search NASA&apos;s Astronomy Picture of the Day (APOD) by
          date.
        </p>
        <button className="btn btn-primary">Start Exploring</button>
      </div>
    </div>
  </div>
);

export default Hero;
