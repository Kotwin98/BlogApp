import React, { Component } from 'react';
import '../styles/addPost.css';

class AddPost extends Component {
    state = {
        title: '',
        author: '',
        content: ''
    }

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    onChangeAuthor = (e) => {
        this.setState({
            author: e.target.value
        });
    }

    onChangeContent = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    render() {
        return (
            <div className="addPost-container"> 
            <h1 className="addPost-title">Add post</h1>
            <form className="addPost-form">
                <input onChange={this.onChangeTitle} label="Title" placeholder="Title" className="addPost-input addPost-title-input" />
                <input onChange={this.onChangeAuthor} label="Author" placeholder="Author" className="addPost-input" />
                <p className="addPost-par">Write your post content</p>
                <input onChange={this.onChangeContent} className="addPost-content-input" />
                <button className="addPost-button">Add post</button>
            </form>
            </div>
        );
    }
};

export default AddPost;