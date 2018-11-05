import React from 'react';

import firebase from 'firebase';

import { withRouter } from 'react-static';

import '../style/Recommended.css';

class Recommended extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state = {
            contents: null
        };
    }

    componentWillMount()
    {
        let entryRef = firebase.database().ref( 'entry' );

        entryRef.once( 'value', snap => {

            let arr = [];

            snap.forEach( innerSnap => {
                arr.push( innerSnap.val() );
            });

            this.setState({ contents: arr });
        });


    }

    handleClick( e )
    {
        this.props.history.push( `/room/${e.target.id}`);
    }

    render()
    {
        return (
            <div className='recommended'>
            <div className="roast-feed-wrapper">
              <div className="feed-preview">Recommended Roasts</div>
            </div>
                <ul>
                {
                   this.state.contents !== null
                   &&
                   this.state.contents.map( ( content, index ) => (
                        <li className='roast-list-button' key={index} id={index} onClick={this.handleClick.bind(this)}>
                            <div id={index} className='roast-list-title'>{`${content.title}`}</div>
                            <div>comments {`${content.commentCount}`}</div>
                        </li>
                   ))
                }
               </ul>
            </div>
        );
    }
}

export default withRouter( Recommended );
