import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    console.log("clickd")
    console.log(props.bookmark)

    return (
        <div className='bookmark'>
            <h1>{props.bookmark}</h1>
        </div>
    );
};

export default Bookmark;