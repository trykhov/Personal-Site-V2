import React, { useState } from 'react';
import AboutMe from './components/about_me/about_me';
import Header from './components/header/header';
import Portfolio from './components/portfolio/portfolio';
import './stylesheets/navbar.css';
import './stylesheets/App.css';

function App() {
  // using hooks
  const [index, setIndex] = useState(0);
  
  function changeComponent(index) {
    if(index === 0) return <AboutMe />
    if(index === 1) return <Portfolio />
  }

  function activeTab(e, index) {
    // shows which tab user is currently on
    setIndex(index);
    const otherNavButtons = document.querySelectorAll(".nav-button");
    otherNavButtons.forEach(nav => nav.classList.remove('active'));
    e.target.classList.add('active');
  }

  return (
    <div id="app">
      <section id="left-side">
        <Header/>
      </section>
      <section id="right-side">
        <div id="content-container">
          <div id="content">
            <section id="splash">
              {changeComponent(index)}
              <nav>
                <button className="nav-button active" onClick={e => activeTab(e, 0)}>About Me</button>
                <button className="nav-button" onClick={e => activeTab(e, 1)}>Portfolio</button>
                <button className="nav-button">
                    <i className="fas fa-arrow-alt-circle-down"></i>
                    <span>Resumé</span>
                </button>
              </nav>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
