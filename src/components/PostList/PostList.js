/* eslint-disable */
import React, { Component } from 'react';
import Post from '../Post/Post';

class PostList extends Component{

    constructor(props){
        super(props);
    }

    render(){

        //return this.props.posts.map( (post, index) => {
            return (
                    <div>
                        {this.props.posts.map((post, index) => {
                            return <Post post={post} />
                        })}
                    </div>
                    );
        //});
    };
}

export default PostList;