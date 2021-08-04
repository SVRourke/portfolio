import React, { useState } from "react";
import { ImGithub, ImFileText2, ImLink } from "react-icons/im";
import "styles/components/ProjectCard.scss";

export default function ProjectCard({
  data: { title, description, blogLink, imageLink, githubRepo, live },
}) {
  const [open, setOpen] = useState(false);

  const style = {
    backgroundImage: `url(${imageLink})`,
  };

  const blog = blogLink ? (
    <a href={blogLink}>
      <ImFileText2 />
    </a>
  ) : null;
  const git = githubRepo ? (
    <a href={githubRepo}>
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
          {blog}
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
