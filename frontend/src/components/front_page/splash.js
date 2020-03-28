import React from 'react';
import './splash.css';

const SplashPage = () => {
    return (
        <section id="splash">
            <p>Hello, welcome to my personal website! My name is Try and I'm a software engineer</p>
            <nav>
                <button className="nav-button">About Me</button>
                <button className="nav-button">Portfolio</button>
                <button className="nav-button">Resumé</button>
            </nav>
        </section>
    )
}

export default SplashPage;