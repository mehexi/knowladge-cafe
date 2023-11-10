import React from 'react';
import img from '../../Ellipse 1.png'
import './nav.css'

const Nav = () => {
    return (
        <nav>
            <span>Knowladge Cafe</span>
            <div>
                <img src={img} alt="" />
            </div>
        </nav>
    );
};

export default Nav;