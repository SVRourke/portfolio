import React from "react";

import ProjectCard from "./ProjectCard";

import "styles/components/Work.scss";

export default function Work() {
  return (
    <section id="work">
      <h2>i like to make stuff 📐</h2>

      <div class="work-grid">
        <ProjectCard image="https://image.pngaaa.com/930/2507930-middle.png" />
        <ProjectCard image="https://image.pngaaa.com/930/2507930-middle.png" />
        <ProjectCard image="https://image.pngaaa.com/930/2507930-middle.png" />
        <ProjectCard image="https://image.pngaaa.com/930/2507930-middle.png" />
        <ProjectCard image="https://image.pngaaa.com/930/2507930-middle.png" />
        <ProjectCard image="https://image.pngaaa.com/930/2507930-middle.png" />
        <ProjectCard image="https://image.pngaaa.com/930/2507930-middle.png" />
        <ProjectCard image="https://image.pngaaa.com/930/2507930-middle.png" />
        <ProjectCard image="https://image.pngaaa.com/930/2507930-middle.png" />
      </div>

      <a class="github-link" href="https://www.github.com/SVRourke">
        my github >
      </a>
    </section>
  );
}
