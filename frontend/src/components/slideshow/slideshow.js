import React, { useState } from 'react';
import './slideshow.css';

// images
import koi_pic from '../../images/koi.png';
import korra_pic from '../../images/korra.png';
import watchuwant from '../../images/watchu_want.png';

const projects = [
    {
        live: "https://trykhov.github.io/FishPond/",
        repo: "https://github.com/trykhov/FishPond",
        title: "Koi Pond Animation",
        desc: 'I developed an animation of koi fishes swimming in a pond using HTML5 canvas, CSS3, JavaScript and P5.js. This project utilizes the P5.js library to create the animations and the vector functions necessary to implement the flocking simulation algorithm that allows the fishes to move in a seemingly "natural" state.',
        src: koi_pic,
        alt: "koi_pond"
    },
    {
        live: "https://korra-fsp.herokuapp.com/",
        repo: "https://github.com/trykhov/korra-fsp",
        title: "Korra (Quora Clone)",
        desc: "Korra is a near identical web-clone to the original Quora site. The site is implemented using Ruby on Rails as a backend with PostgreSQL as a database. On the front-end, React is used as a framework that allows users to post questions, answers, and comments.",
        src: korra_pic,
        alt: "korra"
    },
    {
        live: "https://watchuwant.herokuapp.com/",
        repo: "https://github.com/alexdeeguz/WatchuWant",
        title: "Watchu Want",
        desc: "If you're hungry and don't know what to eat, WatchuWant is a web application that will pick a restaurant for you based on your current location. Users specify how far they are willing to travel, how much they are willing to spend, and the type of food craving. Users can also choose from past visited restaurants and add/remove restaurants from favorites.",
        src: watchuwant,
        alt: "watchu_want"
    },
]

const SlideShow = () => {

    const [index, setProject] = useState(0);

    // users can press the left or right arrow to go see the next or prev project
    function traverseProject(num) {
        const newIdx = (((index + num) % 3) + 3) % 3;
        setProject(newIdx);
        const otherNodes = document.querySelectorAll('.dot');
        otherNodes.forEach(tab => tab.classList.remove('active'));
        otherNodes[newIdx].classList.add('active');
    }

    // users can click a dot and select a project
    function selectProject(e,num) {
        setProject(num);
        const otherNodes = document.querySelectorAll('.dot');
        otherNodes.forEach(tab => tab.classList.remove('active'));
        e.target.classList.add('active');
    }

    function dropInfoModal() {
        const infoModal = document.getElementById('info-modal');
        infoModal.classList.remove("disappear");
        infoModal.classList.add("appear");

        const infoButton = document.getElementById('info-button');
        infoButton.style.display = "none";
    }

    function exitModal() {
        const infoModal = document.getElementById('info-modal');
        infoModal.classList.remove("appear");
        infoModal.classList.add("disappear");

        const infoButton = document.getElementById('info-button');
        infoButton.style.display = "inline";
    }


    const currProject = projects[index];
    return (
        <div id="slideshow-container">
            {/* slide presentation */}
            <div id="slideshow">
                {/* current slide */}
                <div className="work-slide">
                    <a id="info-button" onClick={() => dropInfoModal()}>&#9432;</a>
                    <img className="work-image" src={currProject.src} alt={currProject.alt}/>
                    <div id="info-modal" className="disappear">
                        <div className="exit">
                            <i className="fas fa-times" onClick={() => exitModal()}/>
                        </div>
                        <div className="info-container">
                            <div className="info">
                                <p className="title">{currProject.title}</p>
                                <div className="work-links">
                                    <a className="showcase-links" href={currProject.live}>Live</a>|
                                    <a className="showcase-links" href={currProject.repo}>Repo</a>
                                </div>
                                <p className="desc">{currProject.desc}</p>
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
                <span className="dot active" onClick={e => selectProject(e,0)}></span>
                <span className="dot" onClick={e => selectProject(e,1)}></span>
                <span className="dot" onClick={e => selectProject(e,2)}></span>
            </div>
        </div>
    )
}

export default SlideShow;