import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Pagerouter from './Pagerouter';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { initState } from './redux/initState';

const store = configureStore( initState );

class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <Pagerouter />
      </Provider>
    )
  }
}

export default hot(module)( App );
