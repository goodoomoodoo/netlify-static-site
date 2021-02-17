import React from 'react';

import firebase from 'firebase';

import { connect } from 'react-redux';

import { withRouter } from 'react-static';

import uniqid from 'uniqid';

import '../style/Session.css';

class Session extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state = {
            start: Date.now(),
            clock: 10,
            canComment: true,
            comment: ''
        }

        this.timer = undefined;
    }

    componentDidMount()
    {
        this.timer = setInterval( this.tick.bind(this), 50 );

        console.log( this.props.user );
    }

    componentWillUnmount()
    {
        clearInterval( this.timer );
    }

    tick()
    {
        this.setState({ clock: 10000 - new Date() + this.state.start });

        if( this.state.clock <= 0 )
        {
            this.setState({
                canComment: false
            });

            clearInterval( this.time );
        }
    }

    handleComment( e )
    {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit()
    {
        let commentId = uniqid();
        firebase.database().ref(`entry/${this.props.matchId}/comment`)
            .child(`${commentId}`)
            .set({
                user: this.props.user.displayName,
                text: this.state.comment,
                commentId: commentId,
                like: 0
            });

        firebase.database().ref(`entry/${this.props.matchId}/commentCount`)
            .once( 'value', snap => { 
                firebase.database().ref(`entry/${this.props.matchId}`)
                    .update({
                        commentCount: snap.val() + 1
                    });
             });

        

        this.props.hasCommented();
    }

    render()
    {
        let timeCount = Math.round( this.state.clock / 100 );
        let timeSecCount = timeCount > 0 ? ( timeCount / 10 ).toFixed( 1 ) : 0;

        return (
            <div className='session'>
            <div className="roast-feed-wrapper">
              <div className="roast-image"><p>Image</p></div>
            </div>
                <div className='counter'>{`${timeSecCount}`}</div>
                {
                    this.state.canComment
                    && <div className='session-comment-section'>
                            <form>
                                <textarea rows='4' placeholder='Roast On!' name='comment' value={this.state.comment} onChange={this.handleComment.bind( this )} />
                            </form>
                            <button onClick={this.handleSubmit.bind( this )}>Send</button>
                        </div>
                    ||  <div className='session-comment-section'>
                            <h1>Time is up</h1>
                            <button onClick={this.props.hasCommented}>Continue</button>
                        </div>

                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default withRouter( connect( mapStateToProps )( Session ) );
