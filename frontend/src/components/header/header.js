import React from 'react';
import headshot from "./headshot.png";
import "./header_style.css";

const Header = () => {
    return (
        <header>
            <div id="pic">
                <img id="headshot" src={headshot}/>
            </div>
            <p>Try Khov</p>
            <div id="external-links">
                <a href="https://www.linkedin.com/in/tckhov/">
                    <i className="fab fa-linkedin" style={{color:"#00A0DC"}}></i>
                </a>
                <a href="https://github.com/trykhov">
                    <i className="fab fa-github-square" style={{color:"#F1502F"}}></i>
                </a>
                <a href="https://angel.co/try-khov">
                    <i className="fab fa-angellist" style={{color:"#fff"}}></i>
                </a>
            </div>
        </header>
    )
}

export default Header;