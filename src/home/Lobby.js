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

        this.likeComment = this.likeComment.bind( this );
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

    likeComment(e)
    {
        firebase.database().ref(`entry/${this.props.matchId}/comment/${e.target.name}`)
            .update({
                like: this.state.comments[e.target.id].like + 1
            })
    }

    render()
    {
        return (
            <div className='lobby'>
            <div className="roast-feed-wrapper">
              <div className="main-image"><p>Main Image</p></div>

            </div>
                <ul>
                    {
                        this.state.comments === undefined
                        || this.state.comments.map( ( context, index ) => (
                            <li key={index}>
                                <div>{context.text}</div>
                                <div>{context.like}</div>
                                <button name={context.commentId} id={index} onClick={this.likeComment}>like</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Lobby;
