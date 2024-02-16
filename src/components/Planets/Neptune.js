import React from "react";
import neptune from "../pics/neptune.mp4";
import "./planets.css";
import Header from "../Header";
import nasa from "../pics/nasa.png";
import wikipedia from "../pics/wikipedia.png";
import isro1 from "../pics/isro1.webp";
import ns1 from "../pics/ns1.png";
import yt from "../pics/yt.jpg";
import stars from "../pics/stars.jpg";
import nep1 from "../pics/neptune1.webp";

function Neptune() {
  return (
    <>
      <Header />
      <video
        src={neptune}
        className="mercury-p"
        alt="background-image"
        autoPlay
        loop
        muted
      />
      <p className="first-line">A travellers's guide to the planet</p>
      <h1 className="heading-m">Neptune</h1>
      <p className="para-m">
        Discovered in 1846, it is marked by deep blue hues attributed to methane
        in its atmosphere. Neptune has the fastest winds in the solar system,
        reaching speeds of over 1,200 miles per hour. Its Great Dark Spot, a
        storm system similar to Jupiter's Great Red Spot, showcases the planet's
        weather patterns. Neptune has a moon, Triton, which orbits in a
        retrograde motion.
      </p>
      <a href="#moredetails" className="button-m">
        More Details
      </a>
      <p className="facts-m1">
        The diameter of Neptune is
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

export default Neptune;
