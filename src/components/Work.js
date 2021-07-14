import React from "react";

import ProjectCard from "./ProjectCard";

import "styles/components/Work.scss";

export default function Work() {
  return (
    <section id="work">
      <h2>i like to make stuff 📐</h2>

      <div class="work-grid">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <a class="github-link" href="https://www.github.com/SVRourke">
        my github >
      </a>
    </section>
  );
}
