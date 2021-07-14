import React from "react";
import "styles/components/ProjectCard.scss";

export default function ProjectCard() {
  return (
    <div class="project-card">
      <CardHeading />
    </div>
  );
}
// Sub-Components
const CardHeading = () => {
  return (
    <div class="project-card_header">
      <span class="cardButton cardButton-min"></span>
      <span class="cardButton cardButton-max"></span>
      <span class="cardButton cardButton-close"></span>
    </div>
  );
};
