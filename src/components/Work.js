import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { getProjects } from "../cms/interface";
import "styles/components/Work.scss";

export default function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((d) => {
      setProjects(d["projects"]);
    });
  }, []);

  const cards = projects.map((project) => <ProjectCard data={project} />);
  return (
    <section id="work">
      <h2 class="block_heading">i like to make stuff 📐</h2>

      <div class="work-grid">{cards}</div>

      <a class="section_read-more" href="https://www.github.com/SVRourke">
        my github >
      </a>
    </section>
  );
}
