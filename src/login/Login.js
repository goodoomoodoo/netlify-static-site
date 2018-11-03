import React from 'react';

import netlifyIdentity from 'netlify-identity-widget';

import '../style/Login.css';


class Login extends React.Component
{
    constructor() {
        super()
    
        this.handleLogin = this.handleLogin.bind(this)
        
    }
    componentDidMount()
    {

        netlifyIdentity.on('login', () => console.log('login') );
    }

    handleLogin()
    {
        netlifyIdentity.open();
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

export default Login;