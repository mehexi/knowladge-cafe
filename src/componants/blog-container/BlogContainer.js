import React, { useEffect, useState } from "react";

import Bookmark from "../bookmark/Bookmark";
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

    const [bookmarks, setBookmark] = useState([])
    
    const addToBookmark =  title =>{
        const newBookmark = [...bookmarks, title]
        setBookmark(newBookmark)
    }
    
  return (
    <div className="blogContainer">
      <div className="Blogs">
        {/* <h1>h1{blogs.length}</h1> */}
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} markAsRead={markAsRead} addToBookmark={addToBookmark}></Blog>
        ))}
      </div>
      <div className="bookmarkSection">
              <h1>Sepnt time on Reading: {readingTime}</h1>
              <div className="bookmarkContainer">
                  <h1>bookmarked Blogs: {bookmarks.length}</h1>
                  {
                      bookmarks.map(bookmark=><Bookmark key={Math.random()} title={blogs.title} bookmark={bookmark}></Bookmark>)
                  }
              </div>
      </div>
    </div>
  );
};

export default BlogContainer;
