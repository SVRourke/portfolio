import React, { useState } from "react";
import "styles/components/ProjectCard.scss";

export default function ProjectCard({
  data: { name, blog, repo, live, image },
}) {
  const [open, setOpen] = useState(false);

  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div class="project-card">
      <CardHeading />
      <div class="project-card_image-container" style={style}></div>
    </div>
  );
}

/*
 Sub-Components
 */
const CardHeading = () => {
  return (
    <div class="project-card_header">
      <span class="cardButton cardButton-min"></span>
      <span class="cardButton cardButton-max"></span>
      <span class="cardButton cardButton-close"></span>
    </div>
  );
};
