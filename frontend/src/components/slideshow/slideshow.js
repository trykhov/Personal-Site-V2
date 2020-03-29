import React, { useState } from 'react';
import './slideshow.css';

// images
import koi_pic from '../../images/koi.png';
import korra_pic from '../../images/korra.png';


const SlideShow = () => {

    const [projNum, selectProject] = useState(0);

    const projects = {
        0: {
            live: "",
            repo: "",
            title: "Koi Pond Animation",
            desc: "(Koi desc)",
            src: koi_pic
        },
        1: {
            live: "",
            repo: "",
            title: "Korra (Quora Clone)",
            desc: "(Korra desc)",
            src: korra_pic
        },
        2: {
            live: "",
            repo: "",
            title: "",
            desc: "",
            src: ""
        },
    }

    // users can press the left or right arrow to go see the next or prev project
    function traverseProject(num) {
        selectProject((((projNum + num) % 3) + 3) % 3);
    }

    // users can click a dot and select a project
    function selectProject(num) {
        selectProject(num);
    }

    const currProject = projects[projNum];
    return (
        <div id="slideshow-container">
            {/* slide presentation */}
            <div id="slideshow">
                {/* current slide */}
                <div className="work-slide fade">
                    <img className="work-image" src={currProject.src}/>
                </div>

                {/* arrows */}
                <a className="prev" onClick={() => traverseProject(-1)}>&#10094;</a>
                <a className="next" onClick={() => traverseProject(1)}>&#10095;</a>

                {/* index dots */}
                <div id="circle-container">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

            <p className="title">{currProject.title}</p>
            <div className="work-links">
                <a className="link">Live</a> | 
                <a className="link"> Repo</a>
            </div>
            <p>{currProject.desc}</p>
            
        </div>
    )
}

export default SlideShow;