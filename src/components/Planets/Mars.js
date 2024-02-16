import React from "react";
import mars from "../pics/mars.mp4";
import "./planets.css";
import Header from "../Header";

function Mars() {
  return (
    <>
      <Header />
      <video
        src={mars}
        className="mercury-p"
        alt="background-image"
        autoPlay
        loop
        muted
      />
      <p className="first-line">A travellers's guide to the planet</p>
      <h1 className="heading-m">Mars</h1>
      <p className="para-m">
        Mars, the fourth planet from the Sun, is a captivating celestial
        neighbor. Known as the "Red Planet" due to its rusty surface, it boasts
        the tallest volcano in the solar system, Olympus Mons, and the longest
        canyon, Valles Marineris. Mars' day is almost identical to Earth's,
        lasting around 24.6 hours.
      </p>
      <button className="button-m">More Details</button>
      <p className="facts-m1">
        The diameter of Mars is
        <p className="number">
          <b>6,779 Kms</b>
        </p>
      </p>
      <p className="facts-m2">
        Rotation period{" "}
        <p className="number">
          <b>24.6 hours</b>
        </p>
      </p>
      <p className="facts-m3">
        Mean surface temperature of{" "}
        <p className="number">
          <b>211.15 K</b>
        </p>
      </p>
      <p className="facts-m4">
        Eccentricity of orbit
        <p className="number">
          <b>0.0934</b>
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
          <li>-2.0 to -3.0</li>
          <li>227.9 million Kms</li>
          <li> 3,389.5 Kms</li>
          <li>9.81 m/s²(0.38 times that of Earth)</li>
          <li>4.6 billion years</li>
          <li> 687 Earth days(approx.)</li>
        </ul>
      </div>
    </>
  );
}

export default Mars;
