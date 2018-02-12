/* eslint-disable */
import React, { Component } from 'react';

class Post extends Component {

    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>
                <h1>{this.props.username}</h1>
                <p>{this.props.body}</p>
            </div>
        );
    };
}

export default Post;
