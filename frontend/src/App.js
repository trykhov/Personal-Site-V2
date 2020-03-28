import React from 'react';
import Header from './components/header/header';
import SplashPage from './components/front_page/splash';
import './App.css';

function App() {
  return (
    <div id="app">
      <section id="left-side">
        <Header/>
      </section>
      <section id="right-side">
        <div id="content">
          <SplashPage />
        </div>
      </section>
    </div>
  );
}

export default App;
