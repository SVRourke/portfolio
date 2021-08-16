import React from "react";
import "styles/components/About.scss";
import Calendar from "./Calendar";

export default function About() {
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
      </div>

      <div id="info">
        {/* languages */}
        <details>
          <summary>languages</summary>
          <ul>
            <li>JavaScript</li>
            <li>Ruby</li>
            <li>Python</li>
            <li>CSS (SCSS)</li>
          </ul>
        </details>

        {/* frameworks */}
        <details>
          <summary>frameworks</summary>
          <ul>
            <li>Ruby on Rails</li>
            <li>React</li>
            <li>Express</li>
            <li>Sinatra</li>
            <li>Flask</li>
          </ul>
        </details>

        {/* tools */}
        <details>
          <summary>tools</summary>
          <ul>
            <li>Figma</li>
            <li>Git/GitHub</li>
            <li>GitLab</li>
            <li>GIMP</li>
            <li>MySQL Workbench</li>
            <li>Notion</li>
            <li>Todoist</li>
          </ul>
        </details>

        {/* misc */}
        <details>
          <summary>misc.</summary>
          <ul>
            <li>HTML</li>
            <li>Markdown</li>
          </ul>
        </details>
      </div>

      <div class="about-content">
        <Calendar n={80} />
      </div>
    </section>
  );
}
