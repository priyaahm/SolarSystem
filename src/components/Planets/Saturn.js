import React from "react";
import saturn from "../pics/saturn.mp4";
import "./planets.css";
import Header from "../Header";
import mercuryz1 from "../pics/mercuryz1.jpg";
import nasa from "../pics/nasa.png";
import wikipedia from "../pics/wikipedia.png";
import isro1 from "../pics/isro1.webp";
import ns1 from "../pics/ns1.png";
import yt from "../pics/yt.jpg";
import stars from "../pics/stars.jpg";

function Saturn() {
  return (
    <>
      <Header />
      <video
        src={saturn}
        className="mercury-p"
        alt="background-image"
        autoPlay
        loop
        muted
      />
      <p className="first-line">A travellers's guide to the planet</p>
      <h1 className="heading-m">Saturn</h1>
      <p className="para-m">
        Saturn is a mesmerizing gas giant,has an iconic ring is composed of ice
        particles and debris, distinguishes it as a celestial marvel. Saturn's
        rapid rotation causes it to have a flattened shape, making it the least
        spherical planet. Despite its immense size, Saturn is less dense than
        water, allowing it to float in an enormous hypothetical bathtub.
      </p>
      <a href="#moredetails" className="button-m">
        More Details
      </a>
      <p className="facts-m1">
        The diameter of Saturn is
        <p className="number">
          <b>120,536 km</b>
        </p>
      </p>
      <p className="facts-m2">
        Rotation period{" "}
        <p className="number">
          <b>0.44 Earth days</b>
        </p>
      </p>
      <p className="facts-m3">
        Mean surface temperature of{" "}
        <p className="number">
          <b>145 K</b>
        </p>
      </p>
      <p className="facts-m4">
        Eccentricity of orbit
        <p className="number">
          <b>0.056</b>
        </p>
      </p>
      <div className="props-m">
        <ul className="lists-m1">
          <li>Magnitude</li>
          <li>Distance</li>
          <li>Radius</li>
          <li>Surface Gravity</li>
          <li>Age</li>
          <li>Orbital Period</li>
        </ul>
        <ul className="lists-m2">
          <li>+0.5</li>
          <li>1.4 billion Kms</li>
          <li> 58,232 Kms</li>
          <li>10.44 m/s²(1.07 times of Earth)</li>
          <li>4.6 billion years</li>
          <li> 29.5 Earth days(approx.)</li>
        </ul>
      </div>
    </>
  );
}

export default Saturn;
