import React, { useState } from "react";
import { ImGithub, ImFileText2, ImLink } from "react-icons/im";
import "styles/components/ProjectCard.scss";

export default function ProjectCard({
  data: { title, description, blog, image, github, live },
}) {
  const [open, setOpen] = useState(false);

  const style = {
    backgroundImage: `url(${image})`,
  };

  const blogLink = blog ? (
    <a href={blog}>
      <ImFileText2 />
    </a>
  ) : null;
  const git = github ? (
    <a href={github}>
      <ImGithub />
    </a>
  ) : null;
  const location = live ? (
    <a href={live}>
      <ImLink />
    </a>
  ) : null;
  return (
    <div class="project-card">
      <CardHeading />
      <div className="image-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-badges">
          {blogLink}
          {git}
          {location}
        </div>
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
