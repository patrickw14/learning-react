/* eslint-disable */
import React, { Component } from 'react';

const Post = ({onUpVote, onDownVote, voteCount, name, body}) => (
    <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.body}</p>
        <button onClick={onUpVote}>Upvote</button>
        <button onClick={onDownVote}>Downvote</button>
        <p>Votes: {voteCount}</p>
    </div>
)
//make a 
/*
 * Show a song or playlist (entity)
 *  - type (song or playlist)
 *  - name
 *  - genre
 *  - show an upvote/downvote button
 *  - "Listen Now" - an embedded player?
 */
/**class Post extends Component {


    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.body}</p>
                <button onClick={() => this.props.upvotePost(this.props.id)}>Upvote</button>
                <button onClick={() => this.props.downvotePost(this.props.id)}>Downvote</button>
                <p>Upvotes: {this.props.upvoteCount}</p>
                <p>Downvotes: {this.props.downvoteCount}</p>
            </div>
        );
    };
}**/

export default Post;
