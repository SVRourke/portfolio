import React from "react";
import "styles/components/hero.scss";
import ProfilePic from "assets/PROFILESVGGOOD.svg";
import Calendar from "./Calendar";

export default function Hero() {
  return (
    <div id="hero">
      <div className="hero-navBar">
        <a>svrourke</a>
        <a href="#about">about</a>
        <a href="#work">work</a>
        <a href="#blog">blog</a>
        <a href="#contact">contact</a>
      </div>
      <div className="hero-textbox">
        <h1>
          I'm passionate about creating tools that provide value and make life
          easier for people.
        </h1>
      </div>
      <div className="hero-imagePlaceholder">
        <Calendar />
        <img src={ProfilePic} />
      </div>
    </div>
  );
}
