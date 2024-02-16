import React from "react";
import jupiter from "../pics/jupiter.mp4";
import "./planets.css";
import Header from "../Header";

function Jupiter() {
  return (
    <>
      <Header />
      <video
        src={jupiter}
        className="mercury-p"
        alt="background-image"
        autoPlay
        loop
        muted
      />
      <p className="first-line">A travellers's guide to the planet</p>
      <h1 className="heading-m">Jupiter</h1>
      <p className="para-m">
        Jupiter, the largest planet in our solar system, is a gas giant composed
        mainly of hydrogen and helium. With a diameter of over 86,000 miles, it
        could fit more than 1,300 Earths inside. Its powerful magnetic field is
        20,000 times stronger than Earth's.
      </p>
      <button className="button-m">More Details</button>
      <p className="facts-m1">
        The diameter of Jupiter is
        <p className="number">
          <b>142,984 Kms</b>
        </p>
      </p>
      <p className="facts-m2">
        Rotation period{" "}
        <p className="number">
          <b>9.9 hours</b>
        </p>
      </p>
      <p className="facts-m3">
        Mean surface temperature of{" "}
        <p className="number">
          <b>165 K</b>
        </p>
      </p>
      <p className="facts-m4">
        Eccentricity of orbit
        <p className="number">
          <b>0.049</b>
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
          <li>-1.6 to -2.9</li>
          <li>778 million Kms</li>
          <li>71,492 Kms</li>
          <li>24.79 m/s²(0.38 times of Earth)</li>
          <li>4.6 billion years</li>
          <li>11.86 Earth years</li>
        </ul>
      </div>
    </>
  );
}

export default Jupiter;
