import React from "react";
import "styles/Header.scss";
import { Fade } from "react-awesome-reveal";

export default function Header() {
  return (
    // <header className={}>
    <header>
      <Fade className="hi" direction={"down"}>
        <span id="hi">Hi,</span>
      </Fade>

      <Fade className="sam" direction={"up"} delay={1000}>
        <span id="sam">Sam.</span>
      </Fade>
      <Fade className="hero-word im" direction={"left"} delay={200}>
        <span className="outline-title">I'm</span>
      </Fade>
    </header>
  );
}
