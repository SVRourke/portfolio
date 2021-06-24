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

      <Fade
        className="about-stack"
        delay={800}
        duration={600}
        direction={"right"}
      >
        <span>stack</span>
      </Fade>
      <Fade className="software-engineer" delay={1200} direction={"in"}>
        <span>software engineer</span>
      </Fade>

      <Fade className="paragraphs-container" delay={1600}>
        <p>
          I'm passionate about creating tools that help people and provide value
          whether monetary or otherwise. I am a dedicated lifelong learner and
          I'm always looking for opportunities to learn new things.
        </p>

        <p>
          loremEa minim ea magna commodo pariatur occaecat mollit enim et dolor
          mollit sint dolor exercitation. Consectetur culpa incididunt ut
          cupidatat in. Ad qui id laboris consectetur consequat esse culpa nisi.
        </p>
      </Fade>

      <section id="calendar">.</section>
    </section>
  );
}
