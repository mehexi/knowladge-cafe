import React, { useEffect, useState } from "react";

import "./BlogContainer.css";
import Blog from "../blog/blog";

const BlogContainer = () => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("bolgs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  const [readingTime, setReadingTime] = useState([]);

  const markAsRead = (time) => {
    const newReadingTime = parseInt(time + readingTime);
    setReadingTime(newReadingTime);
  };

  // const addToBookmark = blog => {
  //     const newBookmark = [...bookmarks,blog]
  // }

  return (
    <div className="blogContainer">
      <div className="Blogs">
        <h1>h1{blogs.length}</h1>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} markAsRead={markAsRead}></Blog>
        ))}
      </div>
      <div className="bookmarkSection">
        <h1>reading: {readingTime}</h1>
      </div>
    </div>
  );
};

export default BlogContainer;
