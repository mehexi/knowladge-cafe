import React from "react";
import "./blog.css";

const Blog = (props) => {
  console.log(props.blog);
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    hastag,
    posted_data,
  } = props.blog;
  return (
    <div className="blog">
      <img className="img" src={cover} alt="cover of "/>
    </div>
  );
};

export default Blog;
