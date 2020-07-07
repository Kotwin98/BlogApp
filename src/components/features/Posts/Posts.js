import React, { Component } from 'react';
import PostSummary from '../PostSummary/PostSummary';
import axios from 'axios';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/posts/')
            .then(response => {
                this.setState({posts: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    postsList() {
        return this.state.posts.map(currentpost => {
            return <PostSummary post={currentpost} key={currentpost._id} />
        })
    }

    render() {
        return (
            <div>
                { this.postsList() }
            </div>
        );
    }
}

export default Posts;