import React from 'react';

import firebase from 'firebase';

import Recommended from './Recommended';
import Room from './Room';

import { Switch, Route, withRouter, Redirect } from 'react-static';

import '../style/Home.css';

class Home extends React.Component
{
    constructor( props )
    {
        super( props );


    }

    handleLogout()
    {
        firebase.auth().signOut()
            .then( res => {
                console.log( 'log out!' );
            })
            .catch( err => {
                console.log( err.message );
            })
    }
    render()
    {
        return (
            <div className='home'>
                <Switch>
                    <Route path={`${this.props.match.url}/room/:id`} component={Room} />
                    <Route exact path={`${this.props.match.url}`} component={Recommended} />
                    <Redirect to='/home' />
                </Switch>

                <button onClick={this.handleLogout}>Log Out</button>
            </div>
        );
    }
}

export default withRouter( Home );