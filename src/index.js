import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  window.setTimeout(() => {
    // wait a second as the animation is going thru
    // add visibility so it doesn't go away at the end of the animation
    // allows for smooth animation
    const splash = document.getElementById('splash');
    splash.style.visibility = "visible";
  }, 4000)
  
  ReactDOM.render(<App />, root);
})


serviceWorker.unregister();
