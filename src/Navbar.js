import React from 'react';

import { withRouter } from 'react-static';

import './style/Navbar.css';

class Navbar extends React.Component
{
    handleReroute()
    {
        this.props.history.push('/');
    }

    render()
    {
      return (
          <div className='navbar'>
          <div className="nav-wrapper" onClick={this.handleReroute.bind(this)}><div className="nav-title">Roasted</div>
          <button className="logout-button" onClick={this.props.handleLogout}>Log Out</button></div>
          </div>
      );
    }
}

export default withRouter( Navbar );
