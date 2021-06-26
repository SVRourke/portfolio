import React from "react";

import "styles/Projects.scss";
import { Fade } from "react-awesome-reveal";

export default function Projects() {
  return (
    <section className="projects">
      <Fade direction={"down"} className={"fadeIm"}>
        <span className="outline-title">I've made</span>
      </Fade>
    </section>
  );
}
