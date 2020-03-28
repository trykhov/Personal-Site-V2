import React from 'react';
import AboutMe from './components/about_me/about_me';
import Header from './components/header/header';
import NavBar from './components/splash/navbar';
import './stylesheets/App.css';

function App() {
  return (
    <div id="app">
      <section id="left-side">
        <Header/>
      </section>
      <section id="right-side">
        <div id="content-container">
          <div id="content">
            <section id="splash">
              <AboutMe />
              <NavBar/>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
