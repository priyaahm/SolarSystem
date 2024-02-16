import React from "react";
import mercury from "../pics/mercury.mp4";
import "./planets.css";
import Header from "../Header";

function Mercury() {
  return (
    <>
      <Header />
      <video
        src={mercury}
        className="mercury-p"
        alt="background-image"
        autoPlay
        loop
        muted
      />
      <p className="first-line">A travellers's guide to the planet</p>
      <h1 className="heading-m">Mercury</h1>
      <p className="para-m">
        Mercury is only slightly larger than Earth's Moon. Its surface is
        covered in tens of thousands of impact craters. From the surface of
        Mercury, the Sun would appear more than three times as large as it does
        when viewed from Earth.
      </p>
      <button className="button-m">More Details</button>
      <p className="facts-m1">
        The diameter of Mercury is
        <p className="number">
          <b>4,880 km</b>
        </p>
      </p>
      <p className="facts-m2">
        Rotation period{" "}
        <p className="number">
          <b>58.6 Earth days</b>
        </p>
      </p>
      <p className="facts-m3">
        Mean surface temperature of{" "}
        <p className="number">
          <b>800 K</b>
        </p>
      </p>
      <p className="facts-m4">
        Eccentricity of orbit
        <p className="number">
          <b>0.2056</b>
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
          <li>-1.9 to 5.5</li>
          <li>57.9 million Kms</li>
          <li> 2,439.7 Kms</li>
          <li>3.7 m/s²(0.38 times that of Earth)</li>
          <li>4.6 billion years</li>
          <li> 87.97 Earth days(approx.)</li>
        </ul>
      </div>
    </>
  );
}

export default Mercury;
