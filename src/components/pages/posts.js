import React, { Component } from 'react';
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

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Posts;