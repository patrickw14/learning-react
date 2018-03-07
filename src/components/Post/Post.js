/* eslint-disable */
import React, { Component } from 'react';
import VotingService from '../../services/service.voting';

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

    upvotePost() {
        VotingService.upvote(this.props.post.id);
    }

    downvotePost() {
        VotingService.downvote(this.props.post.id);
    }
    
    render(){
        return (
            <div>
                <h1>{this.props.post.name}</h1>
                <p>{this.props.post.body}</p>
                <button onClick={() => this.upvotePost()}>Upvote</button>
                <button onClick={() => this.downvotePost()}>Downvote</button>
            </div>
        );
    };
}

export default Post;
