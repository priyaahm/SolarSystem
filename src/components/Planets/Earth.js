import React from "react";
import earth from "../pics/earth.mp4";
import "./planets.css";
import Header from "../Header";

function Earth() {
  return (
    <>
      <Header />
      <video
        src={earth}
        className="mercury-p"
        alt="background-image"
        autoPlay
        loop
        muted
      />
      <p className="first-line">A travellers's guide to the planet</p>
      <h1 className="heading-m">Earth</h1>
      <p className="para-m">
        Earth, the third planet from the Sun, is 4.5 billion years old. It's the
        only known celestial body to support life. The atmosphere comprises 78%
        nitrogen, 21% oxygen, and trace gases vital for life. Earth's magnetic
        field protects it from solar wind.
      </p>
      <button className="button-m">More Details</button>
      <p className="facts-m1">
        The diameter of Earth is
        <p className="number">
          <b>12,742 Kms</b>
        </p>
      </p>
      <p className="facts-m2">
        Rotation period{" "}
        <p className="number">
          <b>24 hours</b>
        </p>
      </p>
      <p className="facts-m3">
        Mean surface temperature of{" "}
        <p className="number">
          <b>288 K</b>
        </p>
      </p>
      <p className="facts-m4">
        Eccentricity of orbit
        <p className="number">
          <b>0.0167</b>
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
          <li>-26.74(approx.)</li>
          <li>149.6 million Kms</li>
          <li> 6,371 Kms</li>
          <li>9.8 m/s²(0.38 times that of Earth)</li>
          <li>4.54 billion years</li>
          <li> 365.25 days</li>
        </ul>
      </div>
    </>
  );
}

export default Earth;
