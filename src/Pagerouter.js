import React from 'react';

import { Route, Switch, Redirect } from 'react-static';

import firebase from 'firebase';

import { connect } from 'react-redux';
import { logUserState } from './redux/action';

import Home from './home/Home';
import Login from './login/Login';
import Prerender from './home/Prerender';

class Pagerouter extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state = {
            rendered: false,
            allowRedirect: false
        }
    }

    componentWillMount()
    {
      firebase.auth().onAuthStateChanged( user => {
        this.props.logUserState( user );
        this.setState({
            rendered: true
        });
      });
    }

    render()
    {
        return (
            <Switch>
                {
                    this.state.rendered 
                    && <Route path='/' render={ () => this.props.user === null ? <Login /> : <Home /> } />
                }
                <Route path='/' component={Prerender} />
            </Switch>
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
