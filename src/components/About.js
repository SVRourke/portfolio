import React from "react";
import "styles/components/About.scss";

export default function About() {
  return (
    <section id="about">
      <div class="col">
        <h2>hi, i'm sam!✌🏻</h2>
        <div class="row">
          <p>
            I’m a full stack developer located in south Florida. 🐊 My primary
            stack is Ruby on Rails with React. While I would categorize my
            skills and aspirations as being biased towards the back end I love
            to style the front end as well using SCSS. I try to stay busy and
            I'm constantly learning about new technologies.
          </p>
        </div>
        <div id="info-grid">
          <p>languages</p>
          <p>frameworks</p>
          <p>markdown</p>
          <p>tools</p>
          <p>misc</p>
        </div>
      </div>

      <div class="col">
        <div id="calendar-placeholder">calendar</div>
      </div>
    </section>
  );
}
