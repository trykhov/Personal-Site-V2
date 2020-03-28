import React from 'react';
import './about_me.css';

// images
import css_logo from '../../images/css.png';
import html_logo from '../../images/html.png';
import js_logo from '../../images/js.png';
import mongo_logo from '../../images/mongo.png';
import node_logo from '../../images/node.png';
import postgres_logo from '../../images/postgresql-logo.png';
import python_logo from '../../images/python.png';
import rails_logo from '../../images/rails.png';
import react_logo from '../../images/react.png';
import redux_logo from '../../images/redux.png';
import ruby_logo from '../../images/ruby.png';
import aa_logo from '../../images/app-logo.png';
import cal_logo from '../../images/berkeley-logo.png';

const AboutMe = () => {
    return (
        <div className="info-box">
            <p>
            I'm an experienced software engineer with a passion for making. 
            Throughout my journey, I've garnered a diverse skillset set of technologies used in fields such data analytics to web and mobile development. 
            These skills include mastery in Python, JavaScript, React, Node.js and Ruby on Rails with many more continuously being added.

            <br/>
            <br />
            I've worked and developed projects of varying scale complexity such as simple games, full-stack websites and data tools used for company metrics.

            <br />
            <br />
            When I'm not building something with code, I'm often building something with my hands such as plastic model kits of giant mechs or learning new things such as foreign languages, science or financial literacy. 
            Let's connect! 
            </p>
            <div className="background-info">
                <span>Skills: </span>
                <img className="logo" src={js_logo}/>
                <img className="logo" src={python_logo}/>
                <img className="logo" src={react_logo}/>
                <img className="logo" src={redux_logo}/>
                <img className="logo" src={node_logo}/>
                <img className="logo" src={ruby_logo}/>
                <img className="logo" src={rails_logo}/>
                <img className="logo" src={mongo_logo}/>
                <img className="logo" src={postgres_logo}/>
                <img className="logo" src={html_logo}/>
                <img className="logo" src={css_logo}/>
            </div>
            <div className="background-info">
                <span>Alumni: </span>
                <div id="schools">
                    <img className="logo" src={aa_logo}/>
                    <img className="logo" src={cal_logo}/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;