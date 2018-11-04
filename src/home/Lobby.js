import React from 'react';

import firebase from 'firebase';

import '../style/Lobby.css';

class Lobby extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state = {
            comments: undefined
        };
    }

    componentWillMount()
    {
        firebase.database().ref(`entry/${this.props.matchId}/comment`)
            .once( 'value', snap => {
                let arr = []

                snap.forEach( innerSnap => {
                    arr.push( innerSnap.val() );
                });

                this.setState({
                    comments: arr
                });
            })
    }

    render()
    {
        return (
            <div className='lobby'>
                <ul>
                    {
                        this.state.comments === undefined
                        || this.state.comments.map( ( context, index ) => (
                            <li key={index}>{context.text}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Lobby;