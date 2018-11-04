import React from 'react';

import firebase from 'firebase';

import { connect } from 'react-redux';
import { logUserState } from '../redux/action';

import '../style/Login.css';


class Login extends React.Component
{
    handleLogin()
    {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup( provider )
            .then( res => {
                this.props.loginUser( res.user );
            })
            .catch( err => {
                console.log( err.message );
            })
    }

    render()
    {
        return (
            <div className='login'>
                <div className='login-window'></div>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loginUser: user => dispatch( logUserState( user ) )
});

export default connect( mapDispatchToProps )( Login );