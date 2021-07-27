import React from "react";
import ArrayAccordion from "./ArrayAccordion";
import "styles/components/About.scss";
import Calendar from "./Calendar";
export default function About() {
  const items = [
    { title: "languages", items: ["JavaScript", "Ruby", "Python"] },
    { title: "frameworks", items: ["Ruby on Rails", "React", "Express"] },
    { title: "markdown", items: ["HTML5", "markdown (GitHub)"] },
    { title: "tools", items: ["Figma", "etc"] },
    { title: "misc", items: ["Figma", "etc"] },
  ];

  const accordions = items.map((item) => <ArrayAccordion data={item} />);

  return (
    <section id="about">
      <div class="about-content">
        <h2 class="block_heading">hi, i'm sam!✌🏻</h2>
        <div id="about-texts">
          <p>
            I’m a full stack developer located in south Florida. 🐊 My primary
            stack is Ruby on Rails with React. While I would categorize my
            skills and aspirations as being biased towards the back end I love
            to style the front end as well using SCSS. I try to stay busy and
            I'm constantly learning about new technologies.
          </p>
        </div>

        <div id="info-grid">{accordions}</div>
      </div>

      <div class="about-content">
        <Calendar n={28} />
      </div>
    </section>
  );
}
