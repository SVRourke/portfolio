import React, { useState } from "react";
import "styles/components/partials/FeaturedPost.scss";

const FeaturedPost = ({ post }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };
  const truncTitle = hovered ? post.title : `${post.title.slice(0, 18)}...`;

  const truncDesc = hovered
    ? `${post.description.slice(0, 90)}... read more`
    : `${post.description.slice(0, 40)}...`;

  const bgImg = {
    backgroundImage: `url(${post.img})`,
  };
  return (
    <a
      href={post.url}
      id="featured-post"
      style={bgImg}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div id="featured-post_info-card">
        <h3>{truncTitle}</h3>
        <hr></hr>
        <p>{truncDesc}</p>
      </div>
    </a>
  );
};

export default FeaturedPost;
