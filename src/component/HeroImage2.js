import React from "react";
import "./HeroImage2Styles.css";

const HeroImage2 = ({ heading, text }) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeroImage2;
