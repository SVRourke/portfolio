import React from "react";
import "styles/components/hero.scss";
import ProfilePic from "assets/PROFILESVGGOOD.svg";

export default function Hero() {
  return (
    <div id="hero">
      <div className="hero-navBar">
        <a>svrourke</a>
        <a>about</a>
        <a>work</a>
        <a>blog</a>
        <a>contact</a>
      </div>
      <div className="hero-textbox">
        <span>✌</span>
        <h1>Hi I'm Sam</h1>
        <p>
          I'm passionate about creating tools that provide value and make life
          easier for people.
        </p>
      </div>
      <div className="hero-imagePlaceholder">
        <img src={ProfilePic} />
      </div>
    </div>
  );
}
