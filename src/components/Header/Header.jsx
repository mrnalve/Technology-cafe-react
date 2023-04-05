import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h1 className='fw-bold'>Technology-Cafe</h1>
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="" />
        </div>
    );
};

export default Header;