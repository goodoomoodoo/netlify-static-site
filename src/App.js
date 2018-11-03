import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import { Router, Route, Switch, Redirect } from 'react-static';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { initState } from './redux/initState';

import Login from './login/Login';

const store = configureStore( initState );

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' render={ () => <Login /> } />
            <Redirect from='/*' to='/' />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(App)
