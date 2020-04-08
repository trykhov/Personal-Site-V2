import React from 'react';
import '../../stylesheets/about_me.css';

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
import cal_logo from '../../images/cal.png';

const AboutMe = () => {
    return (
        <div className="info-box">
            <div className="content-box">
                <h1>Welcome!</h1>
                <p>
                I'm an experienced software engineer with a passion for making. 
                Throughout my journey, I've garnered a diverse skillset of technologies used in fields such data analytics, web and mobile app development. 
                These skills include mastery in Python, JavaScript, React, Node.js and Ruby on Rails with many more continuously being added.
                </p>
                <p>
                    I've worked and developed projects of varying scale complexity from simple games to full-stack websites and data tools used for company metrics.
                </p>
                <p>
                When I'm not building something with code, I'm often building something with my hands such as plastic models of giant mechs or learning new things such as foreign languages, science or finance. 
                Let's connect! 
                </p>
                <div className="background-info">
                    <span>Skills: </span>
                    <img className="logo" src={js_logo} alt="JavaScript"/>
                    <img className="logo" src={python_logo} alt="Python"/>
                    <img className="logo" src={react_logo} alt="React.js"/>
                    <img className="logo" src={redux_logo} alt="Redux"/>
                    <img className="logo" src={node_logo} alt="Node.js"/>
                    <img className="logo" src={ruby_logo} alt="Ruby"/>
                    <img className="logo" src={rails_logo} alt="Ruby on Rails"/>
                    <img className="logo" src={mongo_logo} alt="MongoDB"/>
                    <img className="logo" src={postgres_logo} alt="PostgreSQL"/>
                    <img className="logo" src={html_logo} alt="HTML"/>
                    <img className="logo" src={css_logo} alt="CSS"/>
                </div>
                <div className="background-info">
                    <span>Alumni: </span>
                    <img className="logo" src={aa_logo} alt="App Academy"/>
                    <img className="logo" src={cal_logo} alt="UC Berkeley"/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;