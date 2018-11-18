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
                <div className="comments-wrapper">
                    <div className="abs">Review the Comments</div>
                    <div className='comments-outer-wrapper'>
                        <ul className="comments-inner-wrapper">
                            {
                                this.state.comments === undefined
                                || this.state.comments.map( ( context, index ) => (
                                    <li className="comments-entry" key={index}>
                                        <div className='comments-context'>{context.text}</div>
                                        <div className='comments-like-count-wrapper'><div className='comments-like-count'>{context.like}</div></div>
                                        <div className='comments-like-btn'><button name={context.commentId} id={index} onClick={this.likeComment}>like</button></div>
                                    </li>

                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lobby;
