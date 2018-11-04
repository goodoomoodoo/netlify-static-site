import React from 'react'
import ReactDOM from 'react-dom'

import firebase from 'firebase';

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  // I'm getting hacked fosho
  var config = {
    apiKey: "AIzaSyCZqo_oCufEF5HHXVqvIax1pRoJuFuRQwE",
    authDomain: "roast-static-site.firebaseapp.com",
    databaseURL: "https://roast-static-site.firebaseio.com",
    projectId: "roast-static-site",
    storageBucket: "roast-static-site.appspot.com",
    messagingSenderId: "997581505271"
  };
  firebase.initializeApp(config);
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}
