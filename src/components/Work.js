import React from "react";
import ProjectCard from "./ProjectCard";
import "styles/components/Work.scss";

const projects = [
  {
    name: "Pantry",
    blog: "medium.com",
    repo: "github.com",
    live: "svrourke.com",
    image: "https://image.pngaaa.com/930/2507930-middle.png",
  },
  {
    name: "Trading Unlimited",
    blog: "medium.com",
    repo: "github.com",
    live: "svrourke.com",
    image: "https://image.pngaaa.com/930/2507930-middle.png",
  },
  {
    name: "fetch-contributions-calendar",
    blog: "medium.com",
    repo: "github.com",
    live: "svrourke.com",
    image: "https://image.pngaaa.com/930/2507930-middle.png",
  },
  {
    name: "Quizzical",
    blog: "medium.com",
    repo: "github.com",
    live: "svrourke.com",
    image: "https://image.pngaaa.com/930/2507930-middle.png",
  },
  {
    name: "Kanban",
    blog: "medium.com",
    repo: "github.com",
    live: "svrourke.com",
    image: "https://image.pngaaa.com/930/2507930-middle.png",
  },
  {
    name: "Coolors Clone",
    blog: "medium.com",
    repo: "github.com",
    live: "svrourke.com",
    image: "https://image.pngaaa.com/930/2507930-middle.png",
  },
  {
    name: "Todoist Clone",
    blog: "medium.com",
    repo: "github.com",
    live: "svrourke.com",
    image: "https://image.pngaaa.com/930/2507930-middle.png",
  },
];

export default function Work() {
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
