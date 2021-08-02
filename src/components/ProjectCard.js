import React, { useState } from "react";
import "styles/components/ProjectCard.scss";

export default function ProjectCard({
  data: { title, description, blogLink, imageLink, githubRepo, live },
}) {
  const [open, setOpen] = useState(false);

  const style = {
    backgroundImage: `url(${imageLink})`,
  };

  return (
    <div class="project-card">
      <CardHeading />
      <div className="image-overlay">
        {/* is it live? */}
        {/* is it written up? */}
        {/* whats the repo? */}
        <p>Hello</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>{blogLink}</p>
        <p>{githubRepo}</p>
        <p>{live}</p>
      </div>

      
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
