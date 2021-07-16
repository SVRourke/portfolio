import React from "react";
import "styles/components/Blog.scss";
import posts from "data/BlogData";

export default function Blog() {
  const sidePosts = posts
    .slice(1, 5)
    .map((post) => <SidePostCard post={post} />);

  return (
    <section id="blog">
      <h2>i like to say stuff</h2>
      <div id="sample-post_container">
        <FeaturedPost post={posts[0]} />
        {sidePosts}
      </div>
      {/* Make A Component For this and projects page */}
      <a id="blog_read-more" href="#hero">
        read more ->
      </a>
    </section>
  );
}

// Sub Components move to separate files in "elements" or "partials" folder
const FeaturedPost = ({ post }) => {
  const truncTitle = post.title.slice(0, 18);
  return (
    <a href={post.url} id="featured-post">
      <div id="featured-post_info-card">
        <h3>{truncTitle}...</h3>
        <hr></hr>
        <p>{post.description}</p>
      </div>
    </a>
  );
};

const SidePostCard = ({ post }) => {
  const newDate = post.date.split("-");
  return (
    <a href={post.url} class="side-post">
      <span>
        {newDate[0]}
        <br></br>
        {newDate[1]}
      </span>
      <div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </a>
  );
};
