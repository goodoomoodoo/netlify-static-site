import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Pagerouter from './Pagerouter';

import { Router, Route } from 'react-static';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { initState } from './redux/initState';

const store = configureStore( initState );

import firebase from 'firebase';

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

class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route component={Pagerouter} />
        </Router>
      </Provider>
    )
  }
}

export default hot(module)( App );
