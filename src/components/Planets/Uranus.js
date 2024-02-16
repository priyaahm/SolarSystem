import React from "react";
import uranus from "../pics/uranus.mp4";
import "./planets.css";
import Header from "../Header";
import mercuryz1 from "../pics/mercuryz1.jpg";
import nasa from "../pics/nasa.png";
import wikipedia from "../pics/wikipedia.png";
import isro1 from "../pics/isro1.webp";
import ns1 from "../pics/ns1.png";
import yt from "../pics/yt.jpg";
import stars from "../pics/stars.jpg";

function Uranus() {
  return (
    <>
      <Header />
      <video
        src={uranus}
        className="mercury-p"
        alt="background-image"
        autoPlay
        loop
        muted
      />
      <p className="first-line">A travellers's guide to the planet</p>
      <h1 className="heading-m">Uranus</h1>
      <p className="para-m">
        Discovered by William Herschel in 1781, it is unique for its sideways
        rotation, spinning on its side almost perpendicular to its orbit. This
        tilt contributes to extreme seasons, with each pole experiencing 42
        years of sunlight followed by 42 years of darkness. Uranus is composed
        mostly of hydrogen and helium
      </p>
      <a href="#moredetails" className="button-m">
        More Details
      </a>
      <p className="facts-m1">
        The diameter of Uranus is
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
          <li>+5.7</li>
          <li>2.7 billion Kms</li>
          <li>25,362 Kms</li>
          <li>8.69 m/s²(0.89 times of Earth)</li>
          <li>4.6 billion years</li>
          <li>84 Earth days(approx.)</li>
        </ul>
      </div>
    </>
  );
}

export default Uranus;
