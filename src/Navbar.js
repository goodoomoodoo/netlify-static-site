import React from 'react';

import './style/Navbar.css';

class Navbar extends React.Component
{
    render()
    {
      return (
          <div className='navbar'>
          <div className="nav-wrapper"><div className="nav-title">Roasted</div><button className="logout-button" onClick={this.handleLogout}>Log Out</button></div>
          </div>
      );
    }
}

export default Navbar;
