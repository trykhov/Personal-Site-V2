import React, { useState } from 'react';
import AboutMe from './components/about_me/about_me';
import Header from './components/header/header';
import NavBar from './components/splash/navbar';
import './stylesheets/App.css';
import Portfolio from './components/portfolio/portfolio';

function App() {
  // using hooks
  const [index, setIndex] = useState(0);
  
  function changeComponent(index) {
    if(index === 0) return <AboutMe />
    if(index === 1) return <Portfolio />
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
                <button className="nav-button active" onClick={() => setIndex(0)}>About Me</button>
                <button className="nav-button" onClick={() => setIndex(1)}>Portfolio</button>
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
