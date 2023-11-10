import React, { useEffect, useState } from 'react';

import './BlogContainer.css'
import Blog from '../blog/blog';

const BlogContainer = () => {
    const [ blogs, setBlog ] = useState([])
    useEffect(
        () => {
            fetch('bolgs.json')
                .then(res => res.json())
                .then(data => setBlog(data))
    },[])
    return (
        <div className='blogContainer'>
            <div className='Blogs'>
                <h1>h1{blogs.length}</h1>
                {
                    blogs.map(blog =>
                        <Blog blog={blog}></Blog>
                        )
                }
            </div>
            <div className='bookmarkSection'>
                <h1>h1 </h1>
            </div>
        </div>
    );
};

export default BlogContainer;