import React, { useState } from 'react';
import './slideshow.css';

// images
import koi_pic from '../../images/koi.png';
import korra_pic from '../../images/korra.png';


const SlideShow = () => {

    const [projNum, setProject] = useState(0);

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
        setProject((((projNum + num) % 3) + 3) % 3);
    }

    // users can click a dot and select a project
    function selectProject(num) {
        setProject(num);
    }

    function dropInfoModal() {
        const infoModal = document.getElementById('info-modal');
        infoModal.style.display = "block";

        const infoButton = document.getElementById('info-button');
        infoButton.style.display = "none";
    }

    function exitModal() {
        const infoModal = document.getElementById('info-modal');
        infoModal.style.display = "none";

        const infoButton = document.getElementById('info-button');
        infoButton.style.display = "inline";
    }

    const currProject = projects[projNum];
    return (
        <div id="slideshow-container">
            {/* slide presentation */}
            <div id="slideshow">
                {/* current slide */}
                <div className="work-slide fade">
                    <a id="info-button" onClick={() => dropInfoModal()}>&#9432;</a>
                    <img className="work-image" src={currProject.src}/>
                    <div id="info-modal">
                        <div className="exit">
                            <i className="fas fa-times" onClick={() => exitModal()}/>
                        </div>
                        <div className="info-container">
                            <div className="info">
                                <p className="title">{currProject.title}</p>
                                <div className="work-links">
                                    <a>Live</a> | 
                                    <a> Repo</a>
                                </div>
                                <p className="desc">(desc)</p>
                            </div>
                        </div>
                    </div>  
                </div>

                {/* arrows */}
                <a className="prev" onClick={() => traverseProject(-1)}>&#10094;</a>
                <a className="next" onClick={() => traverseProject(1)}>&#10095;</a>
            </div>
            {/* index dots */}
            <div id="circle-container">
                <span className="dot" onClick={() => selectProject(0)}></span>
                <span className="dot" onClick={() => selectProject(1)}></span>
                <span className="dot" onClick={() => selectProject(2)}></span>
            </div>
        </div>
    )
}

export default SlideShow;