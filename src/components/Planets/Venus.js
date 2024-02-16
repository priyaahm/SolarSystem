import React from "react";
import venus from "../pics/venus.mp4";
import "./planets.css";
import Header from "../Header";

function Venus() {
  return (
    <>
      <Header />
      <video
        src={venus}
        className="venus-p"
        alt="background-image"
        autoPlay
        loop
        muted
      />

      <p className="first-line">A travellers's guide to the planet</p>
      <h1 className="heading-m">Venus</h1>
      <p className="para-m">
        Venus is the second planet from the sun, it has a thick atmosphere
        primarily composed of carbon dioxide with clouds of sulfuric acid,
        creating a runaway greenhouse effect. Its slow retrograde rotation means
        a day on Venus is longer than its year.
      </p>
      <button className="button-m">More Details</button>
      <p className="facts-m1">
        No. of missions
        <p className="number">
          <b>20 spacecrafts</b>
        </p>
      </p>
      <p className="facts-m2">
        Rotation period
        <p className="number">
          <b>243 Earth days</b>
        </p>
      </p>
      <p className="facts-m3">
        Mean surface temperature of
        <p className="number">
          <b>740 K</b>
        </p>
      </p>
      <p className="facts-m4">
        Day time on Venus
        <p className="number">
          <b>106 Earth days</b>
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
          <li>-3.8 and -4.6</li>
          <li>38 million Kms</li>
          <li>6,052 Kms</li>
          <li>8.87 m/s²(0.904 times)</li>
          <li>4.6 billion years</li>
          <li> 225 Earth days(approx.)</li>
        </ul>
      </div>
    </>
  );
}
export default Venus;
