import React from 'react';
import { useSpring, animated } from 'react-spring'; 
import headshot from "./headshot.png";
import "./header_style.css";

const Header = () => {
    // react animation
    const props = useSpring({
        opacity: 1, 
        from: {opacity: 0},
        config: {
            duration: 4000
        }
    });
    
    return (
        <animated.header style={props}>
            <div id="pic">
                <img id="headshot" src={headshot} alt="headpic"/>
            </div>
            <p>Try Khov</p>
            <nav id="external-links">
                <a href="https://www.linkedin.com/in/tckhov/">
                    <i className="fab fa-linkedin" style={{color:"#00A0DC"}}></i>
                </a>
                <a href="https://github.com/trykhov">
                    <i className="fab fa-github-square" style={{color:"#F1502F"}}></i>
                </a>
                <a href="https://angel.co/try-khov">
                    <i className="fab fa-angellist" style={{color:"#fff"}}></i>
                </a>
            </nav>
        </animated.header>
    )
}

export default Header;