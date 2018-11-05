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
<<<<<<< HEAD
            <div className="feed-preview">Recommended</div>
=======
            <div className="roast-feed-wrapper">
              <div className="feed-preview">Recommended Roasts</div>
            </div>
>>>>>>> 69a7b224733f2eeddc056bdf2fd5216c266c5699
                <ul>
                {
                   this.state.contents !== null
                   &&
                   this.state.contents.map( ( content, index ) => (
                        <li className='roast-list-button' key={index} id={index} onClick={this.handleClick.bind(this)}>{`${content.title}`}</li>
                   ))
                }
               </ul>
            </div>
        );
    }
}

export default withRouter( Recommended );