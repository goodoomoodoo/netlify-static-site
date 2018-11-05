import React from 'react';

import firebase from 'firebase';

import Navbar from '../Navbar';
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
                <Navbar />
                <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
                <div className="roast-feed-wrapper">
                  
                </div>
                <Switch>
                    <Route path={`/room/:id`} component={Room} />
                    <Route exact path={`/`} component={Recommended} />
                </Switch>
            </div>
        );
    }
}

export default withRouter( Home );
