import React from 'react';

import Session from './Session';
import Lobby from './Lobby';

import { Redirect, Switch, Route, withRouter } from 'react-static';

import '../style/Room.css';

class Room extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state = {
            commented: false
        }

        this.hasCommented = this.hasCommented.bind(this);
        this.redToLobby = this.redToLobby.bind(this);
    }

    redToLobby()
    {
        this.props.history.push(`/home/room/${this.props.match.params.id}/lobby`);
    }

    hasCommented()
    {
        this.setState({
            commented: true
        });

        this.redToLobby();
    }

    render()
    {
        return (
            <div className='room'>
                <Switch>
                    <Route path={`${this.props.match.url}/session`} render={ props => <Session {... props} 
                        hasCommented={this.hasCommented.bind(this)} matchId={this.props.match.params.id} />} />
                    <Route path={`${this.props.match.url}/lobby`} render={ props => <Lobby { ...props } 
                        matchId={this.props.match.params.id} /> } />
                    {
                        this.state.commented 
                        ? <Redirect to={`${this.props.match.url}/lobby`} />
                        : <Redirect to={`${this.props.match.url}/session`} />
                    }
                </Switch>
            </div>
        );
    }
}

export default withRouter( Room );