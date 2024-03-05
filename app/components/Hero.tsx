import React from "react";

const Hero: React.FC = (): JSX.Element => (
  <div className="hero min-h-screen">
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 w-full text-5xl font-bold text-neutral-content">
          AstroView
        </h1>
        <p className="text-lg font-light text-neutral-content text-center mb-5">
          <span className="font-bold">AstroView</span> is a simple web
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
