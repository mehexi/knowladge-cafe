import React from "react";
import "./blog.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Blog = (props) => {
//   console.log(props.blog);
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    hashtags,
    posted_data,
    reading_time,
    } = props.blog;
    // console.log(hashtags)
  return (
    <div className="blog">
      <img className="img" src={cover} alt={`cover of ${title}`} />
      <div className="post-details">
        <div className="author_details">
          <img src={author_img} alt="" />
          <div>
            <h2 className="no-padding">{author}</h2>
            <p className="no-padding">{posted_date}</p>
          </div>
        </div>
        <div className="reading-details">
          <p>{reading_time} min read</p>
          <span>
            <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
          </span>
        </div>
          </div>
          <h1>{title}</h1>
          <div className="reading-details">
              <p>#{hashtags[0]}</p>
              <p>#{hashtags[1]}</p>
          </div>
          <p className="mark"> <b>Mark as Read</b></p>
    </div>
  );
};

export default Blog;
