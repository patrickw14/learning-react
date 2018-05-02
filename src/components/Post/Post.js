/* eslint-disable */
import React, { Component } from 'react';

//make a 
/*
 * Show a song or playlist (entity)
 *  - type (song or playlist)
 *  - name
 *  - genre
 *  - show an upvote/downvote button
 *  - "Listen Now" - an embedded player?
 */
class Post extends Component {

    /*
     * @prop Post {
     *   Type: "Song" | "Playlist"
     *   Name: String
     *   Genre(s): String[]
     *   Artist(s): Artist[] (whoever is first in array is primary artist)
     *   Recommender: User
     *   Body: String
     * }
     */
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
}

export default Post;
