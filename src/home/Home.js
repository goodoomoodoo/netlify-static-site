import React from 'react';

import firebase from 'firebase';

import Recommended from './Recommended';

import '../style/Home.css';

class Home extends React.Component
{
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
    
                <Recommended />
                <button onClick={this.handleLogout}>Log Out</button>
            </div>
        );
    }
}

export default Home;