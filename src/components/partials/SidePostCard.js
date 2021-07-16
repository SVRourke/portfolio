import React from "react";
import "styles/components/partials/SidePostCard.scss";

const SidePostCard = ({ post: { date, title, description, url } }) => {
  const newDate = date.split("-");
  const suffix = description.length > 80 ? "..." : "";
  const newDesc = description.slice(0, 90);
  return (
    <a href={url} class="side-post">
      <span>
        {newDate[0]}
        <br></br>
        {newDate[1]}
      </span>
      <div>
        <h3>{title}</h3>
        {/* <hr></hr> */}
        <p>
          {newDesc}
          {suffix}
        </p>
      </div>
    </a>
  );
};

export default SidePostCard;
