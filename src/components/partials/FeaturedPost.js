import React from "react";
import "styles/components/partials/FeaturedPost.scss";

const FeaturedPost = ({ post }) => {
  const bgImg = {
    backgroundImage: `url(${post.img})`,
  };
  return (
    <a href={post.url} id="featured-post" style={bgImg}>
      <div id="featured-post_info-card">
        <h3>{post.title}</h3>
        <hr></hr>
        <p>
          {post.description.slice(0, 70)}... <u>read more ></u>
        </p>
      </div>
    </a>
  );
};

export default FeaturedPost;
