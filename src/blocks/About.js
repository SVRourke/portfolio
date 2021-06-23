import React from "react";
import "styles/About.scss";
import { Fade } from "react-awesome-reveal";

const styledFade = ({ id, children, rest }) => {
  return (
    <div id={id}>
      <Fade {...rest}>{children}</Fade>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="block">
      <Fade direction={"down"} className={"fadeIm"}>
        <span className="outline-title">I'm</span>
      </Fade>

      <Fade className="about-full" delay={300} direction={"right"}>
        <span>a full-</span>
      </Fade>

      <Fade className="about-stack" delay={800} direction={"right"}>
        <span>stack</span>
      </Fade>
      <Fade className="software-engineer" delay={400} direction={"in"}>
        <span>software engineer</span>
      </Fade>

      <p>
        loremEa minim ea magna commodo pariatur occaecat mollit enim et dolor
        mollit sint dolor exercitation. Consectetur culpa incididunt ut
        cupidatat in. Ad qui id laboris consectetur consequat esse culpa nisi.
      </p>

      <p>
        loremEa minim ea magna commodo pariatur occaecat mollit enim et dolor
        mollit sint dolor exercitation. Consectetur culpa incididunt ut
        cupidatat in. Ad qui id laboris consectetur consequat esse culpa nisi.
      </p>

      <section id="calendar">.</section>
    </section>
  );
}
