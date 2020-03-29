import React from 'react';
import './navbar.css';

const NavBar = () => {
    return (
        <nav>
            <button className="nav-button active">About Me</button>
            <button className="nav-button">Portfolio</button>
            <button className="nav-button">
                <i class="fas fa-arrow-alt-circle-down"></i>
                <span>Resumé</span>
            </button>
        </nav>
    )
}

export default NavBar;