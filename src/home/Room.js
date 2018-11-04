import React from 'react';

import Session from './Session';

import '../style/Room.css';

class Room extends React.Component
{
    render()
    {
        return (
            <div className='room'>
                <Session />
            </div>
        );
    }
}

export default Room;