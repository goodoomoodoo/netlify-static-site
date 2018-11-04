import React from 'react';

import { Router, Route, Switch, Redirect } from 'react-static';

import firebase from 'firebase';

import { connect } from 'react-redux';
import { logUserState } from './redux/action';

import Home from './home/Home';
import Login from './login/Login';

class Pagerouter extends React.Component
{
    componentDidMount()
    {
      firebase.auth().onAuthStateChanged( user => {
        this.props.logUserState( user );
      });
    }
  
    render()
    {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' render={ () => this.props.user ? <Home /> : <Login /> } />
                    <Redirect from='/*' to='/' />
                </Switch>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    logUserState: user => dispatch( logUserState( user ) )
  });
  
  const mapStateToProps = state => ({
    user: state.user
  });

export default connect( mapStateToProps, mapDispatchToProps )( Pagerouter );