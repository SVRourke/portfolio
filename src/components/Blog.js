import React, { useState } from "react";
import FeaturedPost from "./partials/FeaturedPost";
import SidePostCard from "./partials/SidePostCard";
import "styles/components/Blog.scss";
import posts from "data/BlogData";

export default function Blog() {
  const sidePosts = posts
    .slice(1, 5)
    .map((post) => <SidePostCard post={post} />);

  return (
    <section id="blog">
      <h2 class="block_heading">i like to say stuff</h2>
      <div id="sample-post_container">
        <FeaturedPost post={posts[0]} />
        {sidePosts}
      </div>
      <a class="section_read-more" href="https://svrourke.medium.com/">
        read more >
      </a>
    </section>
  );
}
