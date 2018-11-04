import React from 'react';

import firebase from 'firebase';

import { withRouter } from 'react-static';

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

        this.timer = undefined;;
    }

    componentDidMount()
    {
        this.timer = setInterval( this.tick.bind(this), 50 );

        console.log( this.props.match.params );
    }

    componentWillUnmount()
    {
        clearInterval( this.timer );
    }

    tick()
    {
        this.setState({ clock: 5000 - new Date() + this.state.start });

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
        firebase.database().ref(`entry/${this.props.match.params.id}/comment`)
            .push({
                user: 'user',
                text: 'something'
            });
    }

    render()
    {
        let timeCount = Math.round( this.state.clock / 100 );
        let timeSecCount = timeCount > 0 ? ( timeCount / 10 ).toFixed( 1 ) : 0;

        return (
            <div className='session'>
                <div className='counter'>{`${timeSecCount}`}</div>
                {
                    this.state.canComment
                    && <div>Go</div>
                    && <div>
                            <form>
                                <input placeholder='Roast On!' name='comment' value={this.state.comment} onChange={this.handleComment.bind( this )} />
                            </form>
                        </div>
                    || <div>Time is up</div>
                }
                <button onClick={this.handleSubmit.bind( this )}>Send</button>
            </div>
        );
    }
}

export default withRouter( Session );