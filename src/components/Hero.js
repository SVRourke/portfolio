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
        <h1>
          I'm passionate about creating tools that provide value and make life
          easier for people.
        </h1>
      </div>
      <div className="hero-imagePlaceholder">
        <img src={ProfilePic} />
      </div>
    </div>
  );
}
